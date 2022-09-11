const express = require('express');
const app = express();

app.get('/bmical/:w/:h',function(req,res){
    var w = Number(req.params.w);
    var h = Number(req.params.h);
    var bmi = (w/(h*2));
    var result = {"Body mass index(BMI) =  ":bmi};
    res.send(result);
});

app.listen(3000,function(){
    console.log("APIs running at port 3000");
});