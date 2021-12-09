let eng = "en";
let rus = "ru";

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

let days = [];
days["ru"] = ["Пн", "Вт", "СР", "Чт", "Пт", "Сб", "Вс"];
days["en"] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log(days[lang]);

let namePerson = prompt("Введите имя: ");

let answer =
    namePerson == "Александр" ?
    "Преподаватель" :
    "Артем" ?
    "Директор" :
    "студент";
console.log(answer);