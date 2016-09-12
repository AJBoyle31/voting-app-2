var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ip = require('ip');
var polls = require('./public/source/pollsJSON.js');

var app = express();

var publicPathName = 'public';
var publicPath = path.join(__dirname, publicPathName);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));

app.get('/', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.get('/pollsQuery', function(request, response){
  response.json(polls);
});

app.get('/pollQuery/:id', function(request, response){
  var id = request.params.id;
  var poll = polls.findIndex((poll) => poll.id === id);
  response.json(poll);
  
});

var server = app.listen(process.env.PORT || 8080, function () {

  var host = ip.address();
  var port = server.address().port;

  console.log('Server listening at http://localhost:%s and http://%s:%s', port, host, port);

});