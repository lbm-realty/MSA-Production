const cors = require("cors");
const express = require("express");

require("dotenv").config();
const stripe = require("stripe")(process.env.BACKEND_KEY);
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

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
