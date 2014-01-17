GoodBoardsApp.Views.ReviewNew = Backbone.View.extend({
	template: JST["reviews/new"],

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
		var review = new GoodBoardsApp.Models.Review(attrs);
		console.log(attrs);
		review.save({}, {
			success: function() {
				Backbone.history.navigate("#reviews/"+review.get('id'), {trigger: true}); //change where it goes?
			}
		});
		
	}
})