//----------IMPORT DEPENDENCIES----------//
const mongoose = require('mongoose')

//----------DEFINE MODEL----------//
//----------pull schema and model from mongoose----------//
const { Schema, model } = mongoose

//----------make user schema----------//
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    preferredPronouns: { type: String },
    desplayPronouns: { type: Boolean },
    image: { type: String },
    city: { type: String },
    state: { type: String },
    gender: { type: String },
    raceEthnicity: [{ type: String }],
    workExperience: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Experience' }],
    education: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education' }],
    jobsApplied: [{ type: mongoose.Schema.Types.ObjectId, ref: 'jobs' }],
    jobsSaved: [{ type: mongoose.Schema.Types.ObjectId, ref: 'jobs' }]
})

//----------make user model----------//
const User = model('User', userSchema)

//----------EXPORT MODEL----------//
module.exports = User