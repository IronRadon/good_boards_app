GoodBoardsApp.Collections.BoardgamesRoot = Backbone.Collection.extend({
	url: "/api/boardgames",

	model: GoodBoardsApp.Models.Boardgame
});

GoodBoardsApp.Collections.BoardgamesTop = Backbone.Collection.extend({
	url: "/api/boardgames/top",

	model: GoodBoardsApp.Models.Boardgame
});

GoodBoardsApp.Collections.BoardgamesWorst = Backbone.Collection.extend({
	url: "/api/boardgames/worst",

	model: GoodBoardsApp.Models.Boardgame
});