const Task = require('../models/todoApp');

module.exports.home = function(req,res){
    Task.find({},function(err,task){
        if(err){
            console.log("Error in fetching task",err);
            return;
        }
        return res.render('home',{
            schema_list: task
        });
    });
};

module.exports.createTask = function(req,res){
   Task.create({
       desc: req.body.desc,
       date: req.body.date,
       cate: req.body.cate
   },function(err,newTask){
       if(err){
           console.log("Error in creating contact",err);
           return;
       }
       console.log("******",newTask);
       return res.redirect('back');
   });
};

