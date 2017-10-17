const express = require('express');
const router = express.Router();
const VisitsController = require('../controllers/VisitsController');
const jwt = require('express-jwt');
const secrets = require('../config/secrets');

router.post('/add',jwt({secret:secrets.jwtSecret}), VisitsController.create);
router.get('/getAll', jwt({secret:secrets.jwtSecret}), VisitsController.index);
router.delete('/remove/:visit_id', jwt({secret:secrets.jwtSecret}), VisitsController.find, VisitsController.destroy);

module.exports = router;
