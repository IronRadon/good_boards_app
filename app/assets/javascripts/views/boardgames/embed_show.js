GoodBoardsApp.Views.BoardgameEmbedShow = Backbone.View.extend({
	initialize: function(options){
		this.parent = options.parent;
		// this listens to "itself" via the review
		this.listenTo(this.parent, "change", this.render);
	},


	template: JST["boardgames/embedded_show"],

	render: function() {
		console.log(this.parent.get('boardgame'))
		var renderedContent = this.template({
			boardgame: this.parent.get('boardgame')
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