!function(){"use strict";var e,t,r,n,c,f,o,d,a,i,u={},l={};function s(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}},n=!0;try{u[e].call(r.exports,r,r.exports,s),n=!1}finally{n&&delete l[e]}return r.exports}s.m=u,e=[],s.O=function(t,r,n,c){if(r){c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[r,n,c];return}for(var o=1/0,f=0;f<e.length;f++){for(var r=e[f][0],n=e[f][1],c=e[f][2],d=!0,a=0;a<r.length;a++)o>=c&&Object.keys(s.O).every(function(e){return s.O[e](r[a])})?r.splice(a--,1):(d=!1,c<o&&(o=c));if(d){e.splice(f--,1);var i=n();void 0!==i&&(t=i)}}return t},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=function(e){return Promise.all(Object.keys(s.f).reduce(function(t,r){return s.f[r](e,t),t},[]))},s.u=function(e){return"static/chunks/"+(({126:"f65a48b9",667:"a9a291b3",746:"b8074065"})[e]||e)+"."+({15:"63493a3c195a0863",31:"0365571be9b36b8b",73:"afbac37544d7bec8",78:"dd55d169132c525d",82:"11cc5015dacb0457",103:"53c26fdf4b89eaa5",118:"857257bd816e4565",126:"cb726e3375d78743",167:"9b501a805ec8f75c",198:"a240d78787ebaf4e",342:"cb68a51cc6637deb",391:"3b2159558313e4a9",428:"60c67f89dc21996a",432:"cb631c7b7ac0c1e7",565:"51068fe1901e13a5",588:"90bde7b909ceb8a0",607:"81694f488bbaf3a1",613:"bdf2168e0789a4c7",621:"b3ff2ce86f6575b3",624:"59bcc85eea12229b",667:"f7df926320f0d5b0",677:"ba0d3db93a5023c5",704:"5ca5973fd6c78894",710:"0c7ce069bf6866b8",746:"9c81e039aea18b75",752:"f1b2d95b772408a1",770:"0a0fca5ecc9a749d",808:"edd40b51ce3d1c96",841:"9a04c73ab3f73079",874:"766f2719d40ad97e",878:"7ea6a88817c242cf",880:"f6229f71a4cce650"})[e]+".js"},s.miniCssF=function(e){return"static/css/"+({15:"cd761b9169bcad0a",31:"cd761b9169bcad0a",73:"cd761b9169bcad0a",78:"cd761b9169bcad0a",103:"cd761b9169bcad0a",118:"cd761b9169bcad0a",167:"cd761b9169bcad0a",198:"cd761b9169bcad0a",342:"cd761b9169bcad0a",391:"cd761b9169bcad0a",405:"c90c6796236b02d5",428:"cd761b9169bcad0a",432:"cd761b9169bcad0a",565:"08c755a8871f7b4a",588:"cd761b9169bcad0a",607:"cd761b9169bcad0a",613:"cd761b9169bcad0a",621:"cd761b9169bcad0a",624:"cd761b9169bcad0a",677:"cd761b9169bcad0a",704:"cd761b9169bcad0a",710:"cd761b9169bcad0a",752:"cd761b9169bcad0a",770:"cd761b9169bcad0a",841:"cd761b9169bcad0a",874:"cd761b9169bcad0a",878:"cd761b9169bcad0a",880:"cd761b9169bcad0a",888:"3544aa14212c3a30"})[e]+".css"},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},r="_N_E:",s.l=function(e,n,c,f){if(t[e]){t[e].push(n);return}if(void 0!==c)for(var o,d,a=document.getElementsByTagName("script"),i=0;i<a.length;i++){var u=a[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+c){o=u;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",r+c),o.src=s.tu(e)),t[e]=[n];var l=function(r,n){o.onerror=o.onload=null,clearTimeout(b);var c=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),c&&c.forEach(function(e){return e(n)}),r)return r(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.tt=function(){return void 0===n&&(n={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(n=trustedTypes.createPolicy("nextjs#bundler",n))),n},s.tu=function(e){return s.tt().createScriptURL(e)},s.p="/webgpu-samples/_next/",c=function(e,t,r,n){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css";var f=function(f){if(c.onerror=c.onload=null,"load"===f.type)r();else{var o=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.href||t,a=Error("Loading CSS chunk "+e+" failed.\n("+d+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=o,a.request=d,c.parentNode.removeChild(c),n(a)}};return c.onerror=c.onload=f,c.href=t,document.head.appendChild(c),c},f=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var c=r[n],f=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(f===e||f===t))return c}for(var o=document.getElementsByTagName("style"),n=0;n<o.length;n++){var c=o[n],f=c.getAttribute("data-href");if(f===e||f===t)return c}},o={272:0},s.f.miniCss=function(e,t){o[e]?t.push(o[e]):0!==o[e]&&({15:1,31:1,73:1,78:1,103:1,118:1,167:1,198:1,342:1,391:1,428:1,432:1,565:1,588:1,607:1,613:1,621:1,624:1,677:1,704:1,710:1,752:1,770:1,841:1,874:1,878:1,880:1})[e]&&t.push(o[e]=new Promise(function(t,r){var n=s.miniCssF(e),o=s.p+n;if(f(n,o))return t();c(e,o,t,r)}).then(function(){o[e]=0},function(t){throw delete o[e],t}))},s.b=document.baseURI||self.location.href,d={272:0},s.f.j=function(e,t){var r=s.o(d,e)?d[e]:void 0;if(0!==r){if(r)t.push(r[2]);else if(272!=e){var n=new Promise(function(t,n){r=d[e]=[t,n]});t.push(r[2]=n);var c=s.p+s.u(e),f=Error(),o=function(t){if(s.o(d,e)&&(0!==(r=d[e])&&(d[e]=void 0),r)){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",f.name="ChunkLoadError",f.type=n,f.request=c,r[1](f)}};s.l(c,o,"chunk-"+e,e)}else d[e]=0}},s.O.j=function(e){return 0===d[e]},a=function(e,t){var r,n,c=t[0],f=t[1],o=t[2],a=0;if(c.some(function(e){return 0!==d[e]})){for(r in f)s.o(f,r)&&(s.m[r]=f[r]);if(o)var i=o(s)}for(e&&e(t);a<c.length;a++)n=c[a],s.o(d,n)&&d[n]&&d[n][0](),d[n]=0;return s.O(i)},(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(a.bind(null,0)),i.push=a.bind(null,i.push.bind(i))}();