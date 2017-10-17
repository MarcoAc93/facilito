const Application = require('../models/application');
const randomString = require('randomstring');

create = (req, res) => {
  let params = req.body;
  params.applicationId = randomString.generate(30);
  params.secret = randomString.generate(30);
  Application.create(params).then(application => {
    res.send(application);
  }).catch(error => res.status(422).send(error));
}

find = (req, res, next) => {
  Application.findById(req.params.id).then(application => {
    req.mainObj = application;
    req.application = application;
    next();
  }).catch(next);
}

index = (req, res) => {

}

destroy = (req, res) => {
  req.application.remove().then(doc => {
    res.send({});
  }).catch(error => {
    res.status(500).send({error});
  })
}

module.exports = {
  create,
  find,
  destroy,
  index
}
