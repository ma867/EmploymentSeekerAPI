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
        workExperience: ["6375913eba9471a1c5b1d1d8"],
        education: ["63758f235037f8549a057e7f"]
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
