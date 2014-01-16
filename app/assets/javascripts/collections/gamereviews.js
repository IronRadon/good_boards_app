GoodBoardsApp.Collections.GameReviews = Backbone.Collection.extend({
	initialize: function(model, options) {
		this.boardgame_id = options.boardgame_id;
	},

	model: GoodBoardsApp.Models.Review,
	url: function(){
		return "api/boardgames/" + this.boardgame_id + "/reviews"
	}
})