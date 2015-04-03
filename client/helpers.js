Template.categories.helpers({
	Categories:function() {
		return Categories.find();
	}
});

Template.books.helpers({
	catnotselected:function() {
		return Session.equals('category',null);
	},
	category:function() {
		return  Session.get('category');
	}
});

Template.books.helpers({
	booklist:function(){
		return Books.find({catName:Session.get('category')});
	}
});

Template.book.helpers({
	numLikes:function() {
		return Likes.find({book:this._id}).count();
	},
	likesThis:function() {
		var doeslike = Likes.findOne({muser:Meteor.userId(),book:this._id});
		if (doeslike) {
			return "You liked this";
		}
	}
});

Template.books.rendered = function() {
	setTimeout(function(){
		masonize(function(){

		})
	}, 1000);
}


function masonize(callback) {
	var container = $('#mainContent');
	container.masonry({
		itemSelector: '.item',
		gutter:10
	})
	if(callback){callback()};
}

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});