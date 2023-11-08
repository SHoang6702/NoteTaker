const express = require('express');
const html = require('./routes/html')
const noteApi = require('./routes/noteApi')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(html)
app.use(noteApi);

app.listen(PORT, () => {
    console.log(`Now listening on port http://localhost:${PORT}`);
});
