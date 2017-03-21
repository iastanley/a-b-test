'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();


app.use(cookieParser());


app.listen(3000, () => console.log('Server has started at 3000'));
