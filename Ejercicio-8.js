const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let LongestWord = param[0]
  for (let i = 1; i < param.length; i++) {
    const element = param[i]
    if (element.length > LongestWord.length) {
      LongestWord = element
    }
  }
  return LongestWord
}
console.log(findLongestWord(avengers))
