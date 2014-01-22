GoodBoardsApp.Views.BoardgameEmbedShow = Backbone.View.extend({
	initialize: function(options){
		this.parent = options.parent;
		// this listens to "itself" via the review
		this.listenTo(this.parent, "change", this.render);
	},


	template: JST["boardgames/embedded_show"],

	render: function() {		
		var renderedContent = this.template({
			boardgame: this.parent.get('boardgame')
			// maxLength: 500
		});

		this.$el.html(renderedContent);

		this.$('#star').raty({
    				readOnly: true,
    				score: this.parent.get('boardgame').get('rating'), //this.model.get('rating')
    				path: '/assets'
  				});
		return this;
	}
})