/*! For license information please see main.js.LICENSE.txt */
!function(e){function t(t){for(var i,a,s=t[0],l=t[1],c=t[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(t);v.length;)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={0:0},o=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([126,1]),n()}({126:function(e,t,n){n(127),e.exports=n(318)},313:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);n(313),n(314);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=0,s=[];function l(e,t,n){for(var i=0;i<e.length;i+=1)t.call(n,e[i],i)}function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i={}.hasOwnProperty,r=t[0],a=t[1];if(t.length>2){var s=[];for(Object.keys(t).forEach((function(e){s.push(t[e])}));s.length>2;){var l=s.shift(),d=s.shift();s.unshift(c(l,d))}r=s.shift(),a=s.shift()}return a&&Object.keys(a).forEach((function(e){i.call(a,e)&&("object"===o(a[e])?(r[e]=r[e]||{},r[e]=c(r[e],a[e])):r[e]=a[e])})),r}function d(){return"rmjs-".concat(a+=1)}function u(e){e.style.height="auto";var t=parseInt(e.getBoundingClientRect().height,10),n=parseInt(window.getComputedStyle(e).maxHeight,10),i=parseInt(e.readmore.defaultHeight,10);e.readmore.expandedHeight=t,e.readmore.maxHeight=n,e.readmore.collapsedHeight=n||e.readmore.collapsedHeight||i,e.style.maxHeight="none"}function v(e,t){if(!s[e]){var n="";t.embedCSS&&""!==t.blockCSS&&(n+="".concat(e," + [data-readmore-toggle], ").concat(e,"[data-readmore] {\n        ").concat(t.blockCSS,"\n      }")),n+="".concat(e,"[data-readmore] {\n      transition: height ").concat(t.speed,"ms;\n      overflow: hidden;\n    }"),i=document,r=n,(o=i.createElement("style")).type="text/css",o.styleSheet?o.styleSheet.cssText=r:o.appendChild(i.createTextNode(r)),i.getElementsByTagName("head")[0].appendChild(o),s[e]=!0}var i,r,o}function f(e,t,n){var i=e;"function"==typeof e&&(i=e(t));var r,o,a=(r=i,(o=document.createElement("div")).innerHTML=r,o.firstChild);return a.setAttribute("data-readmore-toggle",t.id),a.setAttribute("aria-controls",t.id),a.addEventListener("click",function(e){this.toggle(t,e)}.bind(n)),a}function m(){return"undefined"!=typeof window&&"undefined"!=typeof document&&!!document.querySelectorAll&&!!window.addEventListener}[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){Object.prototype.hasOwnProperty.call(e,"remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}));var p,g,h,_,y=(p=function(){l(document.querySelectorAll("[data-readmore]"),(function(e){var t="true"===e.getAttribute("aria-expanded");u(e),e.style.height="".concat(t?e.readmore.expandedHeight:e.readmore.collapsedHeight,"px")}))},g=100,function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=h&&!_,o=function(){_=null,h||p.apply(e,n)};clearTimeout(_),_=setTimeout(o,g),r&&p.apply(this,n)}),w={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,sourceOrder:"after",blockProcessed:function(){},beforeToggle:function(){},afterToggle:function(){}},b=function(){function e(){var t=this;if(i(this,e),m()){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var a,s=r[0],p=r[1];(a="string"==typeof s?document.querySelectorAll(s):s.nodeName?[s]:s).length&&(this.options=c({},w,p),"string"==typeof s?v(s,this.options):(this.instanceSelector=".".concat(d()),v(this.instanceSelector,this.options)),window.addEventListener("load",y),window.addEventListener("resize",y),this.elements=[],l(a,(function(e){t.instanceSelector&&e.classList.add(t.instanceSelector.substr(1));var n=t.options.startOpen;e.readmore={defaultHeight:t.options.collapsedHeight,heightMargin:t.options.heightMargin},u(e);var i=e.readmore.heightMargin;if(e.getBoundingClientRect().height<=e.readmore.collapsedHeight+i)"function"==typeof t.options.blockProcessed&&t.options.blockProcessed(e,!1);else{e.setAttribute("data-readmore",""),e.setAttribute("aria-expanded",n),e.id=e.id||d();var r=f(n?t.options.lessLink:t.options.moreLink,e,t);e.parentNode.insertBefore(r,"before"===t.options.sourceOrder?e:e.nextSibling),e.style.height="".concat(n?e.readmore.expandedHeight:e.readmore.collapsedHeight,"px"),"function"==typeof t.options.blockProcessed&&t.options.blockProcessed(e,!0),t.elements.push(e)}})))}}var t,n,a;return t=e,(n=[{key:"toggle",value:function(){var e=this,t=arguments.length<=0?void 0:arguments[0],n=function(t){var n=document.querySelector('[aria-controls="'.concat(t.id,'"]')),i=t.getBoundingClientRect().height<=t.readmore.collapsedHeight,r=i?t.readmore.expandedHeight:t.readmore.collapsedHeight;if("function"!=typeof e.options.beforeToggle||!1!==e.options.beforeToggle(n,t,!i)){t.style.height="".concat(r,"px");var o=function r(o){"function"==typeof e.options.afterToggle&&e.options.afterToggle(n,t,i),o.stopPropagation(),t.setAttribute("aria-expanded",i),t.removeEventListener("transitionend",r,!1)};t.addEventListener("transitionend",o,!1),e.options.speed<1&&o.call(e,{target:t});var a=i?e.options.lessLink:e.options.moreLink;a?n&&n.parentNode&&n.parentNode.replaceChild(f(a,t,e),n):n.remove()}};if("string"==typeof t&&(t=document.querySelectorAll(t)),!t)throw new Error("Element MUST be either an HTML node or querySelector string");var i=arguments.length<=1?void 0:arguments[1];i&&(i.preventDefault(),i.stopPropagation()),"object"!==o(t)||t.nodeName?n(t):l(t,n)}},{key:"destroy",value:function(e){var t=this;l(e?"string"==typeof e?document.querySelectorAll(e):e.nodeName?[e]:e:this.elements,(function(e){if(-1!==t.elements.indexOf(e)){t.elements=t.elements.filter((function(t){return t!==e})),t.instanceSelector&&e.classList.remove(t.instanceSelector.substr(1)),delete e.readmore,e.style.height="initial",e.style.maxHeight="initial",e.removeAttribute("data-readmore"),e.removeAttribute("aria-expanded");var n=document.querySelector('[aria-controls="'.concat(e.id,'"]'));n&&n.remove(),-1!==e.id.indexOf("rmjs-")&&e.removeAttribute("id")}}))}}])&&r(t.prototype,n),a&&r(t,a),e}();b.VERSION="3.0.0-beta-1";n(315);var S=n(20),L=n.n(S),q=n(323),x=n(321),k=n(322);n(125);q.a.use([x.a,k.a]),window.addEventListener("DOMContentLoaded",(function(){L()(document).ready((function(){document.querySelector(".header__nav");L()(".header__burger")&&L()(".header__burger").click((function(e){e.preventDefault(),L()(".header__burger,.header__burger-fixed,.menu").toggleClass("active"),L()("html").toggleClass("lock")}))}));var e=document.querySelectorAll(".js-stages__link"),t=document.querySelectorAll(".js-faq__list"),n=document.querySelectorAll(".js-stages__tab"),i=document.querySelectorAll(".js-faq__tab"),r=document.querySelector(".stages-list"),o=document.querySelector(".stages-list__faq"),a=document.querySelectorAll(".stages-list__hexagon"),s=document.querySelectorAll(".vacancy__img"),l=document.querySelectorAll(".questions-item__title"),c=document.querySelectorAll(".questions-item__text"),d=document.querySelector(".questions"),u=document.querySelectorAll(".news-subtitle"),v=document.querySelectorAll(".news-articles__content"),f=document.querySelector(".news-articles__header"),m=document.querySelector(".vacancies"),p=document.querySelectorAll(".vacancy__content"),g=document.querySelectorAll(".vacancy__header"),h=document.querySelector(".js-about-tabs"),_=window.matchMedia("(min-width: 992px)");if(m&&m.addEventListener("click",(function(e){b(e,0,p,"vacancy__content-active",g,"vacancy-active",!0,"vacancy__header",s,"vacancy__img-active")}),{passive:!1}),f&&(S(v,"active",u,"news-subtitle-active",!1,"news-subtitle"),x(0,v,"active",u,"news-subtitle-active",!1,"news-subtitle"),f.addEventListener("click",(function(e){b(e,0,v,"active",u,"news-subtitle-active",!1,"news-subtitle")}),{passive:!1})),r&&(S(n,"active",e,"stages-list__link-active",!0,"stages-list__link",a,"stages-list__hexagon-active"),x(0,n,"active",e,"stages-list__link-active",!0,"stages-list__link",a,"stages-list__hexagon-active"),_.matches&&(r.style.minHeight=n[0].offsetHeight+"px"),r.addEventListener("click",(function(t){if(b(t),_.matches){var i=t.target;i&&i.classList.contains("stages-list__link")&&e.forEach((function(e,t){i==e&&(console.log(n[t].offsetHeight),r.style.minHeight=n[t].offsetHeight+"px")}))}}))),o&&(S(i,"active",t,"stages-list__link-active",!1,"stages-list__link"),x(0,i,"active",t,"stages-list__link-active",!1,"stages-list__link"),_.matches&&(o.style.minHeight=i[0].offsetHeight+"px"),o.addEventListener("click",(function(e){if(b(e,0,i,"active",t,"stages-list__link-active",!1,"stages-list__link"),_.matches){var n=e.target;n&&n.classList.contains("stages-list__link")&&t.forEach((function(e,t){n==e&&(console.log(i[t].offsetHeight),o.style.minHeight=i[t].offsetHeight+"px")}))}}),{passive:!1})),d&&d.addEventListener("click",(function(e){e.preventDefault(),b(e,0,c,"questions-item__text-active",l,"questions-item__title-active",!1,"questions-item__title")}),{passive:!1}),h){var y=h.querySelectorAll(".characteristic"),w=h.querySelectorAll(".text2column__block");S(w,"active",y,"active",!1,"characteristic"),x(0,w,"active",y,"active",!1,"characteristic"),h.addEventListener("click",(function(e){e.preventDefault(),b(e,0,w,"active",y,"active",!1,"characteristic")}),{passive:!1})}function b(t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"active",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"stages-list__link-active",l=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"stages-list__link",d=arguments.length>8&&void 0!==arguments[8]?arguments[8]:a,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"stages-list__hexagon-active",v=t.target;v&&v.classList.contains(c)&&(t.preventDefault(),o.forEach((function(e,t){v==e&&(S(i,r,o,s,l,c,d,u),x(t,i,r,o,s,l,c,d,u))})))}function S(e,t,n,i,r,o,a,s){e.forEach((function(e){e.classList.remove(t)})),n.forEach((function(e){e.classList.remove(i)})),n.forEach((function(e){r&&a.forEach((function(e){e.classList.remove(s)}))}))}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0;t[e].classList.add(n),i[e].classList.add(r),i.forEach((function(t){o&&a[e].classList.add(s)}))}new q.a(".swiper-container-reviews",{slidesPerView:4,spaceBetween:30,observer:!0,observeParents:!0,navigation:{nextEl:".reviews__next",prevEl:".reviews__prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},991:{slidesPerView:3},1440:{slidesPerView:4}}}),new q.a(".swiper-container-awards",{slidesPerView:4,spaceBetween:30,observer:!0,observeParents:!0,navigation:{nextEl:".awards__next",prevEl:".awards__prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},991:{slidesPerView:3},1440:{slidesPerView:4}}}),new q.a(".swiper-container-project",{slidesPerView:3,slidesPerColumn:3,spaceBetween:15,observer:!0,observeParents:!0,navigation:{nextEl:".project__next",prevEl:".project__prev"},breakpoints:{0:{slidesPerView:1,slidesPerColumn:3},575:{slidesPerView:2,slidesPerColumn:3},768:{slidesPerView:1,slidesPerColumn:3},991:{slidesPerView:2,slidesPerColumn:3},1280:{slidesPerView:3,slidesPerColumn:3}}}),new q.a(".swiper-container-information",{slidesPerView:1,spaceBetween:200,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination-information",type:"bullets",clickable:!0}}),new q.a(".swiper-container-module",{slidesPerView:4,spaceBetween:30,observer:!0,observeParents:!0,navigation:{nextEl:".module-more__next",prevEl:".module-more__prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},991:{slidesPerView:3},1440:{slidesPerView:4}}}),new q.a(".swiper-container-tags",{slidesPerView:"auto",spaceBetween:20,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".tags__next",prevEl:".tags__prev"}}),new q.a(".swiper-container-tags-2",{slidesPerView:2,spaceBetween:50,allowSlidePrev:!0,allowSlideNext:!0,navigation:{nextEl:".tags__next-2",prevEl:".tags__prev-2"},breakpoints:{0:{slidesPerView:1,spaceBetween:100},767:{slidesPerView:2,spaceBetween:50}}});var k=document.querySelector(".footer"),C=document.querySelectorAll(".footer-content__title"),E=document.querySelectorAll(".footer-content__list");k&&k.addEventListener("click",(function(e){var t=e.target;t&&t.classList.contains("footer-content__title")&&(e.preventDefault(),C.forEach((function(e,n){e==t&&(t.classList.toggle("active"),E[n].classList.toggle("active"))})))}),{passive:!1});var P=document.querySelector(".number");if(P){var A=document.querySelectorAll(".number__num"),H=P.getBoundingClientRect().top;window.addEventListener("scroll",(function e(){if(window.pageYOffset>H-window.innerHeight/2){console.log("worj"),this.removeEventListener("scroll",e);var t=setInterval((function(){A[0].innerHTML=+A[0].innerHTML+1,+A[0].innerHTML==+A[0].dataset.max&&clearInterval(t)}),5),n=setInterval((function(){A[1].innerHTML=+A[1].innerHTML+1,+A[1].innerHTML==+A[1].dataset.max&&clearInterval(n)}),5),i=setInterval((function(){A[2].innerHTML=+A[2].innerHTML+1,+A[2].innerHTML==+A[2].dataset.max&&clearInterval(i)}),5),r=setInterval((function(){A[3].innerHTML=+A[3].innerHTML+1,+A[3].innerHTML==+A[3].dataset.max&&clearInterval(r)}),1)}}))}var j=document.querySelector(".swal2-popup");function T(e){e.classList.add("active"),L()("html").addClass("lock")}function M(e){e.classList.remove("active"),L()("html").removeClass("lock")}function V(e){var t=e.querySelector(".video__link"),n=e.querySelector(".video__media"),i=e.querySelector(".video__button"),r=function(e){var t=/https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/hqdefault\.jpg/i;return e.src.match(t)[1]}(n);e.addEventListener("click",(function(){var n=function(e){var t=document.createElement("iframe");return t.setAttribute("allowfullscreen",""),t.setAttribute("allow","autoplay"),t.setAttribute("src",function(e){return"https://www.youtube.com/embed/"+e+"?rel=0&showinfo=0&autoplay=1"}(e)),t.classList.add("video__media"),t}(r);t.remove(),i.remove(),e.appendChild(n)})),t.removeAttribute("href"),e.classList.add("video--enabled")}j&&j.addEventListener("click",(function(e){target&&"SPAN"==target.tagName&&(e.preventDefault(),M(modalRegion),M(modalCall),M(modalSubscribe),M(modalVacancies),M(modalFree))})),document.addEventListener("click",(function(e){var t=e.target,n=document.querySelector(".modal-call"),i=document.querySelector(".modal-call__exit"),r=document.querySelector(".modal-subscribe"),o=document.querySelector(".modal-subscribe__exit"),a=document.querySelector(".modal-region"),s=document.querySelector(".modal-region__exit"),l=document.querySelector(".modal-vacancies"),c=document.querySelector(".modal-vacancies__exit"),d=document.querySelector(".modal-free"),u=document.querySelector(".modal-free__exit"),v=document.querySelectorAll(".modal-region__link"),f=document.querySelector(".js-region");if(t&&t.classList.contains("swal2-confirm")&&(e.preventDefault(),M(a),M(n),M(l),M(d)),n&&t&&t.classList.contains("js-call")&&(e.preventDefault(),T(n)),r&&t&&t.classList.contains("js-subscribe")&&(e.preventDefault(),T(r)),d&&t&&t.classList.contains("js-free")&&(e.preventDefault(),T(d)),a&&t&&t.classList.contains("js-region")&&(e.preventDefault(),T(a)),l&&t&&t.classList.contains("js-vacancies")&&(e.preventDefault(),T(l)),i&&i.addEventListener("click",(function(e){e.preventDefault(),M(n)})),o&&o.addEventListener("click",(function(e){e.preventDefault(),M(r)})),u&&u.addEventListener("click",(function(e){e.preventDefault(),M(d)})),s)if(s.addEventListener("click",(function(e){e.preventDefault(),M(a)})),t.classList.contains("modal-region__link"))e.preventDefault(),M(a),v.forEach((function(e){e==t&&(f.innerHTML='\n                <div class="location__item">\n                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M15.9291 2.45591C14.3454 0.872191 12.2397 0 10.0001 0C7.76042 0 5.65478 0.872152 4.07099 2.45591C2.4873 4.03959 1.61511 6.14514 1.61511 8.3848C1.61511 10.6245 2.4873 12.7301 4.07099 14.3138L9.58578 19.8284C9.7002 19.9429 9.85016 20 10.0001 20C10.15 20 10.3 19.9428 10.4144 19.8284L15.929 14.3138C17.5127 12.7301 18.3849 10.6245 18.3849 8.38484C18.3849 6.1451 17.5127 4.03955 15.9291 2.45591ZM12.6334 11.018C11.93 11.7214 10.9949 12.1088 10.0001 12.1088C9.00539 12.1088 8.07023 11.7214 7.3669 11.0181C6.6635 10.3147 6.27615 9.37953 6.27615 8.3848C6.27615 7.39011 6.6635 6.45495 7.3669 5.75155C8.07023 5.04818 9.00539 4.66084 10.0001 4.66084C10.9949 4.66084 11.93 5.04818 12.6334 5.75155C13.3367 6.45487 13.7241 7.39003 13.7241 8.38476C13.7241 9.37949 13.3367 10.3147 12.6334 11.018Z"\n                              fill="black"/>\n                    </svg>\n                    <div class="location__item-text">'.concat(e.innerHTML,"</div>\n                </div>\n"))}));else if(t.classList.contains("js-region-close")){e.preventDefault();var m=document.querySelector(".js-select-city");M(a),f.innerHTML='\n                <div class="location__item">\n                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n                        <path d="M15.9291 2.45591C14.3454 0.872191 12.2397 0 10.0001 0C7.76042 0 5.65478 0.872152 4.07099 2.45591C2.4873 4.03959 1.61511 6.14514 1.61511 8.3848C1.61511 10.6245 2.4873 12.7301 4.07099 14.3138L9.58578 19.8284C9.7002 19.9429 9.85016 20 10.0001 20C10.15 20 10.3 19.9428 10.4144 19.8284L15.929 14.3138C17.5127 12.7301 18.3849 10.6245 18.3849 8.38484C18.3849 6.1451 17.5127 4.03955 15.9291 2.45591ZM12.6334 11.018C11.93 11.7214 10.9949 12.1088 10.0001 12.1088C9.00539 12.1088 8.07023 11.7214 7.3669 11.0181C6.6635 10.3147 6.27615 9.37953 6.27615 8.3848C6.27615 7.39011 6.6635 6.45495 7.3669 5.75155C8.07023 5.04818 9.00539 4.66084 10.0001 4.66084C10.9949 4.66084 11.93 5.04818 12.6334 5.75155C13.3367 6.45487 13.7241 7.39003 13.7241 8.38476C13.7241 9.37949 13.3367 10.3147 12.6334 11.018Z"\n                              fill="black"/>\n                    </svg>\n                    <div class="location__item-text">'.concat(m.innerHTML,"</div>\n                </div>\n")}c&&c.addEventListener("click",(function(e){e.preventDefault(),M(l)}))})),function(){for(var e=document.querySelectorAll(".video"),t=0;t<e.length;t++)V(e[t])}();var O=(new Date).getTime();function D(e){var t=0;e.forEach((function(e){e.offsetHeight>t&&(t=e.offsetHeight)})),e.forEach((function(e){e.style.height=t+"px"}))}L()(document).ready((function(e){e("html").on("mousedown",(function(e){var t=(new Date).getTime();if(t-O<500)return O,O=t,e.preventDefault(),!1;O,O=t}))})),D(document.querySelectorAll(".employees__img")),D(document.querySelectorAll(".advantage__subtitle")),D(document.querySelectorAll(".project")),D(document.querySelectorAll(".project__img")),window.addEventListener("resize",(function(e){D(document.querySelectorAll(".employees__img")),D(document.querySelectorAll(".advantage__subtitle")),D(document.querySelectorAll(".project__img")),D(document.querySelectorAll(".project"))}))}),{passive:!1});n(316),n(317)}});