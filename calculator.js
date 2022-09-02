const  ekspres = require("express");
const  bodyParser= require("body-parser");
const  appi = ekspres();
appi.use(bodyParser.urlencoded({extended: true}));

/*-----------------------Calculator----------------------------*/
appi.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

appi.post("/", function(req, res){
  var number1 = Number(req.body.n1);
  var number2 = Number(req.body.n2);
  var sum = number1 + number2
  var sub = number1 - number2;
  var mu= number1 * number2;
  var di = number1 / number2;
  inputs =  "<h3>The given inputs are "  + number1+  " and " + number2+ ".</h3><br>"
  res.send(inputs+
  "The sum is "+sum+".<br><br>"
  +"The substracion is "+sub+".<br><br>"
  +"The multiplication is "+mu+".<br><br>"
  +"The division is "+di+".");
});

/*---------------------BMI Calculator------------------------------*/
appi.get("/bmiCalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

appi.post("/bmiCalculator", function(req,res){
  var weight_body = parseFloat(req.body.w);
  var height_body = parseFloat(req.body.h);
  var bmi = weight_body /  Math.pow(height_body,2);
  res.send("Your BMI is " + bmi);
});

/*-------------------Port---------------------------------------*/
appi.listen("3000", function(){
  console.log("Serveri po punon ne port 3000");
});
