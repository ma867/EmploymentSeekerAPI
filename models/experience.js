const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  employmentType: { type: String },
  companyName: { type: String, required: true },
  location: { type: String },
  currentStatus: { type: Boolean, required: true },
  startMonth: { type: String },
  startYear: { type: String }
})

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience