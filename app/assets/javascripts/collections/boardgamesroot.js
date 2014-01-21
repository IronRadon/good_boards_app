GoodBoardsApp.Collections.BoardgamesRoot = Backbone.Collection.extend({
	url: "/api/boardgames",

	model: GoodBoardsApp.Models.Boardgame
});