const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Or another email provider (e.g., Outlook, SMTP server)
  auth: {
    user: process.env.ADMIN_EMAIL, // your email
    pass: process.env.ADMIN_EMAIL_PASSWORD // app password (not your actual password)
  }
});

async function sendOrderEmail(orderDetails) {
  const { fullName, email, phone, amount } = orderDetails;

  const mailOptions = {
    from: `"MSA Orders" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL, // email of admin
    subject: 'New Order Received',
    text: `
New Order Details:
-------------------
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Amount: $${amount}
    `
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendOrderEmail;
