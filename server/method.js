Meteor.methods({
    'createOfficeInfo': function(data){
        var currentUser = Meteor.userId();
        var isExistName= Offices.find({name: data.name});
        var isAleadyAddOffice= Offices.find({createdBy: Meteor.userId()});
        if(!currentUser){
            throw new Meteor.Error("not-logged-in", "You're not logged-in.");
        }else if(isAleadyAddOffice) {
            throw new Meteor.Error('Already isAleadyAddOffice',"您创建过单位，请直接添加人员"); 
        }else if(isExistName){
            console.log('单位名称已存在');
            throw new Meteor.Error('Already isExistName',"单位名称已存在");          
        }else {
            return Offices.insert(data);
        }     	
    },
    'createPerson': function(data){
        var obj;
        var currentUser = Meteor.userId();
        var ownoffice= Offices.find({createdBy: Meteor.userId()}).fetch()[0].name;
        if(!currentUser){
            throw new Meteor.Error('not-logged-in', "You're not logged-in.");
        } else {
            obj= {
                'office':ownoffice,
                'name':data.name,
                'sex':data.sex,
                'birth':data.birth,
                'degree':data.degree,
                'qualification':data.qualification,
                'qualiType':data.qualiType,
                'graduSchool':data.schools,
                'major':data.major,
                'personType':data.personType,
                'positionType':data.positionType,
                'division':data.division,
                'duty':data.duty,
                'dutyLevel':data.dutyLevel,
                'proTitle':data.proTitle,
                'proTitleLevel':data.proTitleLevel,
                'isTeacher':data.isTeacher,
                'teacherType':data.teacherType,
                'teachCourse':data.teachCourse,
                'workTime':data.workTime
            };
            return Employees.insert(obj);
        }  
    }
});