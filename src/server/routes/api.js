const express = require('express');

const companyController = require('../controllers/companyController');
const userController = require('../controllers/userController');
const loginControllers = require('../controllers/loginControllers');

const router = express.Router();

//ROUTER TO /JOBS
// get request for specific user @ /api/jobs
router.get('/jobs', loginControllers.checkForToken, loginControllers.verifyToken, userController.getJobs, ( req, res ) => {
  return res.status(200).json(res.locals.jobs);
});

// post request for user to add to their list of applications
router.post('/jobs', userController.postJob, ( req, res ) => {
  return res.status(200).json({ job: res.locals.job });
});


//ROUTER TO /COMPANIES
// get request for specific user @ /api/companies
router.get('/companies', loginControllers.checkForToken, loginControllers.verifyToken, companyController.getCompanies, ( req, res ) => {
  return res.status(200).json(res.locals.companies);
});


//***FIX THE CODE IN companyController BEFORE UNCOMMENTING**
// post request for user to add to their list of companies
// router.post('/companies', loginControllers.checkForToken, loginControllers.verifyToken, companyController.postCompanies, ( req, res ) => {
//   return res.status(200).json({ job: res.locals.companies });
// });


module.exports = router;