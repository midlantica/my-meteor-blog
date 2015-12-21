Template.home.created = function(){
  console.log('Created the Home template');
};

Template.home.rendered = function(){
  console.log('Rendered the Home template');

  // this.$('p').html('We just replaced that text!');
};

Template.home.destroyed = function(){
  console.log('Destroyed the Home template');
};

Template.home.helpers({
  exampleHelper: function(){
    return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
  },
  dataContextHelper: function(){
    return {
      someText: 'This text was set using a helper of the parent template.',
      someNested: {
          text: 'That comes from the "someNested.text"'
      }
    };
  }
});
