const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller
const issueController = require('../controllers/issue_controller');
console.log('router loaded2');

router.get('/issue/',issueController.issueList);
module.exports = router;