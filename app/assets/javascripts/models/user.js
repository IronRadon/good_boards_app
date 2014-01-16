GoodBoardsApp.Models.User = Backbone.Model.extend({
	initialize: function(models, options) {
		this.user_id = options.user_id
		console.log(this.user_id);
	},

	url: function(){
		return 'api/users/' + this.user_id
	}
})