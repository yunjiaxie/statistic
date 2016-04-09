// Run this when the meteor app is started
Meteor.startup(function() {
  console.log(Meteor.users.find().count());
  if (Meteor.users.find().count() === 0) {
    // when the users collection is emtpy, create a site admin account
     Accounts.createUser({
          username: 'admin',
          password: '123'
      });
     console.log(Meteor.users.find().count());
  }
});
