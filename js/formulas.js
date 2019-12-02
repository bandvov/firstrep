 export: const evenLast = (arr) => {
     return arr.filter((item, i) => i % 2 === 0).reduce((summ, current) => summ + current) * arr[arr.length - 1] || 0;
   };
// ================================================
  
  function readTextFile(file) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET',file,true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4&& xhr.status=== 200) {
  let myJson = JSON.parse(xhr.responseText);
  console.log(myJson,myJson.age);
  
      }
    }
    xhr.send(null);
  }