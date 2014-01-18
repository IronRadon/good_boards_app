GoodBoardsApp.Views.ReviewEmbedShowBoard = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
	},

	events: {
		// "click #star": "updateRating" //clearer to name updateReview?
	},

	template: JST["reviews/embedded_show_board"],

	render: function() {
		var that = this;
		var old_rating = this.review.get('rating');
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
			console.log(score)

			if (YN === true) {
				that.review.set({
					id: that.review.get('id'),
					user_id: that.user.get('id'),
					boardgame_id: that.boardgame.get('id'),
					rating: score
				});
				console.log("i'm saving")
				that.review.save({}, {
					success: function() {
						console.log("i saved");
						// that.boardgame.set({
						// 	id:that.boardgame.get('id'),
						// 	review_id: that.review.get('id'),
						// 	old_rating: old_rating,
						// 	rating:score
						// });
						boardgame = new GoodBoardsApp.Models.Boardgame({
							id: that.boardgame.get('id'),
							review_id: that.review.get('id'),
							old_rating: old_rating,
							rating: score
						});
					console.log(boardgame);
					boardgame.save({}, {
						success: function(){
							console.log("i also saved")
						}
					});
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