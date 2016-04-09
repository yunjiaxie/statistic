Offices = new Mongo.Collection('offices');

var schema=new SimpleSchema({
    name: {
      type: String,
      label:'单位名称'
    },
    otherName:{
      type:String,
      label:'其他名字',
      optional: true
    },
    type:{
      type:String,
      label:'单位类型',
      optional:true
    },
    spec:{
      type: String,
      label:'机构规格'
    },
    permStaffCount:{
        type:Number,
        label:'在编人数'
    },
    innerDivi:{
        type:[String],
        label:'内设部门'
    },
    isIndepOffice:{
      type: Boolean,
      label:'是否有独立办公场地'
    },
    officeArea:{
      type: Number,
      label:'办公面积',
      optional: true
    },
    isIndep: {
      type: Boolean,
      label:'是否独立机构'
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

Offices.attachSchema(schema);

