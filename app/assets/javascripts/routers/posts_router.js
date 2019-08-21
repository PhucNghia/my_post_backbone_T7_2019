MyPost.Routers.Posts = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function() {
    this.collection = new MyPost.Collections.Posts();
    this.collection.fetch({reset: true});

    this.postIndexView = new MyPost.Views.PostsIndex({el: '#container', collection: this.collection});
  },

  start: function() {
    Backbone.history.start();
  }
});
  ostsoutes