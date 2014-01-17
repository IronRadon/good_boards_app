GoodBoardsApp.Views.ReviewEmbedShow = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
	},

	template: JST["reviews/embedded_show"],

	render: function() {
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
    				path: '/assets'
  				});
		return this;
	}
})