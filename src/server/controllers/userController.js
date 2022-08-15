const db = require('../models/jobSearchModels');

const userController = {};

userController.getJobs = (req, res, next) => {
  // grab get parameters (username id) to query all job listings: 
  //! assume that the passed in parameters in userId is req.params.id 
  const jobQuery = 'SELECT joblistings.*, company.name AS company_id FROM joblistings INNER JOIN company ON company_id = joblistings.company_id WHERE joblistings.user_id= $1 ';
  const userId = [req.params.id];
  console.log('this is req.params.id', req.params.id, 'this is userId', userId);
  db.query( jobQuery, userId )
    .then((result) => {
      console.log(result.rows);
      res.locals.jobs = result.rows;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught in getJobs middleware error',
        status: 500,
        message: { err: 'An error in getJobs' },
      });
    });
};

userController.postJob = (req, res, next) => {
  // grab all parameters user can post- even if it isnt inputted
  // check if company name exists in input- else create new company in company table
  // const { jobTitle, url, status, note, company } = req.body;
  // const jobQuery = 'SELECT joblistings.*, company.name AS company_id, FROM joblistings INNER JOIN '

  return next();
};

module.exports = userController;