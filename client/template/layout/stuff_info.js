Template.stuffInfo.rendered=function() {
	$('#birthDatepicker').datepicker({
		format: 'yyyy/mm/dd',
    	startDate: '-3d'
	});
	$('#workDatepicker').datepicker({
		format: 'yyyy/mm/dd',
    	startDate: '-3d'
	});
};

Template.stuffInfo.onRendered(function(){
    Session.set("defaultDiv","show");
	Session.set('teacherDiv', 'hidden');
	Session.set("SchoolsObj",null);
});
Template.stuffInfo.helpers({
	defaultDiv: function(){
		var defaultDiv=Session.get("defaultDiv");
		return defaultDiv;
	},
	schools: function(){
		var val= Session.get("SchoolsObj");
		return val;
	},
	teacherDiv: function(){
		var val= Session.get("teacherDiv");
		return val;
	}
});
Template.stuffInfo.events({
	'change #qualification': function(){
    	var qualification= $("#qualification").find("option:selected").text();
    	var schoolNum;
    	var schools= [];
		if (qualification==="博士研究生") {
			schoolNum=3;
		}else if (qualification==="双本科" || qualification==="硕士研究生") {
			schoolNum=2;
		}else if((qualification==="本科"|| qualification==="中专、技校或职高")){
			schoolNum=1;
		}else{
			schoolNum=0;
		}
		for (var i = 0; i <schoolNum; i++) {
			var data={
				number:i+1,
			};
			schools.push(data);
		};
		Session.set('SchoolsObj', schools);
		Session.set("defaultDiv","hidden");
    },
    'click #isTeacher,#notTeacher':function(event){
    	var isExistTeacher =  $("input[name='isTeacher']:checked").val();
    	if (isExistTeacher==="true") {
	    	Session.set('teacherDiv', 'show');
	    }else{
	    	Session.set('teacherDiv', 'hidden');
	    }
    },
    'submit #stuffForm': function(){
    	//alert('f')
    	event.preventDefault();
    	var schools=[];
    	var isChoose=[];
        var schoolCount=Session.get('SchoolsObj').length;
        var degree= $("#degree").find("option:selected").text();
        var qualification= $("#qualification").find("option:selected").text();
        var qualiType=$("#qualiType").find("option:selected").text();
        var personType= $("#personType").find("option:selected").text();
        var positionType= $("#positionType").find("option:selected").text();
        var division= $("#whichDivi").find("option:selected").text();
        var dutyLevel=$("#dutyLevel").find("option:selected").text();
        var proTitle= $("#proTitle").find("option:selected").text();
        var proTitleLevel= $("#proTitleLevel").find("option:selected").text();
        //var teacherOption= $("#teacherOption").find("option:selected").text();
        isChoose.push(degree,qualification,qualiType,personType,positionType,division,dutyLevel,proTitle,proTitleLevel);
        for (var i = 0; i< isChoose.length; i++) {
        	if (isChoose[i]==="请选择") {
        		alert('有选择项没选择！');
        		return 'select is not chosen error'
        	}
        };
        for(var i=0;i<schoolCount;i++){
        	var j=i+1;
        	//alert('[$("#IndepOfficeInput"+i).val()]'+[$("#IndepOfficeInput"+i).val()]);
        	var val=String([$("#school"+j).val()]) ;
        	//alert('type of val:'+ typeof val);
        	schools.push(val);
        };
        //console.log("innerDivi"+innerDivi.length);
        var data= {
        	'name':$("#stuffName").val(),
	        'sex':$("input[name='sex']:checked").val(),
	        'birth':$("#birthDatepicker").val(),
	        'degree':degree,
	        'qualification':qualification,
	        'qualiType':qualiType,
	        'graduSchool':schools,
	        'major':$("#major").val(),
	        'personType':personType,
	        'positionType':positionType,
	        'division':division,
	        'duty':$("#duty").val(),
	        'dutyLevel':dutyLevel,
	        'proTitle':proTitle,
	        'proTitleLevel':proTitleLevel,
	        'isTeacher':$("input[name='isTeacher']:checked").val(),
	        'teacherType':$("#teacherOption").find("option:selected").text(),
	        'teachCourse':$("#teacherInput").val(),
	        'workTime':$("#workDatepicker").val()
	    };
	    
        Meteor.call('createPerson', data, function(error){
	        if(error){
	        	if(error.error==="not-logged-in"){
	        		throwError(error.reason);
	        		Meteor.setTimeout(function () {
					    Router.go('login');
					  }, 9000);
	        		return ;
	        	}else{
	        		throwError(error.reason);
	        	}
	            
	        } else {
	            alert('新建人员成功');
	            $("input:text").val('');
	            $("input:radio").removeAttr('checked');
	            $("#stuffForm").find("option:selected").removeAttr('selected');
	    		Session.set("defaultDiv","show");
				Session.set('teacherDiv', 'hidden');
				Session.set("SchoolsObj",null);	 
	        }
	    });
    }
});


