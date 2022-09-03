// function confirmPassword (password, success, error) {
//   let pass = +prompt('Подтвердите свой пароль')
//   if (pass == password) {
//     success ()
//   } else {
//     error ()
//   }
// }

// function runSuccess () {
//  alert ('Пароль успешно подтверждён')
// }

// function showError () {
//   alert ('Пароль не совпадает')
// }

// console.log(confirmPassword('123123123', runSuccess, showError));

const array = ['1', '2', '3', '4', '5',]

function forEachArray (arr, callback) {
  for (let item of arr) {
    callback (item)
  }
}

function showItem (item) {
  console.log(item);
}

forEachArray (array, showItem)

const numbs = [ -1, -98, 0, 84, 15, 66, -54, 0]
const result = numbs.reduce((total, item) => {
  if (item >= 0) {
    return total + item
  } else {
    return total
  }
}, 0)

console.log(result)

;(() => {
  console.log('Privet')
  console.log('Denis')
})()

function HtmlElement (name, content, styles = {fontSize: '12px', background: 'gray',}) {
  this.name = name,
  this.content = content,
  this.styles = styles
  this.show = function () {
    this.styles.display = 'block'
  },
  this.hide = function () {
    this.styles.display = 'none'
  }
}

const htmlElement1 = new HtmlElement('span', 'Hello World', {padding: '25px',})
// htmlElement1.show()
htmlElement1.hide()
console.log(htmlElement1)
