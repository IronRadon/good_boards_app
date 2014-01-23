GoodBoardsApp.Views.SignUp = Backbone.View.extend({
	template: JST["signup"],

	events: {
		"submit form": "signUp"
	},

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	signUp: function(event) {
		var that = this;
		event.preventDefault();
		event.stopImmediatePropagation();
		var attrs = $(event.currentTarget).serializeJSON();
		console.log(attrs);
		$('#signUpModal').modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
		$.ajax({
			type: "POST",
			url: "/users",
			data: attrs,
			success: function(data){
				console.log("Signed Up");
				console.log(data);
				GoodBoardsApp.user.set(data);
				// $('#signInModal').modal('hide');
				//some weird grey stuff heres
			},
			error: function(data){
				$('.modal-backdrop').remove();
				console.log($('#signup-modal-body'))
				$('#signup-modal-body').html(data.responseText);
				$('#signUpModal').modal('toggle')
				console.log(data.responseText)

			}
		})		
	}
})