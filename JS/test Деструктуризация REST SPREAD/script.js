import { showHello, calcTotalArray } from './func.js'
import {newArr} from './array.js'


console.log(calcTotalArray(newArr))
console.log('Work Деструктуризация');

const users = ['Anna', 'Viktor', 'John', 'Petr']

let [user1, user2, user3, user4] = users

let [newUser1, , newUser3, ] = users
console.log(newUser1, newUser3)

;[newUser1, newUser3] = [newUser3, newUser1]
console.log(newUser1, newUser3)

const data = [['name', 'Anna'], ['age', 26], ['profession', 'Developer']]
const iser = {}
data.forEach(item => {
  const [key, value] = item
  iser[key] = value
})

console.log(iser);

const profile = ['codesweetly.com', 'Male', ['John', 'Doe']]
const [webSite] = profile
const [,,[userName]] = profile

console.log(webSite)
console.log(userName)

const car = {
  brand: 'KIA',
  age: '2019',
}

const { brand, age: ageCar, isTruck = false} = car
console.log(brand, ageCar, isTruck)

const profile2 = {
  website: 'codesweetly.com',
  gender: 'Female',
  fullName: {
    firstName: 'Anna',
    lastName: 'Johnson'
  },
  children: ['Lena', 'Ivan']
}
