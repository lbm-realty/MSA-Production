const mongoose = require("mongoose");

const newsletterSchema = new mongoose.Schema({
    month: Number,
    pdfFile: Buffer,
    contentType: String,
})

const NewsletterContent = mongoose.model("NewsletterContent", newsletterSchema);
module.exports = NewsletterContent;