const express = require('express');
const router = express.Router();
const DonationProject = require('../models/donationProjectSchema');
const { authenticateToken } = require('./tokens');

router.post('/add-donation-project', authenticateToken, async (req, res) => {
    try {
        const newDonationProject = new DonationProject(req.body);
        await newDonationProject.save();
        res.status(201).json({ message: "Project saved successfully" });
    } catch (err) {
        res.status(400).json({ message: err });
    }
})

router.get('/fetch-donation-projects', async (req, res) => {
    try {
        const data = await DonationProject.find();

        if (data) res.send({ "message": data });
        else res.status(404).send({ "message": "An error occurred" });
    } catch (err) {
        res.status(500).send({ "message": err });
    }

})

router.delete('/delete/project/:id', authenticateToken, async (req, res) => {
    try {
        const projectToDelete = req.params.id;
        await DonationProject.findByIdAndDelete(projectToDelete);
        res.send({ "message": "Project deleted!" })
    } catch (err) {
        res.status(500).send({ "message": "An error occurred while deleting the project" });
    }
})

module.exports = router;