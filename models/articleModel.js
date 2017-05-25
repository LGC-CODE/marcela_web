var mongoose = require('mongoose');

var articlesSchema = new mongoose.Schema({
	title: String,
	body: String,
	isLiked: {type: Boolean, default: ''},
	upvotes: {type: Number, default: 0},
	img0: String,
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'commentsModel' }]
});

articlesSchema.methods.upvote = function(callback){
	this.upvotes += 1;
	this.save(callback);
};

articlesSchema.methods.downvote = function(callback){
	this.upvotes -= 1;
	this.save(callback);
};

mongoose.model('articlesModel', articlesSchema);
