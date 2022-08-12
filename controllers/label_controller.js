const labels      = require('../models/labels');
module.exports.label = function(req,res){
    labels.find({},function(err,label){
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        res.render('../view/labels',{labels:label})
    })
}