const express         = require('express');
const router          = express.Router();
const db              = require('../config/mongoose');
//controller for listing
const homeController  = require('../controllers/home_controller.js');
console.log('router loaded');

router.use('/',require('./project'));
router.use('/issue',require('./issue'));

//project router


// router.get('/',homeController.project);
// router.get('/create',homeController.create);
// router.post('/add_project', homeController.add_project);
// router.get('/:id/edit',homeController.editProject); 

// router.get('/destroy/:id',homeController.deleteProject); 

// //issue router
// const issueController = require('../controllers/issue_controller');

// router.get('/issue/:id',issueController.issueList);
// router.get('/issue/create/:id',issueController.issueCreate);
// router.post('/add_issue/', issueController.addIssue);

module.exports = router;