const db = require('../models/jobSearchModels');

const companyController = {};

//Get all companies related to current user.
companyController.getCompanies = (req, res, next) => {
  const companyQuery = 'SELECT * FROM "company" WHERE user_id = (SELECT _id from users WHERE name = $1)';
  const userId = [res.locals.name];
  db.query( companyQuery, userId )
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


//CODE BELOW MOSTLY WORKS, BUT JUST NEED TO IMPROVE THE INSERT QUERY
// //post company info and assign to current user.
// companyController.postCompanies = (req, res, next) => {
//   console.log('entered postCompanies');
//   const user = res.locals.name;
//   const inputCompany = req.body;
  
//   const allEntries = ['name', 'url', 'linkedin_url', 'date_created', 'date_last_checked', 'starred', 'user_id'];
//   const inputValues = [];

//   allEntries.forEach(el => {
//     if(req.body.hasOwnProperty(el)) {
//       inputValues.push(req.body[el]);
//     } else {
//       inputValues.push( el === 'date_created' ? Date.now().toString() : '');
//     }
//   });

//   console.log({inputValues});
//   const companyPut = 'INSERT INTO company (name, url, linkedin_url, date_created, date_last_checked, starred, user_id) VALUE ($1, $2, $3, $4, $5, $6, $7)';
//   //const VALUES ('UFC', 'ufc.com', 'https://www.linkedin.com/company/ufc/', '12/5/2021', 'true', (SELECT _id from users WHERE name='miketyson')  );";
//   db.query( companyPut, inputValues )
//     .then((result) => {
//       console.log(result);
//       return next();
//     })
//     .catch(err => {
//       return next({
//         log: 'Express error handler caught in postCompanies middleware error',
//         status: 500,
//         message: { err: 'An error in postCompanies' },
//       });
//     });

//   console.log('trying to figure out');
//   return next();
// };



module.exports = companyController;