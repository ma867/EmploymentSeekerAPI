require('dotenv').config()

const db = require('./db')
const Job = require('./job')

const starterJobs = [
    {name: 'Soccer Player'},
    {name: 'Teacher'},
    {name: 'Engineer'},
    {name: 'Nurse'},
]

Job.deleteMany({})
    .then(() => {
        Job.create(starterJobs)
            .then((createdJobs) => {
                console.log(createdJobs)
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