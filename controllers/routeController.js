const express = require('express')
const router = express.Router()
const dataController = require('./dataController.js')
const apiController = require('./apiController.js')

// add routes for user model
// Index
router.get('/api/user', dataController.userIndex, apiController.index)
// Delete
router.delete('/api/user/:id', dataController.userDelete, apiController.show)
// Update
router.put('/api/user/:id', dataController.userUpdate, apiController.show)
// Create
router.post('/api/user', dataController.userCreate, apiController.show)
// Show
router.get('/api/user/:id', dataController.userShow, apiController.show)

// Index
router.get('/api/experience', dataController.experienceIndex, apiController.index)
// Delete
router.delete('/api/experience/:id', dataController.experienceDelete, apiController.show)
// Update
router.put('/api/experience/:id', dataController.experienceUpdate, apiController.show)
// Create
router.post('/api/experience', dataController.experienceCreate, apiController.show)
// Show
router.get('/api/experience/:id', dataController.experienceShow, apiController.show)


// Index
router.get('/api/education', dataController.educationIndex, apiController.index)
// Delete
router.delete('/api/education/:id', dataController.educationDelete, apiController.show)
// Update
router.put('/api/education/:id', dataController.educationUpdate, apiController.show)
// Create
router.post('/api/education', dataController.educationCreate, apiController.show)
// Show
router.get('/api/education/:id', dataController.educationShow, apiController.show)

module.exports = router