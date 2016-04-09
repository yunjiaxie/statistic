Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            username: username,
            password: password
        });
        //Meteor.loginWithPassword(username, password);
        Tracker.autorun(function () {
            var currentUser=Meteor.user();
            Router.go('office');
        });      
    }
});
