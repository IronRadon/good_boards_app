GoodBoardsApp.Views.ReviewEmbedShowBoard = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
	},

	events: {
		"click #star": "updateRating" //clearer to name updateReview?
	},

	template: JST["reviews/embedded_show_board"],

	render: function() {
		var that = this;
		var renderedContent = this.template({
			user: this.user,
			boardgame: this.boardgame,
			review: this.review,
			maxLength: 500
		})

		this.$el.html(renderedContent);
		this.$('#star').raty({	
		readOnly: false,
		score: this.review.get('rating'),
		path: '/assets',
		click: function(score, event) {
			event.preventDefault();
			var YN = confirm("YOU DONE CLICKED, SON");
			console.log(YN);

			if (YN === true) {
				var review = new GoodBoardsApp.Models.Review({
					id: that.review.get('id'),
					user_id: that.user.get('id'),
					boardgame_id: that.boardgame.get('id'),
					rating: score
				});
				console.log("i'm saving")
				review.save({
					success: function() {
						console.loge("i saved")
					}
				});
			}
		}
		});
		return this;
	},

	updateRating: function(event) {
		// event.preventDefault();
		// var YN = confirm("YOU DONE CLICKED, SON");
		// console.log(YN);
		// console.log($(currentTarget).serializeJSON);

		// if (YN === true) {
		// 	var review = new GoodBoardsApp.Models.Review({
		// 		id: this.review.get('id'),
		// 		user_id: this.user.get('id'),
		// 		boardgame_id: this.boardgame.get('id')
		// 	});
		// 	review.save();
		// }
	}
})