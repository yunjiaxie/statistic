Meteor.publish("Divisions", function (userId) {
  //check(userId, String);
  var divi= Offices.find({createdBy: userId},{fields: {
    innerDivi: true,
    createdBy: true,
    name: true
  }});
  return divi;
});

Meteor.publish("empl_sex", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {sex: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_degree", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {degree: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_qualification", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {qualification: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_qualiType", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {qualiType: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_personType", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {personType: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_positionType", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {positionType: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_dutyLevel", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {dutyLevel: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_proTitle", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {proTitle: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_proTitleLevel", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {proTitleLevel: true}});
  //var data= Employees.find();
  return data;
});
Meteor.publish("empl_teacherType", function () {
  //check(userId, String);
  var data= Employees.find({},{fields: {teacherType: true}});
  //var data= Employees.find();
  return data;
});