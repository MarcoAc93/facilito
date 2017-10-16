const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');
const SesionsController = require('../controllers/SesionsController');

router.post('/create',
	UsersController.create,
	SesionsController.generateToken,
	SesionsController.sendToken
);

router.get('/myPlaces', UsersController.myPlaces);

module.exports = router;
