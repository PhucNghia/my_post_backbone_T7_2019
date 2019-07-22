MyPost.Models.Post = Backbone.Model.extend({
  initialize: function(options) {
    // this.url = Routes.api_v1_posts_path();
  },

  toJSON: function() {
    return {organization: this.attributes};
  }
});
