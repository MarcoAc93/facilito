const Application = require('../models/application');

module.exports = function(options){
  let AuthApp = function(req, res, next){
    Application.count({}).then(appCount => {
      const message = 'La app es requerida para consumir esta API';
      if (appCount > 0 && !req.application) next({message})
      req.validApp = true;
      next();
    }).catch(next)
  }
  AuthApp.unless = require('express-unless');
  return AuthApp;
}
