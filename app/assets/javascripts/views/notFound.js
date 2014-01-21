GoodBoardsApp.Views.NotFound = Backbone.View.extend({
	template: JST["404"],

	render: function(){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this
	}
})

