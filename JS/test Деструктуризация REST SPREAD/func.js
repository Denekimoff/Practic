function showHello () {
  console.log('Hello Work')
}

function calcTotalArray (arr) {
  return arr.reduce((acc, item) => acc += item, 0)
}

export { showHello, calcTotalArray }