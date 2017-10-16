const mongoose = require('mongoose');
const mongooseBcrypt = require('mongoose-bcrypt');
const Place = require('../models/place');
const FavoritePlace = require('../models/favoritePlace');

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

userSchema.virtual('places').get(function() {
	return Place.find({'_user': this._id});
});

userSchema.virtual('pavorites').get(function() {
	return FavoritePlace.find({'_user':this._id},{'_place':true})
	.then(favs => {
		let placeIds = favs.map(fav => fav._place);
		return Place.find({'_id':{$in:placeIds}})
	})
})

userSchema.plugin(mongooseBcrypt);

const User = mongoose.model('User', userSchema);

module.exports = User;
