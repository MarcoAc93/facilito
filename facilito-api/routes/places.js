const express = require('express');
const PlacesController = require('../controllers/PlacesController');
const authenticateOwner = require('../middlewares/authenticateOwner');
const router = express.Router();

router.get('/getAll', PlacesController.index);
router.get('/getOne/:id', PlacesController.find, PlacesController.show);
router.post('/create',
		PlacesController.multerMiddleware(),
		PlacesController.create,
		PlacesController.saveImage);
router.put('/update/:id', PlacesController.find, PlacesController.update);
router.delete('/delete/:id', PlacesController.find, PlacesController.destroy);

module.exports = router;
