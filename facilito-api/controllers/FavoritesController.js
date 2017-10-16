const FavoritePlace = require('../models/favoritePlace');

create = (req, res) => {
  let params = req.body;
  params['_user'] = req.user.id;
  FavoritePlace.create(params).then(fav => {
    res.send(fav);
  }).catch(error => res.status(422).send({error}));
}

find = (req, res, next) => {
  FavoritePlace.findById(req.params.id).then(fav => {
    req.mainObj = fav;
    req.favorite = fav;
    next();
  }).catch(next);
}

destroy = (req, res) => {
  req.favorite.remove().then(doc => {
    res.send({});
  }).catch(error => {
    res.status(500).send({error});
  })
}

module.exports = {
  create,
  find,
  destroy
}
