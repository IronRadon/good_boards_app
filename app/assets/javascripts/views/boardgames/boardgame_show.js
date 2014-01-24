GoodBoardsApp.Views.BoardgameShow = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.model, "all", this.render);
	},

	template: JST["boardgames/show"],

	render: function(){
		var renderedContent = this.template({
			reviews: this.model.get('reviews'),
			boardgame: this.model
		});
		this.$el.html(renderedContent);
		this.$('#star').raty({
    				readOnly: true,
    				score: this.model.get('rating'),
    				path: '/assets',
    				size: 1000
  				});

		var that = this;
		this.model.get('reviews').each(function(review){
			var user_id = review.get('user_id');
			var id = review.get('id');
			var user = new GoodBoardsApp.Models.User({id: user_id});
			user.fetch({
				success: function() {
					var view = new GoodBoardsApp.Views.ReviewEmbedShowBoard({
						boardgame: that.model,
						review: review,
						user: user
					});
					that.$('.embedded#'+id).html(view.render().$el);
				}
			});
			
		})

		return this;
	}
});