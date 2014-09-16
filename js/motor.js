
var socket = io.connect('http://localhost:8124');

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
        var client = new WebSocket( 'ws://example.com:8084/' );
        var player = new jsmpeg(client, {canvas:canvas});



