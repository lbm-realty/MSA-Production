const { sign } = require('jsonwebtoken');

// const createAccessToken = (id) => {
//     return sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: 10 * 60,
//     });
// };

// const createRefreshToken = (id) => {
//     return sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
//         expiresIn: "90d",
//     });
// };

// const sendAccessToken = (_req, res, accesstoken) => {
//     res.json({
//         message: "Sign in Successful",
//         type: "success",
//     });
// };

// const sendRefreshToken = (res, refreshtoken) => {
//     res.cookie("refreshtoken", refreshtoken, {
//       httpOnly: true,
//     });
// };
 
// module.exports = {
//     createAccessToken,
//     createRefreshToken,
//     // sendAccessToken,
//     // sendRefreshToken,
// };

const jwt = require('jsonwebtoken');

const createAccessToken = (id) => {
    console.log(`ID: ${id} \n PRC.ENV: ${process.env.ACCESS_TOKEN_SECRET}`)
    return sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 10 * 60,
    });
};

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) 
            return res.status(403).json({ message: 'Forbidden' });
        req.user = user; 
        next();
    });
    } catch (err) {
        res.json({ messsage: err.message });
    }
};

module.exports = { 
    authenticateToken,
    createAccessToken
};

// module.exports = authenticateToken;