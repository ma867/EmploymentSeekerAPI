const apiController = {
    //Functions for user model
    userIndex (req, res, next) {
      res.json(res.locals.data.foundUsers)
    },
    
    experienceIndex (req, res, next) {
        res.json(res.locals.data.foundExperiences)
      },

      educationIndex (req, res, next) {
        res.json(res.locals.data.foundEducations)
      },
     

    userShow (req, res, next) {
      res.json(res.locals.data.foundUser)
    },
    experienceShow (req, res, next) {
        res.json(res.locals.data.foundExperience)
      },
    
      educationShow (req, res, next) {
        res.json(res.locals.data.foundEducation)
      },

        userExperienceIndex (req, res, next) {
            res.json(res.locals.data.foundEducation)
        },
        
        userEducationIndex (req, res, next) {
            res.json(res.locals.data.foundEducation)
        }
      }
  
  
  
  module.exports = apiController