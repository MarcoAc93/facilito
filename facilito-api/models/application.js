const mongoose = require('mongoose');
const randomString = require('randomstring');

// assignRandomAndUniqueValueToField = (app, field, next) => {
//   const random = randomString.generate(20);
//   let searchCriteria = {};
//   searchCriteria[field] = random;
//   Application.count(searchCriteria).then(result => {
//     if (result > 0) {
//       return assignRandomAndUniqueValueToField(app, field, next)
//     }
//     app[field] = randomString;
//     next();
//   })
// }

const applicationSchema = new mongoose.Schema({
  applicationId: {
    type: String,
    required: true,
    unique: true
  },
  secret: {
    type: String,
    required: true,
    unique: true
  },
  origins: String,
  name: String
});

// applicationSchema.pre('validate', function(next) {
//   assignRandomAndUniqueValueToField(this, 'applicationId', function(){
//     assignRandomAndUniqueValueToField(this, 'secret', next);
//   })
// })

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
