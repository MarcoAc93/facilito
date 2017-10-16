const express = require('express');
const router = express.Router();
const SesionsController = require('../controllers/SesionsController');

router.post('/create',
	SesionsController.authenticate,
	SesionsController.generateToken,
	SesionsController.sendToken
);

module.exports = router;
