require('dotenv').config();
const express = require("express");
const router = express.Router();
// const sendOrderEmail = require('./mailService');
const stripe = require("stripe")(process.env.BACKEND_KEY);

router.post('/merch/create-payment-intent', async (req, res) => {
  try {
    const { amount, email, fullName, phone } = req.body;

    // (Optional) create customer record if you want to save them
    const customer = await stripe.customers.create({
      email,
      name: fullName,
      phone,
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // amount in cents
      currency: 'usd',
      customer: customer.id,
      receipt_email: email,
      automatic_payment_methods: { enabled: true }, // allows various payment methods
    });

    // await sendOrderEmail({ fullName, email, phone, amount });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router