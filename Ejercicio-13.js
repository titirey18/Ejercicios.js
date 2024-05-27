const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
function finderName(array, param) {
  if (array.includes(param)) {
    return `${true}, position: ${array.indexOf(param)}`
  } else {
    return false
  }
}
console.log(finderName(nameFinder, 'Bruce'))
