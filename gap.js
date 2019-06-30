"use strict"

document.querySelector('#sort-asc').addEventListener('click', function () {
  sortAsc('price');
}, false);
document.querySelector('#sort-desc').addEventListener('click', function () {
  sortDesc('price');
}, false);
document.querySelector('#sort-rating').addEventListener('click', function () {
  sortDesc('rating');
}, false);

function sortAsc(sortType) {
  let goods = document.querySelector('.goods_wrap');
  for (let i = 0; i < goods.children.length; i++) {
    for (let j = i; j < goods.children.length; j++) {
      if (+goods.children[i].dataset[sortType] > +goods.children[j].dataset[sortType]) {
        let replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
        goods.children[i].parentNode.insertBefore(replacedNode, goods.children[i].nextSibling);
      }
    }
  }
}

function sortAsc(sortType) {
  let item = document.querySelector('.goods_wrap');
  for (let i = 0; i < item.children.length; i++) {
    for (let j = i; j < item.children.length; j++) {
      if (+item.children[i].dataset[sortType] > +item.children[j].dataset[sortType]) {
        let replacedNode = item.replaceChild(item.children[j], item.children[i]);
        item.children[i].parentNode.insertBefore(replacedNode, item.children[i].nextSibling);
      }
    }
  }
}


function sortDesc(sortType) {
  var goods = document.querySelector('.goods_wrap');
  for (var i = 0; i < goods.children.length - 1; i++) {
    for (var j = i; j < goods.children.length; j++) {
      if (+goods.children[i].dataset[sortType] < +goods.children[j].dataset[sortType]) {
        var replacedNode = goods.replaceChild(goods.children[j], goods.children[i]);
        goods.children[i].parentNode.insertBefore(replacedNode, goods.children[i].nextSibling);
      }
    }
  }
}

window.addEventListener('load', function () {
  document.querySelector('#Londonbtn').onclick = function () {
    openCity('London', this, 'red');
  }
  document.querySelector('#Tokyobtn').onclick = function () {
    openCity('Tokyo', this, 'blue');
  }
  document.querySelector('#Romebtn').onclick = function () {
    openCity('Rome', this, 'green');
  }

  function openCity(cityName, elem, color) {
    let tabcontent = document.querySelectorAll('.tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    let tablinks = document.querySelectorAll('.tablink');
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    elem.style.backgroundColor = color;
    document.getElementById(cityName).style.display = 'block';
  }
  document.querySelector('#Londonbtn').click();
}, false);
// ===============accordion
window.addEventListener('load', function () {
  let acc = document.querySelectorAll('.accordion');
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('show');
    }, false);
  }
}, false);
// ============================
window.addEventListener('load', function () {
  document.querySelector('.icon').onclick = function () {
    document.querySelector('#myTopnav').classList.toggle('responsive');
  }
  let menuitems = document.querySelectorAll('#menuitems a');
  for (let i = 0; i < menuitems.length; i++) {
    menuitems[i].addEventListener('click', function () {
      let current = document.querySelectorAll('.active');
      current[0].classList.remove('active');
      this.classList.add('active');
    }, false);

  }
}, false);