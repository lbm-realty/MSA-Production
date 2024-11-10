// const cors = require("cors");
// const express = require("express");
// require("dotenv").config();
// const stripe = require("stripe")(process.env.BACKEND_KEY);
// const { v4: uuidv4 } = require("uuid");
// const app = express();
// app.use(express.json());
// app.use(cors({ origin: 'https://msattu.netlify.app/' }));
// app.get("/", (req, res) => {
//   res.send("App works");
// });
// app.post("/payment", (req, res) => {
//   const { product, token } = req.body;
//   console.log("Price ", product.price);
//   const idempotencyKey = uuidv4();
//   if (product.price >= 0.5) { 
//     return stripe.customers
//       .create({
//         email: token.email,
//         source: token.id,
//       })
//       .then((customer) => {
//         stripe.charges.create(
//           {
//             amount: product.price * 100,
//             currency: "usd",
//             customer: customer.id,
//             receipt_email: token.email,
//             description: product.name,
//           },
//           { idempotencyKey }
//         );
//       })
//       .then((result) => console.log(result))
//       .catch((err) => console.log(err));
//   } else {
//     res.send("The amount was too small, transaction failed") 
//   }
// });
// app.listen(8282, () => console.log("Listening at PORT 8282"));


const cors = require("cors");
const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.BACKEND_KEY);
const { v4: uuidv4 } = require("uuid");
const app = express();

app.use(express.json());
app.use(cors({ origin: 'https://msattu.netlify.app' }));

app.get("/", (req, res) => {
  res.send("App works");
});

app.post("/payment", async (req, res) => {
  const { product, token } = req.body;
  console.log("Price ", product.price);
  
  // Check for a minimum amount to process the payment
  if (product.price < 0.5) {
    return res.send("The amount was too small, transaction failed");
  }

  const idempotencyKey = uuidv4();

  try {
    // Create a new customer on Stripe
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    // Create a charge for the customer
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

    console.log("Charge successful:", charge);
    res.json({ success: true, charge }); // Send success response

  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ success: false, message: "Payment failed", error });
  }
});

app.listen(8282, () => console.log("Listening at PORT 8282"));
