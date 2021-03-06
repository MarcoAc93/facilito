const Place = require('../models/place');
const upload = require('../config/upload');
const uploader = require('../models/uploader');

index = (req, res) => {
	Place.paginate({},{ page:req.query.page || 1, limit:8, sort:{'_id':-1} })
	.then(places => {
		res.send(places);
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	})
}

show = (req, res) => {
	res.send(req.place);
}

find = (req, res, next) => {
	Place.findOne({slug:req.params.id})
	.then(place => {
		req.place = place;
		req.mainObj = place;
		next();
	})
	.catch(err => {
		next(err)
	})
}

create = (req, res, next) => {
	let params = req.body;
	params['_user'] = req.user.id;
	Place.create(params)
	.then(place => {
		req.place = place;
		next();
	}).catch(err => {
		next(err)
	});
}

update = (req, res) => {
	let params = req.body;
	Place.findOne({slug:req.params.id})
	.then(result => {
		result.set(params);
		result.save({new:true})
		.then(updated => {
			res.send(updated)
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		})
	})
}

destroy = (req, res) => {
	req.place.remove().then(place => {
		res.send(place)
	})
	.catch(err => {
		console.log(err);
		res.send(err);
	})
}

multerMiddleware = () => {
	return upload.fields([
		{name:'avatar', maxCount:1},
		{name:'cover', maxCount:1}
	]);
}

saveImage = (req, res) => {
	if (req.place) {
		const files = ['avatar', 'cover'];
		const promises = [];
		files.forEach(imageType => {
			if (req.files && req.files[imageType]) {
				const path = req.files[imageType][0].path;
				promises.push(req.place.updateImage(path,imageType));
			}
		});
		Promise.all(promises).then(results => {
			console.log(results);
			res.send(req.place);
		}).catch(err => {
			console.log(err);
			res.send(err);
		});
	} else {
		res.status(422).send({
			error:req.error || 'Could not save place'
		})
	}
}

module.exports = { show, index, create, update, destroy, find, multerMiddleware, saveImage }
