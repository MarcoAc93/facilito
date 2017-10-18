const Application = require('./models/application');

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./config/db');
const secrets = require('./config/secrets');
const jwtMiddleware = require('express-jwt');
const app = express();

const places = require('./routes/places');
const users = require('./routes/users');
const sessions = require('./routes/sessions');
const favorites = require('./routes/favorites');
const visits = require('./routes/visits');
const visitsPlaces = require('./routes/visitsPlaces');
const applications = require('./routes/applications');

app.get('/remove', function(req, res){
	Application.remove({}).then(r=>res.send({message:'ok'}))
})

const findAppBySecret = require('./middlewares/findAppBySecret');
const findAppByApplicationId = require('./middlewares/findAppByApplicationId');
const authApp = require('./middlewares/authApp')();
const allowCORs = require('./middlewares/allowCORs')();

db.connect();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(findAppBySecret);
app.use(findAppByApplicationId);
app.use(authApp.unless({method:'OPTIONS'}));
app.use(allowCORs.unless({path:'/public'}));

app.use(
	jwtMiddleware({secret: secrets.jwtSecret})
	.unless({
		path: [
			'/api/sessions/create',
			'/api/users/create',
			'/api/places/getAll'
		],
		method:[
			'GET',
			'OPTIONS'
		]
	})
);

app.use('/api/places', places);
app.use('/api/places', visitsPlaces);
app.use('/api/users', users);
app.use('/api/sessions', sessions);
app.use('/api/favorites', favorites);
app.use('/api/visits', visits);
app.use('/api/applications', applications);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
