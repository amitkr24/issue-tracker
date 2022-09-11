const express       = require('express')
const app           = express()

const router        = require('./router/index'); // router file included
var path            = require('path'); // path included
const bodyParser    = require("body-parser"); //body parser include
const labels        = require('./controllers/label_controller') // include label_controller
const port          = process.env.PORT || 8000; //port on which server runs

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }));

//set ejs template
app.set('view engine', 'ejs');

// define static path
app.use(express.static('assets'));

//router use
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})