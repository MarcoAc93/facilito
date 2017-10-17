const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');
const User = require('../models/user');

authenticate = (req, res, next) => {
	let params = req.body;
	User.findOne({email:req.body.email})
	.then(user => {
		if (!user) {res.status(404).send({message:'Email incorrecto'})}
		console.log(user);
		user.verifyPassword(req.body.password)
		.then(valid => {
			if (valid) {
				req.user = user;
				next();
			} else {
				next(new Error('Invalid Credentials'));
			}
		})
	}).catch(err => next(err));
}

generateToken = (req, res, next) => {
	if(!req.user) return next();
	req.token = jwt.sign({id:req.user._id}, secret.jwtSecret);
	next();
}

sendToken = (req, res) => {
	if(req.user){
		res.send({
			user:req.user,
			token:req.token
		})
	} else {
		res.status(422).send({error:'Could not create user'});
	}
}

module.exports = {
	generateToken,
	sendToken,
	authenticate
}
