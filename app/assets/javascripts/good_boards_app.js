window.GoodBoardsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new GoodBoardsApp.Routers.Router({$rootEl: $('#content')});
    Backbone.history.start();
  }
};


