if(Meteor.isClient){

// Session.setDefault('mySessionExample', 'Duuuuuude')

  // Tracker.autorun(function(c){
  //   var example = Session.get('mySessionExample');

  //   if(!c.firstRun){
  //     if(Session.equals('mySessionExample', 'stop')) {
  //       alert('We stopped our reactive Function');
  //       c.stop();
  //     } else {
  //       alert(example);
  //     }
  //   }
  // });

  Template.home.created = function(){
    this.autorun(function(){
      alert(Session.get('mySessionExample'));
    });
  }


}
