require('dotenv').config()

const db = require('./db')
const User = require('./user')

const starterUsers = [
    {
        firstName: 'Michael',
        lastName: 'O\'Brien',
        email: 'michael@whatever.com',
        password: '1234',
        preferredPronouns: 'He/Him',
        displayPronouns: true,
        image: 'michael.url',
        city: 'Somerville',
        state: 'Massachusetts',
        gender: 'Male',
        raceEthnicity: 'White / Latino',
        workExperience: ["637586c42436ab0a23b8a0e1"],
        education: ["637586dd7555a8f1e2e2b290"]
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
