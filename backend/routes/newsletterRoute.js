const NewsletterContent = require('../models/newsletterSchema');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { authenticateToken } = require('./tokens');

const upload = multer();

router.post('/add-newsletter', upload.single("pdfFile"), authenticateToken, async (req, res) => {
    try {
        const newNewsletter = new NewsletterContent({
            month: req.body.month,
            pdfFile: req.file.buffer,
            contentType: req.file.mimetype,
        });
        const saved = await newNewsletter.save();
        if (saved) 
            return res.status(201).json({ message: `Newsletter added` });
        else
            return res.json({ message: "An error occurred" });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
})

router.get('/fetch-newsletters', async (req, res) => {
    try {
        const newsletterData = await NewsletterContent.find({}, { pdfFile: 0 }); // exclude pdfFile
        res.send(newsletterData);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving newsletters" });
    }
})

router.get('/newsletter/:id/pdf', async (req, res) => {
    try {
        const file = await NewsletterContent.findById(req.params.id);
        if (!file) return res.status(404).send({ message: "PDF not found" });

        res.contentType(file.contentType);
        res.send(file.pdfFile); // buffer directly streamed
    } catch (err) {
        res.status(500).send({ message: "Error fetching PDF" });
    }
});

module.exports = router;