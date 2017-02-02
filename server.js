//	server.js file:
//We have now pulled in our modules, configured our application for things like database, some express settings, routes, and then started our server. 
//'config', 'model', 'routes' are the last things that our application needs

//	modules ==================================================================
var express				= require('express');
var app					= express();
var bodyParser			= require('body-parser');
var methodOverride		= require('method-override'):

//	configuration ============================================================

//	config files
var db = require('./config/db');

//	setup our port
var port = process.env.PORT || 8080;

//	connect to our mongoDB database
//	(uncomment after enter own credentials in config/db.js)
	// 	mongoose.connect(db.url);

//	get all data/stuff of the body (POST) parameters
//	parse application/json
app.use(bodyParser.json());

//	parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//	parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//	override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

//	routes ===================================================================
require('./app/routes')(app); //configure our routes

//	start app ================================================================
//	startup our app at -> "http://localhost:8080"
app.listen(port);

//shortcut to the user
console.log('Magic happens on port '+ port);

//expose app
exports = module.exports = app;