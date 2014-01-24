GoodBoardsApp.Views.NavBar = Backbone.View.extend({
	initialize: function(options) {
		this.listenTo(GoodBoardsApp.user, "all", this.render)
	},

	events: {		
		"click a#sign-out":"signOut"
	},

	template: JST["navbar"],

	render: function(){
		$('#signInModal').modal('hide');

		var renderedContent = this.template({
			current_user: GoodBoardsApp.user
		});
		this.$el.html(renderedContent);

		$('input#search').typeahead({
                name: 'boardgames',
                valueKey: 'title',
                prefetch: {
                  url: '/api/boardgames/prefetch.json',
            
                  filter: function(data) {
                    retval = [];
                    for (var i = 0;  i < data.length;  i++) {
                            retval.push({
                                    id: data[i].id,
                                    title: data[i].title
                              });
                    }
                      return retval;
                  } 
                }
              });

            $('input#search').on('typeahead:selected', function (object, datum) {
             console.log(datum);
             window.location.href = '/#boardgames/' + datum.id;
             });

            $("input#search").on("keypress", function(event) {
              if(event.which == 13) {
                event.preventDefault();
                window.location.href= '/#boardgames/' + ($("input#search").val());
            }
			
        });

		var signInView = new GoodBoardsApp.Views.SignIn();
		this.$('#sign-in-modal').html(signInView.render().el);
		//appending also does not work

		var signUpView = new GoodBoardsApp.Views.SignUp();
		this.$('#sign-up-modal').html(signUpView.render().el);

		return this;
	},

	signOut: function(){
		$.ajax({
			type: "DELETE",
			url: "/session",
			success: function(){
				GoodBoardsApp.user.clear();
			},
			error: function(){
			}
		})		
	}
})