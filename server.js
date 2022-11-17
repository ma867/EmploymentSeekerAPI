require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 8000
const db = require('./models/db')


//----------CREATE EXPRESS----------//
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
  })
  app.use('/invisible-strengths', require('./controllers/routeController'))

db.once('open', () => {
    console.log('YERRRRR it\'s connected to MongoDB')
})

//----------TEST EXPRESS----------//
app.get('/', (req,res)=>{
    res.send("YERRRRR IT'S WORKING")
})


//----------MIDDLEWARE----------//


//----------LISTENER----------//
app.listen(PORT, () => {
    console.log('yerrrr its running on', PORT)
})
