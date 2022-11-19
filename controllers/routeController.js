const express = require('express')
const router = express.Router()
const dataController = require('./dataController.js')
const apiController = require('./apiController.js')

// add routes for user model
// user routes
// Index
router.get('/api/user', dataController.userIndex, apiController.userIndex)
// Delete
router.delete('/api/user/:id', dataController.userDelete, apiController.userShow)
// Update
router.put('/api/user/:id', dataController.userUpdate, apiController.userShow)
// Create
router.post('/api/user', dataController.userCreate, apiController.userShow)
// Show
router.get('/api/user/:id', dataController.userShow, apiController.userShow)


// experience routes
// Index
router.get('/api/experience', dataController.experienceIndex, apiController.experienceIndex)
// Delete
router.delete('/api/experience/:id', dataController.experienceDelete, apiController.experienceShow)
// Update
router.put('/api/experience/:id', dataController.experienceUpdate, apiController.experienceShow)
// Create
router.post('/api/experience', dataController.experienceCreate, apiController.experienceShow)
// Show
router.get('/api/experience/:id', dataController.experienceShow, apiController.experienceShow)
//Show all user experience
router.get('/api/user/:id/experience', dataController.userExperienceShow, apiController.userExperienceShow)

// education routes
// Index
router.get('/api/education', dataController.educationIndex, apiController.educationIndex)
// Delete
router.delete('/api/education/:id', dataController.educationDelete, apiController.educationShow)
// Update
router.put('/api/education/:id', dataController.educationUpdate, apiController.educationShow)
// Create
router.post('/api/education', dataController.educationCreate, apiController.educationShow)
// Show
router.get('/api/education/:id', dataController.educationShow, apiController.educationShow)
//Show all user education
router.get('/api/user/:id/education', dataController.userEducationShow, apiController.userEducationShow)

//jobs routes

router.get('/api/job', dataController.jobIndex, apiController.jobIndex)

router.get('/api/job/:id', dataController.jobShow, apiController.jobShow)



module.exports = router