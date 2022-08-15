const db = require('../models/jobSearchModels');

const userController = {};

userController.getJobs = (req, res, next) => {
  // grab get parameters (username id) to query all job listings: 
  //! assume that the passed in parameters in userId is req.params.id 
  const jobQuery = 'SELECT joblistings.*, company.name AS company_id FROM joblistings INNER JOIN company ON company_id = joblistings.company_id WHERE joblistings.user_id= (SELECT _id FROM users WHERE name = $1)';
  const userId = [res.locals.name];
  console.log('this is userId', userId);
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
  const { jobtitle, url, status, note, company } = req.body;
  const arr = [jobtitle, url, status, note, res.locals.name, company, false, new Date().toISOString().slice(0, 10)];
  console.log(arr);
  const jobQuery = 'INSERT INTO joblistings(jobtitle, url, status, note, user_id, company_id, starred, dateCreated) VALUES ($1,$2,$3,$4,(SELECT _id FROM users WHERE name = $5),(SELECT _id FROM company WHERE name = $6), $7, $8)';
  // 'INSERT INTO users (name) VALUES ($1)'
  db.query( jobQuery, arr )
    .then((result) => {
      console.log(result.rows);
      res.locals.jobs = result.rows;
      return next();
    })
    .catch(err => {
      return next({
        log: 'Express error handler caught in postJob middleware error',
        status: 500,
        message: { err: 'An error in postJob' },
      });
    });
};

module.exports = userController;