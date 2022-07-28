const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller for listing
const homeController  = require('../controllers/home_controller.js');

//router
router.get('/',homeController.project);
//router.get('/create',homeController.create);
router.post('/add_project', homeController.add_project);
router.get('/:id/edit',homeController.editProject); 

router.get('/destroy/:id',homeController.deleteProject); 

// view form project
router.get('/create', (req, res) => {
    res.render('../view/create_project')
})


module.exports = router;