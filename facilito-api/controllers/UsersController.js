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

module.exports = {
	create
}
