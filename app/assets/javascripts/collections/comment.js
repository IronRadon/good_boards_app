GoodBoardsApp.Collections.Comments = Backbone.Collection.extend({
	initialize: function(model, options) {
		this.review_id = options.review_id
	},

	comparator: function(comment) {
		var date = comment.get('updated_at');
		parsed = Date.parse(date);

		return -(parsed);
	},

	model: GoodBoardsApp.Models.Comment,

	url: function(){
		return "api/" + this.review_id + "/comments"
	}
})