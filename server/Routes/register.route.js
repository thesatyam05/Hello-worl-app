const express = require('express');

const RegisterController = require('../Controllers/register.controller.js');

const router = express.Router();

router.post('/', RegisterController.register);

module.exports = router;
