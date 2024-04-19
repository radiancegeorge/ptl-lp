import{R as m,r as A}from"./index-B9AhAWI_.js";import{P as a,t as M,m as E,c as B,w as I}from"./Container-DUn5HYCq.js";function w(e){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}var H=["className","cssModule","tag","innerRef"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},P.apply(this,arguments)}function J(e,t){if(e==null)return{};var o=K(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function K(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,o){return t&&z(e.prototype,t),o&&z(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function X(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},R(e,t)}function Y(e){var t=C();return function(){var r=O(e),n;if(t){var i=O(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Z(this,n)}}function Z(e,t){if(t&&(w(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return $(e)}function $(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},O(e)}var ee={children:a.node,tag:M,innerRef:a.oneOfType([a.object,a.func,a.string]),className:a.string,cssModule:a.object},te=function(e){X(o,e);var t=Y(o);function o(r){var n;return Q(this,o),n=t.call(this,r),n.getRef=n.getRef.bind($(n)),n.submit=n.submit.bind($(n)),n}return U(o,[{key:"getRef",value:function(n){this.props.innerRef&&this.props.innerRef(n),this.ref=n}},{key:"submit",value:function(){this.ref&&this.ref.submit()}},{key:"render",value:function(){var n=this.props,i=n.className,d=n.cssModule,u=n.tag,f=u===void 0?"form":u,c=n.innerRef,b=J(n,H),l=E(i,d);return m.createElement(f,P({},b,{ref:c,className:l}))}}]),o}(A.Component);te.propTypes=ee;var ne=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},x.apply(this,arguments)}function re(e,t){if(e==null)return{};var o=oe(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function oe(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}var ie={children:a.node,row:a.bool,check:a.bool,switch:a.bool,inline:a.bool,floating:a.bool,noMargin:a.bool,disabled:a.bool,tag:M,className:a.string,cssModule:a.object};function ae(e){var t=e.className,o=e.cssModule,r=e.row,n=e.disabled,i=e.check,d=e.inline,u=e.floating,f=e.noMargin,c=e.tag,b=c===void 0?"div":c,l=e.switch,p=re(e,ne),h=i||l,g=E(B(t,r?"row":!1,h?"form-check":!1,l?"form-switch":!1,h||f?!1:"mb-3",h&&d?"form-check-inline":!1,h&&n?"disabled":!1,u&&"form-floating"),o);return b==="fieldset"&&(p.disabled=n),m.createElement(b,x({},p,{className:g}))}ae.propTypes=ie;function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}var fe=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},k.apply(this,arguments)}function ce(e,t){if(e==null)return{};var o=se(e,t),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function se(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function le(e,t,o){return t&&W(e.prototype,t),o&&W(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},T(e,t)}function ye(e){var t=he();return function(){var r=_(e),n;if(t){var i=_(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return be(this,n)}}function be(e,t){if(t&&(S(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},_(e)}var de={children:a.node,type:a.string,size:a.oneOfType([a.number,a.string]),bsSize:a.string,valid:a.bool,invalid:a.bool,tag:M,innerRef:a.oneOfType([a.object,a.func,a.string]),plaintext:a.bool,addon:a.bool,className:a.string,cssModule:a.object},ve=function(e){pe(o,e);var t=ye(o);function o(r){var n;return ue(this,o),n=t.call(this,r),n.getRef=n.getRef.bind(N(n)),n.focus=n.focus.bind(N(n)),n}return le(o,[{key:"getRef",value:function(n){this.props.innerRef&&this.props.innerRef(n),this.ref=n}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var n=this.props,i=n.className,d=n.cssModule,u=n.type,f=u===void 0?"text":u,c=n.bsSize,b=n.valid,l=n.invalid,p=n.tag,h=n.addon,g=n.plaintext,F=n.innerRef,s=ce(n,fe),D=["switch","radio","checkbox"].indexOf(f)>-1,L=/\D/g,G=f==="textarea",j=f==="select",V=f==="range",v=p||(j||G?f:"input"),y="form-control";g?(y="".concat(y,"-plaintext"),v=p||"input"):V?y="form-range":j?y="form-select":D&&(h?y=null:y="form-check-input"),s.size&&L.test(s.size)&&(I(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),c=s.size,delete s.size);var q=E(B(i,l&&"is-invalid",b&&"is-valid",c?j?"form-select-".concat(c):"form-control-".concat(c):!1,y),d);return(v==="input"||p&&typeof p=="function")&&(s.type=f==="switch"?"checkbox":f),s.children&&!(g||f==="select"||typeof v!="string"||v==="select")&&(I('Input with a type of "'.concat(f,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete s.children),m.createElement(v,k({},s,{ref:F,className:q,"aria-invalid":l}))}}]),o}(m.Component);ve.propTypes=de;export{te as F,ve as I,ae as a};
