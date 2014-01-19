GoodBoardsApp.Views.ReviewEmbedShowBoard = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
	},

	events: {
		"click #star": "updateRating" 
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
		});
		var current_user_id = JSON.parse($("#bootstrapped-current-user-id").html()).current_user_id;
		var user_match = function() {         //candidate for refactoring
			if (current_user_id === that.review.get('user_id')) {
				return false
			}else{
				return true
			}
		};
		this.$el.html(renderedContent);
		this.$('#star').raty({	
		readOnly: user_match(),
		score: this.review.get('rating'),
		path: '/assets',
		click: function(score, event) {
			event.preventDefault();
			var YN = confirm("YOU DONE CLICKED, SON");
			console.log(score)

			if (YN === true) {
				that.review.set({
					id: that.review.get('id'),
					// user_id: that.user.get('id'),
					rating: score
				});
				console.log("i'm saving")
				that.review.save({}, {
					success: function() {
						console.log("i saved");
						
						console.log(that.boardgame.get('reviews'))
						that.boardgame.fetch({
						success: function(){
							console.log("i also saved")
							console.log(that.boardgame)
							that.boardgame.get('reviews').add([that.review], {merge:true});
							console.log(that.boardgame.get('reviews'))
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
		// console.log("Update Rating")
		// console.log($("input[name='score']"))
	}
})