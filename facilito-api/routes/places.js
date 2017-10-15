const express = require('express');
const PlacesController = require('../controllers/PlacesController');
let router = express.Router();

router.get('/places', PlacesController.index);
router.get('/place/:id', PlacesController.find, PlacesController.show);
router.post('/place',
		PlacesController.multerMiddleware(),
		PlacesController.create,
		PlacesController.saveImage);
router.put('/place/:id', PlacesController.find, PlacesController.update);
router.delete('/place/:id', PlacesController.find, PlacesController.destroy);

module.exports = router;
