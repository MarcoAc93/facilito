const User = require('../models/user');
module.exports = (req, res, next) => {
  if (req.user) {
    User.findById(req.user.id).then(user => {
      req.fullUser = user;
      next();
    })
  } else {
    next();
  }
}
