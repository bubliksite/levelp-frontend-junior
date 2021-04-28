//1) Создать 6 переменных с разными типами данных
let theNumber = 10
let theString = 'Some string'
let theBoolean = true
let theObject = {
  id: 1,
  title: 'Some news title',
  isPublished: true
}
let theNull = null
let theUndefined = undefined

//2) Выведите типы этих переменных (чтобы например в консоли была надпись: string или number)
console.log('The type of variable theNumber is ' + typeof theNumber)
console.log('The type of variable theString is ' + typeof theString)
console.log('The type of variable theBoolean is ' + typeof theBoolean)
console.log('The type of variable theObject is ' + typeof theObject)
console.log('The type of variable theNull is ' + typeof theNull)
console.log('The type of variable theUndefined is ' + typeof theUndefined)

//3) Создайте переменные c разными именами (покажите как можно задавать имена переменным, а как нельзя)
//Допустимые имена перменных
let userName = '...'
let user12 = '...'
let $ = '...'
let _ = '...'
//Недопустимые имена переменных (не должны начинаться с цифры и содержать что-то кроме букв, цифр и символов $ и _, а также совпадать с зарезервированными именами)
/*
let 1abc = '...'
let user-name = '...'
let let = '...'
let return = '...'
let Number = '...'
 */
//Регистр имеет значение, ниже разные переменные
let bubbleGum //рекомендуемый способ написания
let BubbleGum
//Нелатинские буквы разрешены, но использовать их не рекомендуется
let имяПользователя = '...'
let 我 = '...'

//4) Выведите в консоли слово "Hello world"
console.warn('Hello World').   // Оригинально ))   Показываешь предупреждение

//5) 5==2 && 4>2  -   каким будет ответ?
console.log(5 === 2 && 4 > 2) //false

//6) 5==5 || 5>9  -   каким будет ответ?
console.log(5 === 5 || 5 > 9) //true

//7) 5>2 && 7>12 || 7>3 && 6<8   -   каким будет ответ?
console.log((5 > 2 && 7 > 12) || (7 > 3 && 6 < 8)) //true

//8) if(7>3){
//      alert('Hello everybody')
//    }    -   каким будет ответ?
if (7 > 3) {
  alert('Hello everybody')
} // Hello everybody

//11) if(5>8 && 2>1){
//       alert('Hello')
//     }else{
//       alert('Bye Bye')
//     }    -   каким будет ответ?
if (5 > 8 && 2 > 1) {
  alert('Hello')
} else {
  alert('Bye Bye')
} //Bye Bye

//8%3  -   каким будет ответ?
console.log('8 % 3 = ' + (8 % 3)) // 2
