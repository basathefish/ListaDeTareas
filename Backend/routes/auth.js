const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/verifyToken');

//Registrar usuario
router.post('/register', userController.register);

//Login
router.post('/login', userController.login);

//Perfil de usuario
router.get('/profile', verifyToken, userController.profile);

module.exports = router;