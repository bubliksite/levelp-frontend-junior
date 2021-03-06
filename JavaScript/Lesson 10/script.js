// Домашнее задание №3
// 1) Создайте функцию. Когда вызываете функцию, она должна показать в консоле
// текст “Hello World”.
helloWorld()

function helloWorld() {
  console.log('Hello World')
}

// 2) Создайте функцию. Передайте этой функций 2 параметра. Функция должна вернуть
// сложение этих двух параметров и показать его в консоле.
addition(5, 8)

function addition(x, y) {
  return x + y
}

// 3) Создайте объект. Внутри этого объекта должно быть 5 свойств (ключ, значение).
// 5-ое свойство должно быть функцией. Если обратиться к этой функции, она должна
// вернуть сложения 1-го и 2-го свойства.
let user = {
  name: 'Jack',
  lastname: 'Jillinghall',
  age: 40,
  isAlive: true,
  fullname() {
    return `${this.name} ${this.lastname}`
  }
}

user.fullname()

// 4) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// Теперь через JavaScript поменяйте это слово на другое.
let app = document.getElementById('app')
app.innerHTML = 'World'

// 5) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// Теперь через JavaScript поменяйте ему цвет на красный.
app.style.color = 'red'

// 6) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// Теперь через JavaScript поменяйте ему шрифт на 50 пикселей.
app.style.fontSize = '50px'

// 7) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// Создайте кнопку button. При нажатий на эту кнопку, поменяйте ему слово на другое.
let button = document.getElementById('button')
button.onclick = () => {
  app.innerHTML = 'Hello'
}

// 8) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// При клике на этот div, должно на консоле появиться слово «Кликнул»
app.onclick = () => {
  console.log('Кликнул')
}

// 9) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// При наведение мышки на этот div, должно на консоле появиться слово «Навел мышку»
app.onmouseover = () => {
  console.log('Навел мышку')
}
app.addEventListener('mouseover', () => {
  console.log('Навел мышку (через eventListener)')
})
//Айбол, у меня здесь вопрос - в чем разница в данном случае в использовании
// addEventListener и on(Event)

// 10) Создайте в HTML div с id-шкой «app». Напишите внутри какое-нибудь слово.
// Если навел мышку а потом убираешь с этого div-а, должно на консоле
// появиться слово «Убрал мышку»
app.onmouseout = () => {
  console.log('Убрал мышку')
}
