'use script';

document.querySelector('#addBtn').addEventListener('click',function(){
    let cookieName = document.querySelector('#name').value;
    console.log(cookieName);
    
    let cookieValue = document.querySelector('#val').value;
    console.log(cookieValue);
    let cookie = `${cookieName}=${cookieValue};'expires=777777'`;
document.cookie =cookie;
});
