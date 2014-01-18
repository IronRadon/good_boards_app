GoodBoardsApp.Collections.UserReviews = Backbone.Collection.extend({
	initialize: function(models, options) {
		this.user_id = options.user_id;
	},

	comparator: function(review) {
		var date = review.get('updated_at');
		parsed = Date.parse(date);

		return -(parsed);
	},

	model: GoodBoardsApp.Models.Review,

	url: function() {
		return "api/users/" + this.user_id + "/reviews";
	}
});