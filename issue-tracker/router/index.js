const express       = require('express')
const app           = express();
let router          = express.Router()




router.get('/', (req, res) => {
    res.render('../view/index')
})

// create project form 
router.get('/create', (req, res) => {
    res.render('../view/create_project')
})

router.post('/add_project', (req, res) => {
    console.log(req.body);
    
    //res.render('./create')
})
module.exports = router