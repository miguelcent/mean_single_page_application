// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .when('/geeks', {
            templateUrl: 'views/geek.html',
            controller: 'GeekController'    
        });

    $locationProvider.html5Mode(true);

}]);
/*Our Angular frontend will use the template file and inject it into the <div ng-view></div> in our index.html file.
It will do this without a page refresh which is exactly what we want for a single page application.*/