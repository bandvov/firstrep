"use strict";

document.querySelector("#sort-asc").addEventListener(
  "click",
  function() {
    sortAsc("price");
  },
  false
);
document.querySelector("#sort-desc").addEventListener(
  "click",
  function() {
    sortDesc("price");
  },
  false
);
document.querySelector("#sort-rating").addEventListener(
  "click",
  function() {
    sortDesc("rating");
  },
  false
);

function sortAsc(sortType) {
  let goods = document.querySelector(".goods_card");
  for (let i = 0; i < goods.children.length; i++) {
    if (+goods[i].dataset[sortType] > +goods[i + 1].dataset[sortType]) {
      goods[i].parentNode.insertBefore(goods[i + 1], goods[i]);
    }
  }
}

function sortAsc(sortType) {
  let item = document.querySelector(".goods_wrap");
  for (let i = 0; i < item.children.length; i++) {
    for (let j = i; j < item.children.length; j++) {
      if (
        +item.children[i].dataset[sortType] >
        +item.children[j].dataset[sortType]
      ) {
        let replacedNode = item.replaceChild(
          item.children[j],
          item.children[i]
        );
        item.children[i].parentNode.insertBefore(
          replacedNode,
          item.children[i].nextSibling
        );
      }
    }
  }
}

function sortDesc(sortType) {
  var goods = document.querySelector(".goods_wrap");
  for (var i = 0; i < goods.children.length - 1; i++) {
    for (var j = i; j < goods.children.length; j++) {
      if (
        +goods.children[i].dataset[sortType] <
        +goods.children[j].dataset[sortType]
      ) {
        var replacedNode = goods.replaceChild(
          goods.children[j],
          goods.children[i]
        );
        goods.children[i].parentNode.insertBefore(
          replacedNode,
          goods.children[i].nextSibling
        );
      }
    }
  }
}

window.addEventListener(
  "load",
  function() {
    document.querySelector("#londonbtn").onclick = function() {
      openCity("London", this, "red");
    };
    document.querySelector("#Tokyobtn").onclick = function() {
      openCity("Tokyo", this, "blue");
    };
    document.querySelector("#Romebtn").onclick = function() {
      openCity("Rome", this, "green");
    };

    function openCity(cityName, elem, color) {
      let tabcontent = document.querySelectorAll(".tabcontent");
      for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      let tablinks = document.querySelectorAll(".tablink");
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
      }
      elem.style.backgroundColor = color;
      document.getElementById(cityName).style.display = "block";
    }
    document.querySelector("#londonbtn").click();
  },
  false
);
// ===============accordion
window.addEventListener(
  "load",
  function() {
    let acc = document.querySelectorAll(".accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener(
        "click",
        function() {
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
        },
        false
      );
    }
  },
  false
);
// ============================
window.addEventListener(
  "load",
  function() {
    document.querySelector(".icon").onclick = function() {
      document.querySelector("#myTopnav").classList.toggle("responsive");
    };
    let menuitems = document.querySelectorAll("#menuitems a");
    for (let i = 0; i < menuitems.length; i++) {
      menuitems[i].addEventListener(
        "click",
        function() {
          let current = document.querySelectorAll(".active");
          current[0].classList.remove("active");
          this.classList.add("active");
        },
        false
      );
    }
  },
  false
);
// ==================================
window.addEventListener(
  "scroll",
  function() {
    var topnav = document.querySelector("#myTopnav");
    var sticky = topnav.offsetTop;
    if (window.pageYOffset > sticky) {
      topnav.classList.add("sticky");
    } else {
      topnav.classList.remove("sticky");
    }
  },
  false
);
// ======================watermark

// window.addEventListener('load', function () {
//   var watermark = 'enter password';
//   var input = document.forms[0].login;
//   initInput();
//   input.onfocus = function () {
//     if (input.value == watermark) {
//       input.value = "";
//       input.style.fontStyle = "normal";
//     }
//   }
//   input.onblur = function() {
//     if (input.value =="") {
//       initInput();
//     }
//   }
//   console.log(input);

//   function initInput() {
//     input.value = watermark;
//     input.style.fontStyle = "italic";
//   }

// }, false);
// ===================validation N1
// window.addEventListener('load', function () {
//   document.forms[0].addEventListener('submit', function (e) {
//     let login = document.forms[0].login;
//     let password = document.forms[0].password;
//     let isValid = true;
//     if (login.value.length == 0) {
//       isValid = false;
//     }
//     if (password.value.length == 0) {
//       isValid = false;
//     }
//     if (!isValid) {
//       e.preventDefault();
//       alert('fill all fields');
//     }

//   }, false);
// }, false);
// =================validation №2

// window.addEventListener('load', function() {
//   form1.login.onchange = loginOnChange;
// form1.password.onchange = passOnChange;
// form1.email.onchange = emailOnChange;
// form1.onsubmit = onFormSubmit;
// function loginOnChange() {
// let pattern = /[a-z0-9]{6}/;
// validate(this,pattern);
// }
// function passOnChange() {
//   let pattern =/\S{8}/;
//   validate(this,pattern);
// }
// function emailOnChange() {
//   let pattern = /[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{2,4}/;
// validate(this,pattern);
// }

// function onFormSubmit() {
//   let invalid = false;
//   for (let i=0;i<this.elements.length;i++) {
//     let x = this.elements[i];
//     if(x.type == "text" && x.onchange) {
//       x.onchange();
//     }
//     if (x.className=="invalid") {
//       invalid = true;
//     }
//   }
//   if (invalid) {
//     alert('error validation N2');
//     return false;
//   }
// }
//   function validate(elem,pattern) {
//     if (elem.value.search(pattern)== -1) {
//       elem.className = "invalid";
//     }else {
//       elem.className= "valid";
//     }
//   }

// }, false);
// ===============validation №3
window.addEventListener(
  "load",
  function() {
    init();

    function init() {
      let formValidation = false;
      for (let i = 0; i < document.forms.length; i++) {
        let form = document.forms[i];
        for (let j = 0; j < form.elements.length; j++) {
          let x = form.elements[j];
          if (x.type != "text") continue;
          let pattern = x.dataset.val;
          if (pattern) {
            x.onchange = validateInput;
            formValidation = true;
          }
        }

        if (formValidation) {
          form.onsubmit = validateForm;
        }
      }

      function validateForm() {
        let invalid = false;
        for (let i = 0; i < this.elements.length; i++) {
          let x = this.elements[i];
          if (x.type == "text" && x.onchange != null) {
            x.onchange();
            if (x.className == "invalid") invalid = true;
          }
        }
        if (invalid) {
          alert("Error happened");
          return false;
        }
      }

      function validateInput() {
        let pattern = this.dataset.val;
        let msg = this.dataset.valMsg;
        let msgId = this.dataset.valMsgId;
        let value = this.value;
        if (value.search(pattern) == -1) {
          document.getElementById(msgId).innerHTML = msg;
          this.className = "invalid";
        } else {
          document.getElementById(msgId).innerHTML = "";
          this.className = "valid";
        }
      }
    }
  },
  false
);

// ===============================

(function() {
  let img = document.getElementsByTagName("mp4");
  let div = document.createElement("div");
  for (let i = 0; i < img.length; i++) {
    if (img[i].width > 300 && img[i].src != "") {
      let a = document.createElement("a");
      a.href = img[i].src;
      let newImg = document.createElement("img");
      newImg.src = img[i].src;
      newImg.style.width = "250";
      newImg.setAttribute("target", "blank");
      a.appendChild(newImg);
      div.appendChild(a);
    }
  }
  document.body.insertBefore(div, document.body.firstChild);
})();

// let video =document.getElementsByTagName('video');
// let div = document.createElement('div');
// for (let i=0;i<video.length;i++) {
//   let a = document.createElement('a');
//   a.setAttribute("download","download");
//   let newVideo= document.createElement('video');
//   newVideo.src = video[i][0].src;
//   console.log(newVideo);
//   a.appendChild(newVideo);
//   div.appendChild(a);
// }
// document.body.insertBefore(div,document.body.firstChild);

//   let iframe =document.querySelector('iframe');
//   let iframeDoc = iframe.contentWindow || iframe.contentDocument;
// let fromIframe =  iframeDoc.document.getElementsByTagName('body')[0];
// console.log(fromIframe.innerHTML);
//   let div = document.createElement('div');
//     let a = document.createElement('a');
//       a.setAttribute("download","download");
//       a.href = iframe.src;
//       a.style.backgroundColor="red";
//       a.style.zIndex=1;
//       console.log(newVideo);
//       div.appendChild(a);
//     document.body.insertBefore(div,document.body.firstChild);

// ========================================
window.addEventListener(
  "load",
  function() {
    function $(id) {
      return document.getElementById(id);
    }
    $("setcookie").onclick = setCookie;
    $("getcookie").onclick = getCookie;

    function setCookie() {
      document.cookie = "version=" + encodeURIComponent(document.lastModified);
    }

    function getCookie() {
      alert(findCookieValue("version"));
    }

    function findCookieValue(cookieName) {
      let allCookies = document.cookie;
      let pos = allCookies.indexOf(cookieName + "=");
      if (pos != -1) {
        let start = pos + cookieName.length + 1;
        let end = allCookies.indexOf(";", start);
        if (end == -1) {
          end = allCookies.length;
        }
        let value = allCookies.substring(start, end);
        return decodeURIComponent(value);
      }
    }
  },
  false
);
// ==================encode & decode

window.addEventListener(
  "load",
  function() {
    function $(id) {
      return document.getElementById(id);
    }
    $("encodebtn").onclick = function() {
      let res = encodeURIComponent($("forEncode").value);
      $("encodeOutput").innerHTML = res;
    };
    $("decodebtn").onclick = function() {
      let res = decodeURIComponent($("decode").value);
      $("decodeOutput").innerHTML = res;
    };
  },
  false
);
// ==============================================
window.addEventListener(
  "load",
  function() {
    function $(id) {
      return document.getElementById(id);
    }

    let f = document.forms[1];

    $("savebtn").onclick = function() {
      let cookieStr = "";
      cookieStr += f.cookieName.value + "=" + f.cookieValue.value + ";";
      cookieStr += "max-age=" + f.cookieAge.value;
      document.cookie = cookieStr;
    };
    $("readAll").onclick = function() {
      alert(document.cookie);
    };
    $("readspec").onclick = function() {
      alert(findCookieValue(f.nametoread.value));
    };

    function findCookieValue(cookieName) {
      let allCookies = document.cookie;
      let pos = allCookies.indexOf(cookieName + "=");
      if (pos != -1) {
        let start = pos + cookieName.length + 1;
        let end = allCookies.indexOf(";", start);
        if (end == -1) {
          end = allCookies.length;
        }
        let value = allCookies.substring(start, end);
        return decodeURIComponent(value);
      }
    }
  },
  false
);
// ==================save color in cookie

window.addEventListener(
  "load",
  function() {
    function $(id) {
      return document.getElementById(id);
    }
    let savedColor = findCookieValue("page-color");
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
      console.log(savedColor);
    }

    document.querySelector("#saveColor").onclick = function() {
      let selectedColor = getCheckedRadioId("color");
      document.cookie =
        "page-color=" + decodeURIComponent(selectedColor) + ";max-age=360";
      document.body.style.backgroundColor = selectedColor;
    };

    function getCheckedRadioId(name) {
      let elements = document.getElementsByName(name);
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
          return elements[i].value;
        }
      }
    }

    function findCookieValue(cookieName) {
      let allCookies = document.cookie;
      let pos = allCookies.indexOf(cookieName + "=");
      if (pos !== -1) {
        let start = pos + cookieName.length + 1;
        let end = allCookies.indexOf(";", start);
        if (end == -1) {
          end = allCookies.length;
        }
        let value = allCookies.substr(start, end);
        return decodeURIComponent(value);
      }
    }
  },
  false
);
// ===================find cookie N2
function accessCookie(cookieName) {
  let name = cookieName + "=";
  let allCookiesArray = document.cookie.split(";");
  for (let i = 0; i < allCookiesArray; i++) {
    let x = allCookiesArray[i];
    if (x.indexOf(name) == 0) {
      allCookiesArray.substr(name.length, x.length);
    }
  }
  return "";
}
console.log(accessCookie("page-color"));

// ===================sessionStorage

// ===============array reverse at place
let nArr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i = 0, j = nArr.length; i != j; i++, j--) {
  [nArr[i], nArr[j]] = [nArr[j], nArr[i]];
}
console.log(nArr);

let images = [];

function preload() {
  for (let i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    console.log(images[i]);
    images[i].src = arguments[i];
  }
}

console.log(
  preload("/fiord1.jpg", "/fiord2.jpg", "/fiord3.jpg", "/fiord4.jpg")
);

// =============================
function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var a = sum(5, -5, false, "-5", 5);
console.log(a);
// ===========================gistroramm
window.addEventListener(
  "load",
  function() {
    let chart = createBarChart([1, 4, 5, 0, 7, 4, 2, 3, 4], 500, 300, "brown");
    document.querySelector("#chartContainer").appendChild(chart);

    function createBarChart(data, width, height, color) {
      let chart = document.createElement("div");
      chart.style.position = "relative";
      chart.style.width = width + "px";
      chart.style.height = height + "px";
      chart.style.border = "1px solid red";
      chart.style.cssFloat = "left";

      let max = Number.NEGATIVE_INFINITY;
      for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
      }
      let scale = height / max;
      let barWidth = width / data.length;
      for (let i = 0; i < data.length; i++) {
        let bar = document.createElement("div");
        bar.style.position = "absolute";
        bar.style.bottom = 0;
        bar.style.left = barWidth * i + "px";
        bar.style.width = barWidth - 4 + "px";
        bar.style.height = data[i] * scale + "px";
        bar.style.backgroundColor = color;
        chart.appendChild(bar);
      }
      return chart;
    }
  },
  false
);

// =====================SVG gistrogram
window.addEventListener(
  "load",
  function() {
    let chart = createBarChart([1, 2, 3, 4, 5, 6, 7, 8, 9], 600, 300, "green");
    document.querySelector("#chartContainer2").appendChild(chart);

    function createBarChart(data, width, height, color) {
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.style.width = width;
      svg.style.height = height;
      svg.style.border = "1px solid green";

      let max = Number.NEGATIVE_INFINITY;
      for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
      }
      let scale = height / max;
      let barWidth = width / data.length;
      for (let i = 0; i < data.length; i++) {
        let bar = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        let barHeight = data[i] * scale;
        bar.setAttribute("width", barWidth - 14);
        bar.setAttribute("height", barHeight);
        bar.setAttribute("x", barWidth * i);
        bar.setAttribute("y", height - barHeight);
        bar.style.fill = color;
        bar.onmouseover = function() {
          bar.style.fill = "red";
        };
        bar.onmouseout = function() {
          bar.style.fill = color;
        };
        svg.appendChild(bar);
      }
      return svg;
    }
  },
  false
);
// ==============canvas gisctrogram
window.addEventListener(
  "load",
  function() {
    createBarChart("canvas2", [1, 3, 5, 4, 7, 8, 9], 300, 300, "orange");

    function createBarChart(canvas, data, width, height, color) {
      if (typeof canvas == "string") canvas = document.getElementById(canvas);
      canvas.width = width;
      canvas.height = height;
      canvas.style.border = "1px double purple";
      let context = canvas.getContext("2d");
      let max = Number.NEGATIVE_INFINITY;
      for (let i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
      }
      let scale = height / max;
      let barWidth = Math.floor(width / data.length);
      for (let i = 0; i < data.length; i++) {
        let barHeight = data[i] * scale;
        let x = barWidth * i;
        let y = height - barHeight;
        context.fillStyle = color;
        context.fillRect(x, y, barWidth - 15, barHeight);
      }
    }
  },
  false
);
// =================AJAX
// window.addEventListener('load', function () {
//   function show() {
//     document.querySelector('#loader').style.display = 'block';
//   }

//   function hide() {
//     document.querySelector('#loader').style.display = 'none';
//   }
//   document.querySelector('#getajax').onclick = function () {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'testfile.html', true);

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4 && xhr.status == 200) {
//         hide();
//         document.querySelector('#xhroutput').innerHTML += xhr.responseText;
//       }
//     }
//     xhr.send();
//     show();
//   }
// }, false);
// =========================ajax JSON
(function() {
  let templateCounter = 0;
  document.querySelector("#addbutton").onclick = function() {
    let template = document.querySelector("template");
    let templateClone = document.importNode(template.content, true);
    templateClone.querySelector("#template-name").innerHTML = "my  template";
    templateClone.querySelector(
      "#template-count"
    ).innerHTML = ++templateCounter;
    document.body.appendChild(templateClone);
  };
})();

window.addEventListener(
  "load",
  function() {
    showDiv("all");
    document.querySelector("#showall").onclick = function() {
      showDiv("all");
    };
    document.querySelector("#showcars").onclick = function() {
      showDiv("cars");
    };
    document.querySelector("#shownature").onclick = function() {
      showDiv("nature");
    };

    function showDiv(c) {
      let x = document.querySelectorAll(".content");
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("show");
        if (x[i].className.indexOf(c) > -1) {
          x[i].classList.add("show");
        }
      }
    }
  },
  false
);
// =====================
(function() {
  class Timer extends HTMLButtonElement {
    constructor() {
      super();
      console.log("it is created");
      this.tick = function() {
        this.innerHTML++;
      };
    }
  }

  customElements.define("my-timer", Timer, {
    extends: "button"
  });
  console.log("timer", Timer.prototype);
})();
// =============== extends div
(function() {
  class DivExtend extends HTMLElement {
    constructor() {
      super();
    }
  }

  customElements.define("custom-div", DivExtend);
  console.assert(customElements);

  let div = new DivExtend();
  div.innerHTML = "created callback works" + "<br>";
  let div1 = new DivExtend();
  div1.innerHTML = "created second callback";
  document.body.appendChild(div);
  document.body.appendChild(div1);
})();
// ==================shadow DOM==================
// (function () {
//   let template = document.querySelector('#template2');
//   let templateClone = document.importNode(template.content, true);
//   let host = document.querySelector('#host');
//   let root = host.createShadowRoot();
//   root.appendChild(templateClone);
// })();
// ===============================================

// ====================================insertion poin select
(function() {
  class MyForm extends HTMLElement {
    constructor() {
      super();
      let template = document.querySelector("#template4");
      let host = this.createShadowRoot();
      host.appendChild(document.importNode(template.content, true));
    }
  }

  customElements.define("my-form", MyForm);
})();
// =========================================
(function() {
  // let shadow = document.querySelector('#nameBlock').createShadowRoot();
  // let template = document.querySelector('#nameBlockTemplate');
  // shadow.appendChild(document.importNode(template.content, true));
  class MyCard extends HTMLElement {
    constructor() {
      super();
      let shadow = this.createShadowRoot();
      let template = document.querySelector("#nameBlockTemplate");
      shadow.appendChild(document.importNode(template.content, true));
    }
  }
  customElements.define("user-cards", MyCard);
})();
// ===============================
(function() {
  class ThemedBlock extends HTMLElement {
    constructor() {
      super();
      let shadow = this.createShadowRoot();
      let template = document.querySelector("#template5");
      shadow.appendChild(document.importNode(template.content, true));
    }
  }
  customElements.define("themed-block", ThemedBlock);
})();
// ===========================================
window.addEventListener(
  "load",
  function() {
    function getMetaName(metaName) {
      let metas = document.querySelectorAll("meta");
      for (let i = 0; i < metas.length; i++) {
        if (metas[i].name == metaName) {
          return metas[i].content;
        }
      }
    }
    console.log(getMetaName("description"));
  },
  false
);

// ========================================================
window.addEventListener(
  "load",
  function() {
    function error(e) {
      console.log("load completed");
    }
  },
  false
);
// ======================================================

function persistance(num) {
  let x = 0;
  while (num.toString().length > 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => a * b);
    x++;
  }
  return x;
}
console.log(persistance(39));

// ==============================================
function filter_list(l) {
  let arr = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] !== "string") {
      arr.push(l[i]);
    }
  }
  return arr;
}
filter_list([1, 2, 3, "4", "5", "6", "aaa"]);
// ========================================
function findDigits(n, p) {
  let x = [...(n + "")];
  let res = x.map((item, i) => Math.pow(item, p + i)).reduce((a, b) => a + b);
  console.log(res);
}
// =======================================
function printerError(s) {
  return (s.match(/[n-z]/g) || []).length + "/" + s.length;
}
console.log(printerError("aasdsfe3fefdffcxzccdsfv"));

// =====================
function minSum(arr) {
  let sum = 0;
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - 1 - i];
  }
  console.log(sum);
}
minSum([5, 4, 2, 3]);
// ===================================
function tidyNumber(n) {
  return n == [...(n + "")].sort((a, b) => a - b).join("");
}
console.log(tidyNumber(123456));
// ====================================
function digital_root(n) {
  // if (n < 10) {
  //   return n;
  // } else {
  //   return digital_root(Math.floor(n / 10) + n % 10);
  // }

  // ===========or============
  return ((n - 1) % 9) + 1;
}
console.log(digital_root(454));
// =================================
function roman_to_Int(str) {
  let roman = ["M", "D", "C", "L", "X", "V", "I"];
  let value = [1000, 500, 100, 50, 10, 5, 1];
  let res = 0;
  for (let i = 0; i < roman.length; i++) {
    while (str.indexOf(roman[i]) == 0) {
      res += value[i];
      console.log(str);
      str = str.replace(roman[i], "");
    }
  }
  return res;
}
console.log(roman_to_Int("MMXXV"));
// ======================OR
function romanNumerals(str) {
  let value = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };

  return str.match(/\w/g).reduce((s, v) => s + value[v], 0);
}
console.log(romanNumerals("MMXXVI"));
// ======================
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{3})/, "($1) $2-$3");
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// =================
function nbrValidTickets(tickets) {
  tickets = tickets.join(",");
  return tickets.match(/[a-z]\d[a-z]{4}/gi);
}

var ex = [
  "A9JZOD",
  "E9FIDH",
  "SI2JIS",
  "F8JIODJ",
  "FDSNJA",
  "A9POF?",
  "AA9DIJD"
];
console.log(nbrValidTickets(ex));
// =========================
window.addEventListener(
  "load",
  function() {
    let item = this.localStorage.getItem("counter");
    if (item == null) {
      item = 0;
    }
    item++;
    localStorage.setItem("counter", item);
    document.querySelector("#counter").innerHTML = item;
  },
  false
);
// ===========================
function User(name) {
  this.name = name;
  this.showNm = function() {
    console.log(this.name, "from constructor");
  };
}
let xcv = new User("adab");
xcv.showNm();
// ========================

function oddCount(n) {
  if (n == 0 || isNaN(n)) {
    return n;
  }
  n--;
  return (n % 2) + oddCount(n);
}
console.log(oddCount(15));
// ======================================
let obja = { foo: 1, foo1: "adsadas", bar: 2 };

function toQueryString(obj) {
  // return (Object.keys(obj).map((x)=>obj[x].map?obj[x].map((y)=>x+'='+y):x+'='+obj[x])).join('&');
  return Object.keys(obj).map(x => x + "=" + obj[x]);
}

console.log(toQueryString(obja));
// ===============================================
function readTextFile(file) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", file, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let myJson = JSON.parse(xhr.responseText);
      console.log(myJson, myJson.age);
    }
  };
  xhr.send(null);
}
readTextFile("text.json");
// ====================================
document.querySelector("[name=file]").addEventListener(
  "change",
  function(e) {
    let reader = new FileReader();
    reader.onload = function() {
      let text = JSON.parse(reader.result);
      console.log(text);
    };

    reader.readAsText(e.target.files[0]);
  },
  false
);
// ==================
fetch("text.json")
  .then(response => response.json())
  .then(text => console.log(text));
// ==============================================
function mark(str, str2) {
  console.log("this is marker %s and this is marker %s", str, str2);
}
mark("first", "seconmn");

x = 1;
console.log(x);
var x;
// ===================

let cykl = "";
let cnum = 10;

for (let i = 1; i <= 10; i++) {
  for (let k = 1; k <= cnum - i; k++) {
    cykl += "0";
  }
  for (let j = 1; j <= i; j++) {
    cykl += "*";
  }
  cykl += "\n";
}
console.log(cykl);
// ====================================

const add = n => n + 10;

console.log(add(5));

const memoize = fn => {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      console.log("take 'n' from cashe");

      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      console.log("calculated result");
      return result;
    }
  };
};
const memoizeAdd = memoize(add);

console.time("one");
console.log(memoizeAdd(3));
console.timeLog("one");
console.time("two");
console.log(memoizeAdd(3));
console.timeLog("two");
console.time("three");
console.log(memoizeAdd(3));
console.timeLog("three");

// =============== composite function ==============

const add2 = n => n + 10;

const memoized = fn => (...args) => {
  const cache = {};
  const n = args[0];
  if (n in cache) {
    console.log("take 'n' from cashe");

    return cache[n];
  } else {
    const result = fn(n);
    cache[n] = result;
    console.log("calculated result");
    return result;
  }
};

console.log(memoized(add2)(3));
console.log(memoized(add2)(33));
console.log(memoized(add2)(888));

// ============== caching decorator ================

// const slow = x => {
//   alert(`called with${x}`);
//   return x;
// };

// cachingDecorator is "wrapper" and can be used with any function
// const cachingDecorator = func => {
//   let cache = new Map();
//   return x => {
//     if (cache.has(x)) {
//       console.log("get x from cache");

//       return cache.get(x);
//     }
//     let result = func(x);
//     cache.set(x, result);
//     console.log("calculated x");

//     return result;
//   };
// };
// const cachedFunc = cachingDecorftor(slow);
// cachedFunc(1);
// cachedFunc(1);
// cachedFunc(3);
// cachedFunc(3)(
// =========================== caching decirator with this ==================
const worker = {
  some() {
    return 2;
  },
  slow(x) {
    console.log(`called with${x}`);
    return x * this.some();
  }
};

let cachingDecorator = function(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      console.log("cache", cache);
      return cache.get(x);
    }
    console.log(this);

    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
};

worker.slow = cachingDecorator(worker.slow);
worker.slow(2);
worker.slow(2);
worker.slow(112);
worker.slow(112);

// ===================== call with many arguments ===============
const worker1 = {
  slow(min, max) {
    return min + max;
  }
};
let cachingDecorator1 = (func, hash) => {
  let cache = new Map();
  return function() {
    let key = hash(arguments);
    console.log("key", key);
    if (cache.has(key)) {
      console.log("call key from cache");
      return cache.get(key);
    }
    let result = func.call(this, ...arguments);
    cache.set(key, result);
    console.log("calculated key");
    return result;
  };
};
function hash(args) {
  args.join = [].join;
  console.log(args);
  // =======or the sane ==========
  return [].join.call(args);
  return args.join();
}
let cached = cachingDecorator1(worker1.slow, hash);
cached(55, 122, 1, 1, 1, 1);
cached(55, 122, 1, 1, 1, 1);
// ========================================================
function func(...args) {
  args.map(item => {
    console.log(item);
  });
}
function delay(f, ms) {
  console.log(f);

  return function() {
    setTimeout(() => {
      // f(...arguments);
      // ============= or ========
      f.apply(this, arguments);
    }, ms);
  };
}

let f1000 = delay(func, 1000);

f1000("test", "firs", "secon");

// =================== shadow dom template3 ==============
(function() {
  class MyDiv extends HTMLElement {
    constructor() {
      super();
      let template = document.querySelector("#template3");
      let host = this.attachShadow({
        mode: "open"
      });
      host.appendChild(document.importNode(template.content, true));
      console.log(host.querySelector("#placeholder").getDistributedNodes());
    }
  }
  customElements.define("my-div", MyDiv);
})();

// =============== VIDEO CAPTURE NAVIGATOR ================

const video = document.querySelector("video");

function startVideo() {
  console.log(navigator.getUserMedia);

  // navigator.getUserMedia(
  //   { video: {width:{min:1920},height:{min:720}} },
  //   stream => (video.srcObject = stream),
  //   err => console.log(err)
  // );
  // ========= or the same with promise ================
  navigator.mediaDevices
    .getUserMedia({ video: { width: { min: 1920 }, height: { min: 1080 } } })
    .then(stream => {
      video.srcObject = stream;
    });
}

startVideo();
navigator.mediaDevices.enumerateDevices().then(res => console.log(res));

// =========================================  bind ===================

var data = [
  { name: "Samantha", age: 12 },
  { name: "Alexis", age: 14 }
];

const cars = {
  data: [
    { name: "Honda Accord", age: 14 },
    { name: "Tesla Model S", age: 2 }
  ]
};

const user = {
  data: [
    { name: "T. Woods", age: 37 },
    { name: "P. Mickelson", age: 43 }
  ],
  showData(event) {
    var randomNum = Math.floor(((Math.random() * 2) | 0) + 1) - 1; // Любое число с 0 до 1
    console.log(this);

    console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
  }
};

let usdata = user.showData;
usdata.call(user);

const carsShowData = user.showData.bind(cars);
carsShowData();
// ============================== =============================
function greet(gender, age, name) {
  const salutation = gender === "male" ? "Mr. " : "Ms. ";
  if (age > 25) {
    console.log(`Hello ${salutation} ${name}`);
  } else if (age < 25) {
    console.log(`Hey ${name}`);
  }
}

const greetAdult = greet.bind(null, "male", 11);
greetAdult("John");
// ========================================== call ==========================
// var avgScore = "global avgScore";

// function avg (arrayOfScores) {
//   var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
//       return prev + cur;
//   });
//   this.avgScore = sumOfScores / arrayOfScores.length;
// }

// var gameController = {
//     scores: [20, 34, 55, 46, 77],
//     avgScore:null
// }

// avg (gameController.scores);

// console.log (window.avgScore); // 46.4
// console.log (gameController.avgScore); // null

// avgScore = "global avgScore";

// avg.call (gameController, gameController.scores);

// console.log (window.avgScore); //global avgScore
// console.log (gameController.avgScore); // 46.4

// =============================================================

let newWindow = window.open(
  "",
  "hfghfg",
  "location=1,statusbar=1,width=500,height=500"
);

// setTimeout(newWindows[0].close(), 4444);
// ============================ closures ==========================

