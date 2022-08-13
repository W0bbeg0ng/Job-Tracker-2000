const express = require('express');
const path = require('path');
const pg = require('pg');
const cookieParser = require('cookie-parser');
const port = 3000;
const loginControllers = require('./routes/loginControllers');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../dist')));



app.get('/api', (req, res) => {
  console.log(name);
});

app.post('/signup', loginControllers.createUser, (req, res) => {
  return res.status(200).send(res.locals.userCreated);  //redirect to login
});

app.post('/login', loginControllers.verifyUser, (req, res) => {
  return res.status(200).send(res.locals.currUser);    //Where do I redirect users when logged in?
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
