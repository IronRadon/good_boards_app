GoodBoardsApp.Views.BoardgameBestWorst = Backbone.View.extend({
	initialize: function(options) {
		this.marker = options.marker;
		this.collection = options.collection;
	},

	template: JST["boardgames/best_worst"],

	render: function(){
		var that = this;
		var renderedContent = this.template({
			boardgames: this.collection,
			marker: this.marker //best or worst games 
		});

		this.$el.html(renderedContent);

		this.collection.each(function(boardgame){
			var view = new GoodBoardsApp.Views.ListView({
				model: boardgame
			});
			that.$('.embedded#'+boardgame.get('id')).html(view.render().$el)
		})
		return this;
	}

});