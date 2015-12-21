var path = require('path'), express = require('express'), http = require('http');

var app = express(), PORT = 9000;

app.use(express.static(path.join(__dirname, 'src')));
//app.use(express.static(path.join(__dirname, '..', '..', '.tmp')));
app.use(express.static(path.join(__dirname, 'bower_components')));

var server = http.createServer(app).listen(PORT, function () {
    console.log('Express server listening on port ' + PORT);
});
