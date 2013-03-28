'use strict';


function MainCtrl($scope){
	$scope.version= '0.1';
}

function WallCtrl($scope, Tweets) {
	$scope.data = Tweets.all();
}


function AboutCtrl() {}
