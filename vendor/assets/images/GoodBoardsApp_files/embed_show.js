GoodBoardsApp.Views.BoardgameEmbedShow = Backbone.View.extend({

	template: JST["boardgames/embedded_show"],

	render: function() {
		var renderedContent = this.template({
			boardgame: this.model
			// maxLength: 500
		});

		this.$el.html(renderedContent);

		this.$('#star').raty({
    				readOnly: true,
    				score: this.model.get('rating'),
    				path: '/assets'
  				});
		return this;
	}
})
;
