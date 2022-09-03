const cardsElement = document.querySelector('.cards')
console.log(cardsElement)

const oneElement = document.querySelector('#one')
console.log(oneElement)

const listElement = document.querySelector('.list')
console.log(listElement)

console.log(oneElement.nextElementSibling)

const buttonElement = document.querySelector('button')
const buttonContentElement = buttonElement.textContent
buttonElement.innerHTML = `<strong>${buttonContentElement}</strong>`

// const listsElement = document.querySelectorAll('.list li')
// for (let item of listsElement) {
//   item.innerHTML = `<strong>${item.textContent}</strong>`
// }

const listsElements = document.querySelectorAll('.list li')
listsElements.forEach((item) => {
  item.innerHTML = `<strong>${item.textContent}</strong>`
  if(item.hasAttribute('class') == false) {
    item.setAttribute('class', 'item')
  }
  item.classList.add('class-new')
  item.classList.replace('class-new', 'class-new2')
  item.style.color = 'tomato'
  item.style.fontSize = '24px'
})

const parsElement = document.createElement('p')
parsElement.classList.add('text-p')
const parssElement = parsElement.textContent = 'lorem20'
const divContent = document.querySelector('.container')
divContent.append(parssElement)

const links = [
  'https://learn.javascript.ru/',
  'https://javascript.ru/forum/',
  'https://learn.javascript.ru/screencast/webpack',
  'https://learn.javascript.ru/courses',
]

// for(let item of links) {
//   const aElement = item.createElement('a')
// }
// for(let i = 1; i < links.length + 1; i++) {
//   const atrElement = aElement.setAttribute('href', `${links[i + 1]}`)
// }


