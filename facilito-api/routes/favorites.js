const express = require('express');
const router = express.Router();
const FavoritesController = require('../controllers/FavoritesController');

router.post('/add', FavoritesController.create);
router.delete('/remove/:id',FavoritesController.find, FavoritesController.destroy);

module.exports = router;
