


/*Template.changePassword.onRendered(function () {
    Tracker.autorun(function () {
      var val1= $('[name=oldPassword]').val();
      var val2= $('[name=newPassword]').val();
      if (val1!="" || val2!="") {
        $("input").val('');
      };
    });
    
});*/


Template.changePassword.helpers({
    'currentUsername': function(){
        return Meteor.user().username;
        console.log
    }
});

Template.changePassword.events({
    'submit form': function(event){
        event.preventDefault();
        var oldPassword = $('[name=oldPassword]').val();
        var newPassword = $('[name=newPassword]').val();
        Accounts.changePassword(oldPassword, newPassword, function (error) {
          if (error) {
            throwError(error.reason);
            alert("密码修改失败");
          } else {
            alert("密码修改成功, 请重新登录");
            Meteor.logout();
            Router.go('/login'); //修改成功后，没有跳到login,还在"/"
          }
        })
    }
});