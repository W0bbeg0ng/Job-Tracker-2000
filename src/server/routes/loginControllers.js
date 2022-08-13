const db = require('../models/jobSearchModels');

const loginControllers = {};


//INPUT: object => {user: 'string', password: 'string'}
//OUTPUT: string => new user created
loginControllers.createUser = (req, res, next) => {
  const { name, password } = req.body;
  console.log([name, password]);
  if(!name || !password) return next({
    log: 'Express Error handler caught in createUser err',
    status: 500,
    message: { err: 'field is empty' },
  });

  //signup user
  const sql_userInsert = 'INSERT INTO users (name, password) VALUES ($1, $2)' ;
  db.query(sql_userInsert, [name, password])
    .then((result) => {
      res.locals.userCreated = 'user has been created';
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in createUser err',
        status: 500,
        message: { err: 'user already exists' },
      });
    });
};




//verifies user exists, sending them back to the signup page if they don't, and sending them to the main page if they do.
//INPUT: object => {user: 'string', password: 'string'}
//OUTPUT: 1)if not a user then send status 200 and redirect.  2) send object with user info {name, ect...} to next middleware.
loginControllers.verifyUser = (req, res, next) => {
  console.log('entered');
  const { name, password } = req.body;
  console.log(name, password);
  const sqlVerify = 'SELECT name, password FROM users WHERE name = $1';
  db.query(sqlVerify, [name])
    .then((result) => {
      console.log(result.rows[0].password === password);
      res.locals.currUser = result.rows[0];
      return next(); 
    })
    .catch(err => {
      return next({
        log: 'Express Error handler caught in verifyUser err',
        status: 500,
        message: { err: 'wrong password/username' },
      });
    });
};

module.exports = loginControllers;



//INSERT INTO users (name, password)
//VALUES ('miketyson', 'boxer');