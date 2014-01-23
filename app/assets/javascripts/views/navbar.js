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

		var signUpView = new GoodBoardsApp.Views.SignUp();
		this.$('#sign-up-modal').html(signUpView.render().el);

		return this;
	},

	signOut: function(){
		$.ajax({
			type: "DELETE",
			url: "/session",
			success: function(){
				GoodBoardsApp.user.clear();
			},
			error: function(){
			}
		})		
	}
})