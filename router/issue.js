const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller
const issueController = require('../controllers/issue_controller');
console.log('router loaded2');

//issue router

router.all('/:id',issueController.index);
//router.post('/filter/:id',issueController.filter);
router.get('/create/:id',issueController.issueCreate);
router.post('/issue/add_issue', issueController.addIssue);

module.exports = router;