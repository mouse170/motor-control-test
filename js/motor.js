
var socket = io.connect('https://cdn.socket.io/socket.io-1.2.0.js');

function motorUp(){
    socket.emit('motorControl', "up");
}
function motorDown(){
    socket.emit('motorControl', "down");
}
function motorRight(){
    socket.emit('motorControl', "right");
}
function motorLeft(){
    socket.emit('motorControl', "left");
}

        // Show loading notice
        var canvas = document.getElementById('videoCanvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#444';
        ctx.fillText('Loading...', canvas.width/2-30, canvas.height/3);
        // Setup the WebSocket connection and start the player
         var client = new WebSocket( 'ws://140.127.194.124:8084/' );
         var player = new jsmpeg(client, {canvas:canvas});
socket.on('motorLog', function(pos) {
    if(pos=="up"){
        document.getElementById("status").innerHTML = "Last Status:Up";
    }else if(pos=="down"){
        document.getElementById("status").innerHTML = "Last Status:Down";
    }else if(pos=="left"){
        document.getElementById("status").innerHTML = "Last Status:Left";
    }else if(pos=="right"){
        document.getElementById("status").innerHTML = "Last Status:Right";
    }
});


