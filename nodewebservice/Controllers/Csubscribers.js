//dependencies
var mongoose=require('mongoose');

//get models
var Subscribers=mongoose.model('Subscribers');


exports.findAll = function(req,res) {
Subscribers.find('{}',function(err,results){
      return res.send(results);
  });

};

exports.add = function(req,res) {
  Subscribers.create(req.body,function(err,result){
    if(err) return res.status(400).send(err);
    return res.send(result);
  });

};
exports.options=function(req,res){
  return res.send(400);
};
exports.delete = function(req,res) {
  console.log(req.params.id);
  var id=req.params.id;
  Subscribers.remove({'_id':id},function(result){
    return res.send(result);
  });
};
