Accounts.config({
  forbidClientAccountCreation: true
});

if(Meteor.users.find().count() === 0) {
  var userId = Accounts.createUser({
    username: 'johndoe',
    email: 'john@doe.com',
    password: '1234',
    profile: {
      name: 'John Doe'
    }
  });
}

// add the roles to our user
Meteor.users.update(userId, {$set: {
  roles: {admin: true},
}})


if(Meteor.isClient){
  Meteor.subscribe("userRoles");

  // ReactiveTimer = new Tracker.Dependency;

  // Meteor.setInterval(function(){
  //   // re-run dependencies every 10s
  //   ReactiveTimer.changed();
  // }, 10000 );

  // Tracker.autorun(function(){
  //   ReactiveTimer.depend();
  //   console.log('Function re-run every 10 seconds');
  // });

}
