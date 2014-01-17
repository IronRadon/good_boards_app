GoodBoardsApp.Views.ReviewEmbedShow = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
	},

	template: JST["reviews/embedded_show"],

	render: function() {
		var renderedContent = this.template({
			boardgame: this.boardgame,
			review: this.review,
			maxLength: 500
		})

		this.$el.html(renderedContent);
		return this;
	}
})