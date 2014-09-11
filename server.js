var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.render('index', {title:'Home'})
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});