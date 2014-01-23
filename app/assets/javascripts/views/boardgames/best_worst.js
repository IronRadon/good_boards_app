GoodBoardsApp.Views.BoardgameBestWorst = Backbone.View.extend({
	initialize: function() {
	},

	template: JST["boardgames/best_worst"],

	render: function(){
		console.log('got here')
		var renderedContent = this.template({
			boardgames: this.collection //best or worst games 
		});

		this.$el.html(renderedContent);

		return this;
	}
});