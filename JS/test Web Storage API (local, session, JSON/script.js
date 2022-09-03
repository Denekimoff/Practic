console.log('GoodJob')

// Работа с Cookie:
document.cookie = 'token=q32r3w4fge5tgp050gkje54onmrf; path=/'

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

console.log(getCookie('token'))

// Работа с JSON:
const user = `
{
  "name": "Denis",
  "age": 30,
  "isAdmin": false
}
`
console.log(user)

const userObject = JSON.parse(user) //Преобразование в Объект
console.log(userObject)

//--------------------------------------------------------------------
const divElement = {
  name: 'div',
  className: 'block',
  position: 45,
}
console.log(divElement)

const divElementJson = JSON.stringify(divElement) //Преобразование в строку
console.log(divElementJson)

//---------------------------------------------------------------------

//Работа с LocalStorage

localStorage.setItem('name', 'Denis') // Добавление

console.log(localStorage.getItem('name')) // Чтение

localStorage.removeItem('name') // Удаление

//=---------------------------------------------------------------------

const admin = {
  name: 'Petr',
  lastname: 'Petrov',
  age:'30',
  isAdmin: true,
}

const adminJson = JSON.stringify(admin)

localStorage.setItem('administrator', adminJson)
console.log(localStorage.getItem('administrator'))

const newAdmin = JSON.parse(adminJson)
console.log(newAdmin)


// --------------------------------------------------------------------
// События Storage

