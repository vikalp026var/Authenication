// userRoutes.js
const express = require('express');
const router = express.Router();
const { userSignUp, userLogin, getUserDetails } = require('../controller/userController');
const JwtAuth = require('../middleware/jwtAuth');

router.post('/signup', userSignUp);
router.post('/login', userLogin);
router.get("/", JwtAuth, getUserDetails);

module.exports = router; // Make sure to export the router object
