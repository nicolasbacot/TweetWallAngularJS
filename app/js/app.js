'use strict';


// Declare app level module which depends on filters, and services
angular.module('tweetWall', ['tweetWall.filters', 'tweetWall.services', 'tweetWall.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/wall', {templateUrl: 'partials/wall.html', controller: WallCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: AboutCtrl});
    $routeProvider.otherwise({redirectTo: '/wall'});
  }]);
