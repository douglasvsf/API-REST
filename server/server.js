const express = require('express');
const app = express();

/// usar rotar dentro da instancia do express
app.use(express.json());
app.use('/', require('./route/postsRoute'));

app.listen(3000);