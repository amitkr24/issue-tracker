const express       = require('express')
const app           = express()

const router        = require('./router/index');
var path            = require('path');
const bodyParser    = require("body-parser");
const labels        = require('./controllers/label_controller')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
//set ejs template
app.set('view engine', 'ejs');

// define static path
app.use(express.static('assets'));
app.use('/',router)

// helper function
app.locals.copyrights=() =>{
  let myarr ={};
  labels.find({},function(err,label){
    //myarr[label.id] = label.name;
    if(err){
        console.log('error in fetching contact from db');
        return ;
    }
})
//console.log(myarr);
return myarr;

};

//app.use('/issue',require('./router/issue'));

app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening on port 3000');
});

