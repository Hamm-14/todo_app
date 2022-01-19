const express = require('express');
const port = 8000;
const path = require('path');
const router = require('./routers');
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use('/',router);



app.listen(port,function(err){
    if(err){
        console.log("Error in running the server",err);
        return;
    }
    console.log(`Yup! Express server is up and running on port ${port}`);
});