// 1) Покажите 2 способа написания JavaScript (внутренний и внешний);
//см. файл index.html

// 2) <script src=“script.js>
// // Тут будет код
// </ script>
// Можно ли так писать?
// Нет так писать нельзя

// 3) alert(“Hello 1”); alert(“Hello 2”);
// Можно ли так писать?
//Да, можно, но не желательно

// 4) [1, 2].forEach(alert)
// Что покажет?
//Появится alert окошко дважды (1 и 2)

// 5) alert(“Hello”)
// [1 ,2].forEach(alert)
// Можно ли так писать?
// Нельзя.
// 1. Неправильные кавычки
// 2. Нужна точка с запятой после первой строки

// 6) alert(Hello);
// [1 ,2].forEach(alert)
// Можно ли так писать?
// Нельзя.
// 1. Отсутствуют кавычки

// 7)  alert(“Hello”);
// [1 ,2].forEach(alert)
// Можно ли так писать?
//Да, можно, но не желательно

// 8) Как писать однострочный комментарий?
// Вот так

// 9) Как писать многострочный комментарий?
/**
 * Вот так
 */

// 10) let a = “Apple”,  b = “Banana”, c = “Coconut”
// Можно ли так писать?
//Да

// 11) Создайте 2 переменных. Присвойте одной переменной, значение другой переменной.
let foo = 'string'
let bar = foo

// 12) let name = “Aibol”
//     let name = “Nikita”
// Нельзя заново объявлять переменную

// 13) var var = “variable”
//     var return = “return”
//     Можно ли так писать и  почему?
// Нельзя использовать зарезервированные имена

// 14) const MyBirthday = “06.08.1991”;
// MyBirthday = “21.06.1998”;
// Можно ли так писать и почему?
// Нельзя изменять значения переменных

// 15) Как получить специальное числовое значение Infinity?
console.log(Infinity + 1)
console.log(Math.log(0))
console.log(1 / 0)

// 16) Как получить специальное числовое значение NaN?
console.log(1 * undefined)

// 17) Если в переменной число выше чем (2 во второй степени),
// Какому типу данных он будет принадлежать?
//typeof (2 ** 2 + 1) === Number

// 18) let num = 10000000n;
// Тип данных num?
//typeof (num) === Bigint

// 19) let name1 = “Aibol”;
// let name2;
// Как в значение переменной name2 засунуть переменную name1?
//name2 = name1

// 20) Сделайте операцию с prompt;
let year = prompt('Please enter you birth year ')
alert("It's " + year)

// 21) Сделайте операцию с confirm;
confirm('Do you confirm it?')

let variable = 0
// 22) Сделайте строковое преобразование;
variable = String(variable)

// 23) Сделайте числовое преобразование;
variable = Number(variable)

// 24) Сделайте логическое преобразование;
variable = Boolean(variable)
console.log(variable)

// 25) превратите true в строковое преобразование;
variable = true
variable = String(variable)
console.log(variable)

// 26) превратите “223” в числовое преобразование;
let num = '223'
num = Number(num)

// 27) превратите “Andrei” в числовое преобразование;
let name = 'Andrei'
name = Number(name)
//Nan

// 28) превратите “123x56” в числовое преобразование;
let multiplication = '123x56'
multiplication = Number(multiplication)
//Nan

// 29) превратите true в числовое преобразование;
let boo = true
boo = Number(boo)
console.log(boo)
//1

// 30) превратите false в числовое преобразование;
boo = false
boo = Number(boo)

// 31) превратите “Aibol” в логическое преобразование;
let aibol = 'Aibol'
aibol = Boolean(aibol)
//true

// 32) что такое бинарный плюс;
// Оператор сложения, который применяется к двум операндам
// (y + x)

// 33) что такое унарный минус;
// Оператор вычитания, который применяется к одной операнде
// (- x)

// 34) создайте массив из 4 названий;
let fruits = ['Apple', 'Orange', 'Grape', 'Pineapple']

// 35) добавьте в конец массива одно значение;
fruits.push('Banana')

// 36) добавьте в начало массива новое значение;
fruits.unshift('Peach')

// 37) удалите из конца массива одно значение;
fruits.pop()

// 38) удалите из начала массива одно значение;
fruits.shift()

// 39) удалите второе значение массива;
fruits.splice(1, 1)

// 40) покажите на консоле 3 индекс массива;
console.log(fruits[2])

// 41) создайте итерацию в циклом for;
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// 42) создайте итерацию с циклом for, чтобы вышли на консоле цифры от 1 до 10;
for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// 43) создайте итерацию с циклом while, чтобы вышли на консоли цифры от 1 до 10;
let i = 1
while (i <= 10) {
  console.log(i)
  i++
}

// 44) создайте цикл с помощью цикла do while;
i = 0
do {
  i++
  console.log(i)
} while (i < 2)

// 45) создайте цикл чтобы на консоли вышли цифры от 10 до 1 (for либо while);
for (let i = 10; i > 0; i--) {
  console.log(i)
}
