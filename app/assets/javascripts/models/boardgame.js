GoodBoardsApp.Models.Boardgame = Backbone.Model.extend({
	initialize: function(model, options){
		this.boardgame_id = options.boardgame_id;
	},

	parse: function (data) {
	  var reviews = data.reviews;
		data.reviews = new GoodBoardsApp.Collections.GameReviews(reviews, {
			boardgame_id: data.id
		});
		return data;
	},

	url: function(){
		return 'api/boardgames/' + this.boardgame_id
	}
})