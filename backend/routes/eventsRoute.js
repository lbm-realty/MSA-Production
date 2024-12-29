const express = require('express');
const router = express.Router();
const Event = require('../models/eventsSchema');

router.post('/', async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const saved = await newEvent.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({err: err.message});
    }
})

// router.get('/', async (req, res) => {
//     try {
//         const entry = await Event.find();
//         res.send(entry)
//     } catch (err) {}
// })

router.post("/deleteEntry", async (req, res) => {
    try {
        const { title1 } = req.body;
        const validEntry = await Event.findOne({ title: title1 })
        if (!validEntry) {
            console.log("Object does not exist");
            return res.status(404).json({ message: "Object does not exist" });
        } else {
        const deleteEntry = await Event.deleteOne({ title: title1 })
        res.status(201).json({ message : deleteEntry });
        }
    } catch (err) {
        res.status(500).json({ err: err.message });
    } 
});

module.exports = router;