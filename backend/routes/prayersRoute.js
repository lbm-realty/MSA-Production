const PrayerHours = require('../models/prayersSchema');
const express = require('express');
const router = express.Router();
const { authenticateToken } = require('./tokens');

router.post('/addPrayerTime', authenticateToken, async (req, res) => {
    try {
        const data = req.body;
        const newPrayerHour = new PrayerHours(data);
        const saved = await newPrayerHour.save();
        if (saved) 
            return res.status(201).json({ message: `Prayer times added` });
        else
            return res.json({ message: "An error occurred" });
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
})

router.post('/showPrayers', async (req, res) => {
    try {
        const data = await PrayerHours.find();
        if (!data || data.length === 0)
            return res.status(404).json({ message: "No data found" });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;