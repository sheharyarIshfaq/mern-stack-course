(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{103:function(t,e,r){"use strict";r.r(e);var n=r(45),o=r.n(n),c=r(46),a=r(10),i=r(0),s=r(6),u=(r(74),r(1)),l=function(t){return Object(u.jsx)("div",{className:"avatar ".concat(t.className),style:t.style,children:Object(u.jsx)("img",{src:t.image,alt:t.alt,style:{width:t.width,height:t.width}})})},h=r(47),f=(r(75),function(t){return Object(u.jsx)("li",{className:"user-item",children:Object(u.jsx)(h.a,{className:"user-item__content",children:Object(u.jsxs)(s.b,{to:"/".concat(t.id,"/places"),children:[Object(u.jsx)("div",{className:"user-item__image",children:Object(u.jsx)(l,{image:"".concat("http://localhost:5000","/").concat(t.image),alt:t.name})}),Object(u.jsxs)("div",{className:"user-item__info",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsxs)("h3",{children:[t.placeCount," ",1===t.placeCount?"Place":"Places"]})]})]})})})}),d=(r(76),function(t){return 0===t.items.length?Object(u.jsx)("div",{className:"center",children:Object(u.jsx)(h.a,{children:Object(u.jsx)("h2",{children:"No users found!"})})}):Object(u.jsx)("ul",{className:"users-list",children:t.items.map((function(t){return Object(u.jsx)(f,{id:t.id,image:t.image,name:t.name,placeCount:t.places.length},t.id)}))})}),p=r(48),b=r(15),v=r(50);e.default=function(){var t=Object(v.a)(),e=t.isLoading,r=t.error,n=t.sendRequest,s=t.clearError,l=Object(i.useState)(),h=Object(a.a)(l,2),f=h[0],m=h[1];return Object(i.useEffect)((function(){var t=function(){var t=Object(c.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat("http://localhost:5000","/api/users"));case 3:e=t.sent,m(e.users),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.a,{error:r,onClear:s}),e&&Object(u.jsx)("div",{className:"center",children:Object(u.jsx)(b.a,{})}),!e&&f&&Object(u.jsx)(d,{items:f})]})}},44:function(t,e,r){"use strict";r(0);var n=r(6),o=(r(56),r(1));e.a=function(t){return t.href?Object(o.jsx)("a",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),href:t.href,children:t.children}):t.to?Object(o.jsx)(n.b,{to:t.to,exact:t.exact,className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),children:t.children}):Object(o.jsx)("button",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),type:t.type,onClick:t.onClick,disabled:t.disabled,children:t.children})}},45:function(t,e,r){t.exports=r(54)},46:function(t,e,r){"use strict";function n(t,e,r,n,o,c,a){try{var i=t[c](a),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var a=t.apply(e,r);function i(t){n(a,o,c,i,s,"next",t)}function s(t){n(a,o,c,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return o}))},47:function(t,e,r){"use strict";r(0),r(51);var n=r(1);e.a=function(t){return Object(n.jsx)("div",{className:"card ".concat(t.className),style:t.style,children:t.children})}},48:function(t,e,r){"use strict";r(0);var n=r(52),o=r(44),c=r(1);e.a=function(t){return Object(c.jsx)(n.a,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:Object(c.jsx)(o.a,{onClick:t.onClear,children:"Okay"}),children:Object(c.jsx)("p",{children:t.error})})}},49:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(53);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},50:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(45),o=r.n(n),c=r(46),a=r(10),i=r(0),s=function(){var t=Object(i.useState)(!1),e=Object(a.a)(t,2),r=e[0],n=e[1],s=Object(i.useState)(),u=Object(a.a)(s,2),l=u[0],h=u[1],f=Object(i.useRef)([]),d=Object(i.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(e){var r,c,a,i,s,u,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:{},n(!0),i=new AbortController,f.current.push(i),t.prev=6,t.next=9,fetch(e,{method:r,body:c,headers:a,signal:i.signal});case 9:return s=t.sent,t.next=12,s.json();case 12:if(u=t.sent,f.current=f.current.filter((function(t){return t!==i})),s.ok){t.next=16;break}throw new Error(u.message);case 16:return n(!1),t.abrupt("return",u);case 20:throw t.prev=20,t.t0=t.catch(6),h(t.t0.message),n(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(i.useEffect)((function(){return function(){f.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:r,error:l,sendRequest:d,clearError:function(){h(null)}}}},51:function(t,e,r){},52:function(t,e,r){"use strict";var n=r(49),o=(r(0),r(5)),c=r.n(o),a=r(43),i=r(16),s=(r(55),r(1)),u=function(t){var e=Object(s.jsxs)("div",{className:"modal ".concat(t.className),style:t.style,children:[Object(s.jsx)("header",{className:"modal__header ".concat(t.headerClass),children:Object(s.jsx)("h2",{children:t.header})}),Object(s.jsxs)("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()},children:[Object(s.jsx)("div",{className:"modal__content ".concat(t.contentClass),children:t.children}),Object(s.jsx)("footer",{className:"modal__footer ".concat(t.footerClass),children:t.footer})]})]});return c.a.createPortal(e,document.getElementById("modal-hook"))};e.a=function(t){return Object(s.jsxs)(s.Fragment,{children:[t.show&&Object(s.jsx)(i.a,{onClick:t.onCancel}),Object(s.jsx)(a.a,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(s.jsx)(u,Object(n.a)({},t))})]})}},53:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},54:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,c=Object.create(o.prototype),a=new k(n||[]);return c._invoke=function(t,e,r){var n=h;return function(o,c){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw c;return C()}for(r.method=o,r.arg=c;;){var a=r.delegate;if(a){var i=L(a,r);if(i){if(i===b)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===b)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}(t,r,a),c}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",b={};function v(){}function m(){}function j(){}var y={};s(y,c,(function(){return this}));var g=Object.getPrototypeOf,O=g&&g(g(P([])));O&&O!==r&&n.call(O,c)&&(y=O);var x=j.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,c,a,i){var s=l(t[o],t,c);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,i)}))}i(s.arg)}var o;this._invoke=function(t,n){function c(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(c,c):c()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var c=o.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return m.prototype=j,s(x,"constructor",j),s(j,"constructor",m),m.displayName=s(j,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s(t,i,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(E.prototype),s(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var a=new E(u(e,r,n,o),c);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,i,"Generator"),s(x,c,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var a=this.tryEntries[c],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var a=c?c.completion:{};return a.type=t,a.arg=e,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},55:function(t,e,r){},56:function(t,e,r){},74:function(t,e,r){},75:function(t,e,r){},76:function(t,e,r){}}]);
//# sourceMappingURL=5.9d49b6fb.chunk.js.map