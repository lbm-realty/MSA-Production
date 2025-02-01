const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
} = require('./tokens');

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
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email: email });
        if (!admin) {
            const admins = await Admin.find();
            return res.status(500).json({ message: `User does not exist - ${admins}` });
        }
        if (password != admin.password) 
            return res.status(500).json({ message: "The password is incorrect!" });
        const accessToken = createAccessToken(admin._id);
        await admin.save(); 
        return res.json({ accessToken })
        
    } catch (err) {
        res.status(500).json({message: "Error signing in!" });
    }
})

module.exports = router;