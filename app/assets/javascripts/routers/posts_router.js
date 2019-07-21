MyPost.Routers.Posts = Backbone.Router.extend({
  routes: {
    '': 'index',
  },

  index: function() {
    // var organizationsIndexView = new Jooto.Views.OrganizationsIndex({el: '#organizations-content'});
    // organizationsIndexView.render();
    alert('index');
    var postIndexView = new MyPost
  },

  start: function() {
    Backbone.history.start();
  }
});
