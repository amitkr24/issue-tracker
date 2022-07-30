const express         = require('express');
const router          = express.Router();
console.log('router loaded');

router.get('/',require('./project'));
router.get('/issue',require('./issue'));


//issue router
const issueController = require('../controllers/issue_controller');

router.get('/issue/:id',issueController.issueList);
router.get('/issue/create/:id',issueController.issueCreate);
router.post('/add_issue/', issueController.addIssue);
module.exports = router;