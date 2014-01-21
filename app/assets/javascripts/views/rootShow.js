GoodBoardsApp.Views.RootShow = Backbone.View.extend({
	template: JST["root"],

	render: function(){
		var renderedContent = this.template({
			boardgames: this.collection
		});
		this.$el.html(renderedContent);
		return this;
	}
})