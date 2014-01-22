GoodBoardsApp.Models.Review = Backbone.Model.extend({

	parse: function (data) {
	  var user = data.user;
	  var boardgame = data.boardgame;
	  var comments = data.comments;
		data.user = new GoodBoardsApp.Models.User(user, {  // refactor to pull the information out of the attributes
			id: data.user_id
		});
		data.boardgame = new GoodBoardsApp.Models.Boardgame(boardgame, {
			id: data.boardgame_id
		});
		data.comments = new GoodBoardsApp.Collections.Comments(comments, {
			review_id: data.id,
			parse: true
		})
		return data;
	},

	urlRoot: 'api/reviews'
});