'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
//required to use js and css files in public directory
app.use(express.static('public'));

const COOKIE_NAME = 'a-b-test';

app.get('/', (req, res) => {
  //set cookie if not set already
  if (!req.cookies[COOKIE_NAME]) {
    res.cookie(COOKIE_NAME, randomAB());
  }
  //sendFile needed for serving html files from views directory
  res.sendFile(`${__dirname}/views/index.html`);
});

//random 'a' 'b' generator
const randomAB = () => {
  if (Math.random() > 0.5) {
    return 'a';
  } else {
    return 'b';
  }
}

app.listen(3000, () => console.log('Server has started at 3000'));
