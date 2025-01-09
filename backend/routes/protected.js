// const { verify } = require('jsonwebtoken');
// const Admin = require('../models/admin');

// const protected = async (req, res, next) => {
//     const authorization = req.headers['authorization'];
//     if (!authorization) 
//         return res.status(500).json({ messsage: "No token" });
//     const token = authorization.split(' ')[1];
//     let id;
//     try {
//         id = verify(token, process.env.ACCESS_TOKEN_SECRET).id;
//     } catch {
//         return res.status(500).json({ message: 'Invalid Token' });
//     }
//     if (!id) 
//         return res.status(500).json({ message: 'Invalid Token' });
//     const admin = await Admin.findById(id);
//     if (!admin)
//         return res.status(500).json({ message: "User doesn't exist" });
//     req.admin = admin;
//     next();
// }

// module.exports = { protected };