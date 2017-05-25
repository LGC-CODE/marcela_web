var app = angular.module('blog-app', ['ui.router']);

app.controller('inputCtrl', ['$scope', 'blogService', function($scope, blogService){
	var blog = blogService;

	$scope.new = function(info){ //info is an object
		blog.newArticle(info);
	}

}]);