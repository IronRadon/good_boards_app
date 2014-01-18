GoodBoardsApp.Views.ReviewEmbedShow = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
	},

	template: JST["reviews/embedded_show"],

	render: function() {
		var that = this;
		var renderedContent = this.template({
			user: this.user,
			boardgame: this.boardgame,
			review: this.review,
			maxLength: 500
		})

		this.$el.html(renderedContent);
		this.$('#avg-rating').raty({
    				readOnly: true,
    				score: this.boardgame.get('rating'),
    				path: '/assets'
  				});
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
									boardgame = new GoodBoardsApp.Models.Boardgame({ //listening?
										id: that.boardgame.get('id'),
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
	}
})