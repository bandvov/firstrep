'use strict';

let usersContainer = document.querySelector('#userContainer');
let messagesContainer = document.querySelector('#messages');
let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let user = '';

let socket = io.connect('http://localhost:8080');
socket.emit('load users');
socket.on('users loaded',function(data){
    console.log(data);
    
    let displayUsers = data.users.map(user =>`<li>${user}</li>`);
    usersContainer.innerHTML += displayUsers.join('');
})
socket.emit('load messages');
socket.on('messages loaded',function(data){
    let displayMessage = data.messages.map(message=>
        `<div><h4>${message.auth}</h4><h5>${message.text}</h5></div>`);
        messagesContainer.innerHTML = displayMessage.join('');
})
socket.on('chat message',function(data){
    console.log('chat message',data);   
    let displayMessage = 
        `<div style="border-bottom:1px solid black"><h4>${data.auth}</h4><h5>${data.text}</h5></div>`;
        messagesContainer.innerHTML += displayMessage;
});
socket.on('new user',function(data){
    user = data.name;
});


btn.onclick = function() {
    socket.emit('send message',{text:inp.value,auth:user});
}
