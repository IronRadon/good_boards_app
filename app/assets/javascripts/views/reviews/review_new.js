GoodBoardsApp.Views.ReviewNew = Backbone.View.extend({
	template: JST["reviews/new"],

	events: {
		"submit form": "submit"
	},

	render: function() {
		var renderedContent = this.template({
			boardgame: this.model,
			current_user_id: GoodBoardsApp.user.get('id')

		});

		 console.log(this.$('#star'))

		this.$el.html(renderedContent);
		this.$('#star').raty({
    				readOnly: false,
    				score: 3,
    				path: '/assets'
  				});

		var signInView = new GoodBoardsApp.Views.SignIn();
		this.$el.append(signInView.render().$el);

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.currentTarget).serializeJSON();
		attrs.review.rating = attrs.score;
		var review = new GoodBoardsApp.Models.Review(attrs.review);

		review.save({}, {
			success: function() {
				boardgame = new GoodBoardsApp.Models.Boardgame({
					id: attrs.review.boardgame_id
				});
				boardgame.save();
				Backbone.history.navigate("#reviews/"+review.get('id'), {trigger: true});
			}
		});
		
	}
})