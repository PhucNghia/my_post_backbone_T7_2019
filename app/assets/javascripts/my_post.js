window.MyPost = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    initialize: function() {
      posts = new MyPost.Routers.Posts();
      return posts.start();
    }
  };

  $(document).ready(function() {
    return MyPost.initialize();
  });
