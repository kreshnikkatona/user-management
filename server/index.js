const express = require('express');
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.use("/",require('express').static(__dirname + '/../dist/angular-test-project/'
  ,{
    maxAge: 0
  }));

app.get('(/[A-Za-z0-9-]+)?(/[A-Za-z0-9-]+)?(/[A-Za-z0-9-]+)', function (req, res) {
  res.sendFile(path.join(__dirname + '/../dist/angular-test-project/index.html'));
});

const server = app.listen(port, function() {
  console.log('Starting angular test on: %s', JSON.stringify(server.address()));
});
