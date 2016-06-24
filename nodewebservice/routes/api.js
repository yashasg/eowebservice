module.exports= function(app){
var businessunits = require('../controllers/Cbusinessunit');
var subscribers=require('../controllers/Csubscribers');
//controllers for businessunits endpoint
app.get('/overview', businessunits.findAll);
app.get('/overview/:id', businessunits.findById);
app.post('/overview', businessunits.add);
app.put('/overview/:id', businessunits.update);
app.delete('/overview/:id', businessunits.delete);
app.options('overview',businessunits.options);

//controllers for browser subscribers endpoint
app.post('/subscribe', subscribers.add);
app.delete('/subscribe/:id', subscribers.delete);
app.get('/subscribe',subscribers.findAll);
}
