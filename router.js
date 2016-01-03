if(Meteor.isClient) {
  Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading',

  onAfterAction: function(){
    var data = Posts.findOne({slug: this.params.slug});

    if(_.isObject(data) && !_.isArray(data))
      document.title = 'My Meteor Blog - ' + data.title;
    else
      document.title = 'My Meteor Blog - ' + this.route.getName();
  }

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

Router.map(function() {
  this.route('Post', {
    path: '/posts/:slug',
    template: 'post',

    waitOn: function() {
      return Meteor.subscribe('single-post', this.params.slug);
    },
    data: function(){
      return Posts.findOne({slug: this.params.slug})
    }
  });
});

// Var myReactiveVar = new ReactiveVar('my initial value');

// // now we can get it in any reactive function
// myReactiveVar.get();

// // and set it, to rerun depending functions
// myReactiveVar.set('my new value');
