GoodBoardsApp.Views.SignIn = Backbone.View.extend({
	template: JST["signIn"],

	events: {
		"submit form": "signIn"
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		var signInView = new GoodBoardsApp.Views.SignIn();
		this.$el.append(signInView.render().$el);

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