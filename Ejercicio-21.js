const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const max = []
const min = []

for (const element of users) {
  if (element.years < 18) {
    min.push(element)
  }
  if (element.years >= 18) {
    max.push(element)
  }
}

console.log('Usuarios menores de edad: ', min)
console.log('Usuarios mayores de edad: ', max)
