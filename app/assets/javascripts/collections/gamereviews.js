GoodBoardsApp.Collections.GameReviews = Backbone.Collection.extend({
	initialize: function(model, options) {
		this.boardgame_id = options.boardgame_id;
	},

	comparator: function(review) {
		var date = review.get('updated_at');
		parsed = Date.parse(date);

		return -(parsed);
	},

	model: GoodBoardsApp.Models.Review,

	url: function(){
		return "api/boardgames/" + this.boardgame_id + "/reviews"
	}
})