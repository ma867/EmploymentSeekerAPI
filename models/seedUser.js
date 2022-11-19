require('dotenv').config()

const db = require('./db')
const User = require('./user')

const starterUsers = [
  {
    firstName: 'Chris',
    lastName: 'O\'Iyer',
    email: 'chris@whatever.com',
    password: '1234',
    preferredPronouns: 'She',
    displayPronouns: true,
    image: 'michael.url',
    city: 'Cape Eliz',
    state: 'ME',
    gender: 'Femals',
    raceEthnicity: 'Other',
    workExperience: ['63790540cd91e6955ba73b7f'],
    education: ['637905638712477633608d48']
  }
]

User.deleteMany({})
  .then(() => {
    User.create(starterUsers)
      .then((createdUser) => {
        console.log(createdUser)
        db.close()
      })
      .catch(err => {
        console.log(err)
        db.close()
      })
  }).catch(err => {
    console.log(err)
    db.close()
  })
