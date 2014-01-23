GoodBoardsApp.Views.NavBar = Backbone.View.extend({
	initialize: function(options) {
		// listenTo(???, ????, this.render)
	},

	events: {		
		"click a#sign-out":"signOut"
	},

	template: JST["navbar"],

	render: function(){
		var renderedContent = this.template({
			current_user: GoodBoardsApp.user
		});
		this.$el.html(renderedContent);

		var signInView = new GoodBoardsApp.Views.SignIn();
		this.$el.append(signInView.render().$el);

		return this;
	},

	signOut: function(){
		$.ajax({
			type: "DELETE",
			url: "/session",
			success: function(){
				alert("GOOD TIMES")
			},
			error: function(){
				alert("BAD TIMES")
			}
		})		
	}
})