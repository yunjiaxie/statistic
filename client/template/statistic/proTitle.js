Template.proTitle.helpers({
	'item1': function  () {
		var data=Employees.find({proTitle:"教授"}).count();
		Session.set('item1',data);
		//console.log(data);
		return	data;
	},
	'item2': function () {
	 	var data=Employees.find({proTitle:"副教授"}).count();
	 	//console.log(data);
	 	Session.set('item2',data);
	 	return data;
	},
	'item3': function () {
	 	var data=Employees.find({proTitle:"讲师"}).count();
	 	//console.log(data);
	 	Session.set('item3',data);
	 	return data;
	},
	'item4': function () {
	 	var data=Employees.find({proTitle:"助教"}).count();
	 	//console.log(data);
	 	Session.set('item4',data);
	 	return data;
	},
	'item5': function () {
	 	var data=Employees.find({proTitle:"研究员"}).count();
	 	//console.log(data);
	 	Session.set('item5',data);
	 	return data;
	},
	'item6': function () {
	 	var data=Employees.find({proTitle:"副研究员"}).count();
	 	//console.log(data);
	 	Session.set('item6',data);
	 	return data;
	},
	'item7': function () {
	 	var data=Employees.find({proTitle:"助理研究员"}).count();
	 	//console.log(data);
	 	Session.set('item7',data);
	 	return data;
	},
	'item8': function () {
	 	var data=Employees.find({proTitle:"研究实习员"}).count();
	 	//console.log(data);
	 	Session.set('item8',data);
	 	return data;
	},
	'item9': function () {
	 	var data=Employees.find({proTitle:"中专高讲"}).count();
	 	//console.log(data);
	 	Session.set('item9',data);
	 	return data;
	},
	'item10': function () {
	 	var data=Employees.find({proTitle:"中专讲师"}).count();
	 	//console.log(data);
	 	Session.set('item10',data);
	 	return data;
	},
	'item31': function () {
	 	var data=Employees.find({proTitle:"中专助讲"}).count();
	 	//console.log(data);
	 	Session.set('item31',data);
	 	return data;
	},
	'item11': function () {
	 	var data=Employees.find({proTitle:"中学高级教师"}).count();
	 	//console.log(data);
	 	Session.set('item11',data);
	 	return data;
	},
	'item12': function () {
	 	var data=Employees.find({proTitle:"中学一级教师"}).count();
	 	//console.log(data);
	 	Session.set('item12',data);
	 	return data;
	},
	'item13': function () {
	 	var data=Employees.find({proTitle:"中学二级教师"}).count();
	 	//console.log(data);
	 	Session.set('item13',data);
	 	return data;
	},
	'item14': function () {
	 	var data=Employees.find({proTitle:"小学高级教师"}).count();
	 	//console.log(data);
	 	Session.set('item14',data);
	 	return data;
	},
	'item15': function () {
	 	var data=Employees.find({proTitle:"小学一级教师"}).count();
	 	//console.log(data);
	 	Session.set('item15',data);
	 	return data;
	},
	'item16': function () {
	 	var data=Employees.find({proTitle:"小学二级教师"}).count();
	 	//console.log(data);
	 	Session.set('item16',data);
	 	return data;
	},
	'item17': function () {
	 	var data=Employees.find({proTitle:"高级实验师"}).count();
	 	//console.log(data);
	 	Session.set('item17',data);
	 	return data;
	},
	'item18': function () {
	 	var data=Employees.find({proTitle:"实验师"}).count();
	 	//console.log(data);
	 	Session.set('item18',data);
	 	return data;
	},
	'item19': function () {
	 	var data=Employees.find({proTitle:"助理实验师"}).count();
	 	//console.log(data);
	 	Session.set('item19',data);
	 	return data;
	},
	'item20': function () {
	 	var data=Employees.find({proTitle:"高级会计师"}).count();
	 	//console.log(data);
	 	Session.set('item20',data);
	 	return data;
	},
	'item21': function () {
	 	var data=Employees.find({proTitle:"会计师"}).count();
	 	//console.log(data);
	 	Session.set('item21',data);
	 	return data;
	},
	'item22': function () {
	 	var data=Employees.find({proTitle:"助理会计师"}).count();
	 	//console.log(data);
	 	Session.set('item22',data);
	 	return data;
	},
	'item23': function () {
	 	var data=Employees.find({proTitle:"高级工程师"}).count();
	 	//console.log(data);
	 	Session.set('item23',data);
	 	return data;
	},
	'item24': function () {
	 	var data=Employees.find({proTitle:"工程师"}).count();
	 	//console.log(data);
	 	Session.set('item24',data);
	 	return data;
	},
	'item25': function () {
	 	var data=Employees.find({proTitle:"助理工程师"}).count();
	 	//console.log(data);
	 	Session.set('item25',data);
	 	return data;
	},
	'item26': function () {
	 	var data=Employees.find({proTitle:"其他系列正高"}).count();
	 	//console.log(data);
	 	Session.set('item26',data);
	 	return data;
	},
	'item27': function () {
	 	var data=Employees.find({proTitle:"其他系列副高"}).count();
	 	//console.log(data);
	 	Session.set('item27',data);
	 	return data;
	},
	'item28': function () {
	 	var data=Employees.find({proTitle:"其他系列中级"}).count();
	 	//console.log(data);
	 	Session.set('item28',data);
	 	return data;
	},
	'item29': function () {
	 	var data=Employees.find({proTitle:"其他系列初级"}).count();
	 	//console.log(data);
	 	Session.set('item29',data);
	 	return data;
	},
	'item30': function () {
	 	var data=Employees.find({proTitle:"其他系列初级"}).count();
	 	//console.log(data);
	 	Session.set('item30',data);
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
		var item13=Session.get('item13');
		var item14=Session.get('item14');
		var item15=Session.get('item15');
		var item16=Session.get('item16');
		var item17=Session.get('item17');
		var item18=Session.get('item18');
		var item19=Session.get('item19');
		var item20=Session.get('item20');
		var item21=Session.get('item21');
		var item22=Session.get('item22');
		var item23=Session.get('item23');
		var item24=Session.get('item24');
		var item25=Session.get('item25');
		var item26=Session.get('item26');
		var item27=Session.get('item27');
		var item28=Session.get('item28');
		var item29=Session.get('item29');
		var item30=Session.get('item30');
		var item31=Session.get('item31'); 
		var total=item1+item2+item3+item4+item5+item6+item7+item8+item9+item10+item11+item12+item13+item14+item15+item16+item17+item18+item19+item20+item21+item22+item23+item24+item25+item26+item27+item28+item29+item30+item31;
		Session.set('total',total);
		console.log(total);
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
	'itemRate13': function(){
		var item13=Session.get('item13');
		var total=Session.get('total');
		return (Math.round(item13 / total * 10000) / 100 + "%");

	},
	'itemRate14': function(){
		var item14=Session.get('item14');
		var total=Session.get('total');
		return (Math.round(item14 / total * 10000) / 100 + "%");

	},
	'itemRate15': function(){
		var item15=Session.get('item15');
		var total=Session.get('total');
		return (Math.round(item15 / total * 10000) / 100 + "%");

	},
	'itemRate16': function(){
		var item16=Session.get('item16');
		var total=Session.get('total');
		return (Math.round(item16 / total * 10000) / 100 + "%");

	},
	'itemRate17': function(){
		var item17=Session.get('item17');
		var total=Session.get('total');
		return (Math.round(item17 / total * 10000) / 100 + "%");

	},
	'itemRate18': function(){
		var item18=Session.get('item18');
		var total=Session.get('total');
		return (Math.round(item18 / total * 10000) / 100 + "%");

	},
	'itemRate19': function(){
		var item19=Session.get('item19');
		var total=Session.get('total');
		return (Math.round(item19 / total * 10000) / 100 + "%");

	},
	'itemRate20': function(){
		var item20=Session.get('item20');
		var total=Session.get('total');
		return (Math.round(item20 / total * 10000) / 100 + "%");

	},
	'itemRate21': function(){
		var item21=Session.get('item21');
		var total=Session.get('total');
		return (Math.round(item21 / total * 10000) / 100 + "%");

	},
	'itemRate22': function(){
		var item22=Session.get('item22');
		var total=Session.get('total');
		return (Math.round(item22 / total * 10000) / 100 + "%");

	},
	'itemRate23': function(){
		var item23=Session.get('item23');
		var total=Session.get('total');
		return (Math.round(item23 / total * 10000) / 100 + "%");

	},
	'itemRate24': function(){
		var item24=Session.get('item24');
		var total=Session.get('total');
		return (Math.round(item24 / total * 10000) / 100 + "%");

	},
	'itemRate25': function(){
		var item25=Session.get('item25');
		var total=Session.get('total');
		return (Math.round(item25 / total * 10000) / 100 + "%");

	},
	'itemRate26': function(){
		var item26=Session.get('item26');
		var total=Session.get('total');
		return (Math.round(item26 / total * 10000) / 100 + "%");

	},
	'itemRate27': function(){
		var item27=Session.get('item27');
		var total=Session.get('total');
		return (Math.round(item27 / total * 10000) / 100 + "%");

	},
	'itemRate28': function(){
		var item28=Session.get('item28');
		var total=Session.get('total');
		return (Math.round(item28 / total * 10000) / 100 + "%");

	},
	'itemRate29': function(){
		var item29=Session.get('item29');
		var total=Session.get('total');
		return (Math.round(item29 / total * 10000) / 100 + "%");

	},
	'itemRate30': function(){
		var item30=Session.get('item30');
		var total=Session.get('total');
		return (Math.round(item30 / total * 10000) / 100 + "%");

	},
	'itemRate31': function(){
		var item31=Session.get('item31');
		var total=Session.get('total');
		return (Math.round(item31 / total * 10000) / 100 + "%");

	},
	'totalRate': function(){
		return '100.00%'
	}
})