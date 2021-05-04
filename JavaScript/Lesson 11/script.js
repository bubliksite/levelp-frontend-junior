//1.Верна ли запись?
const userInfo = {
  name: 'Aibol',
  age: 29
}
//Верна

//2. Что покажет консоль?
let userInfo = {
  name: 'Aibol',
  age: 29,
  12: 'Значение свойств'
}
console.log(userInfo[12]) //Значение свойств

//3. Что покажет консоль?
let userInfo = {
  name: 'Aibol',
  age: 29
}
let user = userInfo
user.age = 18
console.log(userInfo.age) //18

//4. Что покажет консоль?
let userInfo = {
  name: 'Aibol',
  age: 29,
  showInfo() {
    console.log(`${this.name}`)
  }
}
let user = userInfo
userInfo = null
console.log(user.showInfo()) //undefined

//5. Что покажет консоль?
let userInfo = {
  name: 'Aibol',
  age: 29
}
for (const key in userInfo) {
  const value = userInfo[key]
  console.log(value)
} //Aibol, 29

//6. Что покажет консоль?
let userInfo = {
  name: 'Aibol',
  age: 29,
  address: {
    city: 'Nur-Sultan',
    street: 'Kenesary'
  }
}
for (const key in userInfo.address) {
  console.log(userInfo.address[key])
} // Nur-Sultan, Kenesary

//7. Что покажет консоль?
const userInfo = {
  'name': 'Aibol',
  'age': 29,
  'like javascript': true
}
//console.log(userInfo.'like javascript')
// ERROR: Unexpected string
