GoodBoardsApp.Models.Boardgame = Backbone.Model.extend({
	initialize: function(model, options){
		this.boardgame_id = options.boardgame_id;
	},

	url: function(){
		return 'api/boardgames/' + this.boardgame_id
	}
})