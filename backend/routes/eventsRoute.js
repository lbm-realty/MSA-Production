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

router.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
});

module.exports = router;