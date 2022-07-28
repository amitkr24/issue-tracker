const express       = require('express')
const app           = express()
const port          = 8000
const router        = require('./router/index');
var path            = require('path');
const bodyParser    = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
//set ejs template
app.set('view engine', 'ejs');

// define static path
app.use(express.static('assets'));

app.use('/',router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})