import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(process.env.REACT_APP_KEY); // from Stripe Dashboard

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(true)

   if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
    console.log(error);
    setError(true);
   }

  const total = localStorage.getItem("total")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: 0.5,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create PaymentIntent on backend
      // const response = await fetch("https://msa-production.onrender.com/merch/create-payment-intent", {
      const response = await fetch("http://localhost:8282/merch/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const { clientSecret } = await response.json();

      // 2. Confirm card payment
      const cardElement = elements.getElement(CardElement);
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
          },
        },
      });

      if (result.error) {
        alert(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mt-20 flex flex-col gap-2 bg-zinc-900 text-white rounded-xl max-w-md mx-auto">
      <p className="text-3xl font-bold text-red-600/95 mb-3 text-center">Checkout</p>
      <input className="bg-stone-900 border-[1.5px] border-gray-400 px-2 py-1 rounded-lg" name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input className="bg-stone-900 border-[1.5px] border-gray-400 px-2 py-1 rounded-lg" name="email" placeholder="Email" type="email" onChange={handleChange} required />
      <input className="bg-stone-900 border-[1.5px] border-gray-400 px-2 py-1 rounded-lg" name="phone" placeholder="Phone" onChange={handleChange} required />
      <p className=" text-gray-400 bg-stone-900 border-[1.5px] border-gray-400 px-2 py-1 rounded-lg">Amount: ${formData.amount}</p> 

      {/* Stripe Card Input */}
      <CardElement className="p-2 bg-gray-200 border rounded mt-4" />

      <button type="submit" disabled={!stripe || loading} className="bg-red-600/95 px-4 py-2 rounded mt-4">
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

const PaymentPage = () => {
  const [error, setError] = useState(false)

  if (localStorage.getItem("token") === null || localStorage.getItem("token") === undefined) {
  setError(true);
  }

  return (
    <div className="sm:p-40 p-10 py-20 bg-black">
      {error ? (
        <div className="text-white italic mt-20 items-center flex flex-col gap-4">
          <p className="bg-red-800/85 px-2 py-1 sm:text-xl">An error occurred. Please refresh the page or come back later.</p>
          <p className="bg-red-800/85 px-2 py-1 sm:text-xl">If the error persists, please let us know at texastechmsa@gmail.com</p>
        </div>
      ) : (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default PaymentPage;