const express = require('express');
const port = 8000;
const path = require('path');
const router = require('./routers');
const db = require('./config/mongoose');
const app = express();


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