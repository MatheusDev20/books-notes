import { Person } from './../../shared/person.d';
import express from 'express'
const PORT = 3000
const app = express()


app.listen(PORT, () => {
  console.log(`Listen on ${PORT}`)
})

const printPerson = (person: Person) => {
  console.log(person.name)
}
