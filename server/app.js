Meteor.startup(function () {
  if (Posts.find().count() === 0) {
    var posts = [
      {'title': 'Sample Title', 'body': 'Very first Meteor App.'}
    ];

    for (var i = 0; i < posts.length; i++) {
      Posts.insert(posts[i]);
    }
  }
});
