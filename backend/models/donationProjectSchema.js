const mongoose = require('mongoose');

const DonationProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    amount: Number
})

const DonationProject = mongoose.model('DonationProject', DonationProjectSchema);
module.exports = DonationProject; 