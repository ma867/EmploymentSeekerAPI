require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 8000

//----------CREATE EXPRESS----------//
const app = express()

app.use(express.urlencoded({ extended: true }))


//----------TEST EXPRESS----------//
app.get('/', (req,res)=>{
    res.send("YERRRRR IT'S WORKING")
})





//----------LISTENER----------//
app.listen(PORT, () => {
    console.log('yerrrr its running on', PORT)
})

