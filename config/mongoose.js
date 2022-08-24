const mongoose = require('mongoose'); // momgoose required
mongoose.connect('mongodb://localhost/issueTracker'); 
const db = mongoose.connection; //made conection to mongoose

db.on('error',console.error.bind(console, "Error connection to mongodb"));
db.once('open',function(){
    //if connected successfully
    console.log('connected to database :: MongoDB');
});
module.exports = db;