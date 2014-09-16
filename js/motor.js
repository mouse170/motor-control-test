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
