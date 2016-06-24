//dependencies
var mongoose=require('mongoose');

//get models
var BusinessUnits=mongoose.model('BusinessUnit');
exports.findAll = function(req,res) {
BusinessUnits.find('{}',function(err,results){
      return res.send(results);
  });

};
exports.findById = function(req,res) {
  var id=req.params.id;
  BusinessUnits.findOne({'_id':id},function(err,result){
    return res.send(result);
  });
};
exports.add = function(req,res) {
  BusinessUnits.create(req.body,function(err,result){
    if(err)return res.send(err);
    return res.send(result);
  });
};
exports.update = function(req,res) {
  var id=req.params.id;
  var updates=req.body;
  BusinessUnits.update({'_id':id},req.body,function(err,numAffected){
    if(err) return res.send(err);
    console.log('Updated %d BusinessUnits',numAffected);
    return res.send(202);
  });
};
exports.options=function(req,res){
  return res.send(400);
};
exports.delete = function() {};
