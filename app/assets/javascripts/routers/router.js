GoodBoardsApp.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl; //this is 'content' 
	},

	routes: {
		"": "rootShow",
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
				var reviews = boardgame.get('reviews');
				var view = new GoodBoardsApp.Views.BoardgameShow({
					model: boardgame,
					collection: reviews
				});
				that._swapView(view);
			},
			error: this.notFoundShow.bind(this)
		})
	},

	userShow: function(user_id) {
		var that = this;
		var user = new GoodBoardsApp.Models.User({id: user_id});
		user.fetch({
			success: function() {
				var view = new GoodBoardsApp.Views.UserShow({
					model: user
					// collection: user.get('reviews')
				});
				that._swapView(view);
			},
			error: this.notFoundShow.bind(this)
		});	
	},

	reviewShow: function(review_id) {
		var that = this;
		var review = new GoodBoardsApp.Models.Review({id: review_id});
		review.fetch({
			success: function() {	
				var view = new GoodBoardsApp.Views.ReviewShow({
					model: review
				});
				that._swapView(view); 
			},
			error: this.notFoundShow.bind(this)
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

	rootShow: function() {
		var that = this;
		// var view = new GoodBoardsApp.Views.Rootshow({
		// 	collection: GoodBoardsApp.boardgames
		// })
		var boardgames = new GoodBoardsApp.Collections.BoardgamesRoot();
		boardgames.fetch({
			success: function(){
			var view = new GoodBoardsApp.Views.RootShow({
				collection: boardgames
			});
				that._swapView(view);	
			}
		})

	},

	notFoundShow: function(){
		var view = new GoodBoardsApp.Views.NotFound();
		this._swapView(view);
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});