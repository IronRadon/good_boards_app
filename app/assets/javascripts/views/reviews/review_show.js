GoodBoardsApp.Views.ReviewShow = Backbone.View.extend({
	initialize: function(options){
		this.review = options.model;
		this.listenTo(this.review.get('comments'), "all", this.render);
	},

	template: JST["reviews/show"],

	events: {
		"submit form" :"submit"
	},

	render: function(){
		var renderedContent = this.template({
			review: this.review,
			user: this.review.get('user')
		});
		this.$el.html(renderedContent);
		this.$('#star').raty({
    				readOnly: false,
    				score: this.review.get('rating'),
    				path: '/assets'
  				});

		var embeddedview = new GoodBoardsApp.Views.BoardgameEmbedShow({
			model: this.review.get('boardgame')
		});
		this.$('#boardgame-info').html(embeddedview.render().$el);
		 //  this.$(".wrapper-test").dotdotdot({
	  // 	ellipsis: "... ",
	  // 	height: 100,
	  // 	watch: true,
	  // 	wrap: 'letter',
	  // 	after: "a.readmore"
	  // })

		return this;
	},

	submit: function(event) {
		event.preventDefault();
		var attrs = $(event.currentTarget).serializeJSON();
		attrs.comment.review_id = this.review.get('id');
		$('#comment-body').val("")
		comment = new GoodBoardsApp.Models.Comment(attrs);
		this.review.get('comments').create(comment);
	}
});