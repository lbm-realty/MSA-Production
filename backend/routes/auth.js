const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');

router.post('/createAdmin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = new Admin({
        email: email,
        password: password,
        });
    await admin.save();
    res.status(200).json({ message: 'Admin Credentials added' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;