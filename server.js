const express = require('express')
const html_route = require('./route.html')
const api_route = require('./route.api')

const PORT = process.env.PORT || 3001;

const app = express

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(html_route());
app.use(api_route());

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`));
