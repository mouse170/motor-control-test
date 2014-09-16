socket.on('motorLog',function(pos){
    if(pos=="up"){
        document.getElementById("status").innerHTML = "Status:Up";
    }else if(pos=="down"){
        document.getElementById("status").innerHTML = "Status:Down";
    }else if(pos=="left"){
        document.getElementById("status").innerHTML = "Status:Left";
    }else if(pos=="right"){
        document.getElementById("status").innerHTML = "Status:Right";
    }
});