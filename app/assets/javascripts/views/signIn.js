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
		var that = this;
		event.preventDefault();
		event.stopImmediatePropagation();
		var attrs = $(event.currentTarget).serializeJSON();
		console.log(attrs);
		$('#signInModal').modal('hide');
		$.ajax({
			type: "POST",
			url: "/session",
			data: attrs,
			success: function(data){
				console.log("Signed In");
				console.log(data);
				GoodBoardsApp.user.set(data);
				// $('#signInModal').modal('hide');
				//some weird grey stuff here
			},
			error: function(){
				alert("BAD TIMES")
			}
		})		
	}
})