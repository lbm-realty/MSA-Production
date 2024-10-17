import { useState } from "react";
import "../css/donationContainer.css";
import StripeCheckout from "react-stripe-checkout";

function DonationContainer() {
  const [customAmount, setCustomAmount] = useState(0); 
  const [showCustomInput, setShowCustomInput] = useState(false); 
  const [showButton, setShowButton] = useState(true); 
  const product = {
    name: "",
    price: 0
  }

  const handleAmount = (amount) => {
    product.name = `Purchase of ${amount} was made`;
    product.price = amount;
  };

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:8282/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((err) => console.log(err));
  };

  const handleCustomDonate = () => {
        if (customAmount) {
          product.name = `Purchase of ${customAmount} was made`;
          product.price = customAmount;
          setShowCustomInput(false); // Hide custom input after confirmation
        }
      };

  return (
    <>
      <body>
        <div class="donate-section">
          <div class="donation-container">
            <div class="donate-section-heading">Support Us</div>
            <div class="donate-section-para">
              Your donation helps us continue our work. Thank you for your
              support!
            </div>
            <div className="with-custom-donations">
            <StripeCheckout
              stripeKey={process.env.REACT_APP_KEY}
              token={makePayment}
            >
              <div id="donation-options" class="donation-options">
                <button
                  onClick={() => {
                    handleAmount(25);
                  }}
                  data-amount="25"
                  class="donation-button-1"
                >
                  Donate $25
                </button>
                <button
                  onClick={() => {
                    handleAmount(50);
                  }}
                  data-amount="50"
                  class="donation-button-2"
                >
                  Donate $50
                </button>
                <button
                  onClick={() => {
                    handleAmount(100);
                  }}
                  data-amount="100"
                  class="donation-button-3"
                >
                  Donate $100
                </button>
              </div>
            </StripeCheckout>
            <button
                  data-amount="custom"
                  id="donation-button-custom"
                  className="donation-button-custom"
                  onClick={() => {
                    setShowCustomInput(true);
                    setShowButton(true); 
                  }}
                >
                  Custom Amount
                </button>
                {showCustomInput && (
                  <div id="custom-donation">
                    {showButton && (
                      <>
                        <input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter Amount in USD"
                          value={customAmount || ""}
                          onChange={(e) => setCustomAmount(e.target.value)}
                        />
                        <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY}
                        token={makePayment}
                        >
                        <button
                          id="custom-donate-button"
                          onClick={handleCustomDonate}
                        >
                          Confirm Amount
                        </button>
                        </StripeCheckout>
                        <button
                          className="cancel-button"
                          onClick={() => {
                            setShowButton(false);
                            setShowCustomInput(false);
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                )}
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default DonationContainer;

