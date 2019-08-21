MyPost.Models.Post = Backbone.Model.extend({
  initialize: function(options) {
    this.url = 'api/v1/posts';
  }
});
