GoodBoardsApp.Models.Review = Backbone.Model.extend({
	initialize: function(models, options) {
		this.id = options.id
	},

	url: function(){
		return 'api/reviews/' + this.id
	}
});