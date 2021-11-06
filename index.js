const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

app.use(express.urlencoded({extended: true}));
// app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log('Express app listening at port', port);
});
 