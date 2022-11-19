const mongoose = require('mongoose')

// Education Schema
const educationSchema = new mongoose.Schema({
  schoolName: { type: String, required: true },
  degree: String,
  currentStatus: Boolean,
  startMonth: String,
  startYear: String,
  endMonth: String,
  endYear: String
})
// Make A Model From The Schema

const Education = mongoose.model('Education', educationSchema)

// Export The Model For Use In The App

module.exports = Education
