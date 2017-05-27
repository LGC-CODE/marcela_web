app.factory('blogService', ['$http', function($http){
	var o = {
		articles: [
			{
				title: 'El Mejor Trabajo es Hecho por nosotros',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				isLiked: '',
				upvotes: 0,
				img0: '/images/con9.jpg',
				comments: [
					{
						name: 'Luis Constante',
						comment: 'Greates Service Available!',
						isLiked: '',
						upvotes: 0
					}
				]
			},
			{
				title: 'El Mejor Trabajo es Hecho por nosotros',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				isLiked: '',
				upvotes: 0,
				img0: '/images/con5.jpg',
				comments: [
					{
						name: 'Luis Constante',
						comment: 'Greates Service Available!',
						isLiked: '',
						upvotes: 0
					}
				]
			},
			{
				title: 'El Mejor Trabajo es Hecho por nosotros',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				isLiked: '',
				upvotes: 0,
				img0: '/images/con5.jpg',
				comments: [
					{
						name: 'Luis Constante',
						comment: 'Greates Service Available!',
						isLiked: '',
						upvotes: 0
					}
				]
			},
			{
				title: 'El Mejor Trabajo es Hecho por nosotros',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				isLiked: '',
				upvotes: 0,
				img0: '/images/con9.jpg',
				comments: [
					{
						name: 'Luis Constante',
						comment: 'Greates Service Available!',
						isLiked: '',
						upvotes: 0
					}
				]
			},
			{
				title: 'El Mejor Trabajo es Hecho por nosotros',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				isLiked: '',
				upvotes: 0,
				img0: '/images/con5.jpg',
				comments: [
					{
						name: 'Luis Constante',
						comment: 'Greates Service Available!',
						isLiked: '',
						upvotes: 0
					}
				]
			},
			{
				title: 'El Mejor Trabajo es Hecho por nosotros',
				body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				isLiked: '',
				upvotes: 0,
				img0: '/images/con5.jpg',
				comments: [
					{
						name: 'Luis Constante',
						comment: 'Greates Service Available!',
						isLiked: '',
						upvotes: 0
					}
				]
			}
		]
	};

	o.newArticle = function(information){
		return $http.post('/newArticle', information).success(function(data){
			console.log('added new article...');
		});
	}

	o.getAllArticles = function(){
		return $http.get('/blog/all').success(function(data){
			angular.copy(data, o.articles);
		});
	}

	o.getArticleById = function(id){
		return $http.get('/blog/get/single/' + id).then(function(blogObj){
			console.log(blogObj.data, 'check this');
			return blogObj.data;
		});
	}

	o.newComment = function(id, data){
		return $http.post('/blog/get/single/' + id + '/newComment/', data);
	}

	o.upvoteComment = function(edition, comment) {
		return $http.put('/blog/get/single/' + edition + '/newComment/' + comment +'/upvote')
			.success(function(data){
				console.log('successfully upvoted');
			});
	};

	o.downvoteComment = function(edition, comment) {
		return $http.put('/blog/get/single/' + edition + '/newComment/' + comment +'/downvote')
			.success(function(data){
				console.log('successfully downvoted');
			});
	};

	o.upvoteArticle = function(edition) {
		return $http.put('/blog/get/single/' + edition + '/upvote')
			.success(function(data){
				console.log('successfully upvoted');
			});
	};

	o.downvoteArticle = function(edition) {
		return $http.put('/blog/get/single/' + edition + '/downvote')
			.success(function(data){
				console.log('successfully downvoted');
			}); 
	};

	return o;
}]);