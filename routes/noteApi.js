const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

router.get('/api/notes', async (req, res) => {
    res.json(dbJson);
});

router.post('/api/notes', (req, res) => {
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;