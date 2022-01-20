var schema = [
    {
        "desc" : "Have to Complete Project",
        "cate" : "Personal",
        "date" : "12/05/2006"
    },
    {
        "desc" : "Have to solve DP Question",
        "cate" : "Work",
        "date" : "12/05/2006"
    },
    {
        "desc" : "Have to complete new lecture",
        "cate" : "Home",
        "date" : "12/05/2006"
    }
];

module.exports.home = function(req,res){
    return res.render('home',{
        schema_list : schema,
    });
};

module.exports.createTask = function(req,res){
    schema.push({
        desc : req.body.desc,
        date : req.body.date,
        cate : req.body.cate
    })
    return res.redirect('back');
};

