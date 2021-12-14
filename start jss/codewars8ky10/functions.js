// var myFirstFunction = function(name) {
//     console.log("Hello World" + name + "!");
//     return "Тебе не рады";
// };
// myFirstFunction("syka");

// function name(params) {
//     for (var i = 0; i < params; i++) {
//         console.log(i + "^_^");
//     }
    
// }
// name(3);

// function name (params, params2) {
//     for (var i = 0; i < params2; i++) {
//         console.log(i + "=/");
//     }
//     console.log(params + "Hi earth");
// }

// name( [], 3);

// var printMultipleTimes = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " " + whatToDraw);
//     }
//    };

// var double = function (number) {
//      return number * 2;
//     };

// var randomWords = ["Планета", "Червяк", "Цветок", "Компьютер"];

// var pickRandomWord = function (words) {
//         return words[Math.floor(Math.random() * words.length)];
//        };
       

//     pickRandomWord(randomWords);

// function draznilka() {
// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// // Соединяем случайные строки в предложение:
// var randomString = "У тебя " + pickRandomWord(randomBodyParts) + 
// " словно " + pickRandomWord(randomAdjectives) + 
// " " + pickRandomWord(randomWords) + "!!!";
// return randomString;
// }
// draznilka();

// #1. Математические расчеты и функции
// Создайте две функции, add и multiply; пусть каждая принимает 
// по два аргумента. Функция add должна складывать аргументы 
// и возвращать результат, а функция multiply — перемножать 
// аргументы.
// С помощью только этих двух функций вычислите следующее 
// несложное выражение:
// 36325 * 9824 + 777

// function add(x, y) {
//     return x + y;   
// };
// function multiply(a, b) {
//     return a * b;   
// }
// add(multiply(36325, 9824), 777);

// #2. Совпадают ли массивы?
// Напишите функцию areArraysSame, которая принимает два 
// массива с числами в качестве аргументов. Она должна возвращать true, если эти массивы одинаковые (то есть содержат одни 
// и те же числа в одном и том же порядке), или false, если массивы различаются. Убедитесь, что ваша функция работает правильно, запустив такой код:
// areArraysSame([1, 2, 3], [4, 5, 6]);
// false
// areArraysSame([1, 2, 3], [1, 2, 3]);
// true
// areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// false
// Подсказка 1: вам понадобится перебрать все значения из первого массива в цикле for и убедиться, что они совпадают со значениями из второго массива. Вы можете вернуть false прямо 
// из тела for, если обнаружите несовпадающие значения.
// Подсказка 2: вы можете сразу выйти из функции, пропустив 
// цикл for, если у массивов разная длина.


// function areArraysSame(x, y) {
//     if (x.length != y.length) 
//         return false;
// for(i = 0; i < x.length; i++)
//         if(x[i] != y[i])
//             return false;
//     return true;
// }   

function pickWord(x) {
    var x =Math.floor(Math.random() * words.length) 
        return x;   
}