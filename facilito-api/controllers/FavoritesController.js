const FavoritePlace = require('../models/favoritePlace');
const User = require('../models/user');

create = (req, res) => {
  let params = req.body;
  params['_user'] = req.user.id;
  FavoritePlace.create(params).then(fav => {
    res.send(fav);
  }).catch(error => res.status(422).send({error}));
}

// ARREGLAR EL FIND PARA ELIMINAR LUGAR FAVORITO
find = (req, res, next) => {
  FavoritePlace.findById(req.params.id).then(fav => {
    console.log(fav);
    req.mainObj = fav;
    req.favorite = fav;
    next();
  }).catch(next);
}

getAll = (req, res) => {
  if (!req.fullUser) { return res.send({}) }
    req.fullUser.favorites.then(places => {
      res.send(places);
  }).catch(err => res.status(422).send(err));
}

destroy = (req, res) => {
  req.favorite.remove().then(doc => {
    res.send({message:'Removed', status:200});
  }).catch(error => {
    res.status(500).send({error});
  })
}

module.exports = {
  create,
  find,
  destroy,
  getAll
}
