const Application = require('../models/application');

module.exports = function(req, res, next){
  if(req.xhr) return next();

  const secret = req.headers.secret;
  if(!secret) return next();

  Application.findOne({secret}).then(app => {
    if(!app) res.status(422).send({message:'App invalida'});
    req.application = app;
    next();
  }).catch(err => next(err));
}
