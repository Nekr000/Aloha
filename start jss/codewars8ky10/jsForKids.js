//kotiki
var x = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
    console.log(i + "=^_^=");
    }
    }
    x(10);

var secondInMinutes = 60;
var minutesInHour = 60;
var secondInHour = minutesInHour * secondInMinutes;
secondInHour;
var hourInDay = 24;
var secondInDay = secondInHour * hourInDay;
secondInDay;
var daysInYear = 365;
var secondsInYear = daysInYear * secondInDay;
secondsInYear;
var myAge = 29;
var secondsInMyLife = myAge * secondsInYear;
console.log("You Lose", secondsInMyLife);


var balloons = 100;
balloons *= 2;

var balloons = 100;
balloons /= 4;
// +=  -= *=  /=

var x = "эЙ, кАК деЛа?";
var y = x.slice(0,1);
var a = y.toUpperCase();
var z = x.slice(1);
var g = z.toLowerCase();
a+g;


var stroka = "эЙ, кАК деЛа?";
stroka[0].toUpperCase() + stroka.slice(1).toLowerCase();



var age = 11;
var accompanied = false;
if (age > 12 || accompanied === true ) {
    console.log("Yes");
} 
  console.log("No");


var roadToHome = [];
roadToHome.push("apteka");
roadToHome.push("ring");
roadToHome.push("Macdonalds");
roadToHome.push("Fonar");
roadToHome.push("Ygol");


roadToHome.pop("Ygol");
roadToHome.pop("Fonar");
roadToHome.pop("Macdonalds");
roadToHome.pop("ring");
roadToHome.pop("apteka");

console.log(roadToHome);


//vot i otvet na moi vopros 

var variant = ["x", "y", "z", "V ", "r", "t", "h"];
variant[Math.floor(Math.random() * 7)];

