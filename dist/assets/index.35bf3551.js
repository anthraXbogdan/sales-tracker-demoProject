(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var To={exports:{}};(function(e,t){(function(n,s){e.exports=s()})(Yc,function(){return function(n){function s(i){if(r[i])return r[i].exports;var o=r[i]={i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}var r={};return s.m=n,s.c=r,s.d=function(i,o,a){s.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:a})},s.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(o,"a",o),o},s.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},s.p="",s(s.s=8)}([function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i="swal-button";s.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:i,CONFIRM_BUTTON:i+"--confirm",CANCEL_BUTTON:i+"--cancel",DANGER_BUTTON:i+"--danger",BUTTON_LOADING:i+"--loading",BUTTON_LOADER:i+"__loader"},s.default=s.CLASS_NAMES},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0}),s.getNode=function(i){var o="."+i;return document.querySelector(o)},s.stringToNode=function(i){var o=document.createElement("div");return o.innerHTML=i.trim(),o.firstChild},s.insertAfter=function(i,o){var a=o.nextSibling;o.parentNode.insertBefore(i,a)},s.removeNode=function(i){i.parentElement.removeChild(i)},s.throwErr=function(i){throw i=i.replace(/ +(?= )/g,""),"SweetAlert: "+(i=i.trim())},s.isPlainObject=function(i){if(Object.prototype.toString.call(i)!=="[object Object]")return!1;var o=Object.getPrototypeOf(i);return o===null||o===Object.prototype},s.ordinalSuffixOf=function(i){var o=i%10,a=i%100;return o===1&&a!==11?i+"st":o===2&&a!==12?i+"nd":o===3&&a!==13?i+"rd":i+"th"}},function(n,s,r){function i(p){for(var f in p)s.hasOwnProperty(f)||(s[f]=p[f])}Object.defineProperty(s,"__esModule",{value:!0}),i(r(25));var o=r(26);s.overlayMarkup=o.default,i(r(27)),i(r(28)),i(r(29));var a=r(0),c=a.default.MODAL_TITLE,u=a.default.MODAL_TEXT,l=a.default.ICON,h=a.default.FOOTER;s.iconMarkup=`
  <div class="`+l+'"></div>',s.titleMarkup=`
  <div class="`+c+`"></div>
`,s.textMarkup=`
  <div class="`+u+'"></div>',s.footerMarkup=`
  <div class="`+h+`"></div>
`},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1);s.CONFIRM_KEY="confirm",s.CANCEL_KEY="cancel";var o={visible:!0,text:null,value:null,className:"",closeModal:!0},a=Object.assign({},o,{visible:!1,text:"Cancel",value:null}),c=Object.assign({},o,{text:"OK",value:!0});s.defaultButtonList={cancel:a,confirm:c};var u=function(f){switch(f){case s.CONFIRM_KEY:return c;case s.CANCEL_KEY:return a;default:var g=f.charAt(0).toUpperCase()+f.slice(1);return Object.assign({},o,{text:g,value:f})}},l=function(f,g){var v=u(f);return g===!0?Object.assign({},v,{visible:!0}):typeof g=="string"?Object.assign({},v,{visible:!0,text:g}):i.isPlainObject(g)?Object.assign({visible:!0},v,g):Object.assign({},v,{visible:!1})},h=function(f){for(var g={},v=0,b=Object.keys(f);v<b.length;v++){var d=b[v],y=f[d],m=l(d,y);g[d]=m}return g.cancel||(g.cancel=a),g},p=function(f){var g={};switch(f.length){case 1:g[s.CANCEL_KEY]=Object.assign({},a,{visible:!1});break;case 2:g[s.CANCEL_KEY]=l(s.CANCEL_KEY,f[0]),g[s.CONFIRM_KEY]=l(s.CONFIRM_KEY,f[1]);break;default:i.throwErr("Invalid number of 'buttons' in array ("+f.length+`).
      If you want more than 2 buttons, you need to use an object!`)}return g};s.getButtonListOpts=function(f){var g=s.defaultButtonList;return typeof f=="string"?g[s.CONFIRM_KEY]=l(s.CONFIRM_KEY,f):Array.isArray(f)?g=p(f):i.isPlainObject(f)?g=h(f):f===!0?g=p([!0,!0]):f===!1?g=p([!1,!1]):f===void 0&&(g=s.defaultButtonList),g}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o=r(2),a=r(0),c=a.default.MODAL,u=a.default.OVERLAY,l=r(30),h=r(31),p=r(32),f=r(33);s.injectElIntoModal=function(d){var y=i.getNode(c),m=i.stringToNode(d);return y.appendChild(m),m};var g=function(d){d.className=c,d.textContent=""},v=function(d,y){g(d);var m=y.className;m&&d.classList.add(m)};s.initModalContent=function(d){var y=i.getNode(c);v(y,d),l.default(d.icon),h.initTitle(d.title),h.initText(d.text),f.default(d.content),p.default(d.buttons,d.dangerMode)};var b=function(){var d=i.getNode(u),y=i.stringToNode(o.modalMarkup);d.appendChild(y)};s.default=b},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(3),o={isOpen:!1,promise:null,actions:{},timer:null},a=Object.assign({},o);s.resetState=function(){a=Object.assign({},o)},s.setActionValue=function(u){if(typeof u=="string")return c(i.CONFIRM_KEY,u);for(var l in u)c(l,u[l])};var c=function(u,l){a.actions[u]||(a.actions[u]={}),Object.assign(a.actions[u],{value:l})};s.setActionOptionsFor=function(u,l){var h=(l===void 0?{}:l).closeModal,p=h===void 0||h;Object.assign(a.actions[u],{closeModal:p})},s.default=a},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o=r(3),a=r(0),c=a.default.OVERLAY,u=a.default.SHOW_MODAL,l=a.default.BUTTON,h=a.default.BUTTON_LOADING,p=r(5);s.openModal=function(){i.getNode(c).classList.add(u),p.default.isOpen=!0};var f=function(){i.getNode(c).classList.remove(u),p.default.isOpen=!1};s.onAction=function(g){g===void 0&&(g=o.CANCEL_KEY);var v=p.default.actions[g],b=v.value;if(v.closeModal===!1){var d=l+"--"+g;i.getNode(d).classList.add(h)}else f();p.default.promise.resolve(b)},s.getState=function(){var g=Object.assign({},p.default);return delete g.promise,delete g.timer,g},s.stopLoading=function(){for(var g=document.querySelectorAll("."+l),v=0;v<g.length;v++)g[v].classList.remove(h)}},function(n,s){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(r=window)}n.exports=r},function(n,s,r){(function(i){n.exports=i.sweetAlert=r(9)}).call(s,r(7))},function(n,s,r){(function(i){n.exports=i.swal=r(10)}).call(s,r(7))},function(n,s,r){typeof window<"u"&&r(11),r(16);var i=r(23).default;n.exports=i},function(n,s,r){var i=r(12);typeof i=="string"&&(i=[[n.i,i,""]]);var o={insertAt:"top"};o.transform=void 0,r(14)(i,o),i.locals&&(n.exports=i.locals)},function(n,s,r){s=n.exports=r(13)(void 0),s.push([n.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(n,s){function r(o,a){var c=o[1]||"",u=o[3];if(!u)return c;if(a&&typeof btoa=="function"){var l=i(u);return[c].concat(u.sources.map(function(h){return"/*# sourceURL="+u.sourceRoot+h+" */"})).concat([l]).join(`
`)}return[c].join(`
`)}function i(o){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}n.exports=function(o){var a=[];return a.toString=function(){return this.map(function(c){var u=r(c,o);return c[2]?"@media "+c[2]+"{"+u+"}":u}).join("")},a.i=function(c,u){typeof c=="string"&&(c=[[null,c,""]]);for(var l={},h=0;h<this.length;h++){var p=this[h][0];typeof p=="number"&&(l[p]=!0)}for(h=0;h<c.length;h++){var f=c[h];typeof f[0]=="number"&&l[f[0]]||(u&&!f[2]?f[2]=u:u&&(f[2]="("+f[2]+") and ("+u+")"),a.push(f))}},a}},function(n,s,r){function i(S,C){for(var _=0;_<S.length;_++){var I=S[_],F=b[I.id];if(F){F.refs++;for(var V=0;V<F.parts.length;V++)F.parts[V](I.parts[V]);for(;V<I.parts.length;V++)F.parts.push(p(I.parts[V],C))}else{for(var G=[],V=0;V<I.parts.length;V++)G.push(p(I.parts[V],C));b[I.id]={id:I.id,refs:1,parts:G}}}}function o(S,C){for(var _=[],I={},F=0;F<S.length;F++){var V=S[F],G=C.base?V[0]+C.base:V[0],st=V[1],ke=V[2],Wc=V[3],fi={css:st,media:ke,sourceMap:Wc};I[G]?I[G].parts.push(fi):_.push(I[G]={id:G,parts:[fi]})}return _}function a(S,C){var _=y(S.insertInto);if(!_)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var I=x[x.length-1];if(S.insertAt==="top")I?I.nextSibling?_.insertBefore(C,I.nextSibling):_.appendChild(C):_.insertBefore(C,_.firstChild),x.push(C);else{if(S.insertAt!=="bottom")throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");_.appendChild(C)}}function c(S){if(S.parentNode===null)return!1;S.parentNode.removeChild(S);var C=x.indexOf(S);C>=0&&x.splice(C,1)}function u(S){var C=document.createElement("style");return S.attrs.type="text/css",h(C,S.attrs),a(S,C),C}function l(S){var C=document.createElement("link");return S.attrs.type="text/css",S.attrs.rel="stylesheet",h(C,S.attrs),a(S,C),C}function h(S,C){Object.keys(C).forEach(function(_){S.setAttribute(_,C[_])})}function p(S,C){var _,I,F,V;if(C.transform&&S.css){if(!(V=C.transform(S.css)))return function(){};S.css=V}if(C.singleton){var G=T++;_=m||(m=u(C)),I=f.bind(null,_,G,!1),F=f.bind(null,_,G,!0)}else S.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(_=l(C),I=v.bind(null,_,C),F=function(){c(_),_.href&&URL.revokeObjectURL(_.href)}):(_=u(C),I=g.bind(null,_),F=function(){c(_)});return I(S),function(st){if(st){if(st.css===S.css&&st.media===S.media&&st.sourceMap===S.sourceMap)return;I(S=st)}else F()}}function f(S,C,_,I){var F=_?"":I.css;if(S.styleSheet)S.styleSheet.cssText=J(C,F);else{var V=document.createTextNode(F),G=S.childNodes;G[C]&&S.removeChild(G[C]),G.length?S.insertBefore(V,G[C]):S.appendChild(V)}}function g(S,C){var _=C.css,I=C.media;if(I&&S.setAttribute("media",I),S.styleSheet)S.styleSheet.cssText=_;else{for(;S.firstChild;)S.removeChild(S.firstChild);S.appendChild(document.createTextNode(_))}}function v(S,C,_){var I=_.css,F=_.sourceMap,V=C.convertToAbsoluteUrls===void 0&&F;(C.convertToAbsoluteUrls||V)&&(I=nt(I)),F&&(I+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(F))))+" */");var G=new Blob([I],{type:"text/css"}),st=S.href;S.href=URL.createObjectURL(G),st&&URL.revokeObjectURL(st)}var b={},d=function(S){var C;return function(){return C===void 0&&(C=S.apply(this,arguments)),C}}(function(){return window&&document&&document.all&&!window.atob}),y=function(S){var C={};return function(_){return C[_]===void 0&&(C[_]=S.call(this,_)),C[_]}}(function(S){return document.querySelector(S)}),m=null,T=0,x=[],nt=r(15);n.exports=function(S,C){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");C=C||{},C.attrs=typeof C.attrs=="object"?C.attrs:{},C.singleton||(C.singleton=d()),C.insertInto||(C.insertInto="head"),C.insertAt||(C.insertAt="bottom");var _=o(S,C);return i(_,C),function(I){for(var F=[],V=0;V<_.length;V++){var G=_[V],st=b[G.id];st.refs--,F.push(st)}I&&i(o(I,C),C);for(var V=0;V<F.length;V++){var st=F[V];if(st.refs===0){for(var ke=0;ke<st.parts.length;ke++)st.parts[ke]();delete b[st.id]}}}};var J=function(){var S=[];return function(C,_){return S[C]=_,S.filter(Boolean).join(`
`)}}()},function(n,s){n.exports=function(r){var i=typeof window<"u"&&window.location;if(!i)throw new Error("fixUrls requires window.location");if(!r||typeof r!="string")return r;var o=i.protocol+"//"+i.host,a=o+i.pathname.replace(/\/[^\/]*$/,"/");return r.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(c,u){var l=u.trim().replace(/^"(.*)"$/,function(p,f){return f}).replace(/^'(.*)'$/,function(p,f){return f});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(l))return c;var h;return h=l.indexOf("//")===0?l:l.indexOf("/")===0?o+l:a+l.replace(/^\.\//,""),"url("+JSON.stringify(h)+")"})}},function(n,s,r){var i=r(17);typeof window>"u"||window.Promise||(window.Promise=i),r(21),String.prototype.includes||(String.prototype.includes=function(o,a){return typeof a!="number"&&(a=0),!(a+o.length>this.length)&&this.indexOf(o,a)!==-1}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(o,a){if(this==null)throw new TypeError('"this" is null or not defined');var c=Object(this),u=c.length>>>0;if(u===0)return!1;for(var l=0|a,h=Math.max(l>=0?l:u-Math.abs(l),0);h<u;){if(function(p,f){return p===f||typeof p=="number"&&typeof f=="number"&&isNaN(p)&&isNaN(f)}(c[h],o))return!0;h++}return!1}}),typeof window<"u"&&function(o){o.forEach(function(a){a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(n,s,r){(function(i){(function(o){function a(){}function c(d,y){return function(){d.apply(y,arguments)}}function u(d){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");if(typeof d!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],v(d,this)}function l(d,y){for(;d._state===3;)d=d._value;if(d._state===0)return void d._deferreds.push(y);d._handled=!0,u._immediateFn(function(){var m=d._state===1?y.onFulfilled:y.onRejected;if(m===null)return void(d._state===1?h:p)(y.promise,d._value);var T;try{T=m(d._value)}catch(x){return void p(y.promise,x)}h(y.promise,T)})}function h(d,y){try{if(y===d)throw new TypeError("A promise cannot be resolved with itself.");if(y&&(typeof y=="object"||typeof y=="function")){var m=y.then;if(y instanceof u)return d._state=3,d._value=y,void f(d);if(typeof m=="function")return void v(c(m,y),d)}d._state=1,d._value=y,f(d)}catch(T){p(d,T)}}function p(d,y){d._state=2,d._value=y,f(d)}function f(d){d._state===2&&d._deferreds.length===0&&u._immediateFn(function(){d._handled||u._unhandledRejectionFn(d._value)});for(var y=0,m=d._deferreds.length;y<m;y++)l(d,d._deferreds[y]);d._deferreds=null}function g(d,y,m){this.onFulfilled=typeof d=="function"?d:null,this.onRejected=typeof y=="function"?y:null,this.promise=m}function v(d,y){var m=!1;try{d(function(T){m||(m=!0,h(y,T))},function(T){m||(m=!0,p(y,T))})}catch(T){if(m)return;m=!0,p(y,T)}}var b=setTimeout;u.prototype.catch=function(d){return this.then(null,d)},u.prototype.then=function(d,y){var m=new this.constructor(a);return l(this,new g(d,y,m)),m},u.all=function(d){var y=Array.prototype.slice.call(d);return new u(function(m,T){function x(S,C){try{if(C&&(typeof C=="object"||typeof C=="function")){var _=C.then;if(typeof _=="function")return void _.call(C,function(I){x(S,I)},T)}y[S]=C,--nt==0&&m(y)}catch(I){T(I)}}if(y.length===0)return m([]);for(var nt=y.length,J=0;J<y.length;J++)x(J,y[J])})},u.resolve=function(d){return d&&typeof d=="object"&&d.constructor===u?d:new u(function(y){y(d)})},u.reject=function(d){return new u(function(y,m){m(d)})},u.race=function(d){return new u(function(y,m){for(var T=0,x=d.length;T<x;T++)d[T].then(y,m)})},u._immediateFn=typeof i=="function"&&function(d){i(d)}||function(d){b(d,0)},u._unhandledRejectionFn=function(d){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",d)},u._setImmediateFn=function(d){u._immediateFn=d},u._setUnhandledRejectionFn=function(d){u._unhandledRejectionFn=d},n!==void 0&&n.exports?n.exports=u:o.Promise||(o.Promise=u)})(this)}).call(s,r(18).setImmediate)},function(n,s,r){function i(a,c){this._id=a,this._clearFn=c}var o=Function.prototype.apply;s.setTimeout=function(){return new i(o.call(setTimeout,window,arguments),clearTimeout)},s.setInterval=function(){return new i(o.call(setInterval,window,arguments),clearInterval)},s.clearTimeout=s.clearInterval=function(a){a&&a.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},s.enroll=function(a,c){clearTimeout(a._idleTimeoutId),a._idleTimeout=c},s.unenroll=function(a){clearTimeout(a._idleTimeoutId),a._idleTimeout=-1},s._unrefActive=s.active=function(a){clearTimeout(a._idleTimeoutId);var c=a._idleTimeout;c>=0&&(a._idleTimeoutId=setTimeout(function(){a._onTimeout&&a._onTimeout()},c))},r(19),s.setImmediate=setImmediate,s.clearImmediate=clearImmediate},function(n,s,r){(function(i,o){(function(a,c){function u(m){typeof m!="function"&&(m=new Function(""+m));for(var T=new Array(arguments.length-1),x=0;x<T.length;x++)T[x]=arguments[x+1];var nt={callback:m,args:T};return v[g]=nt,f(g),g++}function l(m){delete v[m]}function h(m){var T=m.callback,x=m.args;switch(x.length){case 0:T();break;case 1:T(x[0]);break;case 2:T(x[0],x[1]);break;case 3:T(x[0],x[1],x[2]);break;default:T.apply(c,x)}}function p(m){if(b)setTimeout(p,0,m);else{var T=v[m];if(T){b=!0;try{h(T)}finally{l(m),b=!1}}}}if(!a.setImmediate){var f,g=1,v={},b=!1,d=a.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(a);y=y&&y.setTimeout?y:a,{}.toString.call(a.process)==="[object process]"?function(){f=function(m){o.nextTick(function(){p(m)})}}():function(){if(a.postMessage&&!a.importScripts){var m=!0,T=a.onmessage;return a.onmessage=function(){m=!1},a.postMessage("","*"),a.onmessage=T,m}}()?function(){var m="setImmediate$"+Math.random()+"$",T=function(x){x.source===a&&typeof x.data=="string"&&x.data.indexOf(m)===0&&p(+x.data.slice(m.length))};a.addEventListener?a.addEventListener("message",T,!1):a.attachEvent("onmessage",T),f=function(x){a.postMessage(m+x,"*")}}():a.MessageChannel?function(){var m=new MessageChannel;m.port1.onmessage=function(T){p(T.data)},f=function(T){m.port2.postMessage(T)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var m=d.documentElement;f=function(T){var x=d.createElement("script");x.onreadystatechange=function(){p(T),x.onreadystatechange=null,m.removeChild(x),x=null},m.appendChild(x)}}():function(){f=function(m){setTimeout(p,0,m)}}(),y.setImmediate=u,y.clearImmediate=l}})(typeof self>"u"?i===void 0?this:i:self)}).call(s,r(7),r(20))},function(n,s){function r(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(m){if(p===setTimeout)return setTimeout(m,0);if((p===r||!p)&&setTimeout)return p=setTimeout,setTimeout(m,0);try{return p(m,0)}catch{try{return p.call(null,m,0)}catch{return p.call(this,m,0)}}}function a(m){if(f===clearTimeout)return clearTimeout(m);if((f===i||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(m);try{return f(m)}catch{try{return f.call(null,m)}catch{return f.call(this,m)}}}function c(){d&&v&&(d=!1,v.length?b=v.concat(b):y=-1,b.length&&u())}function u(){if(!d){var m=o(c);d=!0;for(var T=b.length;T;){for(v=b,b=[];++y<T;)v&&v[y].run();y=-1,T=b.length}v=null,d=!1,a(m)}}function l(m,T){this.fun=m,this.array=T}function h(){}var p,f,g=n.exports={};(function(){try{p=typeof setTimeout=="function"?setTimeout:r}catch{p=r}try{f=typeof clearTimeout=="function"?clearTimeout:i}catch{f=i}})();var v,b=[],d=!1,y=-1;g.nextTick=function(m){var T=new Array(arguments.length-1);if(arguments.length>1)for(var x=1;x<arguments.length;x++)T[x-1]=arguments[x];b.push(new l(m,T)),b.length!==1||d||o(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={},g.on=h,g.addListener=h,g.once=h,g.off=h,g.removeListener=h,g.removeAllListeners=h,g.emit=h,g.prependListener=h,g.prependOnceListener=h,g.listeners=function(m){return[]},g.binding=function(m){throw new Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(m){throw new Error("process.chdir is not supported")},g.umask=function(){return 0}},function(n,s,r){r(22).polyfill()},function(n,s,r){function i(a,c){if(a==null)throw new TypeError("Cannot convert first argument to object");for(var u=Object(a),l=1;l<arguments.length;l++){var h=arguments[l];if(h!=null)for(var p=Object.keys(Object(h)),f=0,g=p.length;f<g;f++){var v=p[f],b=Object.getOwnPropertyDescriptor(h,v);b!==void 0&&b.enumerable&&(u[v]=h[v])}}return u}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:i})}n.exports={assign:i,polyfill:o}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(24),o=r(6),a=r(5),c=r(36),u=function(){for(var l=[],h=0;h<arguments.length;h++)l[h]=arguments[h];if(typeof window<"u"){var p=c.getOpts.apply(void 0,l);return new Promise(function(f,g){a.default.promise={resolve:f,reject:g},i.default(p),setTimeout(function(){o.openModal()})})}};u.close=o.onAction,u.getState=o.getState,u.setActionValue=a.setActionValue,u.stopLoading=o.stopLoading,u.setDefaults=c.setDefaults,s.default=u},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o=r(0),a=o.default.MODAL,c=r(4),u=r(34),l=r(35),h=r(1);s.init=function(p){i.getNode(a)||(document.body||h.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),u.default(),c.default()),c.initModalContent(p),l.default(p)},s.default=s.init},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(0),o=i.default.MODAL;s.modalMarkup=`
  <div class="`+o+'" role="dialog" aria-modal="true"></div>',s.default=s.modalMarkup},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(0),o=i.default.OVERLAY,a=`<div 
    class="`+o+`"
    tabIndex="-1">
  </div>`;s.default=a},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(0),o=i.default.ICON;s.errorIconMarkup=function(){var a=o+"--error",c=a+"__line";return`
    <div class="`+a+`__x-mark">
      <span class="`+c+" "+c+`--left"></span>
      <span class="`+c+" "+c+`--right"></span>
    </div>
  `},s.warningIconMarkup=function(){var a=o+"--warning";return`
    <span class="`+a+`__body">
      <span class="`+a+`__dot"></span>
    </span>
  `},s.successIconMarkup=function(){var a=o+"--success";return`
    <span class="`+a+"__line "+a+`__line--long"></span>
    <span class="`+a+"__line "+a+`__line--tip"></span>

    <div class="`+a+`__ring"></div>
    <div class="`+a+`__hide-corners"></div>
  `}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(0),o=i.default.CONTENT;s.contentMarkup=`
  <div class="`+o+`">

  </div>
`},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(0),o=i.default.BUTTON_CONTAINER,a=i.default.BUTTON,c=i.default.BUTTON_LOADER;s.buttonMarkup=`
  <div class="`+o+`">

    <button
      class="`+a+`"
    ></button>

    <div class="`+c+`">
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
`},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(4),o=r(2),a=r(0),c=a.default.ICON,u=a.default.ICON_CUSTOM,l=["error","warning","success","info"],h={error:o.errorIconMarkup(),warning:o.warningIconMarkup(),success:o.successIconMarkup()},p=function(v,b){var d=c+"--"+v;b.classList.add(d);var y=h[v];y&&(b.innerHTML=y)},f=function(v,b){b.classList.add(u);var d=document.createElement("img");d.src=v,b.appendChild(d)},g=function(v){if(v){var b=i.injectElIntoModal(o.iconMarkup);l.includes(v)?p(v,b):f(v,b)}};s.default=g},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(2),o=r(4),a=function(c){navigator.userAgent.includes("AppleWebKit")&&(c.style.display="none",c.offsetHeight,c.style.display="")};s.initTitle=function(c){if(c){var u=o.injectElIntoModal(i.titleMarkup);u.textContent=c,a(u)}},s.initText=function(c){if(c){var u=document.createDocumentFragment();c.split(`
`).forEach(function(h,p,f){u.appendChild(document.createTextNode(h)),p<f.length-1&&u.appendChild(document.createElement("br"))});var l=o.injectElIntoModal(i.textMarkup);l.appendChild(u),a(l)}}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o=r(4),a=r(0),c=a.default.BUTTON,u=a.default.DANGER_BUTTON,l=r(3),h=r(2),p=r(6),f=r(5),g=function(b,d,y){var m=d.text,T=d.value,x=d.className,nt=d.closeModal,J=i.stringToNode(h.buttonMarkup),S=J.querySelector("."+c),C=c+"--"+b;S.classList.add(C),x&&(Array.isArray(x)?x:x.split(" ")).filter(function(I){return I.length>0}).forEach(function(I){S.classList.add(I)}),y&&b===l.CONFIRM_KEY&&S.classList.add(u),S.textContent=m;var _={};return _[b]=T,f.setActionValue(_),f.setActionOptionsFor(b,{closeModal:nt}),S.addEventListener("click",function(){return p.onAction(b)}),J},v=function(b,d){var y=o.injectElIntoModal(h.footerMarkup);for(var m in b){var T=b[m],x=g(m,T,d);T.visible&&y.appendChild(x)}y.children.length===0&&y.remove()};s.default=v},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(3),o=r(4),a=r(2),c=r(5),u=r(6),l=r(0),h=l.default.CONTENT,p=function(v){v.addEventListener("input",function(b){var d=b.target,y=d.value;c.setActionValue(y)}),v.addEventListener("keyup",function(b){if(b.key==="Enter")return u.onAction(i.CONFIRM_KEY)}),setTimeout(function(){v.focus(),c.setActionValue("")},0)},f=function(v,b,d){var y=document.createElement(b),m=h+"__"+b;y.classList.add(m);for(var T in d){var x=d[T];y[T]=x}b==="input"&&p(y),v.appendChild(y)},g=function(v){if(v){var b=o.injectElIntoModal(a.contentMarkup),d=v.element,y=v.attributes;typeof d=="string"?f(b,d,y):b.appendChild(d)}};s.default=g},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o=r(2),a=function(){var c=i.stringToNode(o.overlayMarkup);document.body.appendChild(c)};s.default=a},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(5),o=r(6),a=r(1),c=r(3),u=r(0),l=u.default.MODAL,h=u.default.BUTTON,p=u.default.OVERLAY,f=function(I){I.preventDefault(),y()},g=function(I){I.preventDefault(),m()},v=function(I){if(i.default.isOpen)switch(I.key){case"Escape":return o.onAction(c.CANCEL_KEY)}},b=function(I){if(i.default.isOpen)switch(I.key){case"Tab":return f(I)}},d=function(I){if(i.default.isOpen)return I.key==="Tab"&&I.shiftKey?g(I):void 0},y=function(){var I=a.getNode(h);I&&(I.tabIndex=0,I.focus())},m=function(){var I=a.getNode(l),F=I.querySelectorAll("."+h),V=F.length-1,G=F[V];G&&G.focus()},T=function(I){I[I.length-1].addEventListener("keydown",b)},x=function(I){I[0].addEventListener("keydown",d)},nt=function(){var I=a.getNode(l),F=I.querySelectorAll("."+h);F.length&&(T(F),x(F))},J=function(I){if(a.getNode(p)===I.target)return o.onAction(c.CANCEL_KEY)},S=function(I){var F=a.getNode(p);F.removeEventListener("click",J),I&&F.addEventListener("click",J)},C=function(I){i.default.timer&&clearTimeout(i.default.timer),I&&(i.default.timer=window.setTimeout(function(){return o.onAction(c.CANCEL_KEY)},I))},_=function(I){I.closeOnEsc?document.addEventListener("keyup",v):document.removeEventListener("keyup",v),I.dangerMode?y():m(),nt(),S(I.closeOnClickOutside),C(I.timer)};s.default=_},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o=r(3),a=r(37),c=r(38),u={title:null,text:null,icon:null,buttons:o.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},l=Object.assign({},u);s.setDefaults=function(d){l=Object.assign({},u,d)};var h=function(d){var y=d&&d.button,m=d&&d.buttons;return y!==void 0&&m!==void 0&&i.throwErr("Cannot set both 'button' and 'buttons' options!"),y!==void 0?{confirm:y}:m},p=function(d){return i.ordinalSuffixOf(d+1)},f=function(d,y){i.throwErr(p(y)+" argument ('"+d+"') is invalid")},g=function(d,y){var m=d+1,T=y[m];i.isPlainObject(T)||T===void 0||i.throwErr("Expected "+p(m)+" argument ('"+T+"') to be a plain object")},v=function(d,y){var m=d+1,T=y[m];T!==void 0&&i.throwErr("Unexpected "+p(m)+" argument ("+T+")")},b=function(d,y,m,T){var x=typeof y,nt=x==="string",J=y instanceof Element;if(nt){if(m===0)return{text:y};if(m===1)return{text:y,title:T[0]};if(m===2)return g(m,T),{icon:y};f(y,m)}else{if(J&&m===0)return g(m,T),{content:y};if(i.isPlainObject(y))return v(m,T),y;f(y,m)}};s.getOpts=function(){for(var d=[],y=0;y<arguments.length;y++)d[y]=arguments[y];var m={};d.forEach(function(nt,J){var S=b(0,nt,J,d);Object.assign(m,S)});var T=h(m);m.buttons=o.getButtonListOpts(T),delete m.button,m.content=a.getContentOpts(m.content);var x=Object.assign({},u,l,m);return Object.keys(x).forEach(function(nt){c.DEPRECATED_OPTS[nt]&&c.logDeprecation(nt)}),x}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0});var i=r(1),o={element:"input",attributes:{placeholder:""}};s.getContentOpts=function(a){var c={};return i.isPlainObject(a)?Object.assign(c,a):a instanceof Element?{element:a}:a==="input"?o:null}},function(n,s,r){Object.defineProperty(s,"__esModule",{value:!0}),s.logDeprecation=function(i){var o=s.DEPRECATED_OPTS[i],a=o.onlyRename,c=o.replacement,u=o.subOption,l=o.link,h=a?"renamed":"deprecated",p='SweetAlert warning: "'+i+'" option has been '+h+".";c&&(p+=" Please use"+(u?' "'+u+'" in ':" ")+'"'+c+'" instead.');var f="https://sweetalert.js.org";p+=l?" More details: "+f+l:" More details: "+f+"/guides/#upgrading-from-1x",console.warn(p)},s.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])})})(To);const pi=Qc(To.exports);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Xc=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(p=64)),s.push(n[l],n[h],n[p],n[f])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Co(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),u!==64){const f=a<<4&240|u>>2;if(s.push(f),h!==64){const g=u<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Zc=function(e){const t=Co(e);return Jc.encodeByteArray(t,!0)},Io=function(e){return Zc(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}function eu(){return typeof indexedDB=="object"}function nu(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="FirebaseError";class be extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=su,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?ru(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new be(r,a,s)}}function ru(e,t){return e.replace(iu,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const iu=/\{\$([^}]+)}/g;function Bs(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(mi(i)&&mi(o)){if(!Bs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function mi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e){return e&&e._delegate?e._delegate:e}class Ue{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new tu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cu(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:au(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function au(e){return e===Gt?void 0:e}function cu(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ou(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const lu={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},hu=B.INFO,du={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},fu=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=du[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class xo{constructor(t){this.name=t,this._logLevel=hu,this._logHandler=fu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const pu=(e,t)=>t.some(n=>e instanceof n);let gi,yi;function mu(){return gi||(gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gu(){return yi||(yi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ko=new WeakMap,js=new WeakMap,Ao=new WeakMap,xs=new WeakMap,vr=new WeakMap;function yu(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Vt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ko.set(n,e)}).catch(()=>{}),vr.set(t,e),t}function vu(e){if(js.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});js.set(e,t)}let $s={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return js.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ao.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wu(e){$s=e($s)}function bu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ks(this),t,...n);return Ao.set(s,t.sort?t.sort():[t]),Vt(s)}:gu().includes(e)?function(...t){return e.apply(ks(this),t),Vt(ko.get(this))}:function(...t){return Vt(e.apply(ks(this),t))}}function Eu(e){return typeof e=="function"?bu(e):(e instanceof IDBTransaction&&vu(e),pu(e,mu())?new Proxy(e,$s):e)}function Vt(e){if(e instanceof IDBRequest)return yu(e);if(xs.has(e))return xs.get(e);const t=Eu(e);return t!==e&&(xs.set(e,t),vr.set(t,e)),t}const ks=e=>vr.get(e);function Tu(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Vt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Vt(o.result),c.oldVersion,c.newVersion,Vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Cu=["get","getKey","getAll","getAllKeys","count"],Iu=["put","add","delete","clear"],As=new Map;function vi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(As.get(t))return As.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Iu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Cu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return As.set(t,i),i}wu(e=>({...e,get:(t,n,s)=>vi(t,n)||e.get(t,n,s),has:(t,n)=>!!vi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xu(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qs="@firebase/app",wi="0.7.33";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new xo("@firebase/app"),ku="@firebase/app-compat",Au="@firebase/analytics-compat",_u="@firebase/analytics",Du="@firebase/app-check-compat",Nu="@firebase/app-check",Ou="@firebase/auth",Lu="@firebase/auth-compat",Mu="@firebase/database",Ru="@firebase/database-compat",Pu="@firebase/functions",Fu="@firebase/functions-compat",Vu="@firebase/installations",Uu="@firebase/installations-compat",Bu="@firebase/messaging",ju="@firebase/messaging-compat",$u="@firebase/performance",qu="@firebase/performance-compat",Ku="@firebase/remote-config",Hu="@firebase/remote-config-compat",zu="@firebase/storage",Gu="@firebase/storage-compat",Wu="@firebase/firestore",Yu="@firebase/firestore-compat",Qu="firebase",Xu="9.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="[DEFAULT]",Ju={[qs]:"fire-core",[ku]:"fire-core-compat",[_u]:"fire-analytics",[Au]:"fire-analytics-compat",[Nu]:"fire-app-check",[Du]:"fire-app-check-compat",[Ou]:"fire-auth",[Lu]:"fire-auth-compat",[Mu]:"fire-rtdb",[Ru]:"fire-rtdb-compat",[Pu]:"fire-fn",[Fu]:"fire-fn-compat",[Vu]:"fire-iid",[Uu]:"fire-iid-compat",[Bu]:"fire-fcm",[ju]:"fire-fcm-compat",[$u]:"fire-perf",[qu]:"fire-perf-compat",[Ku]:"fire-rc",[Hu]:"fire-rc-compat",[zu]:"fire-gcs",[Gu]:"fire-gcs-compat",[Wu]:"fire-fst",[Yu]:"fire-fst-compat","fire-js":"fire-js",[Qu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Map,Ks=new Map;function Zu(e,t){try{e.container.addComponent(t)}catch(n){Zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pn(e){const t=e.name;if(Ks.has(t))return Zt.debug(`There were multiple attempts to register component ${t}.`),!1;Ks.set(t,e);for(const n of Rn.values())Zu(n,e);return!0}function tl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},te=new So("app","Firebase",el);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=Xu;function rl(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:_o,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw te.create("bad-app-name",{appName:String(s)});const r=Rn.get(s);if(r){if(Bs(e,r.options)&&Bs(n,r.config))return r;throw te.create("duplicate-app",{appName:s})}const i=new uu(s);for(const a of Ks.values())i.addComponent(a);const o=new nl(e,n,i);return Rn.set(s,o),o}function il(e=_o){const t=Rn.get(e);if(!t)throw te.create("no-app",{appName:e});return t}function ue(e,t,n){var s;let r=(s=Ju[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Zt.warn(a.join(" "));return}Pn(new Ue(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="firebase-heartbeat-database",al=1,Be="firebase-heartbeat-store";let _s=null;function Do(){return _s||(_s=Tu(ol,al,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Be)}}}).catch(e=>{throw te.create("idb-open",{originalErrorMessage:e.message})})),_s}async function cl(e){var t;try{return(await Do()).transaction(Be).objectStore(Be).get(No(e))}catch(n){if(n instanceof be)Zt.warn(n.message);else{const s=te.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});Zt.warn(s.message)}}}async function bi(e,t){var n;try{const r=(await Do()).transaction(Be,"readwrite");return await r.objectStore(Be).put(t,No(e)),r.done}catch(s){if(s instanceof be)Zt.warn(s.message);else{const r=te.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});Zt.warn(r.message)}}}function No(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=1024,ll=30*24*60*60*1e3;class hl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ei();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ll}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ei(),{heartbeatsToSend:n,unsentEntries:s}=dl(this._heartbeatsCache.heartbeats),r=Io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ei(){return new Date().toISOString().substring(0,10)}function dl(e,t=ul){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ti(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ti(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class fl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eu()?nu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ti(e){return Io(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(e){Pn(new Ue("platform-logger",t=>new Su(t),"PRIVATE")),Pn(new Ue("heartbeat",t=>new hl(t),"PRIVATE")),ue(qs,wi,e),ue(qs,wi,"esm2017"),ue("fire-js","")}pl("");var ml="firebase",gl="9.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(ml,gl,"app");var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,wr=wr||{},O=yl||self;function Fn(){}function ts(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function nn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function vl(e){return Object.prototype.hasOwnProperty.call(e,Ds)&&e[Ds]||(e[Ds]=++wl)}var Ds="closure_uid_"+(1e9*Math.random()>>>0),wl=0;function bl(e,t,n){return e.call.apply(e.bind,arguments)}function El(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function dt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?dt=bl:dt=El,dt.apply(null,arguments)}function bn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function lt(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Ht(){this.s=this.s,this.o=this.o}var Tl=0;Ht.prototype.s=!1;Ht.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Tl!=0)&&vl(this)};Ht.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Oo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function br(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Ci(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ts(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function ft(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Cl=function(){if(!O.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{O.addEventListener("test",Fn,t),O.removeEventListener("test",Fn,t)}catch{}return e}();function Vn(e){return/^[\s\xa0]*$/.test(e)}var Ii=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ns(e,t){return e<t?-1:e>t?1:0}function es(){var e=O.navigator;return e&&(e=e.userAgent)?e:""}function Tt(e){return es().indexOf(e)!=-1}function Er(e){return Er[" "](e),e}Er[" "]=Fn;function Il(e){var t=kl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Sl=Tt("Opera"),fe=Tt("Trident")||Tt("MSIE"),Lo=Tt("Edge"),Hs=Lo||fe,Mo=Tt("Gecko")&&!(es().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),xl=es().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function Ro(){var e=O.document;return e?e.documentMode:void 0}var Un;t:{var Os="",Ls=function(){var e=es();if(Mo)return/rv:([^\);]+)(\)|;)/.exec(e);if(Lo)return/Edge\/([\d\.]+)/.exec(e);if(fe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xl)return/WebKit\/(\S+)/.exec(e);if(Sl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ls&&(Os=Ls?Ls[1]:""),fe){var Ms=Ro();if(Ms!=null&&Ms>parseFloat(Os)){Un=String(Ms);break t}}Un=Os}var kl={};function Al(){return Il(function(){let e=0;const t=Ii(String(Un)).split("."),n=Ii("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Ns(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ns(r[2].length==0,i[2].length==0)||Ns(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var zs;if(O.document&&fe){var Si=Ro();zs=Si||parseInt(Un,10)||void 0}else zs=void 0;var _l=zs;function je(e,t){if(ft.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mo){t:{try{Er(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Dl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&je.X.h.call(this)}}lt(je,ft);var Dl={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),Nl=0;function Ol(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++Nl,this.ba=this.ea=!1}function ns(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Tr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Po(e){const t={};for(const n in e)t[n]=e[n];return t}const xi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<xi.length;i++)n=xi[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function ss(e){this.src=e,this.g={},this.h=0}ss.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Ws(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Ol(t,this.src,i,!!s,r),t.ea=n,e.push(t)),t};function Gs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Oo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ns(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Ws(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}var Cr="closure_lm_"+(1e6*Math.random()|0),Rs={};function Vo(e,t,n,s,r){if(s&&s.once)return Bo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Vo(e,t[i],n,s,r);return null}return n=xr(n),e&&e[sn]?e.N(t,n,nn(s)?!!s.capture:!!s,r):Uo(e,t,n,!1,s,r)}function Uo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=nn(r)?!!r.capture:!!r,a=Sr(e);if(a||(e[Cr]=a=new ss(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Ll(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Cl||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent($o(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ll(){function e(n){return t.call(e.src,e.listener,n)}const t=Ml;return e}function Bo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Bo(e,t[i],n,s,r);return null}return n=xr(n),e&&e[sn]?e.O(t,n,nn(s)?!!s.capture:!!s,r):Uo(e,t,n,!0,s,r)}function jo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)jo(e,t[i],n,s,r);else s=nn(s)?!!s.capture:!!s,n=xr(n),e&&e[sn]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Ws(i,n,s,r),-1<n&&(ns(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Sr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ws(t,n,s,r)),(n=-1<e?t[e]:null)&&Ir(n))}function Ir(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[sn])Gs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent($o(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Sr(t))?(Gs(n,e),n.h==0&&(n.src=null,t[Cr]=null)):ns(e)}}}function $o(e){return e in Rs?Rs[e]:Rs[e]="on"+e}function Ml(e,t){if(e.ba)e=!0;else{t=new je(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Ir(e),e=n.call(s,t)}return e}function Sr(e){return e=e[Cr],e instanceof ss?e:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function xr(e){return typeof e=="function"?e:(e[Ps]||(e[Ps]=function(t){return e.handleEvent(t)}),e[Ps])}function it(){Ht.call(this),this.i=new ss(this),this.P=this,this.I=null}lt(it,Ht);it.prototype[sn]=!0;it.prototype.removeEventListener=function(e,t,n,s){jo(this,e,t,n,s)};function ct(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ft(t,e);else if(t instanceof ft)t.target=t.target||e;else{var r=t;t=new ft(s,e),Fo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=En(o,s,!0,t)&&r}if(o=t.g=e,r=En(o,s,!0,t)&&r,r=En(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=En(o,s,!1,t)&&r}it.prototype.M=function(){if(it.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ns(n[s]);delete e.g[t],e.h--}}this.I=null};it.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};it.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function En(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Gs(e.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var kr=O.JSON.stringify;function Rl(){var e=Ho;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Pl{constructor(){this.h=this.g=null}add(t,n){const s=qo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Fl,e=>e.reset());class Fl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Vl(e){O.setTimeout(()=>{throw e},0)}function Ko(e,t){Ys||Ul(),Qs||(Ys(),Qs=!0),Ho.add(e,t)}var Ys;function Ul(){var e=O.Promise.resolve(void 0);Ys=function(){e.then(Bl)}}var Qs=!1,Ho=new Pl;function Bl(){for(var e;e=Rl();){try{e.h.call(e.g)}catch(n){Vl(n)}var t=qo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Qs=!1}function rs(e,t){it.call(this),this.h=e||1,this.g=t||O,this.j=dt(this.kb,this),this.l=Date.now()}lt(rs,it);k=rs.prototype;k.ca=!1;k.R=null;k.kb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(Ar(this),this.start()))}};k.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ar(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}k.M=function(){rs.X.M.call(this),Ar(this),delete this.g};function _r(e,t,n){if(typeof e=="function")n&&(e=dt(e,n));else if(e&&typeof e.handleEvent=="function")e=dt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:O.setTimeout(e,t||0)}function zo(e){e.g=_r(()=>{e.g=null,e.i&&(e.i=!1,zo(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class jl extends Ht{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zo(this)}M(){super.M(),this.g&&(O.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){Ht.call(this),this.h=e,this.g={}}lt($e,Ht);var ki=[];function Go(e,t,n,s){Array.isArray(n)||(n&&(ki[0]=n.toString()),n=ki);for(var r=0;r<n.length;r++){var i=Vo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Wo(e){Tr(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ir(t)},e),e.g={}}$e.prototype.M=function(){$e.X.M.call(this),Wo(this)};$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function is(){this.g=!0}is.prototype.Aa=function(){this.g=!1};function $l(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function ql(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function ae(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Hl(e,n)+(s?" "+s:"")})}function Kl(e,t){e.info(function(){return"TIMEOUT: "+t})}is.prototype.info=function(){};function Hl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return kr(n)}catch{return t}}var se={},Ai=null;function os(){return Ai=Ai||new it}se.Oa="serverreachability";function Yo(e){ft.call(this,se.Oa,e)}lt(Yo,ft);function qe(e){const t=os();ct(t,new Yo(t))}se.STAT_EVENT="statevent";function Qo(e,t){ft.call(this,se.STAT_EVENT,e),this.stat=t}lt(Qo,ft);function pt(e){const t=os();ct(t,new Qo(t,e))}se.Pa="timingevent";function Xo(e,t){ft.call(this,se.Pa,e),this.size=t}lt(Xo,ft);function rn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return O.setTimeout(function(){e()},t)}var as={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Jo={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Dr(){}Dr.prototype.h=null;function _i(e){return e.h||(e.h=e.i())}function Zo(){}var on={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function Nr(){ft.call(this,"d")}lt(Nr,ft);function Or(){ft.call(this,"c")}lt(Or,ft);var Xs;function cs(){}lt(cs,Dr);cs.prototype.g=function(){return new XMLHttpRequest};cs.prototype.i=function(){return{}};Xs=new cs;function an(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new $e(this),this.O=zl,e=Hs?125:void 0,this.T=new rs(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new ta}function ta(){this.i=null,this.g="",this.h=!1}var zl=45e3,Js={},Bn={};k=an.prototype;k.setTimeout=function(e){this.O=e};function Zs(e,t,n){e.K=1,e.v=ls(Lt(t)),e.s=n,e.P=!0,ea(e,null)}function ea(e,t){e.F=Date.now(),cn(e),e.A=Lt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),ua(n.i,"t",s),e.C=0,n=e.l.H,e.h=new ta,e.g=Da(e.l,n?t:null,!e.s),0<e.N&&(e.L=new jl(dt(e.Ka,e,e.g),e.N)),Go(e.S,e.g,"readystatechange",e.hb),t=e.H?Po(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),qe(),$l(e.j,e.u,e.A,e.m,e.U,e.s)}k.hb=function(e){e=e.target;const t=this.L;t&&_t(e)==3?t.l():this.Ka(e)};k.Ka=function(e){try{if(e==this.g)t:{const l=_t(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Hs||this.g&&(this.h.h||this.g.fa()||Li(this.g)))){this.I||l!=4||t==7||(t==8||0>=h?qe(3):qe(2)),us(this);var n=this.g.aa();this.Y=n;e:if(na(this)){var s=Li(this.g);e="";var r=s.length,i=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wt(this),Oe(this);var o="";break e}this.h.i=new O.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ql(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vn(a)){var u=a;break e}}u=null}if(n=u)ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tr(this,n);else{this.i=!1,this.o=3,pt(12),Wt(this),Oe(this);break t}}this.P?(sa(this,l,o),Hs&&this.i&&l==3&&(Go(this.S,this.T,"tick",this.gb),this.T.start())):(ae(this.j,this.m,o,null),tr(this,o)),l==4&&Wt(this),this.i&&!this.I&&(l==4?xa(this.l,this):(this.i=!1,cn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Wt(this),Oe(this)}}}catch{}finally{}};function na(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function sa(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Gl(e,n),r==Bn){t==4&&(e.o=4,pt(14),s=!1),ae(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Js){e.o=4,pt(15),ae(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else ae(e.j,e.m,r,null),tr(e,r);na(e)&&r!=Bn&&r!=Js&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,pt(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ur(t),t.K=!0,pt(11))):(ae(e.j,e.m,n,"[Invalid Chunked Response]"),Wt(e),Oe(e))}k.gb=function(){if(this.g){var e=_t(this.g),t=this.g.fa();this.C<t.length&&(us(this),sa(this,e,t),this.i&&e!=4&&cn(this))}};function Gl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Bn:(n=Number(t.substring(n,s)),isNaN(n)?Js:(s+=1,s+n>t.length?Bn:(t=t.substr(s,n),e.C=s+n,t)))}k.cancel=function(){this.I=!0,Wt(this)};function cn(e){e.V=Date.now()+e.O,ra(e,e.O)}function ra(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=rn(dt(e.fb,e),t)}function us(e){e.B&&(O.clearTimeout(e.B),e.B=null)}k.fb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Kl(this.j,this.A),this.K!=2&&(qe(),pt(17)),Wt(this),this.o=2,Oe(this)):ra(this,this.V-e)};function Oe(e){e.l.G==0||e.I||xa(e.l,e)}function Wt(e){us(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ar(e.T),Wo(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tr(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||er(n.h,e))){if(!e.J&&er(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)qn(n),fs(n);else break t;Vr(n),pt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=rn(dt(n.bb,n),6e3));if(1>=da(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Yt(n,11)}else if((e.J||n.g==e)&&qn(n),!Vn(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=e.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=s.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Lr(i,i.h),i.h=null))}if(s.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,H(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=_a(s,s.H?s.ka:null,s.V),o.J){fa(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(us(a),cn(a)),s.g=o}else Ia(s);0<n.i.length&&ps(n)}else u[0]!="stop"&&u[0]!="close"||Yt(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Yt(n,7):Fr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}qe(4)}catch{}}function Wl(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ts(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Yl(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ts(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function ia(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ts(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Yl(e),s=Wl(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}var oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ql(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Xt){this.h=t!==void 0?t:e.h,jn(this,e.j),this.s=e.s,this.g=e.g,$n(this,e.m),this.l=e.l,t=e.i;var n=new Ke;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Di(this,n),this.o=e.o}else e&&(n=String(e).match(oa))?(this.h=!!t,jn(this,n[1]||"",!0),this.s=_e(n[2]||""),this.g=_e(n[3]||"",!0),$n(this,n[4]),this.l=_e(n[5]||"",!0),Di(this,n[6]||"",!0),this.o=_e(n[7]||"")):(this.h=!!t,this.i=new Ke(null,this.h))}Xt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(De(t,Ni,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(De(t,Ni,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(De(n,n.charAt(0)=="/"?Zl:Jl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",De(n,eh)),e.join("")};function Lt(e){return new Xt(e)}function jn(e,t,n){e.j=n?_e(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $n(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Di(e,t,n){t instanceof Ke?(e.i=t,nh(e.i,e.h)):(n||(t=De(t,th)),e.i=new Ke(t,e.h))}function H(e,t,n){e.i.set(t,n)}function ls(e){return H(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function _e(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function De(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Xl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Xl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Ni=/[#\/\?@]/g,Jl=/[#\?:]/g,Zl=/[#\?]/g,th=/[#\?@]/g,eh=/#/g;function Ke(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ql(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}k=Ke.prototype;k.add=function(e,t){zt(this),this.i=null,e=Ee(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function aa(e,t){zt(e),t=Ee(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ca(e,t){return zt(e),t=Ee(e,t),e.g.has(t)}k.forEach=function(e,t){zt(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)};k.oa=function(){zt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n};k.W=function(e){zt(this);let t=[];if(typeof e=="string")ca(this,e)&&(t=t.concat(this.g.get(Ee(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};k.set=function(e,t){return zt(this),this.i=null,e=Ee(this,e),ca(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};k.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function ua(e,t,n){aa(e,t),0<n.length&&(e.i=null,e.g.set(Ee(e,t),br(n)),e.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function Ee(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function nh(e,t){t&&!e.j&&(zt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(aa(this,s),ua(this,r,n))},e)),e.j=t}var sh=class{constructor(e,t){this.h=e,this.g=t}};function la(e){this.l=e||rh,O.PerformanceNavigationTiming?(e=O.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(O.g&&O.g.Ga&&O.g.Ga()&&O.g.Ga().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rh=10;function ha(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function da(e){return e.h?1:e.g?e.g.size:0}function er(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Lr(e,t){e.g?e.g.add(t):e.h=t}function fa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}la.prototype.cancel=function(){if(this.i=pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function pa(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return br(e.i)}function Mr(){}Mr.prototype.stringify=function(e){return O.JSON.stringify(e,void 0)};Mr.prototype.parse=function(e){return O.JSON.parse(e,void 0)};function ih(){this.g=new Mr}function oh(e,t,n){const s=n||"";try{ia(e,function(r,i){let o=r;nn(r)&&(o=kr(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function ah(e,t){const n=new is;if(O.Image){const s=new Image;s.onload=bn(Tn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=bn(Tn,n,s,"TestLoadImage: error",!1,t),s.onabort=bn(Tn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=bn(Tn,n,s,"TestLoadImage: timeout",!1,t),O.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Tn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function un(e){this.l=e.$b||null,this.j=e.ib||!1}lt(un,Dr);un.prototype.g=function(){return new hs(this.l,this.j)};un.prototype.i=function(e){return function(){return e}}({});function hs(e,t){it.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Rr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}lt(hs,it);var Rr=0;k=hs.prototype;k.open=function(e,t){if(this.readyState!=Rr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,He(this)};k.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||O).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ga.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ln(this)),this.readyState=Rr};k.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,He(this)),this.g&&(this.readyState=3,He(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof O.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ma(this)}else e.text().then(this.Ua.bind(this),this.ga.bind(this))};function ma(e){e.j.read().then(e.Sa.bind(e)).catch(e.ga.bind(e))}k.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ln(this):He(this),this.readyState==3&&ma(this)}};k.Ua=function(e){this.g&&(this.response=this.responseText=e,ln(this))};k.Ta=function(e){this.g&&(this.response=e,ln(this))};k.ga=function(){this.g&&ln(this)};function ln(e){e.readyState=4,e.l=null,e.j=null,e.A=null,He(e)}k.setRequestHeader=function(e,t){this.v.append(e,t)};k.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function He(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ch=O.JSON.parse;function X(e){it.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ga,this.K=this.L=!1}lt(X,it);var ga="",uh=/^https?$/i,lh=["POST","PUT"];k=X.prototype;k.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xs.g(),this.C=this.u?_i(this.u):_i(Xs),this.g.onreadystatechange=dt(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){Oi(this,i);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=O.FormData&&e instanceof O.FormData,!(0<=Oo(lh,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wa(this),0<this.B&&((this.K=hh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=dt(this.qa,this)):this.A=_r(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Oi(this,i)}};function hh(e){return fe&&Al()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}k.qa=function(){typeof wr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function Oi(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ya(e),ds(e)}function ya(e){e.D||(e.D=!0,ct(e,"complete"),ct(e,"error"))}k.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ct(this,"complete"),ct(this,"abort"),ds(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ds(this,!0)),X.X.M.call(this)};k.Ha=function(){this.s||(this.F||this.v||this.l?va(this):this.eb())};k.eb=function(){va(this)};function va(e){if(e.h&&typeof wr<"u"&&(!e.C[1]||_t(e)!=4||e.aa()!=2)){if(e.v&&_t(e)==4)_r(e.Ha,0,e);else if(ct(e,"readystatechange"),_t(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(oa)[1]||null;if(!r&&O.self&&O.self.location){var i=O.self.location.protocol;r=i.substr(0,i.length-1)}s=!uh.test(r?r.toLowerCase():"")}n=s}if(n)ct(e,"complete"),ct(e,"success");else{e.m=6;try{var o=2<_t(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",ya(e)}}finally{ds(e)}}}}function ds(e,t){if(e.g){wa(e);const n=e.g,s=e.C[0]?Fn:null;e.g=null,e.C=null,t||ct(e,"ready");try{n.onreadystatechange=s}catch{}}}function wa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(O.clearTimeout(e.A),e.A=null)}function _t(e){return e.g?e.g.readyState:0}k.aa=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}};k.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Ra=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ch(t)}};function Li(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ga:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}k.Ea=function(){return this.m};k.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function ba(e){let t="";return Tr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Pr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ba(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):H(e,t,n))}function Ae(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ea(e){this.Ca=0,this.i=[],this.j=new is,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Ae("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Ae("baseRetryDelayMs",5e3,e),this.ab=Ae("retryDelaySeedMs",1e4,e),this.Za=Ae("forwardChannelMaxRetries",2,e),this.ta=Ae("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Yb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new la(e&&e.concurrentRequestLimit),this.Fa=new ih,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=e&&e.Wb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}k=Ea.prototype;k.ma=8;k.G=1;function Fr(e){if(Ta(e),e.G==3){var t=e.U++,n=Lt(e.F);H(n,"SID",e.I),H(n,"RID",t),H(n,"TYPE","terminate"),hn(e,n),t=new an(e,e.j,t,void 0),t.K=2,t.v=ls(Lt(n)),n=!1,O.navigator&&O.navigator.sendBeacon&&(n=O.navigator.sendBeacon(t.v.toString(),"")),!n&&O.Image&&(new Image().src=t.v,n=!0),n||(t.g=Da(t.l,null),t.g.da(t.v)),t.F=Date.now(),cn(t)}Aa(e)}function fs(e){e.g&&(Ur(e),e.g.cancel(),e.g=null)}function Ta(e){fs(e),e.u&&(O.clearTimeout(e.u),e.u=null),qn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&O.clearTimeout(e.m),e.m=null)}function ps(e){ha(e.h)||e.m||(e.m=!0,Ko(e.Ja,e),e.C=0)}function dh(e,t){return da(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Ya?0:e.Za)?!1:(e.m=rn(dt(e.Ja,e,t),ka(e,e.C)),e.C++,!0)}k.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new an(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Po(i),Fo(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Ca(this,r,t),n=Lt(this.F),H(n,"RID",e),H(n,"CVER",22),this.D&&H(n,"X-HTTP-Session-Id",this.D),hn(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(ba(i)))+"&"+t:this.o&&Pr(n,this.o,i)),Lr(this.h,r),this.Xa&&H(n,"TYPE","init"),this.O?(H(n,"$req",t),H(n,"SID","null"),r.Z=!0,Zs(r,n,null)):Zs(r,n,t),this.G=2}}else this.G==3&&(e?Mi(this,e):this.i.length==0||ha(this.h)||Mi(this))};function Mi(e,t){var n;t?n=t.m:n=e.U++;const s=Lt(e.F);H(s,"SID",e.I),H(s,"RID",n),H(s,"AID",e.T),hn(e,s),e.o&&e.s&&Pr(s,e.o,e.s),n=new an(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Ca(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Lr(e.h,n),Zs(n,s,t)}function hn(e,t){e.ia&&Tr(e.ia,function(n,s){H(t,s,n)}),e.l&&ia({},function(n,s){H(t,s,n)})}function Ca(e,t,n){n=Math.min(e.i.length,n);var s=e.l?dt(e.l.Qa,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{oh(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function Ia(e){e.g||e.u||(e.Z=1,Ko(e.Ia,e),e.A=0)}function Vr(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=rn(dt(e.Ia,e),ka(e,e.A)),e.A++,!0)}k.Ia=function(){if(this.u=null,Sa(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=rn(dt(this.cb,this),e)}};k.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,pt(10),fs(this),Sa(this))};function Ur(e){e.B!=null&&(O.clearTimeout(e.B),e.B=null)}function Sa(e){e.g=new an(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Lt(e.sa);H(t,"RID","rpc"),H(t,"SID",e.I),H(t,"CI",e.L?"0":"1"),H(t,"AID",e.T),H(t,"TYPE","xmlhttp"),hn(e,t),e.o&&e.s&&Pr(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ls(Lt(t)),n.s=null,n.P=!0,ea(n,e)}k.bb=function(){this.v!=null&&(this.v=null,fs(this),Vr(this),pt(19))};function qn(e){e.v!=null&&(O.clearTimeout(e.v),e.v=null)}function xa(e,t){var n=null;if(e.g==t){qn(e),Ur(e),e.g=null;var s=2}else if(er(e.h,t))n=t.D,fa(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=os(),ct(s,new Xo(s,n)),ps(e)}else Ia(e);else if(r=t.o,r==3||r==0&&0<e.pa||!(s==1&&dh(e,t)||s==2&&Vr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Yt(e,5);break;case 4:Yt(e,10);break;case 3:Yt(e,6);break;default:Yt(e,2)}}}function ka(e,t){let n=e.Wa+Math.floor(Math.random()*e.ab);return e.l||(n*=2),n*t}function Yt(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=dt(e.jb,e);n||(n=new Xt("//www.google.com/images/cleardot.gif"),O.location&&O.location.protocol=="http"||jn(n,"https"),ls(n)),ah(n.toString(),s)}else pt(2);e.G=0,e.l&&e.l.va(t),Aa(e),Ta(e)}k.jb=function(e){e?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Aa(e){if(e.G=0,e.la=[],e.l){const t=pa(e.h);(t.length!=0||e.i.length!=0)&&(Ci(e.la,t),Ci(e.la,e.i),e.h.i.length=0,br(e.i),e.i.length=0),e.l.ua()}}function _a(e,t,n){var s=n instanceof Xt?Lt(n):new Xt(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),$n(s,s.m);else{var r=O.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Xt(null,void 0);s&&jn(i,s),t&&(i.g=t),r&&$n(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&H(s,n,t),H(s,"VER",e.ma),hn(e,s),s}function Da(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new X(new un({ib:!0})):new X(e.ra),t.L=e.H,t}function Na(){}k=Na.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Qa=function(){};function Kn(){if(fe&&!(10<=Number(_l)))throw Error("Environmental error: no available transport.")}Kn.prototype.g=function(e,t){return new vt(e,t)};function vt(e,t){it.call(this),this.g=new Ea(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Xb)&&!Vn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Te(this)}lt(vt,it);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;pt(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=_a(e,null,e.V),ps(e)};vt.prototype.close=function(){Fr(this.g)};vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=kr(e),e=n);t.i.push(new sh(t.$a++,e)),t.G==3&&ps(t)};vt.prototype.M=function(){this.g.l=null,delete this.j,Fr(this.g),delete this.g,vt.X.M.call(this)};function Oa(e){Nr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}lt(Oa,Nr);function La(){Or.call(this),this.status=1}lt(La,Or);function Te(e){this.g=e}lt(Te,Na);Te.prototype.xa=function(){ct(this.g,"a")};Te.prototype.wa=function(e){ct(this.g,new Oa(e))};Te.prototype.va=function(e){ct(this.g,new La)};Te.prototype.ua=function(){ct(this.g,"b")};Kn.prototype.createWebChannel=Kn.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;as.NO_ERROR=0;as.TIMEOUT=8;as.HTTP_ERROR=6;Jo.COMPLETE="complete";Zo.EventType=on;on.OPEN="a";on.CLOSE="b";on.ERROR="c";on.MESSAGE="d";it.prototype.listen=it.prototype.N;X.prototype.listenOnce=X.prototype.O;X.prototype.getLastError=X.prototype.Na;X.prototype.getLastErrorCode=X.prototype.Ea;X.prototype.getStatus=X.prototype.aa;X.prototype.getResponseJson=X.prototype.Ra;X.prototype.getResponseText=X.prototype.fa;X.prototype.send=X.prototype.da;var fh=function(){return new Kn},ph=function(){return os()},Fs=as,mh=Jo,gh=se,Ri={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},yh=un,Cn=Zo,vh=X;const Pi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new xo("@firebase/firestore");function Fi(){return ee.logLevel}function A(e,...t){if(ee.logLevel<=B.DEBUG){const n=t.map(Br);ee.debug(`Firestore (${Ce}): ${e}`,...n)}}function Mt(e,...t){if(ee.logLevel<=B.ERROR){const n=t.map(Br);ee.error(`Firestore (${Ce}): ${e}`,...n)}}function Vi(e,...t){if(ee.logLevel<=B.WARN){const n=t.map(Br);ee.warn(`Firestore (${Ce}): ${e}`,...n)}}function Br(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e="Unexpected state"){const t=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: `+e;throw Mt(t),new Error(t)}function $(e,t){e||L()}function M(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends be{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class bh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class Eh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ut,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ut)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?($(typeof s.accessToken=="string"),new wh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $(t===null||typeof t=="string"),new gt(t)}}class Th{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():($(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ch{constructor(t,n,s,r){this.h=t,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Th(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ih{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?($(typeof n.token=="string"),this.A=n.token,new Ih(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=xh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function j(e,t){return e<t?-1:e>t?1:0}function pe(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Z(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new Z(0,0))}static max(){return new R(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n,s){n===void 0?n=0:n>t.length&&L(),s===void 0?s=t.length-n:s>t.length-n&&L(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ze.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ze?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class z extends ze{construct(t,n,s){return new z(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new N(E.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new z(n)}static emptyPath(){return new z([])}}const kh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends ze{construct(t,n,s){return new ht(t,n,s)}static isValidIdentifier(t){return kh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new N(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new N(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new N(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.path=t}static fromPath(t){return new D(z.fromString(t))}static fromName(t){return new D(z.fromString(t).popFirst(5))}static empty(){return new D(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return z.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new D(new z(t.slice()))}}function Ah(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=R.fromTimestamp(s===1e9?new Z(n+1,0):new Z(n,s));return new jt(r,D.empty(),t)}function _h(e){return new jt(e.readTime,e.key,-1)}class jt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new jt(R.min(),D.empty(),-1)}static max(){return new jt(R.max(),D.empty(),-1)}}function Dh(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=D.comparator(e.documentKey,t.documentKey),n!==0?n:j(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Oh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(e){if(e.code!==E.FAILED_PRECONDITION||e.message!==Nh)throw e;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new w((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):w.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):w.reject(n)}static resolve(t){return new w((n,s)=>{n(t)})}static reject(t){return new w((n,s)=>{s(t)})}static waitFor(t){return new w((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(t){let n=w.resolve(!1);for(const s of t)n=n.next(r=>r?w.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new w((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(t,n){return new w((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function fn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ie(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ra(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jr.at=-1;class et{constructor(t,n){this.comparator=t,this.root=n||ot.EMPTY}insert(t,n){return new et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new In(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new In(this.root,t,this.comparator,!1)}getReverseIterator(){return new In(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new In(this.root,t,this.comparator,!0)}}class In{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:ot.RED,this.left=r!=null?r:ot.EMPTY,this.right=i!=null?i:ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new ot(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return ot.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,t,n,s,r){return this}insert(e,t,n){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bi(this.data.getIterator())}getIteratorFrom(t){return new Bi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new tt(this.comparator);return n.data=t,n}}class Bi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new Ct([])}unionWith(t){let n=new tt(ht.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new ut(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new ut(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const Lh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(e){if($(!!e),typeof e=="string"){let t=0;const n=Lh.exec(e);if($(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Q(e.seconds),nanos:Q(e.nanos)}}function Q(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function me(e){return typeof e=="string"?ut.fromBase64String(e):ut.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fa(e){const t=e.mapValue.fields.__previous_value__;return Pa(t)?Fa(t):t}function Ge(e){const t=$t(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,n,s,r,i,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class We{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new We("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof We&&t.projectId===this.projectId&&t.database===this.database}}function ms(e){return e==null}function Hn(e){return e===0&&1/e==-1/0}function Rh(e){return typeof e=="number"&&Number.isInteger(e)&&!Hn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ne(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Pa(e)?4:Ph(e)?9007199254740991:10:L()}function kt(e,t){if(e===t)return!0;const n=ne(e);if(n!==ne(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ge(e).isEqual(Ge(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=$t(s.timestampValue),o=$t(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return me(s.bytesValue).isEqual(me(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return Q(s.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Q(s.integerValue)===Q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Q(s.doubleValue),o=Q(r.doubleValue);return i===o?Hn(i)===Hn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return pe(e.arrayValue.values||[],t.arrayValue.values||[],kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ui(i)!==Ui(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!kt(i[a],o[a])))return!1;return!0}(e,t);default:return L()}}function Ye(e,t){return(e.values||[]).find(n=>kt(n,t))!==void 0}function ge(e,t){if(e===t)return 0;const n=ne(e),s=ne(t);if(n!==s)return j(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return j(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=Q(r.integerValue||r.doubleValue),a=Q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return ji(e.timestampValue,t.timestampValue);case 4:return ji(Ge(e),Ge(t));case 5:return j(e.stringValue,t.stringValue);case 6:return function(r,i){const o=me(r),a=me(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=j(o[c],a[c]);if(u!==0)return u}return j(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=j(Q(r.latitude),Q(i.latitude));return o!==0?o:j(Q(r.longitude),Q(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ge(o[c],a[c]);if(u)return u}return j(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Sn.mapValue&&i===Sn.mapValue)return 0;if(r===Sn.mapValue)return 1;if(i===Sn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=j(a[l],u[l]);if(h!==0)return h;const p=ge(o[a[l]],c[u[l]]);if(p!==0)return p}return j(a.length,u.length)}(e.mapValue,t.mapValue);default:throw L()}}function ji(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return j(e,t);const n=$t(e),s=$t(t),r=j(n.seconds,s.seconds);return r!==0?r:j(n.nanos,s.nanos)}function le(e){return nr(e)}function nr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=$t(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?me(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,D.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=nr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${nr(s.fields[a])}`;return i+"}"}(e.mapValue):L();var t,n}function sr(e){return!!e&&"integerValue"in e}function $r(e){return!!e&&"arrayValue"in e}function $i(e){return!!e&&"nullValue"in e}function qi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function An(e){return!!e&&"mapValue"in e}function Le(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ie(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Le(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Le(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ph(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!An(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Le(n)}setAll(t){let n=ht.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Le(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());An(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return kt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];An(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){Ie(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new wt(Le(this.value))}}function Va(e){const t=[];return Ie(e.fields,(n,s)=>{const r=new ht([n]);if(An(s)){const i=Va(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new at(t,0,R.min(),R.min(),wt.empty(),0)}static newFoundDocument(t,n,s){return new at(t,1,n,R.min(),s,0)}static newNoDocument(t,n){return new at(t,2,n,R.min(),wt.empty(),0)}static newUnknownDocument(t,n){return new at(t,3,n,R.min(),wt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ht=null}}function Ki(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Fh(e,t,n,s,r,i,o)}function qr(e){const t=M(e);if(t.ht===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+le(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ms(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>le(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>le(s)).join(",")),t.ht=n}return t.ht}function Vh(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${le(s.value)}`;var s}).join(", ")}]`),ms(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>le(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>le(n)).join(",")),`Target(${t})`}function Kr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!zh(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!kt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!zi(e.startAt,t.startAt)&&zi(e.endAt,t.endAt)}function rr(e){return D.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class yt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.lt(t,n,s):new Uh(t,n,s):n==="array-contains"?new $h(t,s):n==="in"?new qh(t,s):n==="not-in"?new Kh(t,s):n==="array-contains-any"?new Hh(t,s):new yt(t,n,s)}static lt(t,n,s){return n==="in"?new Bh(t,s):new jh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ge(n,this.value)):n!==null&&ne(this.value)===ne(n)&&this.ft(ge(n,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Uh extends yt{constructor(t,n,s){super(t,n,s),this.key=D.fromName(s.referenceValue)}matches(t){const n=D.comparator(t.key,this.key);return this.ft(n)}}class Bh extends yt{constructor(t,n){super(t,"in",n),this.keys=Ua("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class jh extends yt{constructor(t,n){super(t,"not-in",n),this.keys=Ua("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ua(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>D.fromName(s.referenceValue))}class $h extends yt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return $r(n)&&Ye(n.arrayValue,this.value)}}class qh extends yt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ye(this.value.arrayValue,n)}}class Kh extends yt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ye(this.value.arrayValue,n)}}class Hh extends yt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!$r(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ye(this.value.arrayValue,s))}}class zn{constructor(t,n){this.position=t,this.inclusive=n}}class Me{constructor(t,n="asc"){this.field=t,this.dir=n}}function zh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Hi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=D.comparator(D.fromName(o.referenceValue),n.key):s=ge(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function zi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!kt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this._t=null,this.wt=null,this.startAt,this.endAt}}function Gh(e,t,n,s,r,i,o,a){return new gs(e,t,n,s,r,i,o,a)}function Ba(e){return new gs(e)}function Gi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Wh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Yh(e){for(const t of e.filters)if(t.dt())return t.field;return null}function Qh(e){return e.collectionGroup!==null}function Qe(e){const t=M(e);if(t._t===null){t._t=[];const n=Yh(t),s=Wh(t);if(n!==null&&s===null)n.isKeyField()||t._t.push(new Me(n)),t._t.push(new Me(ht.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t._t.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Me(ht.keyField(),i))}}}return t._t}function Rt(e){const t=M(e);if(!t.wt)if(t.limitType==="F")t.wt=Ki(t.path,t.collectionGroup,Qe(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Qe(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Me(i.field,o))}const s=t.endAt?new zn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new zn(t.startAt.position,t.startAt.inclusive):null;t.wt=Ki(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function ir(e,t,n){return new gs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ys(e,t){return Kr(Rt(e),Rt(t))&&e.limitType===t.limitType}function ja(e){return`${qr(Rt(e))}|lt:${e.limitType}`}function or(e){return`Query(target=${Vh(Rt(e))}; limitType=${e.limitType})`}function Hr(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):D.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Hi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Qe(n),s)||n.endAt&&!function(r,i,o){const a=Hi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Qe(n),s))}(e,t)}function Xh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function $a(e){return(t,n)=>{let s=!1;for(const r of Qe(e)){const i=Jh(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jh(e,t,n){const s=e.field.isKeyField()?D.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ge(a,c):L()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hn(t)?"-0":t}}function Ka(e){return{integerValue:""+e}}function Zh(e,t){return Rh(t)?Ka(t):qa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this._=void 0}}function td(e,t,n){return e instanceof Gn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Xe?za(e,t):e instanceof Je?Ga(e,t):function(s,r){const i=Ha(s,r),o=Wi(i)+Wi(s.yt);return sr(i)&&sr(s.yt)?Ka(o):qa(s.It,o)}(e,t)}function ed(e,t,n){return e instanceof Xe?za(e,t):e instanceof Je?Ga(e,t):n}function Ha(e,t){return e instanceof Wn?sr(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Gn extends vs{}class Xe extends vs{constructor(t){super(),this.elements=t}}function za(e,t){const n=Wa(t);for(const s of e.elements)n.some(r=>kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Je extends vs{constructor(t){super(),this.elements=t}}function Ga(e,t){let n=Wa(t);for(const s of e.elements)n=n.filter(r=>!kt(r,s));return{arrayValue:{values:n}}}class Wn extends vs{constructor(t,n){super(),this.It=t,this.yt=n}}function Wi(e){return Q(e.integerValue||e.doubleValue)}function Wa(e){return $r(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function nd(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Xe&&s instanceof Xe||n instanceof Je&&s instanceof Je?pe(n.elements,s.elements,kt):n instanceof Wn&&s instanceof Wn?kt(n.yt,s.yt):n instanceof Gn&&s instanceof Gn}(e.transform,t.transform)}class sd{constructor(t,n){this.version=t,this.transformResults=n}}class Nt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _n(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ws{}function Ya(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Xa(e.key,Nt.none()):new pn(e.key,e.data,Nt.none());{const n=e.data,s=wt.empty();let r=new tt(ht.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new re(e.key,s,new Ct(r.toArray()),Nt.none())}}function rd(e,t,n){e instanceof pn?function(s,r,i){const o=s.value.clone(),a=Qi(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof re?function(s,r,i){if(!_n(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Qi(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Qa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Re(e,t,n,s){return e instanceof pn?function(r,i,o,a){if(!_n(r.precondition,i))return o;const c=r.value.clone(),u=Xi(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof re?function(r,i,o,a){if(!_n(r.precondition,i))return o;const c=Xi(r.fieldTransforms,a,i),u=i.data;return u.setAll(Qa(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(e,t,n,s):function(r,i,o){return _n(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function id(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ha(s.transform,r||null);i!=null&&(n===null&&(n=wt.empty()),n.set(s.field,i))}return n||null}function Yi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pe(n,s,(r,i)=>nd(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class pn extends ws{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class re extends ws{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qa(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Qi(e,t,n){const s=new Map;$(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,ed(o,a,n[r]))}return s}function Xi(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,td(i,o,t))}return s}class Xa extends ws{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class od extends ws{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,U;function cd(e){switch(e){default:return L();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ja(e){if(e===void 0)return Mt("GRPC error has no .code"),E.UNKNOWN;switch(e){case Y.OK:return E.OK;case Y.CANCELLED:return E.CANCELLED;case Y.UNKNOWN:return E.UNKNOWN;case Y.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Y.INTERNAL:return E.INTERNAL;case Y.UNAVAILABLE:return E.UNAVAILABLE;case Y.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Y.NOT_FOUND:return E.NOT_FOUND;case Y.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Y.ABORTED:return E.ABORTED;case Y.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Y.DATA_LOSS:return E.DATA_LOSS;default:return L()}}(U=Y||(Y={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ie(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return Ra(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=new et(D.comparator);function Pt(){return ud}const Za=new et(D.comparator);function Ne(...e){let t=Za;for(const n of e)t=t.insert(n.key,n);return t}function tc(e){let t=Za;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Qt(){return Pe()}function ec(){return Pe()}function Pe(){return new Se(e=>e.toString(),(e,t)=>e.isEqual(t))}const ld=new et(D.comparator),hd=new tt(D.comparator);function P(...e){let t=hd;for(const n of e)t=t.add(n);return t}const dd=new tt(j);function nc(){return dd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,mn.createSynthesizedTargetChangeForCurrentChange(t,n)),new bs(R.min(),s,nc(),Pt(),P())}}class mn{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n){return new mn(ut.EMPTY_BYTE_STRING,n,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n,s,r){this.Tt=t,this.removedTargetIds=n,this.key=s,this.Et=r}}class sc{constructor(t,n){this.targetId=t,this.At=n}}class rc{constructor(t,n,s=ut.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ji{constructor(){this.Rt=0,this.bt=to(),this.Pt=ut.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=P(),n=P(),s=P();return this.bt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:L()}}),new mn(this.Pt,this.vt,t,n,s)}Nt(){this.Vt=!1,this.bt=to()}kt(t,n){this.Vt=!0,this.bt=this.bt.insert(t,n)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class fd{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Pt(),this.qt=Zi(),this.Kt=new tt(j)}Gt(t){for(const n of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(n,t.Et):this.jt(n,t.key,t.Et);for(const n of t.removedTargetIds)this.jt(n,t.key,t.Et)}Wt(t){this.forEachTarget(t,n=>{const s=this.zt(n);switch(t.state){case 0:this.Ht(n)&&s.Ct(t.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(t.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(t.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(t.resumeToken));break;default:L()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Lt.forEach((s,r)=>{this.Ht(r)&&n(r)})}Yt(t){const n=t.targetId,s=t.At.count,r=this.Xt(n);if(r){const i=r.target;if(rr(i))if(s===0){const o=new D(i.path);this.jt(n,o,at.newNoDocument(o,R.min()))}else $(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(t){const n=new Map;this.Lt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&rr(a.target)){const c=new D(a.target.path);this.Ut.get(c)!==null||this.ee(o,c)||this.jt(o,c,at.newNoDocument(c,t))}i.Dt&&(n.set(o,i.xt()),i.Nt())}});let s=P();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(t));const r=new bs(t,n,this.Kt,this.Ut,s);return this.Ut=Pt(),this.qt=Zi(),this.Kt=new tt(j),r}Qt(t,n){if(!this.Ht(t))return;const s=this.ee(t,n.key)?2:0;this.zt(t).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(t))}jt(t,n,s){if(!this.Ht(t))return;const r=this.zt(t);this.ee(t,n)?r.kt(n,1):r.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(t)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(t){this.Lt.delete(t)}Zt(t){const n=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let n=this.Lt.get(t);return n||(n=new Ji,this.Lt.set(t,n)),n}ne(t){let n=this.qt.get(t);return n||(n=new tt(j),this.qt=this.qt.insert(t,n)),n}Ht(t){const n=this.Xt(t)!==null;return n||A("WatchChangeAggregator","Detected inactive target",t),n}Xt(t){const n=this.Lt.get(t);return n&&n.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Ji),this.Bt.getRemoteKeysForTarget(t).forEach(n=>{this.jt(t,n,null)})}ee(t,n){return this.Bt.getRemoteKeysForTarget(t).has(n)}}function Zi(){return new et(D.comparator)}function to(){return new et(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),md=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class gd{constructor(t,n){this.databaseId=t,this.gt=n}}function Yn(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ic(e,t){return e.gt?t.toBase64():t.toUint8Array()}function yd(e,t){return Yn(e,t.toTimestamp())}function Ot(e){return $(!!e),R.fromTimestamp(function(t){const n=$t(t);return new Z(n.seconds,n.nanos)}(e))}function zr(e,t){return function(n){return new z(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function oc(e){const t=z.fromString(e);return $(uc(t)),t}function ar(e,t){return zr(e.databaseId,t.path)}function Vs(e,t){const n=oc(t);if(n.get(1)!==e.databaseId.projectId)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new N(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new D(ac(n))}function cr(e,t){return zr(e.databaseId,t)}function vd(e){const t=oc(e);return t.length===4?z.emptyPath():ac(t)}function ur(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ac(e){return $(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function eo(e,t,n){return{name:ar(e,t),fields:n.value.mapValue.fields}}function wd(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(c,u){return c.gt?($(u===void 0||typeof u=="string"),ut.fromBase64String(u||"")):($(u===void 0||u instanceof Uint8Array),ut.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?E.UNKNOWN:Ja(c.code);return new N(u,c.message||"")}(o);n=new rc(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Vs(e,s.document.name),i=Ot(s.document.updateTime),o=new wt({mapValue:{fields:s.document.fields}}),a=at.newFoundDocument(r,i,o),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Dn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Vs(e,s.document),i=s.readTime?Ot(s.readTime):R.min(),o=at.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Dn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Vs(e,s.document),i=s.removedTargetIds||[];n=new Dn([],i,r,null)}else{if(!("filter"in t))return L();{t.filter;const s=t.filter;s.targetId;const r=s.count||0,i=new ad(r),o=s.targetId;n=new sc(o,i)}}return n}function bd(e,t){let n;if(t instanceof pn)n={update:eo(e,t.key,t.value)};else if(t instanceof Xa)n={delete:ar(e,t.key)};else if(t instanceof re)n={update:eo(e,t.key,t.data),updateMask:Dd(t.fieldMask)};else{if(!(t instanceof od))return L();n={verify:ar(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Gn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Xe)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Je)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Wn)return{fieldPath:i.field.canonicalString(),increment:o.yt};throw L()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:yd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:L()}(e,t.precondition)),n}function Ed(e,t){return e&&e.length>0?($(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?Ot(s.updateTime):Ot(r);return i.isEqual(R.min())&&(i=Ot(r)),new sd(i,s.transformResults||[])}(n,t))):[]}function Td(e,t){return{documents:[cr(e,t.path)]}}function Cd(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=cr(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=cr(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(qi(h.value))return{unaryFilter:{field:oe(h.field),op:"IS_NAN"}};if($i(h.value))return{unaryFilter:{field:oe(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(qi(h.value))return{unaryFilter:{field:oe(h.field),op:"IS_NOT_NAN"}};if($i(h.value))return{unaryFilter:{field:oe(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oe(h.field),op:kd(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(t.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:oe(l.field),direction:xd(l.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.gt||ms(u)?u:{value:u}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Id(e){let t=vd(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){$(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=cc(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Me(ce(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ms(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,p=l.values||[];return new zn(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,p=l.values||[];return new zn(p,h)}(n.endAt)),Gh(t,r,o,i,a,"F",c,u)}function Sd(e,t){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return L()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function cc(e){return e?e.unaryFilter!==void 0?[_d(e)]:e.fieldFilter!==void 0?[Ad(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>cc(t)).reduce((t,n)=>t.concat(n)):L():[]}function xd(e){return pd[e]}function kd(e){return md[e]}function oe(e){return{fieldPath:e.canonicalString()}}function ce(e){return ht.fromServerFormat(e.fieldPath)}function Ad(e){return yt.create(ce(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}function _d(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ce(e.unaryFilter.field);return yt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ce(e.unaryFilter.field);return yt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ce(e.unaryFilter.field);return yt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ce(e.unaryFilter.field);return yt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return L()}}function Dd(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function uc(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&rd(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Re(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=ec();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Ya(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),P())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(n,s)=>Yi(n,s))&&pe(this.baseMutations,t.baseMutations,(n,s)=>Yi(n,s))}}class Gr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){$(t.mutations.length===s.length);let r=ld;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Gr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n,s,r,i=R.min(),o=R.min(),a=ut.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new Jt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Jt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(t){this.re=t}}function Md(e){const t=Id({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?ir(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.Ye=new Pd}addToCollectionParentIndex(t,n){return this.Ye.add(n),w.resolve()}getCollectionParents(t,n){return w.resolve(this.Ye.getEntries(n))}addFieldIndex(t,n){return w.resolve()}deleteFieldIndex(t,n){return w.resolve()}getDocumentsMatchingTarget(t,n){return w.resolve(null)}getIndexType(t,n){return w.resolve(0)}getFieldIndexes(t,n){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,n){return w.resolve(jt.min())}getMinOffsetFromCollectionGroup(t,n){return w.resolve(jt.min())}updateCollectionGroup(t,n,s){return w.resolve()}updateIndexEntries(t,n){return w.resolve()}}class Pd{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new tt(z.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new tt(z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new ye(0)}static vn(){return new ye(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.changes=new Se(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?w.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&Re(s.mutation,r,Ct.empty(),Z.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,P()).next(()=>s))}getLocalViewOfDocuments(t,n,s=P()){const r=Qt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=Ne();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Qt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,P()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Pt();const o=Pe(),a=Pe();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof re)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Re(l.mutation,u,l.mutation.getFieldMask(),Z.now()))}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Vd(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Pe();let r=new et((o,a)=>o-a),i=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Ct.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||P()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ec();l.forEach(p=>{if(!i.has(p)){const f=Ya(n.get(p),s.get(p));f!==null&&h.set(p,f),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return w.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return D.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Qh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):w.resolve(Qt());let a=-1,c=i;return o.next(u=>w.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?w.resolve():this.getBaseDocument(t,l,h).next(p=>{c=c.insert(l,p)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,P())).next(l=>({batchId:a,changes:tc(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new D(n)).next(s=>{let r=Ne();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=Ne();return this.indexManager.getCollectionParents(t,r).next(o=>w.forEach(o,a=>{const c=function(u,l){return new gs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,at.newInvalidDocument(u)))});let o=Ne();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Re(u.mutation,c,Ct.empty(),Z.now()),Hr(n,c)&&(o=o.insert(a,c))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):w.resolve(at.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,n){return w.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ot(s.createTime)}),w.resolve()}getNamedQuery(t,n){return w.resolve(this.ts.get(n))}saveNamedQuery(t,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Md(s.bundledQuery),readTime:Ot(s.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(){this.overlays=new et(D.comparator),this.es=new Map}getOverlay(t,n){return w.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Qt();return w.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ue(t,n,i)}),w.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),w.resolve()}getOverlaysForCollection(t,n,s){const r=Qt(),i=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return w.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new et((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Qt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Qt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return w.resolve(a)}ue(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Od(n,s));let i=this.es.get(n);i===void 0&&(i=P(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.ns=new tt(rt.ss),this.rs=new tt(rt.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,n){const s=new rt(t,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.cs(new rt(t,n))}hs(t,n){t.forEach(s=>this.removeReference(s,n))}ls(t){const n=new D(new z([])),s=new rt(n,t),r=new rt(n,t+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(t=>this.cs(t))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const n=new D(new z([])),s=new rt(n,t),r=new rt(n,t+1);let i=P();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new rt(t,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class rt{constructor(t,n){this.key=t,this._s=n}static ss(t,n){return D.comparator(t.key,n.key)||j(t._s,n._s)}static os(t,n){return j(t._s,n._s)||D.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new tt(rt.ss)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Nd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(t,n){return w.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new rt(n,0),r=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new tt(j);return n.forEach(r=>{const i=new rt(r,0),o=new rt(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),w.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;D.isDocumentKey(i)||(i=i.child(""));const o=new rt(new D(i),0);let a=new tt(j);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),w.resolve(this.Is(a))}Is(t){const n=[];return t.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){$(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return w.forEach(n.mutations,r=>{const i=new rt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.gs=s})}An(t){}containsKey(t,n){const s=new rt(n,0),r=this.gs.firstAfterOrEqual(s);return w.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Ts(t,n){return this.ps(t)}ps(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ys(t){const n=this.ps(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.Es=t,this.docs=new et(D.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return w.resolve(s?s.document.mutableCopy():at.newInvalidDocument(n))}getEntries(t,n){let s=Pt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():at.newInvalidDocument(r))}),w.resolve(s)}getAllFromCollection(t,n,s){let r=Pt();const i=new D(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Dh(_h(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return w.resolve(r)}getAllFromCollectionGroup(t,n,s,r){L()}As(t,n){return w.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Kd(this)}getSize(t){return w.resolve(this.size)}}class Kd extends Fd{constructor(t){super(),this.Yn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(t,r)):this.Yn.removeEntry(s)}),w.waitFor(n)}getFromCache(t,n){return this.Yn.getEntry(t,n)}getAllFromCache(t,n){return this.Yn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){this.persistence=t,this.Rs=new Se(n=>qr(n),Kr),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wr,this.targetCount=0,this.vs=ye.Pn()}forEachTarget(t,n){return this.Rs.forEach((s,r)=>n(r)),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),w.resolve()}Dn(t){this.Rs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.vs=new ye(n),this.highestTargetId=n),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,n){return this.Dn(n),this.targetCount+=1,w.resolve()}updateTargetData(t,n){return this.Dn(n),w.resolve()}removeTargetData(t,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),w.waitFor(i).next(()=>r)}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,n){const s=this.Rs.get(n)||null;return w.resolve(s)}addMatchingKeys(t,n,s){return this.Ps.us(n,s),w.resolve()}removeMatchingKeys(t,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),w.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Ps.ls(n),w.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Ps.ds(n);return w.resolve(s)}containsKey(t,n){return w.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,n){this.Vs={},this.overlays={},this.Ss=new jr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Hd(this),this.indexManager=new Rd,this.remoteDocumentCache=function(s){return new qd(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Ld(n),this.Ns=new Bd(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new jd,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Vs[t.toKey()];return s||(s=new $d(n,this.referenceDelegate),this.Vs[t.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,n,s){A("MemoryPersistence","Starting transaction:",t);const r=new Gd(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Ms(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return w.or(Object.values(this.Vs).map(s=>()=>s.containsKey(t,n)))}}class Gd extends Oh{constructor(t){super(),this.currentSequenceNumber=t}}class Yr{constructor(t){this.persistence=t,this.Fs=new Wr,this.$s=null}static Bs(t){return new Yr(t)}get Ls(){if(this.$s)return this.$s;throw L()}addReference(t,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),w.resolve()}removeReference(t,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),w.resolve()}markPotentiallyOrphaned(t,n){return this.Ls.add(n.toString()),w.resolve()}removeTarget(t,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}ks(){this.$s=new Set}Ms(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Ls,s=>{const r=D.fromPath(s);return this.Us(t,r).next(i=>{i||n.removeEntry(r,R.min())})}).next(()=>(this.$s=null,n.apply(t)))}updateLimboDocument(t,n){return this.Us(t,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(t){return 0}Us(t,n){return w.or([()=>w.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Si=s,this.Di=r}static Ci(t,n){let s=P(),r=P();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Qr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(){this.xi=!1}initialize(t,n){this.Ni=t,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(t,n,s,r){return this.ki(t,n).next(i=>i||this.Mi(t,n,r,s)).next(i=>i||this.Oi(t,n))}ki(t,n){if(Gi(n))return w.resolve(null);let s=Rt(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ir(n,null,"F"),s=Rt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=P(...i);return this.Ni.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(t,ir(n,null,"F")):this.Bi(t,u,n,c)}))})))}Mi(t,n,s,r){return Gi(n)||r.isEqual(R.min())?this.Oi(t,n):this.Ni.getDocuments(t,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Oi(t,n):(Fi()<=B.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),or(n)),this.Bi(t,o,n,Ah(r,-1)))})}Fi(t,n){let s=new tt($a(t));return n.forEach((r,i)=>{Hr(t,i)&&(s=s.add(i))}),s}$i(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return Fi()<=B.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",or(n)),this.Ni.getDocumentsMatchingQuery(t,n,jt.min())}Bi(t,n,s,r){return this.Ni.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(t,n,s,r){this.persistence=t,this.Li=n,this.It=r,this.Ui=new et(j),this.qi=new Se(i=>qr(i),Kr),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(s)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ud(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ui))}}function Qd(e,t,n,s){return new Yd(e,t,n,s)}async function lc(e,t){const n=M(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=P();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Xd(e,t){const n=M(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let p=w.resolve();return h.forEach(f=>{p=p.next(()=>u.getEntry(a,f)).next(g=>{const v=c.docVersions.get(f);$(v!==null),g.version.compareTo(v)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=P();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function hc(e){const t=M(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Cs.getLastRemoteSnapshotVersion(n))}function Jd(e,t){const n=M(e),s=t.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const a=[];t.targetChanges.forEach((l,h)=>{const p=r.get(h);if(!p)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let f=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(h)?f=f.withResumeToken(ut.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,s)),r=r.insert(h,f),function(g,v,b){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(p,f,l)&&a.push(n.Cs.updateTargetData(i,f))});let c=Pt(),u=P();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Zd(i,o,t.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(R.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return w.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ui=r,i))}function Zd(e,t,n){let s=P(),r=P();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let o=Pt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function tf(e,t){const n=M(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function ef(e,t){const n=M(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,t).next(i=>i?(r=i,w.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Jt(t,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ui.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(t,s.targetId)),s})}async function lr(e,t,n){const s=M(e),r=s.Ui.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!fn(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Ui=s.Ui.remove(t),s.qi.delete(r.target)}function no(e,t,n){const s=M(e);let r=R.min(),i=P();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=M(a),h=l.qi.get(u);return h!==void 0?w.resolve(l.Ui.get(h)):l.Cs.getTargetData(c,u)}(s,o,Rt(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,t,n?r:R.min(),n?i:P())).next(a=>(nf(s,Xh(t),a),{documents:a,Hi:i})))}function nf(e,t,n){let s=R.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),e.Ki.set(t,s)}class so{constructor(){this.activeTargetIds=nc()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sf{constructor(){this.Lr=new so,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,n,s){this.Ur[t]=n}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new so,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.oo=n+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,n,s,r,i){const o=this.ao(t,n);A("RestConnection","Sending: ",o,s);const a={};return this.ho(a,r,i),this.lo(t,o,a,s).then(c=>(A("RestConnection","Received: ",c),c),c=>{throw Vi("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ce,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=of[t];return`${this.oo}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){return new Promise((i,o)=>{const a=new vh;a.listenOnce(mh.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Fs.NO_ERROR:const u=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Fs.TIMEOUT:A("Connection",'RPC "'+t+'" timed out'),o(new N(E.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const l=a.getStatus();if(A("Connection",'RPC "'+t+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const p=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(g)>=0?g:E.UNKNOWN}(h.status);o(new N(p,h.message))}else o(new N(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(E.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{A("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}_o(t,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=fh(),o=ph(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new yh({})),this.ho(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");A("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const p=new af({Hr:g=>{h?A("Connection","Not sending because WebChannel is closed:",g):(l||(A("Connection","Opening WebChannel transport."),u.open(),l=!0),A("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,v,b)=>{g.listen(v,d=>{try{b(d)}catch(y){setTimeout(()=>{throw y},0)}})};return f(u,Cn.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),f(u,Cn.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),p.io())}),f(u,Cn.EventType.ERROR,g=>{h||(h=!0,Vi("Connection","WebChannel transport errored:",g),p.io(new N(E.UNAVAILABLE,"The operation could not be completed")))}),f(u,Cn.EventType.MESSAGE,g=>{var v;if(!h){const b=g.data[0];$(!!b);const d=b,y=d.error||((v=d[0])===null||v===void 0?void 0:v.error);if(y){A("Connection","WebChannel received error:",y);const m=y.status;let T=function(nt){const J=Y[nt];if(J!==void 0)return Ja(J)}(m),x=y.message;T===void 0&&(T=E.INTERNAL,x="Unknown error status: "+m+" with message "+y.message),h=!0,p.io(new N(T,x)),u.close()}else A("Connection","WebChannel received:",b),p.ro(b)}}),f(o,gh.STAT_EVENT,g=>{g.stat===Ri.PROXY?A("Connection","Detected buffering proxy"):g.stat===Ri.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}function Us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){return new gd(e,!0)}class dc{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Hs=t,this.timerId=n,this.wo=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,n,s,r,i,o,a,c){this.Hs=t,this.Po=s,this.vo=r,this.Vo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new dc(t,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,t!==4?this.xo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Mt(n.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{t(()=>{const r=new N(E.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(t,n){const s=this.Ko(this.So);this.stream=this.jo(t,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return n=>{this.Hs.enqueueAndForget(()=>this.So===t?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uf extends fc{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.It=i}jo(t,n){return this.Vo._o("Listen",t,n)}onMessage(t){this.xo.reset();const n=wd(this.It,t),s=function(r){if(!("targetChange"in r))return R.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?R.min():i.readTime?Ot(i.readTime):R.min()}(t);return this.listener.Wo(n,s)}zo(t){const n={};n.database=ur(this.It),n.addTarget=function(r,i){let o;const a=i.target;return o=rr(a)?{documents:Td(r,a)}:{query:Cd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ic(r,i.resumeToken):i.snapshotVersion.compareTo(R.min())>0&&(o.readTime=Yn(r,i.snapshotVersion.toTimestamp())),o}(this.It,t);const s=Sd(this.It,t);s&&(n.labels=s),this.Bo(n)}Ho(t){const n={};n.database=ur(this.It),n.removeTarget=t,this.Bo(n)}}class lf extends fc{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.It=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(t,n){return this.Vo._o("Write",t,n)}onMessage(t){if($(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const n=Ed(t.writeResults,t.commitTime),s=Ot(t.commitTime);return this.listener.Zo(s,n)}return $(!t.writeResults||t.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=ur(this.It),this.Bo(t)}Xo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>bd(this.It,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.Vo=s,this.It=r,this.nu=!1}su(){if(this.nu)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.Vo.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new N(E.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.Vo.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(E.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class df{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(t){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,t==="Online"&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Mt(n),this.ou=!1):A("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr(o=>{s.enqueueAndForget(async()=>{ie(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c._u.add(4),await gn(c),c.gu.set("Unknown"),c._u.delete(4),await Ts(c)}(this))})}),this.gu=new df(s,r)}}async function Ts(e){if(ie(e))for(const t of e.wu)await t(!0)}async function gn(e){for(const t of e.wu)await t(!1)}function pc(e,t){const n=M(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Zr(n)?Jr(n):xe(n).ko()&&Xr(n,t))}function mc(e,t){const n=M(e),s=xe(n);n.du.delete(t),s.ko()&&gc(n,t),n.du.size===0&&(s.ko()?s.Fo():ie(n)&&n.gu.set("Unknown"))}function Xr(e,t){e.yu.Ot(t.targetId),xe(e).zo(t)}function gc(e,t){e.yu.Ot(t),xe(e).Ho(t)}function Jr(e){e.yu=new fd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e.du.get(t)||null}),xe(e).start(),e.gu.uu()}function Zr(e){return ie(e)&&!xe(e).No()&&e.du.size>0}function ie(e){return M(e)._u.size===0}function yc(e){e.yu=void 0}async function pf(e){e.du.forEach((t,n)=>{Xr(e,t)})}async function mf(e,t){yc(e),Zr(e)?(e.gu.hu(t),Jr(e)):e.gu.set("Unknown")}async function gf(e,t,n){if(e.gu.set("Online"),t instanceof rc&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(e,t)}catch(s){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Qn(e,s)}else if(t instanceof Dn?e.yu.Gt(t):t instanceof sc?e.yu.Yt(t):e.yu.Wt(t),!n.isEqual(R.min()))try{const s=await hc(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.te(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ut.EMPTY_BYTE_STRING,c.snapshotVersion)),gc(r,a);const u=new Jt(c.target,a,1,c.sequenceNumber);Xr(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){A("RemoteStore","Failed to raise snapshot:",s),await Qn(e,s)}}async function Qn(e,t,n){if(!fn(t))throw t;e._u.add(1),await gn(e),e.gu.set("Offline"),n||(n=()=>hc(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Ts(e)})}function vc(e,t){return t().catch(n=>Qn(e,n,t))}async function Cs(e){const t=M(e),n=qt(t);let s=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;yf(t);)try{const r=await tf(t.localStore,s);if(r===null){t.fu.length===0&&n.Fo();break}s=r.batchId,vf(t,r)}catch(r){await Qn(t,r)}wc(t)&&bc(t)}function yf(e){return ie(e)&&e.fu.length<10}function vf(e,t){e.fu.push(t);const n=qt(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function wc(e){return ie(e)&&!qt(e).No()&&e.fu.length>0}function bc(e){qt(e).start()}async function wf(e){qt(e).eu()}async function bf(e){const t=qt(e);for(const n of e.fu)t.Xo(n.mutations)}async function Ef(e,t,n){const s=e.fu.shift(),r=Gr.from(s,t,n);await vc(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Cs(e)}async function Tf(e,t){t&&qt(e).Yo&&await async function(n,s){if(r=s.code,cd(r)&&r!==E.ABORTED){const i=n.fu.shift();qt(n).Oo(),await vc(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Cs(n)}var r}(e,t),wc(e)&&bc(e)}async function io(e,t){const n=M(e);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const s=ie(n);n._u.add(3),await gn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Ts(n)}async function Cf(e,t){const n=M(e);t?(n._u.delete(2),await Ts(n)):t||(n._u.add(2),await gn(n),n.gu.set("Unknown"))}function xe(e){return e.pu||(e.pu=function(t,n,s){const r=M(t);return r.su(),new uf(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:pf.bind(null,e),Zr:mf.bind(null,e),Wo:gf.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),Zr(e)?Jr(e):e.gu.set("Unknown")):(await e.pu.stop(),yc(e))})),e.pu}function qt(e){return e.Iu||(e.Iu=function(t,n,s){const r=M(t);return r.su(),new lf(n,r.Vo,r.authCredentials,r.appCheckCredentials,r.It,s)}(e.datastore,e.asyncQueue,{Yr:wf.bind(null,e),Zr:Tf.bind(null,e),tu:bf.bind(null,e),Zo:Ef.bind(null,e)}),e.wu.push(async t=>{t?(e.Iu.Oo(),await Cs(e)):(await e.Iu.stop(),e.fu.length>0&&(A("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))})),e.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new ti(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ei(e,t){if(Mt("AsyncQueue",`${t}: ${e}`),fn(e))return new N(E.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.comparator=t?(n,s)=>t(n,s)||D.comparator(n.key,s.key):(n,s)=>D.comparator(n.key,s.key),this.keyedMap=Ne(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new he(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof he)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new he;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.Tu=new et(D.comparator)}track(t){const n=t.doc.key,s=this.Tu.get(n);s?t.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,t):t.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Tu=this.Tu.remove(n):t.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:t.doc}):L():this.Tu=this.Tu.insert(n,t)}Eu(){const t=[];return this.Tu.inorderTraversal((n,s)=>{t.push(s)}),t}}class ve{constructor(t,n,s,r,i,o,a,c){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(t,n,s,r){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ve(t,n,he.emptySet(n),i,s,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ys(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.Au=void 0,this.listeners=[]}}class Sf{constructor(){this.queries=new Se(t=>ja(t),ys),this.onlineState="Unknown",this.Ru=new Set}}async function xf(e,t){const n=M(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new If),r)try{i.Au=await n.onListen(s)}catch(o){const a=ei(o,`Initialization of query '${or(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.listeners.push(t),t.bu(n.onlineState),i.Au&&t.Pu(i.Au)&&ni(n)}async function kf(e,t){const n=M(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Af(e,t){const n=M(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&ni(n)}function _f(e,t,n){const s=M(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function ni(e){e.Ru.forEach(t=>{t.next()})}class Df{constructor(t,n,s){this.query=t,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new ve(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),n=!0):this.Cu(t,this.onlineState)&&(this.xu(t),n=!0),this.Su=t,n}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),n=!0),n}Cu(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!t.docs.isEmpty()||n==="Offline")}Du(t){if(t.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(t){t=ve.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.key=t}}class Tc{constructor(t){this.key=t}}class Nf{constructor(t,n){this.query=t,this.Lu=n,this.Uu=null,this.current=!1,this.qu=P(),this.mutatedKeys=P(),this.Ku=$a(t),this.Gu=new he(this.Ku)}get Qu(){return this.Lu}ju(t,n){const s=n?n.Wu:new oo,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((l,h)=>{const p=r.get(l),f=Hr(this.query,h)?h:null,g=!!p&&this.mutatedKeys.has(p.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let b=!1;p&&f?p.data.isEqual(f.data)?g!==v&&(s.track({type:3,doc:f}),b=!0):this.zu(p,f)||(s.track({type:2,doc:f}),b=!0,(c&&this.Ku(f,c)>0||u&&this.Ku(f,u)<0)&&(a=!0)):!p&&f?(s.track({type:0,doc:f}),b=!0):p&&!f&&(s.track({type:1,doc:p}),b=!0,(c||u)&&(a=!0)),b&&(f?(o=o.add(f),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,Wu:s,$i:a,mutatedKeys:i}}zu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.Wu.Eu();i.sort((u,l)=>function(h,p){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return f(h)-f(p)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new ve(this.query,t.Gu,r,i,t.mutatedKeys,a===0,c,!1),Yu:o}:{Yu:o}}bu(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new oo,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=P(),this.Gu.forEach(s=>{this.Xu(s.key)&&(this.qu=this.qu.add(s.key))});const n=[];return t.forEach(s=>{this.qu.has(s)||n.push(new Tc(s))}),this.qu.forEach(s=>{t.has(s)||n.push(new Ec(s))}),n}Zu(t){this.Lu=t.Hi,this.qu=P();const n=this.ju(t.documents);return this.applyChanges(n,!0)}tc(){return ve.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class Of{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Lf{constructor(t){this.key=t,this.ec=!1}}class Mf{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Se(a=>ja(a),ys),this.ic=new Map,this.rc=new Set,this.oc=new et(D.comparator),this.uc=new Map,this.cc=new Wr,this.ac={},this.hc=new Map,this.lc=ye.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Rf(e,t){const n=Hf(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await ef(n.localStore,Rt(t));n.isPrimaryClient&&pc(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Pf(n,t,s,a==="current")}return r}async function Pf(e,t,n,s){e.dc=(l,h,p)=>async function(f,g,v,b){let d=g.view.ju(v);d.$i&&(d=await no(f.localStore,g.query,!1).then(({documents:T})=>g.view.ju(T,d)));const y=b&&b.targetChanges.get(g.targetId),m=g.view.applyChanges(d,f.isPrimaryClient,y);return co(f,g.targetId,m.Yu),m.snapshot}(e,l,h,p);const r=await no(e.localStore,t,!0),i=new Nf(t,r.Hi),o=i.ju(r.documents),a=mn.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),c=i.applyChanges(o,e.isPrimaryClient,a);co(e,n,c.Yu);const u=new Of(t,n,i);return e.sc.set(t,u),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),c.snapshot}async function Ff(e,t){const n=M(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!ys(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await lr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mc(n.remoteStore,s.targetId),hr(n,s.targetId)}).catch(dn)):(hr(n,s.targetId),await lr(n.localStore,s.targetId,!0))}async function Vf(e,t,n){const s=zf(e);try{const r=await function(i,o){const a=M(i),c=Z.now(),u=o.reduce((p,f)=>p.add(f.key),P());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let f=Pt(),g=P();return a.Gi.getEntries(p,u).next(v=>{f=v,f.forEach((b,d)=>{d.isValidDocument()||(g=g.add(b))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,f)).next(v=>{l=v;const b=[];for(const d of o){const y=id(d,l.get(d.key).overlayedDocument);y!=null&&b.push(new re(d.key,y,Va(y.value.mapValue),Nt.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,b,o)}).next(v=>{h=v;const b=v.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(p,v.batchId,b)})}).then(()=>({batchId:h.batchId,changes:tc(l)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new et(j)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(s,r.batchId,n),await yn(s,r.changes),await Cs(s.remoteStore)}catch(r){const i=ei(r,"Failed to persist write");n.reject(i)}}async function Cc(e,t){const n=M(e);try{const s=await Jd(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&($(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?$(o.ec):r.removedDocuments.size>0&&($(o.ec),o.ec=!1))}),await yn(n,s,t)}catch(s){await dn(s)}}function ao(e,t,n){const s=M(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.bu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=M(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&ni(a)}(s.eventManager,t),r.length&&s.nc.Wo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Uf(e,t,n){const s=M(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new et(D.comparator);o=o.insert(i,at.newNoDocument(i,R.min()));const a=P().add(i),c=new bs(R.min(),new Map,new tt(j),o,a);await Cc(s,c),s.oc=s.oc.remove(i),s.uc.delete(t),si(s)}else await lr(s.localStore,t,!1).then(()=>hr(s,t,n)).catch(dn)}async function Bf(e,t){const n=M(e),s=t.batch.batchId;try{const r=await Xd(n.localStore,t);Sc(n,s,null),Ic(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await yn(n,r)}catch(r){await dn(r)}}async function jf(e,t,n){const s=M(e);try{const r=await function(i,o){const a=M(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>($(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,t);Sc(s,t,n),Ic(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await yn(s,r)}catch(r){await dn(r)}}function Ic(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function Sc(e,t,n){const s=M(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function hr(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc._c(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.ls(t).forEach(s=>{e.cc.containsKey(s)||xc(e,s)})}function xc(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(mc(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),si(e))}function co(e,t,n){for(const s of n)s instanceof Ec?(e.cc.addReference(s.key,t),$f(e,s)):s instanceof Tc?(A("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||xc(e,s.key)):L()}function $f(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(A("SyncEngine","New document in limbo: "+n),e.rc.add(s),si(e))}function si(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new D(z.fromString(t)),s=e.lc.next();e.uc.set(s,new Lf(n)),e.oc=e.oc.insert(n,s),pc(e.remoteStore,new Jt(Rt(Ba(n.path)),s,2,jr.at))}}async function yn(e,t,n){const s=M(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,c)=>{o.push(s.dc(c,t,n).then(u=>{if(u){s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),r.push(u);const l=Qr.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.nc.Wo(r),await async function(a,c){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>w.forEach(c,h=>w.forEach(h.Si,p=>u.persistence.referenceDelegate.addReference(l,h.targetId,p)).next(()=>w.forEach(h.Di,p=>u.persistence.referenceDelegate.removeReference(l,h.targetId,p)))))}catch(l){if(!fn(l))throw l;A("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const p=u.Ui.get(h),f=p.snapshotVersion,g=p.withLastLimboFreeSnapshotVersion(f);u.Ui=u.Ui.insert(h,g)}}}(s.localStore,i))}async function qf(e,t){const n=M(e);if(!n.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const s=await lc(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new N(E.CANCELLED,i))})}),r.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await yn(n,s.ji)}}function Kf(e,t){const n=M(e),s=n.uc.get(t);if(s&&s.ec)return P().add(s.key);{let r=P();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}function Hf(e){const t=M(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Uf.bind(null,t),t.nc.Wo=Af.bind(null,t.eventManager),t.nc._c=_f.bind(null,t.eventManager),t}function zf(e){const t=M(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jf.bind(null,t),t}class Gf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Es(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,n){return null}Tc(t,n){return null}yc(t){return Qd(this.persistence,new Wd,t.initialUser,this.It)}gc(t){return new zd(Yr.Bs,this.It)}mc(t){return new sf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Wf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ao(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=qf.bind(null,this.syncEngine),await Cf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Sf}createDatastore(t){const n=Es(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new cf(r));var r;return function(i,o,a,c){return new hf(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>ao(this.syncEngine,a,0),o=ro.C()?new ro:new rf,new ff(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,c,u){const l=new Mf(s,r,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=M(t);A("RemoteStore","RemoteStore shutting down."),n._u.add(5),await gn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=gt.UNAUTHENTICATED,this.clientId=Ma.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ei(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Xf(e,t){e.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await lc(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Jf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zf(e);A("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>io(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>io(t.remoteStore,i)),e.onlineComponents=t}async function Zf(e){return e.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await Xf(e,new Gf)),e.offlineComponents}async function kc(e){return e.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await Jf(e,new Wf)),e.onlineComponents}function tp(e){return kc(e).then(t=>t.syncEngine)}async function ep(e){const t=await kc(e),n=t.eventManager;return n.onListen=Rf.bind(null,t.syncEngine),n.onUnlisten=Ff.bind(null,t.syncEngine),n}function np(e,t,n={}){const s=new Ut;return e.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Yf({next:h=>{i.enqueueAndForget(()=>kf(r,l)),h.fromCache&&a.source==="server"?c.reject(new N(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Df(o,u,{includeMetadataChanges:!0,Nu:!0});return xf(r,l)}(await ep(e),e.asyncQueue,t,n,s)),s.promise}const uo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(e,t,n){if(!n)throw new N(E.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function sp(e,t,n,s){if(t===!0&&s===!0)throw new N(E.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lo(e){if(!D.isDocumentKey(e))throw new N(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ho(e){if(D.isDocumentKey(e))throw new N(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ri(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":L()}function dr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ri(e);throw new N(E.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,sp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fo(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new bh;switch(n.type){case"gapi":const s=n.client;return new Ch(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=uo.get(t);n&&(A("ComponentProvider","Removing Datastore"),uo.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Is{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Is(this.firestore,t,this._query)}}class Bt extends Is{constructor(t,n,s){super(t,n,Ba(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new D(t))}withConverter(t){return new Bt(this.firestore,t,this._path)}}function rp(e,t,...n){if(e=Ve(e),Ac("collection","path",t),e instanceof ii){const s=z.fromString(t,...n);return ho(s),new Bt(e,null,s)}{if(!(e instanceof bt||e instanceof Bt))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(z.fromString(t,...n));return ho(s),new Bt(e.firestore,null,s)}}function ip(e,t,...n){if(e=Ve(e),arguments.length===1&&(t=Ma.R()),Ac("doc","path",t),e instanceof ii){const s=z.fromString(t,...n);return lo(s),new bt(e,null,new D(s))}{if(!(e instanceof bt||e instanceof Bt))throw new N(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(z.fromString(t,...n));return lo(s),new bt(e.firestore,e instanceof Bt?e.converter:null,new D(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new dc(this,"async_queue_retry"),this.jc=()=>{const n=Us();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const t=Us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const n=Us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Ut;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Bc.push(t),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!fn(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(t){const n=this.$c.then(()=>(this.Kc=!0,t().catch(s=>{this.qc=s,this.Kc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Mt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Kc=!1,s))));return this.$c=n,n}enqueueAfterDelay(t,n,s){this.Wc(),this.Qc.indexOf(t)>-1&&(n=0);const r=ti.createAndSchedule(this,t,n,s,i=>this.Jc(i));return this.Uc.push(r),r}Wc(){this.qc&&L()}verifyOperationInProgress(){}async Yc(){let t;do t=this.$c,await t;while(t!==this.$c)}Xc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}Zc(t){return this.Yc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Yc()})}ta(t){this.Qc.push(t)}Jc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class oi extends ii{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new op,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dc(this),this._firestoreClient.terminate()}}function ap(e,t){const n=typeof e=="object"?e:il(),s=typeof e=="string"?e:t||"(default)";return tl(n,"firestore").getImmediate({identifier:s})}function _c(e){return e._firestoreClient||Dc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Dc(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Mh(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Qf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new N(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this._byteString=t}static fromBase64String(t){try{return new we(ut.fromBase64String(t))}catch(n){throw new N(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new we(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new N(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new N(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=/^__.*__$/;class up{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new re(t,this.data,this.fieldMask,n,this.fieldTransforms):new pn(t,this.data,n,this.fieldTransforms)}}function Oc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class ui{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ea(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(t){return new ui(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.sa({path:s,ra:!1});return r.oa(t),r}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.sa({path:s,ra:!1});return r.ea(),r}ca(t){return this.sa({path:void 0,ra:!0})}aa(t){return Xn(t,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let t=0;t<this.path.length;t++)this.oa(this.path.get(t))}oa(t){if(t.length===0)throw this.aa("Document fields must not be empty");if(Oc(this.na)&&cp.test(t))throw this.aa('Document fields cannot begin and end with "__"')}}class lp{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.It=s||Es(t)}fa(t,n,s,r=!1){return new ui({na:t,methodName:n,la:s,path:ht.emptyPath(),ra:!1,ha:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function hp(e){const t=e._freezeSettings(),n=Es(e._databaseId);return new lp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function dp(e,t,n,s,r,i={}){const o=e.fa(i.merge||i.mergeFields?2:0,t,n,r);Pc("Data must be an object, but it was:",o,s);const a=Mc(s,o);let c,u;if(i.merge)c=new Ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const p=fp(t,h,n);if(!o.contains(p))throw new N(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mp(l,p)||l.push(p)}c=new Ct(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new up(new wt(a),c,u)}function Lc(e,t){if(Rc(e=Ve(e)))return Pc("Unsupported field value:",t,e),Mc(e,t);if(e instanceof Nc)return function(n,s){if(!Oc(s.na))throw s.aa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.aa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ra&&t.na!==4)throw t.aa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Lc(o,s.ca(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Zh(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Z.fromDate(n);return{timestampValue:Yn(s.It,r)}}if(n instanceof Z){const r=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Yn(s.It,r)}}if(n instanceof ci)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof we)return{bytesValue:ic(s.It,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.aa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:zr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.aa(`Unsupported field value: ${ri(n)}`)}(e,t)}function Mc(e,t){const n={};return Ra(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ie(e,(s,r)=>{const i=Lc(r,t.ia(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Rc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof ci||e instanceof we||e instanceof bt||e instanceof Nc)}function Pc(e,t,n){if(!Rc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ri(n);throw s==="an object"?t.aa(e+" a custom object"):t.aa(e+" "+s)}}function fp(e,t,n){if((t=Ve(t))instanceof ai)return t._internalPath;if(typeof t=="string")return Fc(e,t);throw Xn("Field path arguments must be of type string or ",e,!1,void 0,n)}const pp=new RegExp("[~\\*/\\[\\]]");function Fc(e,t,n){if(t.search(pp)>=0)throw Xn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ai(...t.split("."))._internalPath}catch{throw Xn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new N(E.INVALID_ARGUMENT,a+e+c)}function mp(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gp extends Vc{data(){return super.data()}}function Uc(e,t){return typeof t=="string"?Fc(e,t):t instanceof ai?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yp extends Vc{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Nn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Uc("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Nn extends yp{data(t={}){return super.data(t)}}class vp{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new xn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Nn(this._firestore,this._userDataWriter,s.key,s,new xn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Nn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:i++}))}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Nn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new xn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:wp(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new N(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{convertValue(t,n="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(me(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw L()}}convertObject(t,n){const s={};return Ie(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new ci(Q(t.latitude),Q(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Fa(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ge(t));default:return null}}convertTimestamp(t){const n=$t(t);return new Z(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=z.fromString(t);$(uc(s));const r=new We(s.get(1),s.get(3)),i=new D(s.popFirst(5));return r.isEqual(n)||Mt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}class Cp extends Ep{constructor(t){super(),this.firestore=t}convertBytes(t){return new we(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function Ip(e){e=dr(e,Is);const t=dr(e.firestore,oi),n=_c(t),s=new Cp(t);return bp(e._query),np(n,e._query).then(r=>new vp(t,s,e,r))}function Sp(e,t){const n=dr(e.firestore,oi),s=ip(e),r=Tp(e.converter,t);return xp(n,[dp(hp(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Nt.exists(!1))]).then(()=>s)}function xp(e,t){return function(n,s){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>Vf(await tp(n),s,r)),r.promise}(_c(e),t)}(function(e,t=!0){(function(n){Ce=n})(sl),Pn(new Ue("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new oi(new Eh(n.getProvider("auth-internal")),new Sh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new We(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ue(Pi,"3.5.0",e),ue(Pi,"3.5.0","esm2017")})();const On=e=>e.getFullYear(),Ln=e=>{const t={month:"long"};return new Intl.DateTimeFormat("ro-RO",t).format(e)},Kt=e=>Number.parseInt(e,10),kn=(e,t,n,s)=>{e.filter(i=>i.type===t).forEach(i=>{n+=Kt(i.items)}),s.textContent=n+" buc"},Bc=(e,t,n,s,r,i,o,a)=>{const c=e.filter(u=>n==="toate lunile"&&s==="toate categ."?u.year===t:n==="toate lunile"?u.year===t&&u.type===s:s==="toate categ."?u.year===t&&u.month===n:u.year===t&&u.month===n&&u.type===s);c.forEach(u=>{r+=Kt(u.items)}),i.textContent=r+" buc",c.forEach(u=>{o+=Kt(u.money)}),a.textContent=o+" lei"},It=e=>{e.classList.toggle("hidden")},jc=e=>document.querySelector(`label[for="${e.target.id}"]`).innerHTML,Ss=document.querySelector("#dropdown-stats-year"),vn=document.querySelector("#dropdown-stats-month"),wn=document.querySelector("#dropdown-stats-food"),Ze=document.querySelector("#stats-year-label"),tn=document.querySelector("#stats-month-label"),en=document.querySelector("#stats-food-label"),fr=document.querySelector("#stats-year-btn"),pr=document.querySelector("#stats-month-btn"),mr=document.querySelector("#stats-food-btn"),Dt=document.querySelector("#show-stat-btn"),kp=document.querySelector("#food-type"),Ap=document.querySelector("#date"),_p=document.querySelector("#items-sold"),Dp=document.querySelector("#sum"),de=document.querySelector("#stats-reset-btn"),$c=document.getElementsByName("radio-years"),qc=document.getElementsByName("radio-months"),Kc=document.getElementsByName("radio-foods"),Mn=document.querySelector("#stats-buttons-layout");Dt.disabled=!0;const li=(e,t,n,s)=>{e.addEventListener("click",r=>{r.preventDefault(),It(t),Mn.classList.toggle("addSevenRem"),n.classList.contains("hidden")||(It(n),Mn.classList.toggle("addSevenRem")),s.classList.contains("hidden")||(It(s),Mn.classList.toggle("addSevenRem"))})};li(fr,Ss,vn,wn);li(pr,vn,Ss,wn);li(mr,wn,Ss,vn);const Np=["Luna","Toate Lunile","Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],Op=["Hrana","Toate Categ.","Superworms","Mealworms","Dubia","Redhead"],hi=(e,t,n)=>{e.forEach(s=>{let r=`<input 
						type="radio"
						id="stats-${s.toLowerCase()}"
						name="radio-${n}";
						value=${s.toLowerCase()}
						class="option radio-stats"
					/>
					<label 
						for="stats-${s.toLowerCase()}" 
						class="select-item">${s}
					</label>`;t.insertAdjacentHTML("beforeend",r)})};hi(Np,vn,"months");hi(Op,wn,"foods");const di=(e,t,n)=>{e.addEventListener("click",s=>{s.target.classList.contains("radio-stats")&&(t.textContent=jc(s),It(e),Mn.classList.toggle("addSevenRem"),s.target.value!=n&&de.classList.add("btn-enabled"),Ze.textContent.toLowerCase().trim()==="anul"&&tn.textContent.toLowerCase().trim()==="luna"&&en.textContent.toLowerCase().trim()==="hrana"&&(de.classList.remove("btn-enabled"),Dt.classList.remove("btn-enabled")),Ze.textContent.toLowerCase().trim()!="anul"&&tn.textContent.toLowerCase().trim()!="luna"&&en.textContent.toLowerCase().trim()!="hrana"?(Dt.classList.add("btn-enabled"),Dt.disabled=!1):Dt.classList.remove("btn-enabled"))})};di(Ss,Ze,"anul");di(vn,tn,"luna");di(wn,en,"hrana");let po=0,mo=0;Dt.addEventListener("click",e=>{e.preventDefault(),po=0,mo=0,kp.textContent=mr.textContent.trim(),Ap.textContent=`${pr.textContent.trim()} ${fr.textContent.trim()}`,Bc(Et,Number.parseInt(fr.textContent.trim(),10),pr.textContent.trim().toLowerCase(),mr.textContent.trim().toLowerCase(),po,_p,mo,Dp),$c.forEach(t=>{t.checked=!1}),qc.forEach(t=>{t.checked=!1}),Kc.forEach(t=>{t.checked=!1}),Dt.disabled=!0,Ze.textContent="Anul",tn.textContent="Luna",en.textContent="Hrana",de.classList.remove("btn-enabled"),Dt.classList.remove("btn-enabled"),Dt.blur()});de.addEventListener("click",e=>{e.preventDefault(),de.blur(),Ze.textContent="Anul",tn.textContent="Luna",en.textContent="Hrana",de.classList.remove("btn-enabled"),$c.forEach(t=>{t.checked=!1}),qc.forEach(t=>{t.checked=!1}),Kc.forEach(t=>{t.checked=!1})});const Jn=document.querySelector("#dropdown-sale"),Zn=document.querySelector("#sale-food-btn"),Fe=document.querySelector("#sale-food-label"),W=document.querySelector("#submit-sale-btn"),mt=document.querySelector("#sale-reset-btn"),q=document.querySelector("#money"),K=document.querySelector("#items"),Lp=document.getElementsByName("radio-sales");W.disabled=!0;let At="",St="",xt="";const Mp=()=>{["alege un tip de hran\u0103","Superworms","Mealworms","Dubia","Redhead"].forEach(t=>{let n=`<input 
						type="radio"
						id="select-${t.toLowerCase()}"
						name="radio-sales"
						value=${t.toLowerCase()}
						class="option radio-sales"
						required
					/>
					<label 
						for="select-${t.toLowerCase()}" 
						class="select-item">${t}
					</label>`;Jn.insertAdjacentHTML("beforeend",n)})};Zn.addEventListener("click",e=>{e.preventDefault(),It(Jn),It(mt),It(W)});Jn.addEventListener("click",e=>{e.target.classList.contains("radio-sales")&&(Fe.textContent=jc(e),It(Jn),It(mt),It(W)),e.target.value==="alege"?(At="",Zn.style.backgroundColor="rgba(239, 35, 60, 0.2)",Fe.style.color="#8a8c97",W.classList.remove("btn-enabled"),W.disabled=!0,q.value===""&&K.value===""&&mt.classList.remove("btn-enabled")):(At="food",Zn.style.backgroundColor="#fff",Fe.style.color="#2b2d42",mt.classList.add("btn-enabled"),St==="money"&&xt==="items"&&(W.classList.add("btn-enabled"),W.disabled=!1))});const Hc=new RegExp("^[0-9]+$");q.addEventListener("input",e=>{e.preventDefault(),Hc.test(e.target.value)?(St="money",mt.classList.add("btn-enabled"),q.style.backgroundColor="#fff",q.style.color="#2b2d42",At==="food"&&xt==="items"&&(W.classList.add("btn-enabled"),W.disabled=!1)):e.target.value===""&&At!=="food"&&xt!=="items"?(mt.classList.remove("btn-enabled"),St="",q.style.backgroundColor="rgba(239, 35, 60, 0.2)",q.style.color="#8a8c97"):(St="",W.classList.remove("btn-enabled"),W.disabled=!0,mt.classList.add("btn-enabled"),q.style.backgroundColor="rgba(239, 35, 60, 0.2)",q.style.color="#8a8c97")});K.addEventListener("input",e=>{e.preventDefault(),Hc.test(e.target.value)?(xt="items",mt.classList.add("btn-enabled"),K.style.backgroundColor="#fff",K.style.color="#2b2d42",At==="food"&&St==="money"&&(W.classList.add("btn-enabled"),W.disabled=!1)):e.target.value===""&&At!=="food"&&St!=="money"?(mt.classList.remove("btn-enabled"),xt="",K.style.backgroundColor="rgba(239, 35, 60, 0.2)",K.style.color="#8a8c97"):(xt="",W.classList.remove("btn-enabled"),W.disabled=!0,mt.classList.add("btn-enabled"),K.style.backgroundColor="rgba(239, 35, 60, 0.2)",K.style.color="#8a8c97")});mt.addEventListener("click",e=>{mt.blur(),Fe.textContent="alege un tip de hran\u0103",Zn.style.backgroundColor="rgba(239, 35, 60, 0.2)",Fe.style.color="#8a8c97",q.value="",q.style.backgroundColor="rgba(239, 35, 60, 0.2)",q.style.color="#8a8c97",K.value="",K.style.backgroundColor="rgba(239, 35, 60, 0.2)",K.style.color="#8a8c97",At="",St="",xt="",Lp.forEach(t=>{t.checked=!1}),W.disabled=!0,mt.classList.remove("btn-enabled"),W.classList.remove("btn-enabled")});W.addEventListener("click",e=>{At="",q.style.backgroundColor="rgba(239, 35, 60, 0.2)",q.style.color="#8a8c97",K.style.backgroundColor="rgba(239, 35, 60, 0.2)",K.style.color="#8a8c97"});const Rp=document.querySelector("#moneySpinnerDec"),Pp=document.querySelector("#moneySpinnerInc"),Fp=document.querySelector("#itemsSpinnerDec"),Vp=document.querySelector("#itemsSpinnerInc");Rp.addEventListener("click",e=>{e.preventDefault(),St="money",q.style.backgroundColor="#fff",q.style.color="#2b2d42",q.value>0&&(q.value=Kt(q.value)-1)});Pp.addEventListener("click",e=>{e.preventDefault(),St="money",q.style.backgroundColor="#fff",q.style.color="#2b2d42",q.value===""&&(q.value+=0),q.value=Kt(q.value)+1,mt.classList.add("btn-enabled"),At==="food"&&xt==="items"&&(W.classList.add("btn-enabled"),W.disabled=!1)});Fp.addEventListener("click",e=>{e.preventDefault(),xt="items",K.style.backgroundColor="#fff",K.style.color="#2b2d42",K.value>10&&(K.value=Kt(K.value)-10)});Vp.addEventListener("click",e=>{e.preventDefault(),xt="items",K.style.backgroundColor="#fff",K.style.color="#2b2d42",K.value===""&&(K.value+=0),K.value=Kt(K.value)+10,mt.classList.add("btn-enabled"),At==="food"&&St==="money"&&(W.classList.add("btn-enabled"),W.disabled=!1)});const Ft=new Date,Up={apiKey:"AIzaSyCMSw_jpYL--CtqKFuwVuVbvdeRZ19nKa8",authDomain:"sales-tracker-demoprojec-7ad2d.firebaseapp.com",projectId:"sales-tracker-demoprojec-7ad2d",storageBucket:"sales-tracker-demoprojec-7ad2d.appspot.com",messagingSenderId:"843330215009",appId:"1:843330215009:web:d5606ff73d44e26d00de20",measurementId:"G-ZBG4QR9HD1"},Bp=rl(Up),jp=ap(Bp),zc=rp(jp,"sales"),go=document.querySelector("#sale-form"),gr=document.querySelector("#money"),yr=document.querySelector("#items"),$p=document.querySelector("#sale-food-btn"),yo=document.querySelector("#sale-food-label"),vo=document.querySelector("#submit-sale-btn"),qp=document.querySelector("#sale-reset-btn"),Kp=document.getElementsByName("radio-sales"),Hp=document.querySelector("#total-sales"),zp=document.querySelector("#total-superworms"),Gp=document.querySelector("#total-mealworms"),Wp=document.querySelector("#total-dubia"),Yp=document.querySelector("#total-red-head"),Qp=document.querySelector("#food-type"),Xp=document.querySelector("#date"),Jp=document.querySelector("#items-sold"),Zp=document.querySelector("#sum"),wo=document.querySelector("#dropdown-stats-year"),tm=document.querySelector("#copywright-year"),Et=[];Mp();go.addEventListener("submit",async e=>{e.preventDefault();const t=[...new FormData(go)];try{Et.splice(0,Et.length);const n=await Sp(zc,{type:`${t[0][1]}`,money:`${gr.value}`,items:`${yr.value}`,year:On(Ft),month:Ln(Ft)});pi({text:"V\xE2nzare ad\u0103ugat\u0103 cu succes!"}),yo.textContent="alege un tip de hrana",gr.value="",yr.value="",vo.disabled=!0,vo.classList.remove("btn-enabled"),qp.classList.remove("btn-enabled"),$p.style.backgroundColor="rgba(239, 35, 60, 0.2)",yo.style.color="#8a8c97",Kp.forEach(s=>{s.checked=!1}),Gc()}catch(n){console.error(`Error adding document: ${n}`),pi("Ooops! Vanzarea nu a fost adaugata! Mai incercati.")}});let bo=0,Eo=0;const Gc=async()=>{gr.value="",yr.value="";const e=await Ip(zc);let t=0;e.forEach(a=>{t+=Kt(a.data().money),Et.push(a.data())}),Hp.textContent=t+" lei";let n=0,s=0,r=0,i=0;kn(Et,"superworms",n,zp),kn(Et,"mealworms",s,Gp),kn(Et,"dubia",r,Wp),kn(Et,"redhead",i,Yp),bo=0,Eo=0,Qp.textContent="Superworms",Xp.textContent=`${Ln(Ft)[0].toUpperCase()+Ln(Ft).substring(1)} ${On(Ft)}`,Bc(Et,On(Ft),Ln(Ft),"superworms",bo,Jp,Eo,Zp);const o=[];Et.forEach(a=>{o.includes(a.year+"")||o.push(a.year+"")}),o.sort(),o.unshift("Anul"),wo.innerHTML="",hi(o,wo,"years"),tm.textContent=On(Ft)};Gc();
