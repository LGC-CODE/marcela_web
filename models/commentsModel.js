var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
	name: String,
	comment: String,
	isLiked: {type: Boolean, default: ''},
	upvotes: { type: Number, default: 0 },
	articleRef: { type: mongoose.Schema.Types.ObjectId, ref: 'articlesModel' }
});

commentsSchema.methods.upvote = function(callback){
	this.upvotes += 1;
	this.save(callback);
};

commentsSchema.methods.downvote = function(callback){
	this.upvotes -= 1;
	this.save(callback);
};

mongoose.model('commentsModel', commentsSchema);
