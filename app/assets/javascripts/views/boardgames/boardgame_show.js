GoodBoardsApp.Views.BoardgameShow = Backbone.View.extend({
	template: JST["boardgames/show"],

	render: function(){
		var renderedContent = this.template({
			reviews: this.collection,
			boardgame: this.model
		});
		this.$el.html(renderedContent);

		console.log(this.model.get('title'))
		var that = this;

		this.collection.each(function(review){
			var user_id = review.get('user_id');
			var id = review.get('id');
			var user = new GoodBoardsApp.Models.User([], {user_id: user_id});

			console.log(that.model.get('title'))
			user.fetch({
				success: function() {
					var view = new GoodBoardsApp.Views.ReviewEmbedShow({
						boardgame: that.model,
						review: review,
						user: user
					});
					this.$('.embedded#'+id).html(view.render().$el);
				}
			});
			
		})

		return this;
	}
});