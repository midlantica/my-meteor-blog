if(Meteor.isClient) {
  Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.map(function() {
  this.route('Home', {
    path: '/',
    template: 'home',
    subscriptions: function() {
      return Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
    }
  });
});

Router.map(function() {
  this.route('About', {
    path: '/about',
    template: 'about'
  });
});
