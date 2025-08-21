const mongoose = require('mongoose');

const merchSchema = new mongoose.Schema({
    name: String,
    price: Number,
    amount: [
        {
            size: String,
            stock: Number
        }
    ],
    image: Buffer,
    contentType: String
})

const MerchContent = mongoose.model("MerchContent", merchSchema);
module.exports = MerchContent;
