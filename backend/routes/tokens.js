const { sign } = require('jsonwebtoken');

const createAccessToken = (id) => {
    return sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 10 * 60,
    });
};

const createRefreshToken = (id) => {
    return sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "90d",
    });
};

const sendAccessToken = (_req, res, accesstoken) => {
    res.json({
        message: "Sign in Successful",
        type: "success",
    });
};

const sendRefreshToken = (res, refreshtoken) => {
    res.cookie("refreshtoken", refreshtoken, {
      httpOnly: true,
    });
};

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken,
};