Template.sex.helpers({
	'woman': function  () {
		var data=Employees.find({sex:"女"}).count();
		Session.set('item1',data);
		//console.log(data);
		return	data;
	},
	'man': function () {
	 	var data=Employees.find({sex:"男"}).count();
	 	//console.log(data);
	 	Session.set('item2',data);
	 	return data;
	},
	'total': function(){
		var item1=Session.get('item1');
		var item2=Session.get('item2');
		var total=item1+item2;
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
	'totalRate': function(){
		return '100.00%'
	}
})