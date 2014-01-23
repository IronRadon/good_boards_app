GoodBoardsApp.Views.SignIn = Backbone.View.extend({
	template: JST["signIn"],

	events: {
		"submit form": "signIn"
	},

	render: function(){
		var renderedContent = this.template();
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
				console.log("Signed In")
			},
			error: function(){
				alert("BAD TIMES")
			}
		})		
	}
})