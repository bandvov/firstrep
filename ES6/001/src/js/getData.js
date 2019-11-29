let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'src/js/data.json');
    xhr.send();
    xhr.onload = function () {
        resolve(this.response);
    }
})

export default promise;