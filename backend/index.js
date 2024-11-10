const cors = require("cors");
const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.BACKEND_KEY);
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://msattu.netlify.app/' }));
app.get("/", (req, res) => {
  res.send("App works");
});
app.post("/payment", (req, res) => {
  const { product, token } = req.body;
  console.log("Price ", product.price);
  const idempotencyKey = uuidv4();
  if (product.price >= 0.5) { 
    return stripe.customers
      .create({
        email: token.email,
        source: token.id,
      })
      .then((customer) => {
        stripe.charges.create(
          {
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: product.name,
          },
          { idempotencyKey }
        );
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  } else {
    res.send("The amount was too small, transaction failed") 
  }
});
app.listen(8282, () => console.log("Listening at PORT 8282"));


// const cors = require("cors");
// const express = require("express");
// const mongoose = require('mongoose');
// require("dotenv").config();
// const stripe = require("stripe")(process.env.BACKEND_KEY);
// const { v4: uuidv4 } = require("uuid");

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then (() => {
//   console.log("Successfully Setup Database");
// }).catch ((err) => {
//   console.log(`MongoDB Error: ${err}`);
// });

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:8282' }));

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
//         return stripe.charges.create(
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
//       .then((result) => {
//         console.log(result);
//         res.json({ success: true, result });
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).json({ error: "Payment failed" });
//       });
//   } else {
//     res.status(400).json({ error: "The amount was too small, transaction failed" });
//   }
// });

// app.listen(8282, () => console.log("Listening at PORT 8282"));
