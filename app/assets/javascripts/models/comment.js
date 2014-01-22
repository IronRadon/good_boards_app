GoodBoardsApp.Models.Comment = Backbone.Model.extend({

	parse: function (data) {
	  var user = data.user;
		data.user = new GoodBoardsApp.Models.User(user);
		return data;
	},
	urlRoot: 'api/comments'
})