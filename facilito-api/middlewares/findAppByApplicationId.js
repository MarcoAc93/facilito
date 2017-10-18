const Application = require('../models/application');

module.exports = function (req, res, next) {
  console.log(req.body);
  if(req.application) return next();
  const applicationId = req.headers.application;
  if(!applicationId) return next();
  Application.findOne({applicationId}).then(app => {
    if(!app) return next(new Error({message:'App Invalida'}));
    req.application = app;
    next();
  }).catch(next());
};
