//dependencies

var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var webpush = require('web-push-encryption');


//MongoDB
mongoose.connect('mongodb://localhost/eodb');

mongoose.connection.on('error',function (err) {
console.log('Mongoose default connection error: ' + err);
});

//Express
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// Add headers for cors
app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



//get models
require('./models/businessunit');
require('./models/subscriber')

//routes
//app.use('/api',require('./routes/api'));
require('./routes/api')(app);


//start server
app.listen(60000);
console.log('api is running on port 60000');



//set the api key for web-push
var MY_GCM_KEY='AIzaSyD9JbfPV7GgJ8uC33Y9LWPpu30sw4UWW6s';
webpush.setGCMAPIKey(MY_GCM_KEY);

//send test message to gcm

/*var message = new gcm.Message({
});

message.addData('key1','message1');
message.addData('key2','message2')

// Set up the sender with you API key, prepare your recipients' registration tokens.
var sender = new gcm.Sender('AIzaSyD9JbfPV7GgJ8uC33Y9LWPpu30sw4UWW6s');
var registrationTokens = [];
registrationTokens.push('fB_X3pAXPLQ:APA91bGWH54UPzTk9qYjkaN…xqZ9Xki2C3XepesTI3pdQWAUSpUnh2zmFf_3gfgtYneOUZnnbjYmPwZjHjQBouex4MgfxIESSs');
registrationTokens.push('fB_X3pAXPLQ:APA91bGWH54UPzTk9qYjkaNSghDyLi9Z_9Qqb8lYJH7Jx7nVmXMmbSIgzYYepiEh11xqZ9Xki2C3XepesTI3pdQWAUSpUnh2zmFf_3gfgtYneOUZnnbjYmPwZjHjQBouex4MgfxIESSs');

//send the message

sender.send(message, { registrationTokens: registrationTokens }, function (err, response) {
  if(err) console.error(err);
  else    console.log(response);
});
*/
