require('dotenv').config()

const db = require('./db')
const Experience = require('./experience')


const starterExperience = [
    {
        title: 'Nure',
        employmentType: 'Full time',
        companyName: 'MMC',
        location: 'Portland',
        currentStatus: false,
        startMonth: 'May',
        startYear: '2022'
    }
]

Experience.deleteMany({})
    .then(() => {
        Experience.create(starterExperience)
            .then((createdExperience) => {
                console.log(createdExperience)
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
