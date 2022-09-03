const button1 = document.querySelector('#button1')
let i = 0

// function handleCounterClick () {
//   total++

//   if (total <= 5) {
//     button1.textContent = `Button ${total}`
//   } else {
//     button1.removeEventListener('click', handleCounterClick)
//   }
// }
// button1.addEventListener('click', handleCounterClick)

// Объект событий (event/e)
// function handleCounterClick (e) {
//   i++

//   if(i <= 5) {
//     e.currentTarget.textContent = `Button ${i}`
//   } else {
//     e.currentTarget.removeEventListener('click', handleCounterClick)
//   }
// }

// button1.addEventListener('click', handleCounterClick)

const divElement = document?.querySelector('.display-none')
const buttonClick = document?.querySelector('#button2')

buttonClick.addEventListener('click', () => {
  divElement.classList.toggle('display-show')
  buttonClick.classList.toggle('btn-color')
})