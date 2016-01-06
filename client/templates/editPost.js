
Session.setDefault('saveButton', 'Save Post');
Template.editPost.helpers({
  saveButtonText: function(){
    return Session.get('saveButton')
  }
})

Template.editPost.events({
  'submit form': function(e, tmpl){
    e.preventDefault();
    var form = e.target,
        _this = this, // we need this reference the slug in the callback
        user = Meteor.user();

    // Edit the Post
    if(this._id) {

      Posts.update(this._id, {$set: {
        title:       form.title.value,
        description: form.description.value,
        text:        form.text.value

      }}, function(error) {
        if(error) {
          // display the error to the user
          alert(error.reason);
        } else {
          // Redirect to Post
          Router.go('Post', {slug: _this.slug});
        }
      });

    } else {

      var slug = _.slugify(form.title.value);

      // SAVE
      // Posts.insert({
      //   title:          form.title.value,
      //   slug:           slug,
      //   description:    form.description.value,
      //   text:           form.text.value,
      //   timeCreated:    moment().unix(),
      //   author:         user.profile.name,
      //   owner:          user._id

      // }, function(error) {
      //   if(error) {
      //     // display the error to the user
      //     alert(error.reason);
      //   } else {
      //     // Redirect to the post
      //     Router.go('Post', {slug: slug});
      //   }
      // });

      Meteor.call('insertPost', {
        title:          form.title.value,
        slug:           slug,
        description:    form.description.value,
        text:           form.text.value,
      }, function(error, slug){
          Session.set('saveButton', 'Save Post');
          if(error) {
            return alert(error.reason);
          }

          // Here we use the probably changed slug from the server side method
          Router.go('Post', {slug: slug});
      });
    }
  }
});

