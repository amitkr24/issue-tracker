const express         = require('express');
const router          = express.Router();
console.log('router loaded');

router.get('/',require('./project'));
router.get('/issue',require('./issue'));


module.exports = router;