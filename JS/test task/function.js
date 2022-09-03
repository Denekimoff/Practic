let colorEyesUser = "color";
const color_Eyes_User = "color";
var colorUser2Eye = "color";

let user = "Вася";
let userName = "Вася";
console.log(user);


const mySity = {
  city: 'New York',
  popular: true,
  country: 'USA'
}

console.log(mySity.city)

console.log(mySity.popular)

mySity.city = 'Bobruisk'
console.log(mySity.city)

mySity.town = 'Domansk'
console.log(mySity.town)

delete mySity.city
console.log(mySity.city) // undefined

mySity['city'] = 'Minsk'
console.log(mySity.city)

const addCountryCity = 'twocity'
mySity[addCountryCity] = 'Moscow'
console.log(mySity.twocity)

const myBox = {
  car: 'Boxter',
  case: {
    item: 'brush',
    ites: 'cup',
  },
  wheels: 'Michelin'
}
console.log(myBox.case.ites)

delete myBox.case.item
console.log(myBox.case.item)


const myName = 'Denis'
const postsQty = 30

const userProfile = {
  myName,
  postsQty,
  hasSignedAgreement: false
}

// Цикл While (Пока переменная count будет меньше или равно 10, в консоль будут выводится все значения count)
let count = 0
while (count <= 10) {
  console.log(count)
  count++
}

// Цикл Do While (Выводим в консоль результат numm, пока numm будет больше 0)
let numm = 10
do {
  console.log(numm)
  numm--
} while(numm > 0)

// Цикл For (Выводим в консоль все чётные числа до 30)
for (let m = 0; m <= 30; m += 2) {
  console.log(m)
}

// Цикл For (Вывести в консоль результат возведения в степень каждого элемента массива arr)
let arr = [5, 7, 9, 1, 0]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2)
}

// Цикл For Of (Вывести в консоль результат возведения в степень 3 каждого элемента массива arrr)
let arrr = [4, 5, 6, 7, 8, 13, 29]
for(let item of arrr) {
  console.log(item ** 3)
}

// Цикл For In (Вывести в консоль все ключи и значения этих ключей)
let obj = {
  'name': 'Denis',
  'age': '29',
  'number': '298734927'
}
for(let keys in obj) {
  console.log(`Ключ ${keys}, Значение ${obj[keys]}!`)
}

// Task 1
let task1 = 0
while (task1 <= 50) {
  console.log(task1)
  task1++
}
// Task 2
let task2 = [1, 2, 3, 4, 5]
// for (let iTe of task2) {
//   console.log(iTe)
// }
for (let iTe = 0; iTe < task2.length; iTe++) {
  console.log(task2[iTe])
}
// Task 3
let resultTask3 = 1
let task3 = [2, 3, 4, 5]
for (let iTe2 = 0; iTe2 < task3.length; iTe2++) {
  resultTask3 = resultTask3 * task3[iTe2]
}
console.log(resultTask3)
// Task 4
let obj4 = {
  'Minsk' : 'Belarus',
  'Moscow' : 'Russua',
  'Kiev' : 'Ukraine'
}
for (let item4 in obj4) {
  console.log (`${item4} - это ${obj4[item4]}`)
}

// const user = {
//   name: 'Denis',
//   age: 30,
//   phone: +375298734927,
//   email: 'ekimoffdenis@gmail.com',
//   password: 12345,
// }

// user.password = 54321
// user.city = 'Minsk'
// delete user.phone

// console.log(user)

// const product = {
//   id: '15',
//   name: 'Пылесос',
//   brand: 'Bosch',
//   value: 1,
//   cost: '1200,00 rub',
//   totalPrice: '1200,00 rub',
// }

// console.log(product)

// for(let key in product) {
//   console.log(`Ключ: ${key}, Значение: ${product[key]}!`)
// }


//   let copyProduct = {}
//   for (const key in product) {
//     copyProduct[key] = product[key]
//   }
//   return copyProduct

// const productTwo = copyProduct(product)
// console.log(productTwo)

// console.log(product !== productTwo)


// function getLocation () {
//   return this.country + ' : ' + this.continent
//  }

// let developer1 = {
//   firstName: 'Maria',
//   lastName: 'Y.',
//   country: 'Cyprus',
//   continent: 'Europe',
//   age: 30,
//   language: 'Java',
//   getLocation,
// }

// let developer2 = {
//   getLocation,
//   firstName: 'Victoria',
//   lastName: 'T.',
//   country: 'Puerto Rico',
//   continent: 'Americas',
//   age: 70,
//   language: 'Python',
// }

// console.log(developer1.getLocation())
// console.log( developer2.getLocation())

// const instanceUser = {
//   firstName: 'Denis',
//   lastName: 'Ekimov',
//   age: 30,
//   birthYearth: 1992,
//   showFullName () {console.log(this.firstName + ' ' + this.lastName)},
//   getUserName () {return '@' + this.firstName.toLowerCase() + '_' + this.lastName.toLowerCase()}
// }
// console.log(instanceUser.showFullName())
// console.log(instanceUser.getUserName())

// // Конструктор NEW

// function User (name, lastName, age) {
//   this.firstName = name
//   this.lastName = lastName
//   this.age = age
//   this.year = 2022 - age
//   this.showFullName = function () {
//     console.log(this.firstName + ' ' + this.lastName)
//   }
//   this.getUserName = function () {
//     return '@' + this.firstName.toLowerCase() + '_' + this.lastName.toLowerCase()
//   }
// }

// const user2 = new User('Ivan', 'Frolov', 25)
// console.log(user2)
// console.log(user2.showFullName())
// console.log(user2.getUserName())