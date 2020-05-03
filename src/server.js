const express = require('express');
const path = require('path');

const indexPath = path.join(__dirname, '../dist/index.html');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('*', (_, response) => {
  response.sendFile(indexPath);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
