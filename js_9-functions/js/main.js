// //Задание 1

// var age = +prompt("Сколько вам лет?");
//
// function validator(age) {
//     return !!(age && age > 4 && age < 100);
// }
//
// document.write(validator(age) ? "Вам " + age + " лет" + '<br/><br/>' : "Некорректно введен возраст" + '<br/><br/>');


//Используя Math.random() и Math.round() и функции, напишите компьютерную игру “камень, ножницы, бумага”.
// В игре участвуют компьютер и человек.
// Человек вводит «камень», «ножницы» или «бумага», после чего выводится то, что выбрал компьютер.
// После этого выводится победитель.
// В игре должна присутствовать проверка информации, которую ввел пользователь,
// если введеные данные не камень, ножницы или бумага, попросить пользователя ввести еще раз.
// Игра должна продолжатся до 10 побед.
/*
function random() {
    var num = Math.round(Math.random() * (3 - 1) + 1);
    return num === 1 ? "Камень" : num === 2 ? "Ножницы" : "Бумага";
}

var score = 0;
var scoreComp = 0;

while (true) {
    var step = prompt("Ваш ход (камень, ножницы или бумага)");
    var stepComp = random();

    if (!step || step === stepComp) continue;

    if ((step === "Камень" && stepComp === "Ножницы") ||
        (step === "Ножницы" && stepComp === "Бумага") ||
        (step === "Бумага" && stepComp === "Камень")){
        score++;
    } else {
        scoreComp++;
    }
    alert(score + " " + scoreComp);

    document.write("Вы: " + step + " ,компьютер: " + stepComp + ". Счет - " + score + ":" + scoreComp + "<br/>");
    if (score === 5 || scoreComp === 5) break;
}


document.write(score > scoreComp ? "Вы победили!" + '<br/><br/>' : "Вы проиграли..." + '<br/><br/>');*/


//Написать компьютерную игру «отгадай число». Игра на двух игроков.
// Сначала игрок1 указывает максимальное число(max) до которого можно загадывать.
// Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n,
// если не угадал выводится сообщение «Загаданное число меньше указанного вами» или
// «Загаданное число больше указанного вами».
// Выигрывает тот игрок, который за наименьшее количество попыток отгадает число.
/*

function checkNumber(num, answer) {
    return (answer < num)? "Загадочное число больше": (answer > num) ? "Загадочное число меньше": false;
}

for (var i = 0; i < 2; i++) {
    var max = +prompt("Игрок " + (i + 1) + " : Максимальное число");
    var num = +prompt("Игрок " + (i || i + 2) + " : Введите число от 1 до " + max);
    var count = [];
    count[i] = 0;

    do {
        var answer = +prompt("Игрок " + (i + 1) + " : Угадайте введенное число");
        count[i]++;
        if (checkNumber(num, answer)) alert(checkNumber(num, answer));
    } while (answer !== num);

}

var result = (count[0] > count[1]) ? "Победил игрок 1" : (count[0] < count[1]) ? "Победил игрок 2" : "Ничья";
document.write(result + '<br/><br/>');
*/


//Написать функцию, которая принимает два числа (n1 и n2) и
// возвращает массив (8 элементов) из этих чередующихся чисел.
// Например, передаем два числа arrMaker(2,5),
// функция вернет массив [2,5,2,5,2,5,2,5]

// function arrMaker(a, b) {
//     var arr = [];
//     for(var i = 0; i < 4; i++) {
//         arr.push(a, b);
//     }
//
//     return arr;
// }
//
// document.write(arrMaker(2, 5) + '<br/><br/>');



//Написать функцию, которая принимает два числа n1 и n2.
// Если число n1 больше чем n2 функция возвращает -1,
// если числа равны возвращает 0,
// если число n1 меньше чем n2 возвращает 1.

// function compare(a, b) {
//     return a > b ? -1 : a < b ? 1 : 0;
// }
//
// document.write(compare(2, 5) + '<br/><br/>');



//Напишите функцию, которая принимает два параметра: число n1 и строку “chet” или “nechet”.
// Задача функции проверять числа на четность или нечетность.
// Например proverka(2,”chet”) проверяет число 2 на четность и возвращает true (т.к. 2 четное).
// Вызов proverka(2,”nechet”) проверяет число 2 на нечетность и возвращает false (т.к. 2 нечетное).

// function proverka(a, str) {
//     return ((!(a % 2) && str === "chet") || ((a % 2) && str === "nechet"));
// }
//
// document.write(proverka(2, 'chet') + '<br/><br/>');




//Функция принимает три числа.
// Если среди введенных чисел есть отрицательное, ноль и положительное, функция вернет true.
// Если хотя бы два числа отрицательные, ноль или положительные функция вернет false.
// Например, вызов validator(-10,0,22) вернет true. Вызов validator(0,0,-4) вернет false.
// Функция должна работать вне зависимости от порядка введенных параметров.

// function validator(a, b, c) {
//     if ((a || b || c) ||
//         (a === b || a === c || b === c) ||
//         ((a > 0 && b > 0) || (b > 0 && c > 0) || (a > 0 && c > 0)) ||
//         ((a < 0 && b < 0) || (b < 0 && c < 0) || (a < 0 && c < 0))) {
//         return false;
//     } else {
//         return true;
//     }
// }
//
// document.write(validator(2, 0, -2) + '<br/><br/>');
