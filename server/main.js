Meteor.startup(function(){
  console.log('Server Started');

  // #Storing Data -> Adding post examples
  if(Posts.find().count() === 0) {

    console.log('Adding dummy posts');
    var dummyPosts = [
      {
        title: 'My First entry',
        slug: 'My first entry slug',
        description: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeCreated: moment().subtract(7,'days').unix(),
        author: 'John Doe'
      },
      {
        title: 'My Second entry',
        slug: 'My second entry slug',
        description: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeCreated: moment().subtract(5,'days').unix(),
        author: 'John Doe'
      },
      {
        title: 'My Third entry',
        slug: 'My Third entry slug',
        description: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeCreated: moment().subtract(3,'days').unix(),
        author: 'John Doe'
      },
      {
        title: 'My Fourth entry',
        slug: 'My Fourth entry slug',
        description: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeCreated: moment().subtract(2,'days').unix(),
        author: 'John Doe'
      },
      {
        title: 'My Fifth entry',
        slug: 'My Fifth entry slug',
        description: 'Lorem ipsum dolor sit amet.',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timeCreated: moment().subtract(1,'days').unix(),
        author: 'John Doe'
      }
    ];
    // We add the dummyPosts to our database
    _.each(dummyPosts, function(post){
      Posts.insert(post);
    });
  }
});
