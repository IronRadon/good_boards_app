GoodBoardsApp.Models.Review = Backbone.Model.extend({

	parse: function (data) {
	  var user = data.user;
	  var boardgame = data.boardgame;
		data.user = new GoodBoardsApp.Models.User(user, {
			user_id: data.id
		});
		data.boardgame = new GoodBoardsApp.Models.Boardgame(boardgame, {
			boardgame_id: data.id
		});
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