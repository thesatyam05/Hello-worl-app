const express = require('express');

const LoginController = require('../Controllers/login.controller.js');

const router = express.Router();

router.post('/', LoginController.login);

module.exports = router;
