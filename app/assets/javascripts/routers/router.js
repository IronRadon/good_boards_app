GoodBoardsApp.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl; //this is 'content' 
	},

	routes: {
		"boardgames/:boardgame_id": "boardShow", //to_do
		"boardgames/:boardgame_id/reviews/new": "newReview",
		"users/:user_id": "userShow",
		"reviews/:review_id": "reviewShow"
	},

	boardShow: function(boardgame_id) {
		var that = this;
		var boardgame = new GoodBoardsApp.Models.Boardgame([], {boardgame_id: boardgame_id});
		boardgame.fetch({
			success: function() {
				var reviews = new GoodBoardsApp.Collections.GameReviews([], {boardgame_id: boardgame_id});
				reviews.fetch({
					success: function() {
						var view = new GoodBoardsApp.Views.BoardgameShow({
							model: boardgame,
							collection: reviews
						});
						that._swapView(view);
					}
				})
			}
		})
	},

	userShow: function(user_id) {
		var that = this;
		var user = new GoodBoardsApp.Models.User([], {user_id: user_id});
		user.fetch({
			success: function() {
				var reviews = new GoodBoardsApp.Collections.UserReviews([], {user_id: user_id});
				reviews.fetch({
					success: function() {
						var view = new GoodBoardsApp.Views.UserShow({
							model: user,
							collection: reviews
						});
						that._swapView(view);
					}
				});
			}
		});	
	},

	reviewShow: function(review_id) {
		var that = this;
		var review = new GoodBoardsApp.Models.Review([], {id: review_id});
		review.fetch({
			success: function() {
				var boardgame_id = review.get('boardgame_id');
				var user_id = review.get('user_id');
				var user = new GoodBoardsApp.Models.User([], {user_id: user_id});
				var boardgame = new GoodBoardsApp.Models.Boardgame([], {boardgame_id: boardgame_id});
				user.fetch({
					success: function() {
						boardgame.fetch({
							success: function() {
								var view = new GoodBoardsApp.Views.ReviewShow({
									review: review,
									boardgame: boardgame,
									user: user
								});
							that._swapView(view);
							}
						}); 	
					}
				});
			}
		});
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});