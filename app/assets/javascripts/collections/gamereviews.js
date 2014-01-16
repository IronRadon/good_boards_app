GoodBoardsApp.Collections.GameReviews = Backbone.Colletion.extend({
	initialize: function(model, options) {
		this.boardgame_id = options.boardgame_id;
	},

	model: GoodBoardsApp.Models.Review,
	url: "api/boardgames/" + this.boardgame_id + "/reviews"
})