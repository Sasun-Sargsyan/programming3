


// function setup () {}


// function windowLoad() {
//     console.log("Window is loaded");
//  }
//  window.onload = windowLoad;
//  function click(evt) {
//     console.log(evt.pageX, evt.pageY);
//  }
//  window.onclick = click;

io.on('conection',function (socket){
    for(var i in messages){
        io.sockets.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
});

function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');

    function handleSumbit(evt){
        var val = input.value;
        if (val !="") {
            socket.emit("send message",val);
        }
    }
    button.onclick =  handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   

