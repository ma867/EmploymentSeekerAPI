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
        }
  
      }
  
  
  
  module.exports = apiController