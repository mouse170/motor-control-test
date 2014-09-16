var sys = require('sys');
var exec = require('child_process').exec;
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
app.listen(8124);

function handler(req, res) {
    fs.readFile(__dirname + 'index.html', function(err, data){
        if(err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}
function puts(error, stdout, stderr) { sys.puts(stdout) }
io.sockets.on('connection', function(socket){
    socket.on('motorControl', function(pos) {
        if(pos=='up')    
            exec("ls -al", puts);
        else if (pos=='down')
            exec("df", puts);
        else if (pos=='right')
            exec("pwd", puts);
        else if (pos=='left')
            exec("whoami", puts);
    });
});
            
    
    

//function puts(error, stdout, stderr) { sys.puts(stdout) }
//exec("ls -la", puts);
