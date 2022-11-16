const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  employmentType: { type: String },
  companyName: { type: String, required: true },
  location: { type: String },
  currentStatus: { Boolean, required: true },
  startMonth: { type: String },
  startYear: { type: String }
})

const Experience = mongoose.model('Fruit', fruitSchema)

module.exports = Experience