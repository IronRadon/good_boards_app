GoodBoardsApp.Views.ReviewShow = Backbone.View.extend({
	initialize: function(options){
		this.boardgame = options.boardgame;
		this.review = options.review;
		this.user = options.user;
	},

	template: JST["reviews/show"],

	render: function(){
		var renderedContent = this.template({
			review: this.review,
			// boardgame: this.boardgame,
			user: this.user
		});
		this.$el.html(renderedContent);

		var embeddedview = new GoodBoardsApp.Views.BoardgameEmbedShow({
			model: this.boardgame
		});
		this.$('#boardgame-info').html(embeddedview.render().$el);

		return this;
	}
});