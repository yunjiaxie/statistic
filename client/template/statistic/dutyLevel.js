Template.dutyLevel.helpers({
	'item1': function  () {
		var data=Employees.find({dutyLevel:"三级职员"}).count();
		Session.set('item1',data);
		//console.log(data);
		return	data;
	},
	'item2': function () {
	 	var data=Employees.find({dutyLevel:"四级职员"}).count();
	 	//console.log(data);
	 	Session.set('item2',data);
	 	return data;
	},
	'item3': function () {
	 	var data=Employees.find({dutyLevel:"五级职员"}).count();
	 	//console.log(data);
	 	Session.set('item3',data);
	 	return data;
	},
	'item4': function () {
	 	var data=Employees.find({dutyLevel:"六级职员"}).count();
	 	//console.log(data);
	 	Session.set('item4',data);
	 	return data;
	},
	'item5': function () {
	 	var data=Employees.find({dutyLevel:"七级职员"}).count();
	 	//console.log(data);
	 	Session.set('item5',data);
	 	return data;
	},
	'item6': function () {
	 	var data=Employees.find({dutyLevel:"八级职员"}).count();
	 	//console.log(data);
	 	Session.set('item6',data);
	 	return data;
	},
	'item7': function () {
	 	var data=Employees.find({dutyLevel:"九级职员"}).count();
	 	//console.log(data);
	 	Session.set('item7',data);
	 	return data;
	},
	'item8': function () {
	 	var data=Employees.find({dutyLevel:"十级职员"}).count();
	 	//console.log(data);
	 	Session.set('item8',data);
	 	return data;
	},
	'total': function(){
		var item1=Session.get('item1');
		var item2=Session.get('item2');
		var item3=Session.get('item3');
		var item4=Session.get('item4');
		var item5=Session.get('item5');
		var item6=Session.get('item6');
		var item7=Session.get('item7');
		var item8=Session.get('item8');
		var total=item1+item2+item3+item4+item5+item6+item7+item8;
		Session.set('total',total)
		return total;
	},
	'itemRate1': function(){
		var item1=Session.get('item1');
		var total=Session.get('total');
		return (Math.round(item1 / total * 10000) / 100 + "%");

	},
	'itemRate2': function(){
		var item2=Session.get('item2');
		var total=Session.get('total');
		return (Math.round(item2 / total * 10000) / 100 + "%");

	},
	'itemRate2': function(){
		var item2=Session.get('item2');
		var total=Session.get('total');
		return (Math.round(item2 / total * 10000) / 100 + "%");

	},
	'itemRate3': function(){
		var item3=Session.get('item3');
		var total=Session.get('total');
		return (Math.round(item3 / total * 10000) / 100 + "%");

	},
	'itemRate4': function(){
		var item4=Session.get('item4');
		var total=Session.get('total');
		return (Math.round(item4 / total * 10000) / 100 + "%");

	},
	'itemRate5': function(){
		var item5=Session.get('item5');
		var total=Session.get('total');
		return (Math.round(item5 / total * 10000) / 100 + "%");

	},
	'itemRate6': function(){
		var item6=Session.get('item6');
		var total=Session.get('total');
		return (Math.round(item6 / total * 10000) / 100 + "%");

	},
	'itemRate7': function(){
		var item7=Session.get('item7');
		var total=Session.get('total');
		return (Math.round(item7 / total * 10000) / 100 + "%");

	},
	'itemRate8': function(){
		var item8=Session.get('item8');
		var total=Session.get('total');
		return (Math.round(item8 / total * 10000) / 100 + "%");

	},
	'totalRate': function(){
		return '100.00%'
	}
})