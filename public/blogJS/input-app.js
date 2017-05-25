var app = angular.module('blog-app', ['ui.router']);

app.controller('inputCtrl', ['$scope', 'blogService', '$window', function($scope, blogService, $window){
	var blog = blogService;

	$scope.new = function(info){ //info is an object
		blog.newArticle(info);
	}

	$scope.saveToStorage = function(info){
		$window.localStorage.setItem('info', JSON.stringify(info));
	}

	$scope.info = JSON.parse(localStorage.getItem('info'));

}]);