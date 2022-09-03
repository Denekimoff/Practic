console.log('GoodJob')

function hello () {
  console.log('Hello', this)
}

const user = {
  name: 'Denis',
  lastname: 'Ekimov',
  age: '30',
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function(job, phone) {
    console.group(`${this.name} info:`)
    console.log (`Name is ${this.name}`)
    console.log (`Lastname is ${this.lastname}`)
    console.log(`job is ${job}`)
    console.log(`Phone is ${phone}`)
    console.groupEnd()
  }
}
console.log(user)

const user2 = {
  name: 'Elena',
  lastname: 'Petrova',
  age: '29',
}

user.logInfo.bind(user2, 'Frontend', '+3752911111111')() // Bind возвращает новую функцию, нужно вызывать
user.logInfo.call(user2,'Frontend', '+3752911111111') //Call возвращает и вызывает функцию
user.logInfo.apply(user2, ['Frontend', '+3752911111111']) // Apply как Call, только принимает два параметра, второй указываем в массиве


const array = [1, 2, 3, 4, 5]

// function multBy (arr, n) {
//   return arr.map( i => i * n)
// }
// console.log(multBy(array, 5))

Array.prototype.multBy = function (n) {
  return this.map( i => i * n)
}

console.log(array.multBy(4))





