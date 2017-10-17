const express = require('express');
const router = express.Router();
const FavoritesController = require('../controllers/FavoritesController');
const jwt = require('express-jwt');
const secrets = require('../config/secrets');

router.post('/add', FavoritesController.create);
router.get('/getAll', FavoritesController.getAll);
router.delete('/remove/:id', FavoritesController.find, FavoritesController.destroy);

module.exports = router;
