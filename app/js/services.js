'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var tweetWall = angular.module('tweetWall.services', ['ngResource']);

tweetWall.factory('Tweets', function($resource) {
	return $resource('http://search.twitter.com/search.json',
			{
				callback : 'JSON_CALLBACK',
				src :'typd',
				q : '#devoxxfr'
			}, {
				all : {
					method : 'JSONP'
				}

			});
});
