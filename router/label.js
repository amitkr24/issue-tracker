const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller
const labelController = require('../controllers/label_controller');

//issue router
router.get('/label',labelController.label);

module.exports = router;