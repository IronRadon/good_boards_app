GoodBoardsApp.Views.ListView = Backbone.View.extend({
	template: JST["boardgames/list_view"],

	render:function() {
		var renderedContent = this.template({
			boardgame: this.model
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