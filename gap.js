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

