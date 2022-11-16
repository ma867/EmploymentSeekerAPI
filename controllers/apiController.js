const apiController = {
    index (req, res, next) {
      res.json(res.locals.data.employmentSeekerApi)
    },
    show (req, res, next) {
      res.json(res.locals.data.employmentSeekerApi)
    }
  }
  
  
  module.exports = apiController