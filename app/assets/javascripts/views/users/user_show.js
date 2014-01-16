GoodBoardsApp.Views.UserShow = Backbone.View.extend({
	template: JST["users/show"],  //must make template

	render: function() {
		var renderedContent = this.template({
			user: this.model,
			reviews: this.collection 
		});
		this.$el.html(renderedContent);

		return this;
	}
})