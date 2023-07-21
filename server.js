const express = require('express');
const path = require('path');
const collectionsRoute = require('./routes/collectionsRoute');
const statisticsRoute = require('./routes/statisticsRoute');

const app = express();
const port = 8080;

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/collections', collectionsRoute);

app.use('/statistics', statisticsRoute);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
