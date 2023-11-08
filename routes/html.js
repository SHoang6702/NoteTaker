const htmlPath = require('express').Router();
const path = require('path');

htmlPath.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

htmlPath.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../notes.html'));
});

module.exports = htmlPath;