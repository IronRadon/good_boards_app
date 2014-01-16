GoodBoardsApp.Collections.UserReviews = Backbone.Collections.extend({
	intialize: function(model, options) {
		this.user_id = options.user_id;
	},

	model: GoodBoardsApp.Model.Review,

	url: "api/users" + this.user_id + "/reviews"
});