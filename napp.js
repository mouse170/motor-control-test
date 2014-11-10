var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendfile('index.html');
	res.sendfile('css/style.css')
});

io.on('connection', function(socket){
	console.log("a user conected");
});

http.listen(8080, function(){
	console.log('listening on *:8080');
});

