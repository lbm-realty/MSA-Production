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
        if (!admin)
            return res.status(500).json({ message: "User does not exist!" });
        if (password != admin.password) 
            return res.status(500).json({ message: "The password is incorrect!" });
        const accessToken = createAccessToken(admin._id);
        // const refreshToken = createRefreshToken(admin._id);
        // admin.accessToken = accessToken;
        // admin.refreshToken = refreshToken;
        // const createAccessToken = (id) => {
        //     return sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 10 * 60 });
        // }
        // createAccessToken(admin._id);
        await admin.save(); 
        // sendRefreshToken(res, refreshToken);
        // sendAccessToken(req, res, accessToken);
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true,
        // })
        return res.json({ accessToken })
        
    } catch (err) {
        res.status(500).json({message: "Error signing in!" });
    }
})

module.exports = router;