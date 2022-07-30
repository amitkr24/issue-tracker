const Issue       = require('../models/issue');
const labels       = require('../models/labels');


//get all issue
module.exports.issueList = function(req,res){
    let id = req.params.id;//req.params.id
    Issue.findOne({'project_id':id},function(err,Issue){
        console.log(Issue);
    })
    res.render('../view/edit_project',{project:Issue})
}

module.exports.issueCreate = function(req,res){
    let project_id = req.params.id;
    res.render('../view/create_issue',{project_id:project_id})
}

module.exports.addIssue = function(req,res){
    console.log('test11');
    let label = req.body.tags.split(",");
   
    Issue.create({ 
        issue_name    : req.body.issue_name,
        author        : req.body.author,
        description   : req.body.description,
        project_id    : req.body.project_id,
        label         : label
    }, function(err, issue_data){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log('*******', issue_data);
        return res.redirect('back');    
    });
}



 