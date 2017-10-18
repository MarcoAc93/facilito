module.exports = (req, res, next) => {
  if (req.fullUser && req.fullUser.admin) {
    return next()
  };
  res.status(422).send({error:'No tienes permisos para estar aquí'});
}
