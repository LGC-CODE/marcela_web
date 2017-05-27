var app = angular.module('blog-app', ['ui.router']);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: '/home.html',
					controller: 'blogCtrl'
				});
			$urlRouterProvider.otherwise('home');
		}]);

app.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider){

			$stateProvider
				.state('single', {
					url: '/home/{id}',
					templateUrl: '/single.html',
					controller: 'singleCtrl',
					resolve: {
						blog: ['$stateParams', 'blogService', function($stateParams, blogService){
							return blogService.getArticleById($stateParams.id);
						}]
					}
				});
		}]);

app.controller('blogCtrl', ['$scope', 'blogService', '$window', function($scope, blogService, $window){

	$scope.articles = blogService.articles;
	blogService.getAllArticles();
	var article = $scope.articles;

	setTimeout(function(){
		for(var event in article){
			article[event].isLiked = $window.localStorage[article[event].title];
			$scope.$apply();
		}
	}, 1000);

	$scope.incrementUpvotes = function(event){
		blogService.upvoteArticle(event._id);
		event.upvotes += 1;
		$window.localStorage[event.title] = true; //single event
		event.isLiked = $window.localStorage[event.title];
	};

	$scope.decrementUpvotes = function(event){
		blogService.downvoteArticle(event._id);
		event.upvotes -= 1;
		$window.localStorage[event.title] = '';
		event.isLiked = $window.localStorage[event.title];
	};

}]);

app.controller('singleCtrl', ['$scope', 'blogService', 'blog', '$window', '$stateParams',function($scope, blogService, blog, $window, $stateParams){
	$scope.article = blog;
	var comment = $scope.article.comments;

	$scope.$parent.meta = {
		title: blog.title,
		body: blog.body
	}

	setTimeout(function(){
		for(var event in comment){
			comment[event].isLiked = $window.localStorage[comment[event]._id];
			$scope.$apply();
		}
	}, 1000);

	$scope.newComment = function(){
		if(!$scope.user) { 
			alert('nombre y comentario son necesarios');
			return;
		}

		blogService.newComment(blog._id, $scope.user).then(function(resp){
			console.log(resp.data, 'data');
			$scope.article = resp.data;
		});;

		blog.comments.push({name: $scope.user.name, comment: $scope.user.comment, upvotes: 0});

		$scope.user = "";
	};

	$scope.incrementComUpvotes = function(event){
		blogService.upvoteComment(blog._id, event._id);
		event.upvotes += 1;
		$window.localStorage[event._id] = true; //single event
		event.isLiked = $window.localStorage[event._id];
	};

	$scope.decrementComUpvotes = function(event){
		blogService.downvoteComment(blog._id, event._id);
		event.upvotes -= 1;
		$window.localStorage[event._id] = '';
		event.isLiked = $window.localStorage[event._id];
	};

}]);

app.controller('metaCtrl', ['$scope', function($scope){
	$scope.meta = {};
}]);
