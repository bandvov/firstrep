'use strict';
window.onload = function () {


    let btn = document.querySelector('#btn');
    let input = document.querySelector('#input');
    let messages = document.querySelector('#messages');

    let socket = io.connect('http://localhost:8080');
    socket.on('connect', function () {
        console.log('socket connected');
    })
    socket.on('chat message',function(data){
        messages.innerHTML += `<div<h4>message</h4><h5>
        ${data.text}</h5> </div<h4>`
    })
    btn.onclick = function(e) {
        
        socket.emit('send message',{text:input.value});
    }

}