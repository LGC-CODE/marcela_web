var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var commentsModel = mongoose.model('commentsModel');
var articlesModel = mongoose.model('articlesModel');
var multer  = require('multer');
var single = "";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('blog', { marcela : '510-827-7603' });
});

router.get('/input', function(req, res, next) {
  res.render('inputs');
});

router.get('/single', function(req, res, next) {
  	res.render('single');
});

var storage = multer.diskStorage({
	destination: function(req, file, callback){
		var path = __dirname + '/../public/uploads';
		callback(null, path);
	},
	filename: function(req, file, callback){
		console.log(file);
		callback(null, file.originalname);
	}
});

var upload = multer({
	storage: storage
});

router.get('/all', function(req, res, next){
	articlesModel.find(function(err, article){
		
		if(err){ return next(err); }

		res.json(article);

	});
});

router.post('/new', upload.any(), function(req, res, next){
	var model = new articlesModel();
	var nameOfFiles0 = req.files[0].originalname;

	model.title = req.body.title;
	model.body = req.body.body;
	model.img0 = 'http://' + req.headers.host + '/uploads/' + nameOfFiles0;

	model.save(function(err){

		if(err){ return next(err); }

		console.log('saved');
		res.redirect('http://' + req.headers.host + '/blog');

	});
});

router.param('single', function(req, res, next, id){
	var query = articlesModel.findById(id);

	query.exec(function(err, article){
		if(err){ return next(err); }
		if(!article){ return next(new Error("can\'t find acticle")); }
		 req.articleObject = article;
		 return next();
	});
});

router.param('comment', function(req, res, next, id){
	var query = commentsModel.findById(id);

	query.exec(function(err, article){
		if(err){ return next(err); }
		if(!article){ return next(new Error("can\'t find acticle")); }
		 req.commentObject = article;
		 return next();
	});
});

router.get('/get/single/:single', function(req, res){
	req.articleObject.populate('comments', function(err, revista){
		if(err){ return next(err); }
		single = revista;
		res.json(revista);
	});
}); //retrieves single revista with articles array populated

router.post('/get/single/:single/newComment', function(req, res){
	var comments = new commentsModel(req.body);

	comments.save(function(err, com){
		if(err){ return next(err); }

		req.articleObject.comments.push(com);

		req.articleObject.save(function(err, event){
			if(err){ return next(err); }

			res.json(event);
		})
	})
});

router.put('/get/single/:single/upvote', function(req, res, next){
	req.articleObject.upvote(function(err, event){
		if(err){ return next(err); }

		res.json(event);
	});
}); //upvotes single article

router.put('/get/single/:single/downvote', function(req, res, next){
	req.articleObject.downvote(function(err, event){
		if(err){ return next(err); }

		res.json(event);
	});
});	//downvotes single article

router.put('/get/single/:single/newComment/:comment/upvote', function(req, res, next){
	req.commentObject.upvote(function(err, com){
		if(err){ return next(err); }

		res.json(com);
	});
});

router.put('/get/single/:single/newComment/:comment/downvote', function(req, res, next){
	req.commentObject.downvote(function(err, com){
		if(err){ return next(err); }

		res.json(com);
	});
});

module.exports = router;
