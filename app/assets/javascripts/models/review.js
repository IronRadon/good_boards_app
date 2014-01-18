GoodBoardsApp.Models.Review = Backbone.Model.extend({

	parse: function (data) {
	  var user = data.user;
	  var boardgame = data.boardgame;
	  var comments = data.comments;
		data.user = new GoodBoardsApp.Models.User(user, {
			id: user.id
		});
		data.boardgame = new GoodBoardsApp.Models.Boardgame(boardgame, {
			id: boardgame.id
		});
		data.comments = new GoodBoardsApp.Collections.Comments(comments, {
			review_id: data.id
		})
		return data;
	},

	url: function(){
		if(this.id){
			return 'api/reviews/' + this.id	
		} else {
			return 'api/reviews'
		}	
	}
});