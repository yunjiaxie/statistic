Employees = new Mongo.Collection('employees');

var schema=new SimpleSchema({
    office: {
        type: String,
        label:'单位名称'
    },
    name: {
        type: String,
        label:'人员名称'
    },
    sex: {
    	type: String,
    	label:'性别'
    },
    birth: {
    	type: Date ,
    	label:'出生年月'
    },
    degree: {
    	type: String,
    	label:'最高学位'
    },
    qualification: {
    	type: String,
    	label: '最高学历'
    },
    qualiType: {
        type: String,
        label: '学历类型'
    },
    graduSchool: {
    	type: [String],
    	label:'毕业院校',
    	optional: true
    },
    major: {
    	type: String,
    	label:'专业'
    },
    personType: {
    	type: String,
    	label: '人员类别'
    },
    positionType: {
    	type: String,
    	label: '岗位类别'
    },
    division: {
    	type: String,
    	label:'所在部门'
    },
    duty: {
    	type: String,
    	label:'职务'
    },
    dutyLevel: {
    	type: String,
    	label: '职务级别'
    },
    proTitle: {
    	type: String,
    	label: '职称'
    },
    proTitleLevel: {
    	type: String,
    	label: '职称等级'
    },
    isTeacher: {
    	type: String,
    	label:'是否是教师'
    },
    teacherType: {
    	type: String,
    	label: '教师类别',
    	optional: true
    },
    teachCourse: {
    	type: String,
    	label: '任教学科',
    	optional:true
    },
    workTime: {
    	type: Date,
    	label:'进入电大时间'
    },
   
    createdBy:{
      type:String,
      autoValue:function(){
        if(this.isInsert){
          return this.userId;
        } else {
          this.unset();
        }
      },
      denyUpdate: true
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        },
        denyUpdate: true
    },
    updatedBy: {
        type: String,
        autoValue: function() {
            if (this.isUpdate) {
                return this.userId;
            }
        },
        denyInsert: true,
        optional: true
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
});

Employees.attachSchema(schema);
