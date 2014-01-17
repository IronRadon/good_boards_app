GoodBoardsApp.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl; //this is 'content' 
	},

	routes: {
		"boardgames/:boardgame_id": "boardShow", 
		"boardgames/:boardgame_id/reviews/new": "newReview",
		"users/:user_id": "userShow",
		"reviews/:review_id": "reviewShow"
	},

	boardShow: function(boardgame_id) {
		var that = this;
		var boardgame = new GoodBoardsApp.Models.Boardgame({id: boardgame_id});
		boardgame.fetch({
			success: function() {
				console.log(boardgame.get('reviews'));
				var reviews = boardgame.get('reviews');
				var view = new GoodBoardsApp.Views.BoardgameShow({
					model: boardgame,
					collection: reviews
				});
				that._swapView(view);
			}
		})
	},

	userShow: function(user_id) {
		var that = this;
		var user = new GoodBoardsApp.Models.User([], {user_id: user_id});
		user.fetch({
			success: function() {
				var view = new GoodBoardsApp.Views.UserShow({
					model: user,
					collection: user.get('reviews')
				});
				that._swapView(view);
			}
		});	
	},

	reviewShow: function(review_id) {
		var that = this;
		var review = new GoodBoardsApp.Models.Review({id: review_id});
		review.fetch({
			success: function() {	
				var view = new GoodBoardsApp.Views.ReviewShow({
					model: review,
				});
				that._swapView(view); 
			}
		});
	},

	newReview: function(boardgame_id) {
		var that = this;
		var boardgame = new GoodBoardsApp.Models.Boardgame({id: boardgame_id});
		boardgame.fetch({
			success: function() {
				var view = new GoodBoardsApp.Views.ReviewNew({
					model: boardgame
				});
				that._swapView(view);
			}
		})
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});