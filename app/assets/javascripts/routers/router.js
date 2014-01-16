GoodBoardsApp.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl; //it is 'content 
	},

	routes: {
		"boardgames/:boardgame_id": "boardShow",
		"users/:user_id": "userShow"
	},

	userShow: function(user_id) {
		var that = this;
		var user = new GoodBoardsApp.Models.User([], {user_id: user_id});
		user.fetch();
		var reviews = new GoodBoardsApp.Collections.UserReviews([], {user_id: user_id});
		reviews.fetch({
			success: function() {
				var view = new GoodBoardsApp.Views.UserShow({
					model: user,
					collection: reviews
				});
				console.log(reviews);
				that._swapView(view);
			}
		});
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});