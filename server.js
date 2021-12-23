'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1 style="color:green;">Application will be deploy on Kubernetes Cluster Node!</h1> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
