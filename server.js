'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
//required to use js and css files in public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  //sendFile needed for serving html files from views directory
  res.sendFile(`${__dirname}/views/index.html`);
});

app.listen(3000, () => console.log('Server has started at 3000'));
