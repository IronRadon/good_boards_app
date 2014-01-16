GoodBoardsApp.Collections.UserReviews = Backbone.Collection.extend({
	initialize: function(models, options) {
		this.user_id = options.user_id;
	},

	model: GoodBoardsApp.Models.Review,

	url: function() {
		return "api/users/" + this.user_id + "/reviews";
	}
});