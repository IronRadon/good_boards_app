GoodBoardsApp.Views.NavBar = Backbone.View.extend({
	template: JST["navbar"],

	render: function(){
		var current_user_id = JSON.parse($("#bootstrapped-current-user-id").html()).current_user_id
		var renderedContent = this.template({
			current_user_id: current_user_id
		});
		this.$el.html(renderedContent);

		return this;
	}
})