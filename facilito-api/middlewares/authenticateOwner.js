module.exports = (req, res, next) => {
  // Arreglar este pedo -.-
  if (req.mainObj && (req.mainObj._user === req.user.id)) return next();

  next(new Error('No permissions'));
}
