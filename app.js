var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public/imgs')));
app.use('/', function(req, res) {
  const test = path.join(process.cwd(), 'public/index.htm')
  res.sendFile(test)
})

module.exports = app;
