GoodBoardsApp.Models.User = Backbone.Model.extend({
	
	parse: function (data) {
	  var reviews = data.reviews;
	  var comments = data.comments;
		data.reviews = new GoodBoardsApp.Collections.UserReviews(reviews, {
			user_id: data.id
		});
		data.comments = new GoodBoardsApp.Collections.UserComments(comments, {
			user_id: data.id
		})
		return data;
	},

	urlRoot: 'api/users'
})