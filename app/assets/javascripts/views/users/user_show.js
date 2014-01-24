GoodBoardsApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],

	events: {
		"submit form": "submit"
	},

	render: function() {
		var renderedContent = this.template({
			user: this.model,
			reviews: this.model.get('reviews'),
			comments: this.model.get('comments')
			// maxLength: 500 
		});

		this.$el.html(renderedContent);

		if (GoodBoardsApp.user.id != this.model.id) {
			console.log(GoodBoardsApp.user.id)
			console.log("you are an imposter!")
			this.$('.user-info').attr('disabled', true)
		}

		this.model.get('reviews').each(function(review){
			var that = this;
			var boardgame_id = review.get('boardgame_id');
			var id = review.get('id');
			var boardgame = new GoodBoardsApp.Models.Boardgame({id: boardgame_id});
			boardgame.fetch({
				success: function() {
					var view = new GoodBoardsApp.Views.ReviewEmbedShow({
						user: that.model,
						boardgame: boardgame,
						review: review
					});
					this.$('.embedded#'+id).html(view.render().$el);
				}
			});
			
		})

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.currentTarget).serializeJSON();
		attrs.user.id = GoodBoardsApp.user.id;
		var user = new GoodBoardsApp.Models.User(attrs.user);
		console.log(attrs.user)

		user.save({}, {
			success: function() {
				console.log('update user successful')
			}
		})
	}
})