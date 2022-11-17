require('dotenv').config()

const db = require('./db')
const Experience = require('./experience')


const starterExperience = [
    {
        title: 'Teacher',
        employmentType: 'Part time',
        companyName: 'CIPMOI',
        location: 'Belo Horizonte',
        currentStatus: false,
        startMonth: 'May',
        startYear: '2012'
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
