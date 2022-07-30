const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller
const issueController = require('../controllers/issue_controller');
console.log('router loaded2');

//router.get('/issue/',issueController.issueList);
app.get('/issue/:id', function(req, res) {
    res.send("tagId is set to " + req.params.id);
  });

  
module.exports = router;