GoodBoardsApp.Views.ReviewEmbedShow = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
		console.log(this.boardgame)
	},

	template: JST["reviews/embedded_show"],

	render: function() {
		console.log(this.boardgame.get('title'))
		var renderedContent = this.template({
			user: this.user,
			boardgame: this.boardgame,
			review: this.review,
			maxLength: 500
		})

		this.$el.html(renderedContent);
		return this;
	}
})