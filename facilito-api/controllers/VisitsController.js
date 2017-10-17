const Visit = require('../models/visit');
const User = require('../models/user');

create = (req, res) => {
  let params = req.body;
  params['_user'] = req.user.id;
  Visit.create(params).then(visit => {
    res.send(visit);
  }).catch(error => res.status(422).send({error}));
}

find = (req, res, next) => {
  Visit.findById(req.params.visit_id).then(visit => {
    req.mainObj = visit;
    req.visit = visit;
    next();
  }).catch(next);
}

index = (req, res) => {
  let promise = null;
  if (req.place) {
    promise = req.place.visits;
  } else if(req.user){
    promise = Visit.forUser(req.user.id, req.query.page || 1)
  }

  if (promise) {
    promise.then(visits => {
      res.send(visits);
    }).catch(err => {
      res.status(500).send(err);
    })
  } else {
    res.status(404).send({})
  }
}

destroy = (req, res) => {
  req.visit.remove().then(doc => {
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
