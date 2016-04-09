Router.configure({

  layoutTemplate: 'main',
  loadingTemplate: 'loading'
 
});

var requireLogin = function(){
  var currentUser = Meteor.userId();
  if(currentUser){
      this.next();
  } else {
      Router.go('login', {}, {
      query: 'redirect=' + Router.current().route.getName()
    });
  }
};
var requireAdmin = function() {
  if (Meteor.user().username==="admin") {
    this.next();
  } else {
    alert('请先用admin帐号登录！');
      Router.go('login', {}, {
      query: 'redirect=' + Router.current().route.getName()
    });
  }
};

Router.onBeforeAction(requireLogin, { except: ['login','register','changePassword'] });
Router.onBeforeAction(requireAdmin, { only: ['statistic'] });


Router.route('/login', {
  name:'login',
  action:function() {
    this.render('login')
  }
});
Router.route('/register', {
  name:'register',
  action:function() {
    this.render('register')
  }
});
Router.route('/changePassword', {
  name:'changePassword',
  action:function() {
    this.render('changePassword')
  }
});
Router.route('/', {
  name:'office',
  action:function() {
    this.render('office')
  }
});
Router.route('/stuffInfo', {
  name:'stuffInfo',
  waitOn: function() {
    var userId = Meteor.userId();
    Meteor.subscribe('Divisions', userId)
  },
  action:function() {
    console.log('user:'+Meteor.userId());
    //console.log('shoudongfind:'+Offices.find({createdBy: Meteor.userId()}).fetch());
    var data = Offices.find({createdBy: Meteor.userId()}).fetch()[0].innerDivi;
    console.log(data);
    this.render('stuffInfo', {data: {divisions: data}})
  }
});
Router.route('/statistic', {
  name:'statistic',
  waitOn: function() {
    
  },
  action:function() {
    var selectTable= Session.get('successSubItem');
    this.render('statistic');
    this.render(selectTable, {to: 'staticTable'});
  }
});


