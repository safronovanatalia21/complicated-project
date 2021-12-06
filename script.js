"use strict";
var num = 266219;
var numReorginized = num.toString();
var multiply = 1;

for (var index = 0; index < numReorginized.length; index++) {
    multiply = multiply * numReorginized[index];
}
console.log(multiply);

var multiplyPowed = multiply ** 3;
console.log("multiplyPowed", multiplyPowed);

var result = multiplyPowed.toString();
console.log(result.substr(0, 2));

let eng = "en";
let rus = "ru";

let weekDaysInEnglish =
    "Sunday, Monday, Tuesday, Wednesday, Thirsday, Friday, Saturday";
let weekDaysInRussian =
    "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";

let lang = prompt("Выберите язык для вывода названий дней недели (en/ru)");

if (lang == eng) {
    console.log(weekDaysInEnglish);
} else if (lang == rus) {
    console.log(weekDaysInRussian);
} else {
    console.log("Ошибка ввода");
}

switch (lang) {
    case lang == eng:
        console.log(weekDaysInEnglish);
        break;
    case lang == rus:
        console.log(weekDaysInRussian);
        break;
    default:
        console.log("Ошибка вввода, повторите попытку");
}

var days = [
    [weekDaysInRussian],
    [weekDaysInEnglish]
];

let langChoice = lang == eng ? days[(1, 0)] : days[(0, 0)];
console.log(langChoice);