GoodBoardsApp.Views.RootShow = Backbone.View.extend({
	template: JST["root"],

	render: function(){
		var renderedContent = this.template({
			boardgames: this.collection.shuffle() //this is super jank fix later in fetch
		});

		this.$el.html(renderedContent);

	   

		
		
		return this;
	}
})