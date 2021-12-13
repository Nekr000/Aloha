// push v objects
var cat = {};
cat["legs"] = 3;
cat["name"] = "Гармония";
cat["color"] = "Черепаховый";
cat;
{ color: "Черепаховый", legs: 3, name: "Гармония" }

var cat = {};
cat.legs = 3;
cat.name = "Гармония";
cat.color = "Черепаховый";
cat;



var elvira = {name: "Эльвира", age: 17, luckyNumber: [1,3,5,6,7] };
var galina = {name: "Галина", age: 20, luckyNumber: [5,7,15,34] };
var liza = {name: "Елизавета", age: 18, luckyNumber: [9,6,4,3,65] };
var girls = [elvira, galina, liza];

girls[2];





var money = {};
money["Leha"] = 15;
money["grisha"] = 45;
money["Petryha"] = 150;
money["Leha"] += 20;
money["Leha"];


// quests

/* #1. Подсчет очков
Представьте, что вы играете в какую-нибудь игру со своими друзьями и вам нужно вести счет. Создайте для этого объект и назовите 
его scores. Пусть ключами будут имена ваших друзей, а значениями — набранные ими очки (0 или больше). Счет игроков надо 
будет увеличивать по мере того, как они зарабатывают новые 
очки. Как вы будете менять счет игрока, хранящийся в объекте 
scores */

var scores = {
    bob: 5,
    kate: 7,
    kok: 9
}
scores["bob"] += 5;
scores.bob;


/* #2. Вглубь объектов и массивов
Пускай у вас есть такой объект:
var myCrazyObject = {
"name": "Нелепый объект",
"some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
"random animal": "Банановая акула"
};
Как одной строкой JavaScript-кода извлечь из этого объекта 
число 123? Проверьте свое решение, запустив его в консоли */
var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
    };

myCrazyObject["some array"] [2].number; // 20 minut 20=/