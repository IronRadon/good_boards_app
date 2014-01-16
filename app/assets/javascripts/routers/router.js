GoodGamesApp.Routers.Router = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl; //it is 'content in this particular case'
	},

	routes: {
		"boardgames/:boardgame_id/reviews": "board"
	}
});