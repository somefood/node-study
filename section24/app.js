const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded, 폼 데이터 받을 때
app.use(bodyParser.json()); // application/json 파싱

app.use('/feed', feedRoutes);

app.listen(8080);