// backend/middleware/jwtAuth.js
const JWT = require('jsonwebtoken');

const JwtAuth = (req, res, next) => {
     const token = (req.cookies && req.cookies.token) || null;
     if (!token) {
          return res.status(400).json({
               success: false,
               message: 'Token does not exist '
          });
     }

     try {
         const payload = JWT.verify(token, process.env.SECRET, {
             algorithms: ['HS256']
         });
         req.user = { id: payload.id, email: payload.username };
         next();
     } catch (e) {
         return res.status(400).json({
             success: false,
             message: e.message
         });
     }
}

module.exports = JwtAuth;
