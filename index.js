const express = require('express');
const router = require('./src/router/router');
const app = express();
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//routes

app.use(router);

module.exports = app;