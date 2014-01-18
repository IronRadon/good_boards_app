GoodBoardsApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],

	render: function() {
		var renderedContent = this.template({
			user: this.model,
			reviews: this.model.get('reviews')
			// maxLength: 500 
		});
		this.$el.html(renderedContent);

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
	}
})