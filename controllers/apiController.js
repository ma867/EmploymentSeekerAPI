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
        res.json(res.locals.data.foundEducation)
      },

        userExperienceIndex (req, res, next) {
            res.json(res.locals.data.foundEducation)
        },
        
        userEducationIndex (req, res, next) {
            res.json(res.locals.data.foundEducation)
        }, 

        userJobIndex (req, res, next) {
          res.json(res.locals.data.foundJob)
      },
      userJobShow (req, res, next) {
        res.json(res.locals.data.foundJob)
      }
        
        
  
  
  
  module.exports = apiController