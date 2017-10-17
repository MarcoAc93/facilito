const express = require('express');
const router = express.Router();
const VisitsController = require('../controllers/VisitsController');
const PlacesController = require('../controllers/PlacesController');
const jwt = require('express-jwt');
const secrets = require('../config/secrets');

router.route('/:id/visits')
  .get(PlacesController.find, jwt({secret:secrets.jwtSecret}), VisitsController.index)
  .post(PlacesController.find, jwt({secret:secrets.jwtSecret}), VisitsController.create);

router.route('/:id/visits/:visits_id')
  .delete(VisitsController.find, jwt({secret:secrets.jwtSecret}), VisitsController.destroy);

module.exports = router;
