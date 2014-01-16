GoodBoardsApp.Views.ReviewShow = Backbone.View.extend({
	template: JST["reviews/show"],

	render: function(){
		var renderedContent = this.template({
			review: this.model
		});
		this.$el.html(renderedContent);

		return this;
	}
});