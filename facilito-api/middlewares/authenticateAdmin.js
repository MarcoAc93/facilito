module.exports = (req, res, next) => {
  if (req.fullUser && req.fullUser.admin) {
    console.log(`\n ${req.fullUser}`);
    return next()
  };
  res.status(422).send({error:'No tienes permisos para estar aquí'});
}
