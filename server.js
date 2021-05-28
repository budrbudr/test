const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/suitability', (req, res) => {
  fs.readFile('suitability-data.json', (err, json) => {
    const obj = JSON.parse(json);
    res.json(obj);
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
