MyPost.Views.PostsIndex = Backbone.View.extend({
  template: JST['organizations/index'],

  events: {},

  render: function() {
    // $('.nav-item .nav-link').removeClass('active');
    // $('.organization-nav-link').addClass('active');

    // var plans = Constants.ADMIN_FILTER_PLANS;
    // this.$el.html(this.template({planOptions: plans, displayOptions: Constants.DISPLAY_OPTIONS}));
    // this.listOrganizations = new Jooto.Collections.AdminOrganizations({url: Routes.admin_organizations_path()});
    // this.listOrganizations.perPage = Constants.PER_PAGE;
    // this.listOrganizations.fetch({reset: true});

    // // Render Organization List View
    // var organizationsListView = new Jooto.Views.OrganizationsList({el: '#organizations-list', collection: this.listOrganizations});

    // // Render Pagination View for Board List
    // var organizationsPaginator = new Jooto.Views.Paginator({collection: this.listOrganizations, model: I18n.t('js.common.organizations')});
  }
});