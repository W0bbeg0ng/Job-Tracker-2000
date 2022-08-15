const db = require('../models/jobSearchModels');
const jwt = require('jsonwebtoken');

const loginControllers = {};


//INPUT: object => {user: 'string', password: 'string'}
//OUTPUT: string => new user created
loginControllers.createUser = (req, res, next) => {
  const { name, password } = req.body;

  //check that all fields are not empty
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
  const sqlVerify = 'SELECT name, password FROM users WHERE name = $1';
  db.query(sqlVerify, [name])
    .then((result) => {
      if(password !== result.rows[0].password) throw Error({message: { err: 'wrong password/username' }})
      res.locals.currUser = result.rows[0];
      return next(); 
    })
    .catch(err => {
      console.log('entered errror')
      return next({
        log: 'Express Error handler caught in verifyUser err',
        status: 500,
        message: { err: 'wrong password/username' },
      });
    });
};




loginControllers.createToken = (req, res, next) => {
  console.log('here is the header', req.header);
  const { name } = req.body;
  jwt.sign({name}, process.env.JWT_SECRET, { expiresIn: '72h'}, (err, token) => {
    res.locals.myToken = {token};
    next();
  });
};


loginControllers.checkForToken = (req, res, next) => {
  const header = req.headers['authorization'];
  if(typeof header !== 'undefined') {
    const bearer = header.split(' ');
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

loginControllers.verifyToken = (req, res, next) => {
  //verify the JWT token generated for the user
  jwt.verify(req.token, process.env.JWT_SECRET, (err, authorizedData) => {
    if(err){
      //If error send Forbidden (403)
      console.log('ERROR: Could not connect to the protected route');
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data 
      res.json({
        message: 'Successful log in',
        authorizedData
      });
      console.log('SUCCESS: Connected to protected route');
    }
  });
};

module.exports = loginControllers;



