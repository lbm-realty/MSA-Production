const stripe = require("stripe")(process.env.BACKEND_KEY);
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  // Only process POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { product, token } = JSON.parse(event.body);

  // Check if the amount is too small to process
  if (product.price < 0.5) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "The amount was too small, transaction failed" }),
    };
  }

  const idempotencyKey = uuidv4();

  try {
    // Create a new customer on Stripe
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    // Create the charge
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100, // Stripe works in cents
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: product.name,
      },
      { idempotencyKey }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, charge }), // Send success response
    };
  } catch (error) {
    console.error("Payment error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: "Payment failed", error: error.message }),
    };
  }
};
