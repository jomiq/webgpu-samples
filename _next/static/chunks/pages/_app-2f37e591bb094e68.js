(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(6505)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,a,l){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(2648).Z,n=a(7273).Z,o=l(a(7294)),r=a(1003),s=a(4465),i=a(2692),u=a(8245),d=a(9246),c=a(227),f=a(3468);let p={};function b(e,t,a,l){if(!e||!r.isLocalURL(t))return;Promise.resolve(e.prefetch(t,a,l)).catch(e=>{});let n=l&&void 0!==l.locale?l.locale:e&&e.locale;p[t+"%"+a+(n?"%"+n:"")]=!0}let h=o.default.forwardRef(function(e,t){let a,l;let{href:h,as:m,children:_,prefetch:y,passHref:g,replace:v,shallow:x,scroll:w,locale:C,onClick:j,onMouseEnter:k,onTouchStart:P,legacyBehavior:L=!0!==Boolean(!0)}=e,M=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);a=_,L&&("string"==typeof a||"number"==typeof a)&&(a=o.default.createElement("a",null,a));let O=!1!==y,G=o.default.useContext(i.RouterContext),E=o.default.useContext(u.AppRouterContext);E&&(G=E);let{href:R,as:T}=o.default.useMemo(()=>{let[e,t]=r.resolveHref(G,h,!0);return{href:e,as:m?r.resolveHref(G,m):t||e}},[G,h,m]),S=o.default.useRef(R),N=o.default.useRef(T);L&&(l=o.default.Children.only(a));let A=L?l&&"object"==typeof l&&l.ref:t,[D,I,U]=d.useIntersection({rootMargin:"200px"}),Z=o.default.useCallback(e=>{(N.current!==T||S.current!==R)&&(U(),N.current=T,S.current=R),D(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[T,A,R,U,D]);o.default.useEffect(()=>{let e=I&&O&&r.isLocalURL(R),t=void 0!==C?C:G&&G.locale,a=p[R+"%"+T+(t?"%"+t:"")];e&&!a&&b(G,R,T,{locale:t})},[T,R,I,C,O,G]);let B={ref:Z,onClick(e){L||"function"!=typeof j||j(e),L&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),e.defaultPrevented||function(e,t,a,l,n,s,i,u,d,c){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!r.isLocalURL(a)))return;e.preventDefault();let b=()=>{"beforePopState"in t?t[n?"replace":"push"](a,l,{shallow:s,locale:u,scroll:i}):t[n?"replace":"push"](l||a,{forceOptimisticNavigation:!c})};d?o.default.startTransition(b):b()}(e,G,R,T,v,x,w,C,Boolean(E),O)},onMouseEnter(e){L||"function"!=typeof k||k(e),L&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),!(!O&&E)&&r.isLocalURL(R)&&b(G,R,T,{priority:!0})},onTouchStart(e){L||"function"!=typeof P||P(e),L&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),!(!O&&E)&&r.isLocalURL(R)&&b(G,R,T,{priority:!0})}};if(!L||g||"a"===l.type&&!("href"in l.props)){let W=void 0!==C?C:G&&G.locale,F=G&&G.isLocaleDomain&&c.getDomainLocale(T,W,G.locales,G.domainLocales);B.href=F||f.addBasePath(s.addLocale(T,W,G&&G.defaultLocale))}return L?o.default.cloneElement(l,B):o.default.createElement("a",Object.assign({},M,B),a)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:a,disabled:i}=e,u=i||!o,[d,c]=l.useState(!1),[f,p]=l.useState(null);l.useEffect(()=>{if(o){if(!u&&!d&&f&&f.tagName){let e=function(e,t,a){let{id:l,observer:n,elements:o}=function(e){let t;let a={root:e.root||null,margin:e.rootMargin||""},l=s.find(e=>e.root===a.root&&e.margin===a.margin);if(l&&(t=r.get(l)))return t;let n=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)})},e);return t={id:a,observer:o,elements:n},s.push(a),r.set(a,t),t}(a);return o.set(e,t),n.observe(e),function(){if(o.delete(e),n.unobserve(e),0===o.size){n.disconnect(),r.delete(l);let t=s.findIndex(e=>e.root===l.root&&e.margin===l.margin);t>-1&&s.splice(t,1)}}}(f,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:a});return e}}else if(!d){let l=n.requestIdleCallback(()=>c(!0));return()=>n.cancelIdleCallback(l)}},[f,u,a,t,d]);let b=l.useCallback(()=>{c(!1)},[]);return[p,d,b]};var l=a(7294),n=a(4686);let o="function"==typeof IntersectionObserver,r=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var l=(0,a(2648).Z)(a(7294));let n=l.default.createContext(null);t.AppRouterContext=n;let o=l.default.createContext(null);t.LayoutRouterContext=o;let r=l.default.createContext(null);t.GlobalLayoutRouterContext=r;let s=l.default.createContext(null);t.TemplateContext=s},7645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let a=o.default,n=(null==t?void 0:t.suspense)?{}:{loading(e){let{error:t,isLoading:a,pastDelay:l}=e;return null}};if(e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=l({},n,e)),(n=l({},n,t)).suspense&&(delete n.ssr,delete n.loading),n.loadableGenerated&&delete(n=l({},n,n.loadableGenerated)).loadableGenerated,"boolean"==typeof n.ssr&&!n.suspense){if(!n.ssr)return delete n.ssr,r(a,n);delete n.ssr}return a(n)},t.noSSR=r;var l=a(6495).Z,n=a(2648).Z,o=(n(a(7294)),n(a(4588)));function r(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3644:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,a(2648).Z)(a(7294));let n=l.default.createContext(null);t.LoadableContext=n},4588:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(6495).Z,n=(0,a(2648).Z)(a(7294)),o=a(3644);let{useSyncExternalStore:r}=a(7294),s=[],i=[],u=!1;function d(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=n.default.lazy(a.loader));let s=null;function d(){if(!s){let t=new c(e,a);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()}if(!u){let f=a.webpack?a.webpack():a.modules;f&&i.push(e=>{for(let t of f)if(-1!==e.indexOf(t))return d()})}function p(){d();let e=n.default.useContext(o.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}let b=a.suspense?function(e,t){return p(),n.default.createElement(a.lazy,l({},e,{ref:t}))}:function(e,t){p();let l=r(s.subscribe,s.getCurrentValue,s.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:s.retry}),[]),n.default.useMemo(()=>{var t;return l.loading||l.error?n.default.createElement(a.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:s.retry}):l.loaded?n.default.createElement((t=l.loaded)&&t.__esModule?t.default:t,e):null},[e,l])};return b.preload=()=>d(),b.displayName="LoadableComponent",n.default.forwardRef(b)}(d,e)}function p(e,t){let a=[];for(;e.length;){let l=e.pop();a.push(l(t))}return Promise.all(a).then(()=>{if(e.length)return p(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{p(s).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let a=()=>(u=!0,t());p(i,e).then(a,a)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},6505:function(e,t,a){"use strict";a.r(t);var l=a(5893),n=a(9008),o=a.n(n),r=a(1664),s=a.n(r),i=a(1163),u=a(7294);a(4112);var d=a(6988),c=a.n(d),f=a(1958);let p="WebGPU Samples",b=e=>{let{Component:t,pageProps:a}=e,n=(0,i.useRouter)(),r=Object.keys(f.pages),[d,b]=(0,u.useState)(!1),h=n.asPath.match(/(\?wgsl=[01])#(\S+)/);if(h){let m=h[2];return n.replace("/samples/".concat(m)),(0,l.jsx)(l.Fragment,{})}return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o(),{children:[(0,l.jsx)("title",{children:p}),(0,l.jsx)("meta",{name:"description",content:"The WebGPU Samples are a set of samples demonstrating the use of the WebGPU API."}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})]}),(0,l.jsxs)("div",{className:c().wrapper,children:[(0,l.jsxs)("nav",{className:"".concat(c().panel," ").concat(c().container),"data-expanded":d,children:[(0,l.jsxs)("h1",{children:[(0,l.jsx)(s(),{href:"/",children:p}),(0,l.jsx)("div",{className:c().expand,onClick(){b(!d)}})]}),(0,l.jsxs)("div",{className:c().panelContents,children:[(0,l.jsx)("a",{href:"https://github.com/".concat("webgpu/webgpu-samples"),children:"Github"}),(0,l.jsx)("hr",{}),(0,l.jsx)("ul",{className:c().exampleList,children:r.map(e=>{let t="/samples/[slug]"===n.pathname&&n.query.slug===e?c().selected:void 0;return(0,l.jsx)("li",{className:t,onMouseOver(){f.pages[e].render.preload()},children:(0,l.jsx)(s(),{href:"/samples/".concat(e),onClick(){b(!1)},children:e})},e)})})]})]}),(0,l.jsx)(t,{...a})]})]})};t.default=b},1958:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return r},pages:function(){return s}});var l=a(5893),n=a(5152),o=a.n(n),r=!0;let s={helloTriangle:o()(()=>Promise.all([a.e(126),a.e(951),a.e(607)]).then(a.bind(a,6607)),{loadableGenerated:{webpack:()=>[6607]}}),helloTriangleMSAA:o()(()=>Promise.all([a.e(126),a.e(951),a.e(198)]).then(a.bind(a,1198)),{loadableGenerated:{webpack:()=>[1198]}}),resizeCanvas:o()(()=>Promise.all([a.e(126),a.e(951),a.e(565)]).then(a.bind(a,8565)),{loadableGenerated:{webpack:()=>[8565]}}),rotatingCube:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(15)]).then(a.bind(a,9015)),{loadableGenerated:{webpack:()=>[9015]}}),twoCubes:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(710)]).then(a.bind(a,5710)),{loadableGenerated:{webpack:()=>[5710]}}),texturedCube:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(613)]).then(a.bind(a,613)),{loadableGenerated:{webpack:()=>[613]}}),instancedCube:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(621)]).then(a.bind(a,8621)),{loadableGenerated:{webpack:()=>[8621]}}),fractalCube:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(103)]).then(a.bind(a,5103)),{loadableGenerated:{webpack:()=>[5103]}}),cubemap:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(432)]).then(a.bind(a,1432)),{loadableGenerated:{webpack:()=>[1432]}}),computeBoids:o()(()=>Promise.all([a.e(126),a.e(951),a.e(752)]).then(a.bind(a,2752)),{loadableGenerated:{webpack:()=>[2752]}}),animometer:o()(()=>Promise.all([a.e(126),a.e(951),a.e(841)]).then(a.bind(a,841)),{loadableGenerated:{webpack:()=>[841]}}),videoUploading:o()(()=>Promise.all([a.e(126),a.e(951),a.e(305)]).then(a.bind(a,3305)),{loadableGenerated:{webpack:()=>[3305]}}),imageBlur:o()(()=>Promise.all([a.e(126),a.e(951),a.e(770)]).then(a.bind(a,1770)),{loadableGenerated:{webpack:()=>[1770]}}),shadowMapping:o()(()=>Promise.all([a.e(126),a.e(667),a.e(951),a.e(279),a.e(342)]).then(a.bind(a,2342)),{loadableGenerated:{webpack:()=>[2342]}}),reversedZ:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(588)]).then(a.bind(a,7502)),{loadableGenerated:{webpack:()=>[7502]}}),deferredRendering:o()(()=>Promise.all([a.e(126),a.e(667),a.e(951),a.e(279),a.e(220)]).then(a.bind(a,7220)),{loadableGenerated:{webpack:()=>[7220]}}),particles:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(167)]).then(a.bind(a,6167)),{loadableGenerated:{webpack:()=>[6167]}}),cornell:o()(()=>Promise.all([a.e(126),a.e(951),a.e(279),a.e(874)]).then(a.bind(a,6874)),{loadableGenerated:{webpack:()=>[6874]}}),gameOfLife:o()(()=>Promise.all([a.e(126),a.e(951),a.e(391)]).then(a.bind(a,7391)),{loadableGenerated:{webpack:()=>[7391]}})};t.default=function(e){let{slug:t}=e,a=s[t];return(0,l.jsx)(a,{})}},6988:function(e){e.exports={container:"MainLayout_container__l_Vkn",wrapper:"MainLayout_wrapper__eI_HE",panel:"MainLayout_panel__GdjKj",exampleList:"MainLayout_exampleList__FHCmd",selected:"MainLayout_selected__Yjoh0",expand:"MainLayout_expand__FEWWW",exampleLink:"MainLayout_exampleLink__qX1DA",panelContents:"MainLayout_panelContents__w1BWs"}},4112:function(){},5152:function(e,t,a){e.exports=a(7645)},9008:function(e,t,a){e.exports=a(3121)},1664:function(e,t,a){e.exports=a(1551)},1163:function(e,t,a){e.exports=a(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);