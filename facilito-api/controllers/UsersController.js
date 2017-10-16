const User = require('../models/user');
const jwt = require('jsonwebtoken');

create = (req, res, next) => {
	let params = req.body;
	User.create(params)
	.then(user => {
		req.user = user;
		next();
	})
	.catch(err => {
		console.log(err);
		res.status(422).send(err);
	})
}

// ARREGLAR ESTE PEDO -.-
myPlaces = (req, res) => {
	let token = req.headers.authorization;
	token = token.slice(7, token.length);
	token = jwt.decode(token);
	User.findOne({'_id':token.id}).then(user => {
		user.places.then(places => {
			res.send(places);
		})
	}).catch(err => res.send(err).status(422));
}

module.exports = {
	create,
	myPlaces
}
