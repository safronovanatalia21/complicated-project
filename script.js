let input = prompt("Введите любой текст: ");
let text = "";
let textLength = 0;

const manageInput = function(input) {
    if (typeof input != "string") {
        alert("Ошибка ввода, введите текст");
    } else {
        text = input.trim();
    }
    textLength = text.length;
    if (textLength > 30) {
        text = text.slice(0, 29) + "...";
        console.log(text);
    } else {
        console.log(text);
    }
};
console.log(manageInput(input));