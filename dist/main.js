(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),d=t.n(c),l=new URL(t(512),t.b),s=i()(a()),m=d()(l);s.push([e.id,`* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    display: flex;\n    height: 100vh;\n    font-size: 16px;\n    background-image: url(${m});\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\nul,\nol,\nli {\n    list-style: none;\n}\n\nbutton {\n    border: none;\n    background-color: inherit;\n    color: #392b04;\n    font-size: 1rem;\n    padding: 0.2rem 0.6rem;\n    border-radius: 0.42rem;\n}\n\nbutton:active {\n    scale: 0.98;\n}\n\n/* .container utility */\n\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* header */\n\nheader {\n    gap: 1rem;\n    color: #392b04;\n    background-color: #C1E1C190;\n    backdrop-filter: blur(0.5rem);\n    position: fixed;\n    height: 6rem;\n    width: 100%;\n    box-shadow: 0.01rem 0.01rem 0.05rem #00000090;\n}\n\n.navbar ul {\n    display: flex;\n    gap: 1rem;\n}\n\n.activeTab {\n    background-color: #ffd1dc;\n}\n\n/* content & main */\n\nmain {\n    padding-top: 8rem;\n    color: white;\n    width: 100%;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    width: 100%;\n}\n\n.tabContainer {\n    background-color: #00000099;\n    padding: 1rem;\n    border-radius: 0.33rem;\n    text-align: center;\n}\n\n/* home tab styles */\n\nblockquote.home {\n    padding-top: 2rem;\n    font-size: 1.2rem;\n    text-align: center;\n}\n\n/* menu tab styles */\n\n.menuH2 {\n    text-align: center;\n    background-color: #ffd1dc;\n    width: 16rem;\n    border-radius: 0.42rem;\n    border: 0.03rem solid pink;\n    box-shadow: 0 0.1rem 0.25rem 0 #00000099;\n    padding: 0.5rem;\n    color: #392b04;\n}\n\n.menuContainer {\n    padding: 2rem;\n    width: 100%;\n    max-width: 800px;\n}\n\n.menuGrid {\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));\n    gap: 1rem;\n}\n\n.menuItemCard {\n    text-align: center;\n    gap: 0.5rem;\n    background-color: bisque;\n    border-radius: 0.42rem;\n    border: 0.03rem solid pink;\n    box-shadow: 0 0.1rem 0.25rem 0 #00000090;\n    color: #392b04;\n    padding: 1.2rem;\n}\n\n.menuItemCard img {\n    width: 10rem;\n    height: 10rem;\n    background-color: #ffd1dc;\n}\n\n/* contact tab styles */\n\n.contact {\n    gap: 1rem;\n}\n\n.contact img {\n    width: 18rem;\n}\n\n/* footer */\n\nfooter {\n    margin-top: auto;\n    color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n`,""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],l=r.base?d[0]+r.base:d[0],s=o[l]||0,m="".concat(l," ").concat(s);o[l]=s+1;var u=t(m),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=a(p,r);r.byIndex=c,n.splice(c,0,{identifier:m,updater:h,references:1})}i.push(m)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},512:(e,n,t)=>{e.exports=t.p+"95be615a060e9274a921.png"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),d=t.n(c),l=t(216),s=t.n(l),m=t(589),u=t.n(m),p=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.getElementById("content"),n=document.createElement("header"),t=document.createElement("h1"),r=document.createElement("nav"),a=document.createElement("ul"),o=document.createElement("li"),i=document.createElement("li"),c=document.createElement("li"),d=document.createElement("button"),l=document.createElement("button"),s=document.createElement("button"),m=document.createElement("main"),u=document.createElement("footer"),p=document.createElement("p");t.textContent="Bamboo Boba",d.textContent="Home",l.textContent="Menu",s.textContent="Contact",n.classList.add("container"),r.classList.add("navbar"),m.classList.add("container"),d.id="btnHome",l.id="btnMenu",s.id="btnContact",d.type="button",l.type="button",s.type="button",o.appendChild(d),i.appendChild(l),c.appendChild(s),a.appendChild(o),a.appendChild(i),a.appendChild(c),r.appendChild(a),n.appendChild(t),n.appendChild(r),m.id="main",p.textContent="by Ludwig.eth",u.appendChild(p),e.appendChild(n),e.appendChild(m),e.appendChild(u)}();const f=document.getElementById("main"),b=document.getElementById("btnHome"),g=document.getElementById("btnMenu"),v=document.getElementById("btnContact"),C=e=>{e.target.classList.add("activeTab")},y=()=>{b.classList.remove("activeTab"),g.classList.remove("activeTab"),v.classList.remove("activeTab")},x=()=>{f.replaceChildren()};b.addEventListener("click",(e=>{x(),y(),C(e),function(){const e=document.getElementById("main"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("p"),o=document.createElement("p"),i=document.createElement("blockquote");n.classList.add("tabContainer"),t.classList.add("home"),i.classList.add("home"),r.textContent="Milk and brewed Tea",a.textContent="Taiwanese Milktea",o.textContent="since 2020",i.textContent='"The perfect treat for a cozy day shopping"',t.appendChild(r),t.appendChild(a),t.appendChild(o),n.appendChild(t),n.appendChild(i),e.appendChild(n)}()})),g.addEventListener("click",(e=>{x(),y(),C(e),function(){const e=document.getElementById("main"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("h2");r.classList.add("menuH2"),n.classList.add("menuContainer"),t.classList.add("menuGrid"),r.textContent="Our Milkteas",[{img:"images/brownSugarTea.png",name:"Brown Sugar Milktea",price:"$5"},{img:"images/matchaTea.png",name:"Matcha Milktea",price:"$5"},{img:"images/strawberryTea.png",name:"Strawberry Milktea",price:"$5"}].forEach((e=>{const n=function(e,n,t){const r=document.createElement("div"),a=document.createElement("img"),o=document.createElement("h3"),i=document.createElement("p");return r.classList.add("menuItemCard"),r.classList.add("container"),a.src=e,o.textContent=n,i.textContent=t,r.appendChild(a),r.appendChild(o),r.appendChild(i),r}(e.img,e.name,e.price);t.appendChild(n)})),n.appendChild(t),e.appendChild(r),e.appendChild(n)}()})),v.addEventListener("click",(e=>{x(),y(),C(e),function(){const e=document.getElementById("main"),n=document.createElement("div"),t=document.createElement("h2"),r=document.createElement("address"),a=document.createElement("img");n.classList.add("container"),n.classList.add("tabContainer"),n.classList.add("contact"),t.textContent="Where to find us",r.innerHTML="\n8008 Boba Street<br>\nTapioca, IL 69420<br>\nMilkTeaistan\n",a.src="images/bobalocation.png",n.appendChild(t),n.appendChild(r),n.appendChild(a),e.appendChild(n)}()}))})()})();