const max = []
const medium = []
const min = []

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    min.push(movies[i])
  } else if (movies[i].durationInMinutes > 200) {
    max.push(movies[i])
  } else {
    medium.push(movies[i])
  }
}

console.log(max)
console.log(medium)
console.log(min)
