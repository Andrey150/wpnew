!function(){var e={93:function(){var e=document.querySelector(".select-activity");sessionStorage.getItem("activity")||sessionStorage.setItem("activity","moderate"),e&&e.addEventListener("click",(function(e){if("INPUT"===e.target.tagName&&"radio"===e.target.type){var t=e.target.value;sessionStorage.setItem("activity",t)}}))},397:function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t=document.querySelectorAll(".checklist__items"),n=document.querySelectorAll(".checkbox__mark"),r=document.getElementById("11"),o=document.getElementById("12"),c=document.getElementById("13"),i=document.getElementById("1"),a=document.getElementById("21"),s=document.getElementById("22"),u=document.getElementById("23"),l=document.getElementById("2"),d=document.getElementById("31"),m=document.getElementById("32"),f=document.getElementById("33"),v=document.getElementById("3"),g=document.querySelector(".create"),h=[];if(t){var y=function(){h=[],n.forEach((function(e){var t=e.closest(".checklist__item");if(t){var n=t.querySelector('input[type="checkbox"]'),r=t.querySelector(".checklist__item-label").textContent,o=n.getAttribute("id");n.checked&&h.push({id:o,text:r})}}))},E=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];e.checked=n.every((function(e){return e.checked}))},S=function(t,n,r){n.addEventListener("change",(function(){r.forEach((function(e){return e.checked=n.checked}))})),t.forEach((function(t){t.addEventListener("change",(function(){var t;E.apply(void 0,[n].concat(function(t){if(Array.isArray(t))return e(t)}(t=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))}))}))};n.forEach((function(e){e.addEventListener("click",(function(){y();var e=this.closest(".checklist__item");if(e){var t=e.querySelector('input[type="checkbox"]');e.querySelector(".checklist__item-label").textContent,t.getAttribute("id");y(t.checked)}}))})),t.forEach((function(e){e.querySelectorAll(".checklist__items").forEach((function(t){t.classList.add("hide"),e.addEventListener("click",(function(){t.classList.toggle("hide")}))}))})),S([r,o,c],i,[r,o,c]),S([a,s,u],l,[a,s,u]),S([d,m,f],v,[d,m,f]),g.addEventListener("click",(function(){y();var e=document.querySelector(".result-container");e.innerHTML="";var t=document.createElement("h3"),n=h.map((function(e){return e.text.toLowerCase()}));t.textContent="Ваше техническое задание включает в себя ".concat(n.join(", ")),e.appendChild(t)}))}},956:function(){var e=document.querySelectorAll(".select-wrapper"),t={value:null},n={value:null};e.forEach((function(e){var r=e.querySelector(".select-value"),o=e.querySelector(".select-options"),c=Array.from(o.querySelectorAll(".select-option"));r.addEventListener("click",(function(){o.classList.toggle("show"),r.classList.toggle("show")})),c.forEach((function(c){c.addEventListener("click",(function(){var c=this.getAttribute("data-value");(e.classList.contains("breed")?t:n).value=c,sessionStorage.setItem("dogBreed",t.value),sessionStorage.setItem("dogAge",n.value),r.textContent=this.textContent,o.classList.remove("show"),r.classList.remove("show")}))})),document.addEventListener("click",(function(t){e.contains(t.target)||(o.classList.remove("show"),r.classList.remove("show"))}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}!function(){"use strict";n(956);var e=document.querySelector(".weight-input"),t=document.querySelector(".feed-weight");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Введите подходящий вес";t.innerHTML=e,setTimeout((function(){t.innerHTML=""}),3e3)}e&&e.addEventListener("change",(function(e){var n=e.target.value;+n<1||+n>30?r("Вес долен быть в диапазоне от 1 до 30 килограмма"):(sessionStorage.setItem("dogWeight",n),t.innerHTML="")}));var o=document.querySelector(".calc-form__button"),c=document.querySelector(".feed-weight"),i={shepherd:{"less-than-1":600,"1-to-5":800,"more-than-5":700},labrador:{"less-than-1":500,"1-to-5":700,"more-than-5":400}};function a(e){return sessionStorage.getItem(e)}o&&o.addEventListener("click",(function(){var e=a("activity"),t=a("dogBreed"),n=a("dogAge"),o=a("dogWeight");if(+o<1||+o>30)return r("Вес долен быть в диапазоне от 1 до 30 килограмм");t&&n&&e&&o?c.innerHTML=function(e,t,n,r){var o,c=i[e][t],a=+r;return o=a>5&&a<10?1.2*c:a>=10&&a<=20?1.3*c:1.4*c,"active"===n&&(o*=1.3),"На один прием пищи следует давать вашему питомцу ".concat(Math.ceil(o)," грамм корма")}(t,n,e,o):(c.innerHTML="Для рассчета заполните все поля",setTimeout((function(){c.innerHTML=""}),3e3))})),sessionStorage.getItem("activity")&&sessionStorage.clear(),n(93),n(397)}()}();