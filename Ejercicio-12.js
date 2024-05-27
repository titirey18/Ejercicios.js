const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i]
    for (let j = i + 1; j < param.length; j++) {
      const duplic = param[j]
      if (element === duplic) {
        param.splice(j, 1)
        j--
      }
    }
  }
  console.log(param)
}

console.log(removeDuplicates(duplicates))
