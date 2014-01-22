GoodBoardsApp.Views.NavBar = Backbone.View.extend({
	template: JST["navbar"],

	events: {

	},

	render: function(){
		var current_user_id = JSON.parse($("#bootstrapped-current-user-id").html()).current_user_id
		var renderedContent = this.template({
			current_user_id: current_user_id
		});
		this.$el.html(renderedContent);

		return this;
	},

	signIn: function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		var attrs = $(event.currentTarget).serializeJSON();
		console.log(attrs);

		$.ajax({
			type: "POST",
			url: "/session",
			data: attrs,
			success: function(){
				alert("GOOD TIMES")
			},
			error: function(){
				alert("BAD TIMES")
			}
		})		
	}
})