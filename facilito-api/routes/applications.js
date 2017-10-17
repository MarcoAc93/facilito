const express = require('express');
const router = express.Router();
const ApplicationController = require('../controllers/ApplicationController');
const authenticateAdmin = require('../middlewares/authenticateAdmin');
const findUser = require('../middlewares/findUser');
const jwt = require('express-jwt');
const secrets = require('../config/secrets');

router.all('*',jwt({secret:secrets.jwtSecret}), findUser, authenticateAdmin);

router.post('/add', ApplicationController.create);
router.get('/getAll', ApplicationController.index);
router.delete('/remove/:id', ApplicationController.find, ApplicationController.destroy);

module.exports = router;
