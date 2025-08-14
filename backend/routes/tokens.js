const { sign } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
 
const createAccessToken = (id) => {
    return sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: null,
    });
};

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    if (!token)
        return res.status(401).json({ message: 'Unauthorized' });
    try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.status(403).json({ message: "Session expired, please login" });
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