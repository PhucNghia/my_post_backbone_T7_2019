MyPost.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
  },

  render: function() {
    return this.$el.html(this.template({posts: this.collection.models}));
  }
});
