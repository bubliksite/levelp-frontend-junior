// 1) Существует два варианта синтаксиса для создания пустого массива. Напишите их.
let EmptyArr = []
let EmptyArrNew = new Array()

// 2) Создайте массив arr. Занесите туда 5 названий машин.
let arr = ['Lada', 'Fiat', 'Volvo', 'Saab', 'Chrysler']

// 3) Покажите в консоли второй индекс массива arr
console.log(arr[2])

// 4) Покажите в консоли первое значение массива arr
console.log(arr[0])

// 5) Занесите 6-ую машину в массив (без метода push, unshift)
arr[6] = 'Skoda'

// 6) Покажите длину массива
console.log(arr.length)

// 7) Создайте массив arr2. Занесите туда: строку, цифру, boolean значение,
// объект (с двумя ключами: name и age), функцию(возвращает текст: 'Hello')
let arr2 = [
  'string',
  12,
  true,
  (person = {
    name: 'Uve',
    age: 78
  }),
  function showHello() {
    console.log('Hello')
  }
]

// 8) Покажите в консоли (массив arr2): строку, цифру, boolean значение,
// объект (значение ключей: name и age), функцию(текст: 'Hello')
for (let item of arr2) {
  if (typeof item === 'object') {
    for (let value in item) {
      console.log(value)
    }
  } else if (typeof item === 'function') {
    item()
  } else {
    console.log(item)
  }
}

// 9) Создайте массив arr3. Занесите туда 5 названий городов. Сделайте
// перебор массива с помощью цикла for и for in
let arr3 = ['Saint-Petersburg', 'Helsinki', 'Toronto', 'Goteborg', 'Prague']
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i])
}
for (let i in arr3) {
  console.log(arr3[i])
}

// 10) let arr4 = ['Aibol', 'Nikita', 'Sergei']. Удалите с массива Sergei,
// с помощью метода splice.
let arr4 = ['Aibol', 'Nikita', 'Sergei']
arr4.splice(2, 1)

// 11) let arr4 = ['Aibol', 'Nikita', 'Sergei', 'Anton', 'Dima']. Удалите
// с массива Anton и  Dima, с помощью метода splice.
arr4 = ['Aibol', 'Nikita', 'Sergei', 'Anton', 'Dima']
arr4.splice(3, 2)

// 12) let arr4 = ['Aibol', 'Nikita', 'Sergei', 'Anton', 'Dima']. Добавьте
// в массив Kiril с помощью метода splice.
arr4 = ['Aibol', 'Nikita', 'Sergei', 'Anton', 'Dima']
arr4.splice(arr4.length, 0, 'Kirill')

// 13) let arr4 = ['Aibol', 'Nikita', 'Sergei', 'Anton', 'Dima']. Добавьте
// в массив Anna и Katya  с помощью метода splice.
arr4 = ['Aibol', 'Nikita', 'Sergei', 'Anton', 'Dima']
arr4.splice(arr4.length, 0, 'Anna', 'Katya')

// 14) let arr5 = ['Aibol', 'Nikita', 'Sergei']. Создайте новый массив
// и дублируйте туда Sergei (с помощью метода slice).
arr5 = ['Aibol', 'Nikita', 'Sergei']
let arrNew5 = arr5.splice(2, 1)

// 15) let arr5 = ['Aibol', 'Nikita', 'Sergei']. Создайте новый массив и
// дублируйте туда весь массив arr5 (с помощью метода slice).
arr5 = ['Aibol', 'Nikita', 'Sergei']
arrNew5 = arr5.splice(0, arr5.length)

// 16) let arr6 = ['Aibol', 'Nikita', 'Sergei']. Сделайте дублирование
// этого массива с помощью concat.
let arr6 = ['Aibol', 'Nikita', 'Sergei']
let arrNew6 = []
arrNew6.concat(arr6)

let string = 'Antananarivo'
// 17) Приведите пример с indexOf
string.indexOf('Lada') // 1

// 18) Приведите пример с lastIndexOf
string.lastIndexOf('n') // 6

// 19) Приведите пример с includes
string.includes('t') //true

// 20) Приведите пример с find
arr.find(hasFourLetter)

// 21) Приведите пример с findIndex
arr.findIndex(hasFourLetter) // 0

// 22) Приведите пример с filter
arr.filter(hasFourLetter) // "Lada", "Fiat", "Saab"

// 23) Приведите пример с sort
arr.sort() // "Chrysler", "Fiat", "Lada", "Saab", "Volvo"

// 24) Приведите пример с reverse
arr.reverse() // "Volvo", "Saab", "Lada", "Fiat", "Chrysler"

// 25) Приведите пример с split
let monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек'
monthString = monthString.split(',') // ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"]

// 26) Приведите пример с join
monthString.join(', ') // "Янв, Фев, Мар, Апр, Май, Июн, Июл, Авг, Сен, Окт, Ноя, Дек"

// 27) Приведите пример с map
let numbers = [1, 2, 3, 4]
let sqrtNumbers = numbers.map((currentValue) => {
  return currentValue * currentValue
}) // [1, 4, 9, 16]

// 28) Приведите пример с isArray
Array.isArray(numbers) //true

// 29) Приведите пример с forEach
numbers.forEach((currentValue) => {
  console.log(currentValue)
})

// 30) Приведите пример с try catch
try {
  throw 'error'
} catch (e) {
  console.error('Ошибка')
}

//Функции
function hasFourLetter(element) {
  return element.length === 4
}
