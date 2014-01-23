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


		var user_match = function() {         //candidate for refactoring
			if (GoodBoardsApp.user.get('id') === that.review.get('user_id')) {
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
								success: function(review) {
									console.log("i saved");
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
		var attrs = $(event.currentTarget).serializeJSON().comment;
		attrs.review_id = this.review.get('id');
		$('#comment-body').val("");
		comment = new GoodBoardsApp.Models.Comment(attrs);

		var view = this;
		comment.save({}, {
			success: function () {
				view.review.get("comments").add(comment);
			}
		});
		// this.review.get('comments').create(comment, {wait: true});
	}
});