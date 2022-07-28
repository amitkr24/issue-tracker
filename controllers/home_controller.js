const Project       = require('../models/project');

//get all project
module.exports.project = function(req,res){
    Project.find({},function(err,projects){
        //console.log(projects);
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        return res.render('../view/index',{data:projects});
    })
}

//create project
module.exports.add_project = function(req,res){
    Project.create({ 
        project_name    : req.body.project_name,
        author          : req.body.author,
        description     : req.body.description
    }, function(err, newTask){
        if(err){
            console.log('error in creating a contact');
            return;
        }
        console.log('*******', newTask);
        return res.redirect('back');
    });
 }
 
 //edit record
 module.exports.editProject = function(req,res){
    var id = new require('mongodb').ObjectID(req.params.id);
    Project.findOne({'_id':id},function(err,projects){
        console.log(projects);
        if(err){
            console.log('error in fetching contact from db');
            return ;
        }
        return res.render('../view/edit_project',{project:projects});
    })
 }
 // delete project
 module.exports.deleteProject = function(req,res){
    let tid = req.params.id;
    console.log(tid);

    Project.findByIdAndDelete(tid, function(err){
        if(err){
            console.log('error in deleting in object from database');
            return;
        }
    });
    return res.redirect('back');
 }

 