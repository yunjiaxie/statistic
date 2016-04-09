Template.proTitleLevel.helpers({
	'item1': function  () {
		var data=Employees.find({proTitleLevel:"专技二级"}).count();
		Session.set('item1',data);
		//console.log(data);
		return	data;
	},
	'item2': function () {
	 	var data=Employees.find({proTitleLevel:"专技三级"}).count();
	 	//console.log(data);
	 	Session.set('item2',data);
	 	return data;
	},
	'item3': function () {
	 	var data=Employees.find({proTitleLevel:"专技四级"}).count();
	 	//console.log(data);
	 	Session.set('item3',data);
	 	return data;
	},
	'item4': function () {
	 	var data=Employees.find({proTitleLevel:"专技五级"}).count();
	 	//console.log(data);
	 	Session.set('item4',data);
	 	return data;
	},
	'item5': function () {
	 	var data=Employees.find({proTitleLevel:"专技六级"}).count();
	 	//console.log(data);
	 	Session.set('item5',data);
	 	return data;
	},
	'item6': function () {
	 	var data=Employees.find({proTitleLevel:"专技七级"}).count();
	 	//console.log(data);
	 	Session.set('item6',data);
	 	return data;
	},
	'item7': function () {
	 	var data=Employees.find({proTitleLevel:"专技八级"}).count();
	 	//console.log(data);
	 	Session.set('item7',data);
	 	return data;
	},
	'item8': function () {
	 	var data=Employees.find({proTitleLevel:"专技九级"}).count();
	 	//console.log(data);
	 	Session.set('item8',data);
	 	return data;
	},
	'item9': function () {
	 	var data=Employees.find({proTitleLevel:"专技十级"}).count();
	 	//console.log(data);
	 	Session.set('item9',data);
	 	return data;
	},
	'item10': function () {
	 	var data=Employees.find({proTitleLevel:"专技十一级"}).count();
	 	//console.log(data);
	 	Session.set('item10',data);
	 	return data;
	},
	'item11': function () {	 	var data=Employees.find({proTitleLevel:"专技十二级"}).count();
	 	//console.log(data);
	 	Session.set('item11',data);
	 	return data;
	},
	'item12': function () {
	 	var data=Employees.find({proTitleLevel:"专技十三级"}).count();
	 	//console.log(data);
	 	Session.set('item12',data);
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
		var item9=Session.get('item9');
		var item10=Session.get('item10');
		var item11=Session.get('item11');
		var item12=Session.get('item12');
		var total=item1+item2+item3+item4+item5+item6+item7+item8+item9+item10+item11+item12;
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
	'itemRate9': function(){
		var item9=Session.get('item9');
		var total=Session.get('total');
		return (Math.round(item9 / total * 10000) / 100 + "%");

	},
	'itemRate10': function(){
		var item10=Session.get('item10');
		var total=Session.get('total');
		return (Math.round(item10 / total * 10000) / 100 + "%");

	},
	'itemRate11': function(){
		var item11=Session.get('item11');
		var total=Session.get('total');
		return (Math.round(item11 / total * 10000) / 100 + "%");

	},
	'itemRate12': function(){
		var item12=Session.get('item12');
		var total=Session.get('total');
		return (Math.round(item12 / total * 10000) / 100 + "%");

	},
	'totalRate': function(){
		return '100.00%'
	}
})