const path = require('path');
const express = require('express');
const pg = require('pg');
const cookieParser = require('cookie-parser');
const port = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../dist')));

const pgURI = '';



app.get('/api', (req, res) => {
  return res.status(200).send('hello!');
});

// global error handler
app.use((err, req, res) => {
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
