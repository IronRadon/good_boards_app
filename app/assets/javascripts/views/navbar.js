GoodBoardsApp.Views.NavBar = Backbone.View.extend({
	initialize: function(options) {
		this.listenTo(GoodBoardsApp.user, "all", this.render)
	},

	events: {		
		"click a#sign-out":"signOut"
	},

	template: JST["navbar"],

	render: function(){
		$('#signInModal').modal('hide');

		var renderedContent = this.template({
			current_user: GoodBoardsApp.user
		});
		this.$el.html(renderedContent);

		var signInView = new GoodBoardsApp.Views.SignIn();
		this.$('#sign-in-modal').html(signInView.render().el);
		//appending also does not work

		return this;
	},

	signOut: function(){
		$.ajax({
			type: "DELETE",
			url: "/session",
			success: function(){
				alert("GOOD TIMES")
				GoodBoardsApp.user.clear();
				console.log(GoodBoardsApp.user)
			},
			error: function(){
				alert("BAD TIMES")
			}
		})		
	}
})