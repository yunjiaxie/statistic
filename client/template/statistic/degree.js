Template.degree.helpers({
	'item1': function  () {
		var data=Employees.find({degree:"学士"}).count();
		Session.set('item1',data);
		//console.log(data);
		return	data;
	},
	'item2': function () {
	 	var data=Employees.find({degree:"硕士"}).count();
	 	//console.log(data);
	 	Session.set('item2',data);
	 	return data;
	},
	'item3': function () {
	 	var data=Employees.find({degree:"博士"}).count();
	 	//console.log(data);
	 	Session.set('item3',data);
	 	return data;
	},
	'item4': function () {
	 	var data=Employees.find({degree:"双学士"}).count();
	 	//console.log(data);
	 	Session.set('item4',data);
	 	return data;
	},
	'item5': function () {
	 	var data=Employees.find({degree:"无"}).count();
	 	//console.log(data);
	 	Session.set('item5',data);
	 	return data;
	},
	'total': function(){
		var item1=Session.get('item1');
		var item2=Session.get('item2');
		var item3=Session.get('item3');
		var item4=Session.get('item4');
		var item5=Session.get('item5');
		var total=item1+item2+item3+item4+item5;
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
	'totalRate': function(){
		return '100.00%'
	}
})