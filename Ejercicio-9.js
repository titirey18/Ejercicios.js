const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let Allnumbers = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    Allnumbers += element
  }
  return Allnumbers
}

console.log(sumAll(numbers))
