const numbers = [];

function addNewItem(arr, item) {
  if (Array.isArray(arr)) {
    arr[arr.length] = item;
  } else {
    alert("arr не массив");
  }
}
addNewItem(numbers, 101);

console.log(numbers);

function findPositiveNumbers() {
  let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
  let newArr = [];

  for (let item of arr) {
    if (item > 0) {
      newArr[newArr.length] = item;
    }
  }
  console.log(newArr);
}
findPositiveNumbers();

let arr1 = [
  {
    string: "javascript",
    number: 5,
  },
  {
    string: "css",
    number: 12,
  },
  {
    string: "html",
    number: 8,
  },
];

for (let item of arr1) {
  if (item.number > 10) {
    console.log(item.string);
  }
}

const list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 30,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Belarus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

function getNumberMatches (list, value) {

  let raz = 0
  for (let item of list1) {
    for (let key in item) {
      if (item[key] == value) {
       raz++
      }
    }
  }
  if (raz == 0) {
      console.log('Совпадений не найдено')
  }
  return raz
}
console.log(getNumberMatches(list1, "JavaScript"))


const words = ['hello', 'world', 'javascript', 'html', 'react.js']

let arrWords = []

for (let item of words) {
  let obj = {}
  obj.word = item
  obj.length = item.length
  arrWords.push(obj)
}

console.log(arrWords)