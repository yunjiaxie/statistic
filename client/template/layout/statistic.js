$("#personType").find("option:selected").text()

Template.statistic.helpers({
	'selectTemplate': function(){
		return Session.get('successSubItem');
	}
});

Template.statistic.events({
	'click #btnStatistic': function () {
		event.preventDefault();
		var selectedItem= $("#selectItem").find("option:selected").val();
		Meteor.subscribe('empl_'+selectedItem,function(error){
			if (error) {
				alert(error);
			}else{
				Session.set('successSubItem',selectedItem);
				//console.log('successSubItem'+Session.get('successSubItem'));
			}
		});

	}
});