const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());


app.listen(3000, () => console.log('Server has started at 3000'));
