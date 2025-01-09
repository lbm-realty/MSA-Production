const express = require('express');
const router = express.Router();
const Event = require('../models/eventsSchema');
// const { protected } = require('./protected')
const { authenticateToken } = require('./tokens');

router.post('/', authenticateToken, async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const saved = await newEvent.save();
        res.status(201).json({ message: saved });
    } catch (err) {
        res.status(400).json({err: err.message});
    }
})

router.post("/showData", authenticateToken, async (req, res) => {
    try {
        const allData = await Event.find();
        res.json(allData);
    } catch (err) {
        res.json({ err: err.message });
    }
})

router.post("/deleteEntry", authenticateToken, async (req, res) => {
    try {
        const { title1 } = req.body;
        const validEntry = await Event.findOne({ title: title1 })
        if (!validEntry) {
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