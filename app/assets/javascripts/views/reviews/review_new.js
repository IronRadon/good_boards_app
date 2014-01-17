GoodBoardsApp.Views.ReviewNew = Backbone.View.extend({
	template: JST["reviews/new"], //not yet created

	events: {
		"submit form": "submit" //check to make sure syntax is correct
	},

	render: function() {
		var renderedContent = this.template({
			boardgame: this.model
		});
		this.$el.html(renderedContent);

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.currentTarget).serializeJSON();
		var review = new GoodBoardsApp.Models.Review(attrs); //does this work or must we set attrs?
		review.save({}, {
			success: function() {
				Backbone.history.navigate("/", {trigger: true}); //change where it goes?
			}
		});
		
	}
})