const mongoose = require('mongoose');
const mongooseBcrypt = require('mongoose-bcrypt');
const Place = require('../models/place');

let userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	name: String,
	admin: {
		type: Boolean,
		default: false
	}
});

userSchema.virtual('places').get(() => {
	return Place.find({'_user': this._id});
});

userSchema.plugin(mongooseBcrypt);

const User = mongoose.model('User', userSchema);

module.exports = User;
