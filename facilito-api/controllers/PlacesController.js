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
	Place.findById(req.params.id)
	.then(place => {
		req.place = place;
		next();
	})
	.catch(err => {
		next(err)
	})
}

create = (req, res, next) => {
	Place.create({
		title: req.body.title,
		description: req.body.description,
		acceptsCreditCard: req.body.acceptsCreditCard,
		openHour: req.body.openHour,
		closeHour: req.body.closeHour
	})
	.then(place => {
		req.place = place;
		next();
	}).catch(err => {
		next(err)
	});
}

update = (req, res) => {
	let attributes = ['title','description','acceptsCreditCard','openHour','closeHour'];
	let attrParams = {};
	attributes.forEach(attr => {
		if(Object.prototype.hasOwnProperty.call(req.body, attr))
			attrParams[attr] = req.body[attr]
	})
	req.place = Object.assign(req.place, attrParams);
	req.place.save({_id:req.params.id},attrParams,{new: true})
	.then(place => {
		res.send(place);
	})
	.catch(err => {
		console.log(err);
		res.send(err);
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
