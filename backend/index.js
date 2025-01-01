const cors = require("cors");
const express = require("express");
const eventsRoute = require("./routes/eventsRoute");
const auth = require('./routes/auth');
require("dotenv").config();
const stripe = require("stripe")(process.env.BACKEND_KEY);
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/msa-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB locally");
  } catch (err) {
    console.log("Error connecting to Database:", err.message);
  }
}

connectDB();

app.use('/api/events', eventsRoute);

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
      .then((result) => res.status(200).json({ success: true, result }))
      .catch((err) => res.status(500).json({ success: false, error: err.message }));
  } else {
    res.send("The amount was too small, transaction failed") 
  }
});

app.listen(8282, () => console.log("Listening at PORT 8282"));
