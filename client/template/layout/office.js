
Template.office.onCreated(function () {
	var a=[];
  	Session.set('showText', 'hidden');
  	Session.set('showArea', 'hidden');
  	Session.set('showDivi', a);
});
Template.office.onRendered(function(){
    $('#officeForm').validate();
});

Template.office.helpers({
	ShowText: function(){
		var val= Session.get("showText");
		return val;
	},
	ShowArea: function(){
		var val= Session.get("showArea");
		return val;
	},
	divis: function(){
		var val= Session.get('showDivi');
		return val;
	}
});

Template.office.events({
    'click #isExist,#notExist':function(event){
    	var isExistOtherName =  $("input[name='isExist']:checked").val();
    	if (isExistOtherName==="true") {
	    	Session.set('showText', 'show');
	    }else{
	    	Session.set('showText', 'hidden');
	    }
    },
    'click #isIndepOffice,#notIndepOffice':function(event){
    	var isExistIndepOffice =  $("input[name='isIndepOffice']:checked").val();
    	if (isExistIndepOffice==="true") {
	    	Session.set('showArea', 'show');
	    }else{
	    	Session.set('showArea', 'hidden');
	    }
    },
    'submit #officeForm': function(event){
        event.preventDefault();
        var innerDiviCount=Session.get('showDivi').length;
        var type= $("#officeType").find("option:selected").text();
        var spec= $("#officeSpec").find("option:selected").text();
        if (type==="请选择"||spec==="请选择") {
        	type=null;
        	spec=null;
        	alert('请检查单位类型或机构规格是否选择！');
        	return 'select is not chosen error'
        };
        var innerDivi=[];
        for(var i=0;i<innerDiviCount;i++){
        	//alert('[$("#IndepOfficeInput"+i).val()]'+[$("#IndepOfficeInput"+i).val()]);
        	var val=String([$("#IndepOfficeInput"+i).val()]) ;
        	//alert('type of val:'+ typeof val);
        	innerDivi.push(val);
        }
        //console.log("innerDivi"+innerDivi.length);
        var data= {
        	'type':type,
	        'name':$("#name").val(),
	        'otherName':$("#othername").val(),
	        'spec':spec,
	        'isIndepOffice':Boolean($("input[name='isIndepOffice']:checked").val()),
	        'officeArea':$("#IndepOfficeInput").val(),
	        'isIndep':Boolean($("input[name='isIndep']:checked").val()),
	        'permStaffCount':$("#staffCount").val(),
	        'innerDivi':innerDivi
	    };
	    
        Meteor.call('createOfficeInfo', data, function(error){
	        if(error){
	        	if (error.error==="Already isAleadyAddOffice") {
	        		throwError(error.reason);
	        		Meteor.setTimeout(function () {
					    Router.go('stuffInfo')
					  }, 9000);
	        		return ;
	        	}else if(error.error==="Already isExistName"){
	        		throwError(error.reason);
	        		Meteor.setTimeout(function () {
					    Router.go('office');
					  }, 9000);
	        		return ;
	        	}else if(error.error==="not-logged-in"){
	        		throwError(error.reason);
	        		Meteor.setTimeout(function () {
					    Router.go('login');
					  }, 9000);
	        		return ;
	        	}
	        	
	        } else {
	            alert('新建单位成功');
	            Router.go('stuffInfo');
	        }
	    });
    },
    'keyup #divisionCount': function(){
    	//alert('按下按钮')
    	var diviCount= $("#divisionCount").val();
    	//alert('获取部门数：'+diviCount);
		var divis= [];
		var data ;
		for(var i=0;i<diviCount;i++){
			//alert('start foreach,i:'+i);
			data= {
				'lowerNum':i,
				'upperNum':i+1
			};
			divis.push(data);
			//console.log('data:'+data);	
		};
		//console.log('divisCount:'+divis.length);	
		Session.set('showDivi', divis);
    }
});