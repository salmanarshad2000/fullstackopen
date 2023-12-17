const mongoose = require('mongoose')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('usage: node mongo.js <password> [<name> <number>]')
  process.exit(1)
}

const url = `mongodb+srv://user0:${encodeURIComponent(process.argv[2])}@cluster0.qfq2uqz.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person
    .find({})
    .then(result => {
      console.log('phonebook:')
      result.forEach(person => {
        console.log(`${person.name} ${person.number}`)
      })
      mongoose.connection.close()
    })
}
if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })
  person
    .save()
    .then(result => {
      console.log(`person created, id = ${result.id}`)
      mongoose.connection.close()
    })
}
