MyPost.Collections.Posts = Backbone.Collection.extend({
  model: MyPost.Models.Post,
  url: 'api/v1/posts'
});
