GoodBoardsApp.Collections.Comments = Backbone.Collection.extend({
	initialize: function(model, options) {
		this.review_id = options.review_id
	},

	model: GoodBoardsApp.Models.Comment,

	url: function(){
		return "api/" + this.review_id + "/comments"
	}
})