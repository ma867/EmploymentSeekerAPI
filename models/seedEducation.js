require('dotenv').config()

const db = require('./db')

const Education = require('./education')

const starterEducation = [
  {
    schoolName: 'UFMG',
    degree: 'Bachelor',
    currentStatus: false,
    startMonth: 'March',
    startYear: '2011'
  }
]

Education.deleteMany({})
  .then(() => {
    Education.create(starterEducation)
      .then((createdEducation) => {
        console.log(createdEducation)
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
