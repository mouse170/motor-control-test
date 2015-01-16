var sys = require('sys');
var exec = require('child_process').exec;
var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');
var piblaster = require('pi-blaster.js');
var vdegree=0.15;
var hdegree=0.2;
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

        if(pos=='up'){
            //debug
            exec("echo up", puts);
            //control
            exec("node ./assets/scripts/up.js");
            io.sockets.emit('motorLog',pos);
            hincrease();
            piblaster.setPwm(23, hdegree);
        }
        else if (pos=='down'){
            //debug
            exec("echo down", puts);
            exec("node ./assets/scripts/down.js");
           io.sockets.emit('motorLog',pos);
           hdecrease();
           piblaster.setPwm(23, hdegree);
        }
        else if (pos=='right'){
            //debug
            exec("echo right", puts);
            exec("node ./assets/scripts/right.js");
            io.sockets.emit('motorLog',pos);
            vincrease();
            piblaster.setPwm(24, vdegree);
        }
        else if (pos=='left'){
            //debug
            exec("echo left", puts);
            exec("node ./assets/scripts/left.js");
            io.sockets.emit('motorLog',pos);
            vdecrease();
            piblaster.setPwm(24, vdegree);
       }
        else if (pos=='release'){
            exec("sh ./assets/scripts/release.sh", puts);
	    io.sockets.emit('motorLog', pos);
            console.log('release');
        }

    });

    //record motor's degree
    socket.on('motorPosition', function(position) {
        if (position == 'vertical'){
            io.socket.emit('posLog', position);
        }
        else if (position=='horizontal') {
            io.socket.emit('posLog', position);
        }
    });

});


function vincrease(){
  if (vdegree<0.21){
    vdegree = parseInt((vdegree* 1e2)+2, 10);
    console.log(vdegree, vdegree/1e2);
    vdegree = vdegree/1e2;
  }

}
function vdecrease(){
  if (vdegree>0.08){
    vdegree = parseInt((vdegree* 1e2)-2, 10);
    console.log(vdegree, vdegree/1e2);
    vdegree = vdegree/1e2;
  }
}
function hincrease(){
  if (hdegree<0.22){
    hdegree = parseInt((hdegree* 1e2)+2, 10);
    console.log(hdegree, hdegree/1e2);
    hdegree = hdegree/1e2;
  }
}
function hdecrease(){
  if (hdegree>0.16){
    hdegree = parseInt((hdegree* 1e2)-2, 10);
    console.log(hdegree, hdegree/1e2);
    hdegree = hdegree/1e2;
  }
}




//function puts(error, stdout, stderr) { sys.puts(stdout) }
//exec("ls -la", puts);
