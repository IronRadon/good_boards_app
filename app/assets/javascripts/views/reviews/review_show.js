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
		var that = this;
		var renderedContent = this.template({
			review: this.review,
			user: this.review.get('user')
		});
		this.$el.html(renderedContent);

		var current_user_id = JSON.parse($("#bootstrapped-current-user-id").html()).current_user_id;

		var user_match = function() {         //candidate for refactoring
			if (current_user_id === that.review.get('user_id')) {
				return false
			}else{
				return true
			}
		}

		this.$('#star').raty({
    				readOnly: user_match(),
    				score: this.review.get('rating'),
    				path: '/assets',
    				click: function(score, event) {
						event.preventDefault();
						var YN = confirm("YOU DONE CLICKED, SON");
						console.log(score)

						if (YN === true) {
							that.review.set({
								// id: that.review.get('id'),
								rating: score
							});
							console.log("i'm saving")
							that.review.save({}, {
								success: function() {
									console.log("i saved");
									// this should trigger a change event
									// that.review.get('boardgame').set({
									// 	rating:score
									// }, {
									// 	success: function() {
									// 		alert('boardgame is set')
									// 	}
									// });
									console.log(that.review.get('boardgame'))
								}
							});
						}
					}	
  				});

		var embeddedview = new GoodBoardsApp.Views.BoardgameEmbedShow({
			model: this.review.get('boardgame'),
			parent: this.review
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