//dependencies
var mongoose=require('mongoose');

//schema

var business_unitSchema=new mongoose.Schema({
  m_Priority: { type:Number,min: 0, max: 2},
  m_Building : {
              m_num:{type:String, uppercase:true},
              m_floor:{type:String, uppercase:true},
              m_DeptName: String
            },
  m_Category: [Boolean],
  m_StatusUpdate: [{
              m_ResponsibleToResolve:{type:String, uppercase:true},
              m_Details:{type:String, uppercase:true}
  }],
  m_Notes:{type:String, uppercase:true},
  m_Resolved: Boolean
});

//Return model
mongoose.model('BusinessUnit',business_unitSchema);
