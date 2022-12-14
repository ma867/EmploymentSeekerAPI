const User = require('../models/user')
const Experience = require('../models/experience')
const Education = require('../models/education')
const Job = require('../models/job')

const dataController = {

  userIndex (req, res, next) {
    User.find({}, (err, foundUsers) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.users = foundUsers
        next()
      }
    })
  },

  userDelete (req, res, next) {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.user = deletedUser
        next()
      }
    })
  },

  userUpdate (req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.user = updatedUser
        next()
      }
    })
  },

  userCreate (req, res, next) {
    User.create(req.body, (err, createdUser) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.user = createdUser
        next()
      }
    })
  },

  userShow (req, res, next) {
    User.findById(req.params.id, (err, foundUser) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.user = foundUser
        next()
      }
    })
  },

  experienceIndex (req, res, next) {
    Experience.find({}, (err, foundExperiences) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.experiences = foundExperiences
        console.log(res.locals.data.experiences)
        next()
      }
    })
  },

  experienceDelete (req, res, next) {
    Experience.findByIdAndDelete(req.params.id, (err, deletedExperience) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.experience = deletedExperience
        next()
      }
    })
  },
  experienceShow (req, res, next) {
    Experience.findById(req.params.id, (err, foundExperience) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.experience = foundExperience
        next()
      }
    })
  },
  experienceUpdate (req, res, next) {
    Experience.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExperience) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.experience = updatedExperience
        next()
      }
    })
  },

  experienceCreate (req, res, next) {
    Experience.create(req.body, (err, createdExperience) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.experience = createdExperience
        next()
      }
    })
  },
  educationIndex (req, res, next) {
    Education.find({}, (err, foundEducations) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.educations = foundEducations
        next()
      }
    })
  },

  educationDelete (req, res, next) {
    Education.findByIdAndDelete(req.params.id, (err, deletedEducation) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.education = deletedEducation
        next()
      }
    })
  },

  educationUpdate (req, res, next) {
    Education.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEducation) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.education = updatedEducation
        next()
      }
    })
  },

  educationCreate (req, res, next) {
    Education.create(req.body, (err, createdEducation) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.education = createdEducation
        next()
      }
    })
  },

  educationShow (req, res, next) {
    Education.findById(req.params.id, (err, foundEducation) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.education = foundEducation
        next()
      }
    })
  },

  userExperienceShow (req, res, next) {
    User.findById(req.params.id).populate('workExperience').exec((err, foundExperience) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.experience = foundExperience.workExperience
        next()
      }
    })
  },

  userEducationShow (req, res, next) {
    User.findById(req.params.id).populate('education').exec((err, foundEducation) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.education = foundEducation.education
        next()
      }
    })
  },
  jobIndex (req, res, next) {
    Job.find({}, (err, foundJobs) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.jobs = foundJobs
        next()
      }
    })
  },
  jobCreate (req, res, next) {
    Job.create(req.body, (err, createdJob) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.job = createdJob
        next()
      }
    })
  },
  jobDelete (req, res, next) {
    Job.findByIdAndDelete(req.params.id, (err, deletedJob) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.job = deletedJob
        next()
      }
    })
  },
  jobUpdate (req, res, next) {
    Job.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedJob) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.job = updatedJob
        next()
      }
    })
  },
  jobShow (req, res, next) {
    Job.findById(req.params.id, (err, foundJob) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.job = foundJob
        next()
      }
    })
  },
  userJobsAppliedShow (req, res, next) {
    User.findById(req.params.id).populate('jobsApplied').exec((err, foundJobs) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.jobsApplied = foundJobs.jobsApplied
        next()
      }
    })
  },
  userJobsSavedShow (req, res, next) {
    User.findById(req.params.id).populate('jobsSaved').exec((err, foundJobs) => {
      if (err) {
        console.error(err)
        res.status(400).send(err)
      } else {
        res.locals.data.jobsSaved = foundJobs.jobsSaved
        next()
      }
    })
  }
}

module.exports = dataController
