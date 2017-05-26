const express = require('express');
const path    = require('path');
const app     = express();

app.get('/', function (req, res) {
  const filename = path.join(__dirname, '/public', 'index.html');
  res.sendFile(filename);
});

app.use('/dist', express.static(__dirname + '/node_modules/mini.css/dist')); // redirect CSS bootstrap
app.use(express.static('dist'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
