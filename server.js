'use strict';

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


/* Serve the static files generated by the CLI (index.html, CSS? JS, assets...) */
app.use(express.static('frontend'))
//app.use('/js',express.static('js'))


//app.set('view engine', 'html');
//app.set('views', './pages');

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});