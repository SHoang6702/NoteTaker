const router = require('express').Router()
const uuid = require('../helpers/uuid')
const fs = require('fs')
const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));

router.get('/api/notes', async (req, res) => {
    res.json(dbJson);
});

router.post('api/notes', async (req, res) => {
    const feedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuid
    };
    dbJson.push(feedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dbJson));
    res.json(dbJson);
});

module.exports = router;