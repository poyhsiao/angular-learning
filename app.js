var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    swig = require('swig'),
    routes = require('./routes');

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
// app.use(logger());
app.use(express.static(__dirname + '/public'));
swig.setDefaults({
    cache: false
});

app.get('/:class', routes.episode);
app.get('/', routes.main);

server.listen(20081);
console.log('Server is listen to port 20081');
