const cloudinary = require('cloudinary');
const secrets = '../config/secrets';

cloudinary.config({
	api_key: '289121369369247',
	cloud_name: 'marco-ac-93',
	api_secret: '3aYvCITsg_2GwiiMMYzREtB5wxA'});
module.exports = function(imagePath){
	return new Promise((resolve, reject) => {
		cloudinary.uploader.upload(imagePath, function(result){
			if(result.secure_url) return resolve(result.secure_url);
			reject(new Error('Error with cloudinary'));
		})
	})
}
