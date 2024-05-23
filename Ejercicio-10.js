const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let Allnumbers = 0
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    Allnumbers += element
  }
  return Allnumbers / param.length
}

console.log(average(numbers))
