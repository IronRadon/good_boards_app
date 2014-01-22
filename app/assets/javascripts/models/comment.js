GoodBoardsApp.Models.Comment = Backbone.Model.extend({

	parse: function (data) {
	  var user = data.user;
		data.user = new GoodBoardsApp.Models.User(user, {
			id: data.user_id
		});
		return data;
	},

	url: function() {
		if(this.id) {
			return "api/comments/" + this.id
		}else{
			return "api/comments"
		}
	}
})