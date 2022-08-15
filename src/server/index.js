const express = require('express');
const path = require('path');
const pg = require('pg');
const cookieParser = require('cookie-parser');
const port = 3000;
const app = express();
const loginControllers = require('./routes/loginControllers');

//jwt
const dotenv = require('dotenv').config('../.env');
const jwt = require('jsonwebtoken');
//const JWT_SECRET = '0fjkkldfj838y8ryy92oihjfdjfhajkf2DKFEHIOjkdfAj5792jDfjkdfdDfldfkjajfkIEjodkfjkkbvnzadkjfatdjfkVNEujfjdk4810df0f9fd034Jdo34jlr3fd'

app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../dist')));







app.get('/api', (req, res) => {
  console.log('hi');
});

app.post('/signup', loginControllers.createUser, (req, res) => {
  return res.status(200).redirect('/login');  //redirect to login
});

app.post('/login', 
  loginControllers.verifyUser,
  loginControllers.createToken, 
  (req, res) => {
    console.log('got to the end');
    return res.status(200).redirect('/afterLogin');    //Where do I redirect users when logged in?
  });

//temp rout to test token
app.get('/afterLogin', loginControllers.checkForToken, loginControllers.verifyToken, (req, res) => {
  res.status(200).send('you can enter');
});



// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express Error handler caught in unknown middleware err',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errObj = Object.assign(defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
