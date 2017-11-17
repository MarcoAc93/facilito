const mongoose = require('mongoose');

const dbName = 'facilito_places_demo';

module.exports = {
	connect: () => mongoose.connect('mongodb://localhost:27017/'+dbName),
	dbName,
	connection: () => {
		if (mongoose.connection)
			return mongoose.connection;
		return this.connect();
	}
}
