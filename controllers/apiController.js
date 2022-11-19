const apiController = {
    //Functions for user model
    userIndex (req, res, next) {
      res.json(res.locals.data.users)
    },
    
    experienceIndex (req, res, next) {
        res.json(res.locals.data.experiences)
      },

      educationIndex (req, res, next) {
        res.json(res.locals.data.educations)
      },
     

    userShow (req, res, next) {
      res.json(res.locals.data.user)
    },
    experienceShow (req, res, next) {
        res.json(res.locals.data.experience)
      },
    
      educationShow (req, res, next) {
        res.json(res.locals.data.education)
      },

        userExperienceShow (req, res, next) {
            res.json(res.locals.data.experience)
        },
        
        userEducationShow (req, res, next) {
            res.json(res.locals.data.education)
        }, 
        jobIndex (req, res, next) {
          res.json(res.locals.data.jobs)
        }, 
        jobShow (req, res, next) {
          res.json(res.locals.data.job)
        }, 
        userJobsAppliedShow (req, res, next) {
          res.json(res.locals.data.jobsApplied)
        }, 
        userJobsSavedShow (req, res, next) {
          res.json(res.locals.data.jobsSaved)
        }
  
      }
  
  
  
  module.exports = apiController