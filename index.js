const express = require('express');
const port = 8000;
const path = require('path');
const router = require('./routers');
const app = express();

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

app.use(express.static('assets'));
app.set('view engine','ejs');
app.use(express.urlencoded());
app.set('views',path.join(__dirname,'./views'));

app.use('/',router);


app.listen(port,function(err){
    if(err){
        console.log("Error in running the server",err);
        return;
    }
    console.log(`Yup! Express server is up and running on port ${port}`);
});