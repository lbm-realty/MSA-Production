const express = require('express');
const router = express.Router();
const Event = require('../models/eventsSchema');
const { authenticateToken } = require('./tokens');

router.post('/addEntry', authenticateToken, async (req, res) => {
    try {
        const newEvent = new Event(req.body);
        const saved = await newEvent.save();
        res.status(201).json({ saved });
    } catch (err) {
        console.log("Error here events")
        res.status(400).json({ err: err.message });
    }
})

router.post("/showData", async (req, res) => {
    try {
        const allData = await Event.find();
        console.log(`Type of All Data: `, typeof allData);
        console.log(`Is Array: ${Array.isArray(allData)}`);
        console.log(`Length: ${allData.length}`)
        console.log(`All of the data: ${allData}`);
        if (allData && allData.length > 0)
            res.json(allData);
    } catch (err) {
        res.json({ err: err.message });
    }
})

router.put('/updateEntry', authenticateToken, async (req, res) => {
    try {
        const updateFields = req.body.field2
        const title1 = req.body.field1
        const idRequested = await Event.findOne({ title: title1 })
        if (!idRequested)
            return res.json({ message: "Event does not exist!" })
        const filter = { _id: idRequested._id };
        const update = { $set: updateFields };
        const result = await Event.updateOne(filter, update);
        res.json({ result });
    } catch (err) {
        res.json({ message: err.message });
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
            return res.status(201).json({ deleteEntry });
        }
    } catch (err) {
        res.status(500).json({ err: err.message });
    } 
});

module.exports = router;