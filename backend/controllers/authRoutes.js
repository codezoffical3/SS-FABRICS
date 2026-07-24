const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route: POST /api/auth/signup
// Purpose: Register a new user
router.post('/signup', authController.signup);

// Route: POST /api/auth/login
// Purpose: Authenticate an existing user
router.post('/login', authController.login);

module.exports = router;