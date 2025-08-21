const MerchContent = require('../models/merchSchema');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const { authenticateToken } = require('./tokens');

const upload = multer();

router.post('/add-merch', authenticateToken, upload.single("imageFile"), async (req, res) => {
    try {
        let amount = req.body.amount;
        if (typeof amount === "string") {
            amount = JSON.parse(amount);
        }
        const data = new MerchContent({
            name: req.body.name,
            price: req.body.price,
            amount: amount,
            image: req.file.buffer,
            contentType: req.file.mimetype
        });

        const saved = await data.save();

        if (saved)
            return res.send({ "message": "Merch saved" });
        else
            return res.status(404).send({ "message": "An error occurred" });

    } catch (err) {
        console.log(err);
        return res.status(500).send({ "message": "Unknown error occurred" });
    }
})

router.delete('/delete/merch/:id', authenticateToken, async (req, res) => {
    try {
        const deleteMerch = await MerchContent.findByIdAndDelete(req.params.id);
        if (deleteMerch) res.send({ "message": "Merch deleted successfully!" });
        else res.status(404).send({ "message": "Error: Merch was not found" });
    
    } catch (err) {
        res.status(500).send({ "message": err });
    }
})

router.get('/all-merch', async (req, res) => {
    try {
        const data = await MerchContent.find();
        
        if (!data) res.status(404).send({ "message": "No merch found" });

        res.send(data);
    
    } catch (err) { res.status(500).send({ "message": "An error occurred" }) };
})

router.get('/merch/:id/image', async (req, res) => {
    try {
        const imageFile = await MerchContent.findById(req.params.id);
        
        if (!imageFile) res.status(404).send({ "message": "File not found" });

        res.send(imageFile.image);
    } catch (err) { res.status(500).send({ "message": "An error occurred" }) };
})

router.put('/edit-merch/:id', authenticateToken, upload.single("imageFile"), async (req, res) => {
    try {
        let amountClient = req.body.amount;
        if (typeof amountClient === "string") {
            amountClient = JSON.parse(amountClient);
        }
        
        const updatedFields = {
            name: req.body.name,
            price: req.body.price,
            amount: amountClient,

        };

        if (req.file) { 
            updatedFields.image = req.file.buffer;
            updatedFields.contentType = req.file.mimetype;
        }
        const updateData = await MerchContent.updateOne(
            { _id: req.params.id },
            { $set: updatedFields }
        );

        if (updateData) 
             res.send({ "message": "Entry updated successfully!" })
        else 
            res.status(500).send({ "message": "An error occurred" })

    } catch (err) { 
        console.log(err);
        res.status(500).send({ "message": err }) };
})

module.exports = router;