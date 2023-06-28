//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const time = require(__dirname + "/date.js");

const app = express();





var job = [] ;
var date = getDate();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));




mongoose.connect("mongodb+srv://job-logger-app-username:Kidusyared%40220967@job-logger-app.h7cvn0w.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});

const jobsSchema = {
    company: String,
    location: String,
    salaryRange: String,
    jobDescription: String,
    date: String,
    jobWebLink: String
}

const Job = mongoose.model("Job", jobsSchema);


app.get('/', async function(req, res){

    var jobs = await Job.find({});

  

  res.render("lists", {array_jobs:jobs});

    

});

app.listen(process.env.PORT || 3000, function (){

});



app.post("/", function(req, res){


    var job_object = {
        "company": req.body.company_name,
        "location": req.body.location,
        "salary_range": req.body.salary_range,
        "job_desc": req.body.job_desc,
        "date": date,
        "jobWebLink" : req.body.job_link,
    };
    
    job.push(job_object);

    const job1 = new Job({
        company: req.body.company_name,
        location: req.body.location,
        salaryRange: req.body.salary_range,
        jobDescription: req.body.job_desc,
        date: date,
        jobWebLink: req.body.job_link,
    });
    
    console.log(job1); 
    job1.save();
    
    res.redirect("/");


});




app.post("/delete", async function(req, res){

    if(req.body.confirm.toLowerCase() === "yes" || req.body.confirm.toLowerCase() === "y"){
        await Job.findByIdAndDelete(req.body.del);
        res.redirect("/");
    }

  
    

   



});


