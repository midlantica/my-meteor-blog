// Template.home.created = function(){
//   console.log('Created the Home template');
// };

// Template.home.rendered = function(){
//   console.log('Rendered the Home template');

//   // this.$('p').html('We just replaced that text!');
// };

// Template.home.destroyed = function(){
//   console.log('Destroyed the Home template');
// };

Template.home.helpers({
  // Other helpers...
  postsList: function(){
    return Posts.find({}, {sort: {timeCreated:-1}});
  },
  sessionExample: function(){
    return Session.get('mySessionExample');
  }
});

Template.home.events({
  'click button.lazyload': function(e,template){
    var currentLimit = Session.get('lazyloadLimit');
    Session.set('lazyloadLimit', currentLimit + 2);
  }
});
