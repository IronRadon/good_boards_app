GoodBoardsApp.Models.Boardgame = Backbone.Model.extend({

	parse: function (data) {
	  var reviews = data.reviews;
		data.reviews = new GoodBoardsApp.Collections.GameReviews(reviews, {
			boardgame_id: data.id
		});
		return data;
	},

	urlRoot: 'api/boardgames'

})