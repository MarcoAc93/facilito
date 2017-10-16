const User = require('../models/user');

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
	console.log(req);
	User.findOne({'_id':req.user._id}).then(user => {
		user.places.then(places => {
			res.send(places);
		})
	})
}

module.exports = {
	create,
	myPlaces
}
