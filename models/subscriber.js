//dependencies
var mongoose=require('mongoose');

//schema

var subscriberSchema=new mongoose.Schema({
    endpoint: {type:String,unique:true},
    keys : {
              p256dh:String,
              auth:String
            }
});

//Return model
mongoose.model('Subscribers',subscriberSchema);
