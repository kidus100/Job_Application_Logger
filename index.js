//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();


var job =[];
var date = "";

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){

    console.log("Server started on port 3000");
    var today = new Date();
    var options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour:"numeric",
        minute:"numeric",
    };
    date = today.toLocaleString("en-US", options);

    console.log(job);

    res.render("lists", {array_jobs:job});

});

app.listen(3000, function (){

});

app.post("/", function(req, res){


    var job_object = {
        "company": req.body.company_name,
        "location": req.body.location,
        "salary_range": req.body.salary_range,
        "job_desc": req.body.job_desc,
        "date": date,
    };
    
    job.push(job_object);
    console.log(job); 
    
    res.redirect("/");


});