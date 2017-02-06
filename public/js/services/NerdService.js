// public/services/NerdServices.js

angular.module('NerdService', []).factory('Nerd', ['$http', function($http) {
	
	return {
		// call to get all nerds
		get : function() {
			return $http.get('/api/nerds');
		},
		// these will work when more API routes  are defined in the Node side of things
		// call to POST and create a new Nerd
		create : function(nerdData) {
				return  $http.post('/api/nerds', nerdData);
		},
		// call to delete a nerd
		delete : function(id) {
			return $http.delete('/api/nerds' + id);
		}
	
		//That’s it for our services. The only function that will work in that NerdService is the get function. 
		//The other two are just placeholders and they won’t work unless you define those specific routes in your app/routes.js file. 
		//For more on building APIs, here’s a tutorial for Building a RESTful Node API.
		//These services will call our Node backend, retrieve data in JSON format, 
		//and then we can use it in our Angular controllers.
	}

}]);