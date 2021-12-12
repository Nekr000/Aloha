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

/*#1. Новые дразнилки
Сделайте генератор случайных дразнилок со своим набором 
слов. */

var randomFirst = ["Великий ", "Ужасный ", "Превосходный ", "Вдохновляющий ", "Лучезарный "];
var randomSecond = ["Царь ", "Барон ", "Король ", "Бог "];
var randomThird = ["Алеша", "Генка", "Ориен"];
var x = randomFirst[Math.floor(Math.random()* randomFirst.length)];
var y = randomSecond[Math.floor(Math.random()* randomSecond.length)];
var z = randomThird[Math.floor(Math.random()* randomThird.length)];

var g = [x, y, z + " !!!"].join("");
g;

/* . Изощренные дразнилки
Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа: «У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]». 
Подсказка: нужно будет создать еще один массив. */

var bodyParts = ["нога", "рука", "голова", "пояс", "волосы", "грудь"];
var adjective = ["ужасная", "уродливая", "страшная", "отбитая", "я не знаю"];
var bodyPartsAnimal = ["копыто", "хвост", "грудь", "собака"];
var animal = ["собаки", "кота", "слона", "обезьяны", "оронгутанга"];

var randomBodyParts = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjectiv = adjective[Math.floor(Math.random() * adjective.length)];
var randomBodyPartsAnimal = bodyPartsAnimal[Math.floor(Math.random() * bodyPartsAnimal.length)];
var randomAnimal = animal[Math.floor(Math.random() * animal.length)];

var total = ["У тебя "+ randomBodyParts + " еще более "+ randomAdjectiv + " чем "+ randomBodyPartsAnimal + " у "+ randomAnimal +"."].join();
total;

/* 
#3. Оператор + или join?
Сделайте две версии своего генератора дразнилок: одна пусть 
использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через пробел с помощью 
join. Какой вариант вам больше нравится и почему? */
var bodyParts = ["нога", "рука", "голова", "пояс", "волосы", "грудь"];
var adjective = ["ужасная", "уродливая", "страшная", "отбитая", "я не знаю"];
var bodyPartsAnimal = ["копыто", "хвост", "грудь", "собака"];
var animal = ["собаки", "кота", "слона", "обезьяны", "оронгутанга"];

var randomBodyParts = bodyParts[Math.floor(Math.random() * bodyParts.length)];
var randomAdjectiv = adjective[Math.floor(Math.random() * adjective.length)];
var randomBodyPartsAnimal = bodyPartsAnimal[Math.floor(Math.random() * bodyPartsAnimal.length)];
var randomAnimal = animal[Math.floor(Math.random() * animal.length)];

var total = "У тебя "+ randomBodyParts + " еще более "+ randomAdjectiv + " чем "+ randomBodyPartsAnimal + " у "+ randomAnimal +".";
total;
/*#4. Соединение чисел
Как с помощью метода join превратить массив [3, 2, 1] в строку 
"3 больше, чем 2 больше, чем 1" */
var x = [3,2,1];
x[0] + " больше, чем " + x[1] + " больше, чем " + x[2];