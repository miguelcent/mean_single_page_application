//  app/routes.js

// grab the nerd nmodel we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

// server routes ================================================================
	// handle things like api calls
	// authentication routes

	// sample api route
	app.get('/api/nerds', function(req, res){
		// use mongoose to get all nerds in the database
		Nerd.find(function(err, nerds){
			// if this is an error retrieving, launch the error message
			// nothing after res.send(err) will be executed
			if(err)
				res.send(err);
			res.json(nerds); // return all nerds in json format
		});
	});

	// route to handle creating goes here (app.post)
	// route to handle deleting goes here (app.delete)

// frontend routes ===============================================================
	// route to manage all angular requests
	app.get('*', function(req, res){ // * means that, 
		res.sendfile('./public/index.html'); // load our /public/index.html page
	});
}