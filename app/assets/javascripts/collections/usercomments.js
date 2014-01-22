GoodBoardsApp.Collections.UserComments = Backbone.Collection.extend({
	initialize: function(model, options) {
		this.user_id = options.user_id
	},

	comparator: function(comment) {
		var date = comment.get('updated_at');
		parsed = Date.parse(date);

		return -(parsed);
	},

	model: GoodBoardsApp.Models.Comment,

	url: function(){
		return "api/" + this.user_id + "/comments"
	}
})