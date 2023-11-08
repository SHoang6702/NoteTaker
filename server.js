const express = require('express')
const htmlPath = require('./routes/html.js')
const noteApi = require('./routes/noteApi.js')

const PORT = process.env.PORT || 3001;

const app = express

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(htmlPath());
app.use(noteApi());

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`));
