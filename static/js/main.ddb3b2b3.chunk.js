(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(e,t,a){},25:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(14),l=a.n(s),r=(a(25),a(12)),i=a(11),u=a(3),o=(a(13),a(1));function j(e){return Object(o.jsx)(o.Fragment,{children:!0===e.disabled?Object(o.jsxs)("button",{className:e.class,onClick:e.onClick,disabled:e.disabled,children:[" ",Object(o.jsx)(i.b,{to:"Counter"===e.title?"/setting":"/Counter",children:Object(o.jsx)("div",{style:{width:"25 %",height:"50px"},children:e.title})})]}):Object(o.jsxs)("button",{className:e.class,onClick:e.onClick,disabled:e.disabled,children:[" ",Object(o.jsx)(i.b,{to:"set"===e.title?"/setting":"/Counter",children:Object(o.jsx)("div",{style:{width:"25 %",height:"50px"},children:e.title})})]})})}function d(e){var t=function(){return e.reset()},a=!(e.state.counter.displayValue<e.state.counter.maxValue),n=e.state.counter.displayValue===e.state.counter.startValue;return Object(o.jsxs)("div",{className:"countContainer",children:[Object(o.jsx)("div",{className:"display ".concat(e.state.counter.displayValue===e.state.counter.maxValue?"limit":""),children:e.state.counter.displayValue}),Object(o.jsxs)("div",{className:"controlContainer",children:[Object(o.jsx)(j,{title:"incr",disabled:a,onClick:function(){return e.addInc()},class:"btn ".concat(e.state.counter.displayValue===e.state.counter.maxValue?"disable":"")}),Object(o.jsx)(j,{title:"reset",disabled:n,onClick:t,class:"btn ".concat(e.state.counter.displayValue===e.state.counter.startValue?"disable":"")}),Object(o.jsx)(j,{title:"set",disabled:!1,onClick:t,class:"btn"})]})]})}a(36);function b(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"headTitle",children:Object(o.jsx)("h2",{children:"COUNTER"})}),Object(o.jsx)("svg",{children:Object(o.jsxs)("filter",{id:"fire",children:[Object(o.jsx)("feTurbulence",{id:"turbulance",baseFrequency:"0.1 0.1",numOctaves:"2",seed:"0",children:Object(o.jsx)("animate",{attributeName:"baseFrequency",dur:"8s",values:"0.1 0.1;0.12 0.12",repeatCount:"indefinite"})}),Object(o.jsx)("feDisplacementMap",{in:"SourceGraphic",scale:"8"})]})})]})}function O(e){return Object(o.jsxs)("span",{className:"span",children:[Object(o.jsx)("div",{children:e.title}),Object(o.jsx)("input",{type:"number",className:"input",value:e.value,onChange:function(t){e.changeValue(+t.currentTarget.value)},max:"99",min:"-99"})]})}var x=function(e){var t=e.state,a=e.changeValueMax,n=e.changeValueStart,c=e.setValue,s=t.counter.maxValue<=t.counter.startValue;return Object(o.jsxs)("div",{className:"countContainer",children:[Object(o.jsxs)("div",{className:"setDisplay",children:[Object(o.jsx)(O,{title:"Max value:",value:t.counter.maxValue,changeValue:a}),t.counter.maxValue<=t.counter.startValue?Object(o.jsx)("div",{className:"setError",children:"Max value can't be more than Start value."}):"",Object(o.jsx)(O,{title:"Start value:",value:t.counter.startValue,changeValue:n})]}),Object(o.jsx)("div",{style:t.counter.maxValue<=t.counter.startValue?{position:"relative",zIndex:-1}:{},children:Object(o.jsx)("div",{className:"controlContainer",children:Object(o.jsx)(j,{title:"Count",disabled:s,onClick:function(){return c()},class:"btn ".concat(t.counter.maxValue<=t.counter.startValue?"disable":"")})})})]})},h=a(8),V={displayValue:0,maxValue:5,startValue:0,isDisabled:!0};var p,m=function(){var e=Object(r.c)((function(e){return e})),t=Object(r.b)();function a(){t({type:"INC-COUNTER-VALUE"})}function n(){t({type:"RESET-COUNTER-VALUE"})}function c(e){t({type:"MAX-COUNTER-VALUE",maxValue:e})}function s(e){console.log(e),t({type:"START-COUNTER-VALUE",startValue:e})}function l(){t({type:"SET-COUNTER-VALUE"})}return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u.a,{render:function(){return Object(o.jsx)(d,{state:e,addInc:a,reset:n})},path:"/Counter"}),Object(o.jsx)(u.a,{render:function(){return Object(o.jsx)(x,{state:e,changeValueMax:c,changeValueStart:s,setValue:l})},path:"/setting"})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))},C=a(19),f=Object(C.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"INC-COUNTER-VALUE":return Object(h.a)(Object(h.a)({},e),{},{displayValue:e.displayValue+1});case"RESET-COUNTER-VALUE":return Object(h.a)(Object(h.a)({},e),{},{displayValue:e.startValue});case"MAX-COUNTER-VALUE":return Object(h.a)(Object(h.a)({},e),{},{maxValue:t.maxValue});case"START-COUNTER-VALUE":return Object(h.a)(Object(h.a)({},e),{},{startValue:t.startValue});case"SET-COUNTER-VALUE":return Object(h.a)(Object(h.a)({},e),{},{displayValue:e.startValue});default:return e}}}),g=localStorage.getItem("state");g&&(p=JSON.parse(g));var E=Object(C.b)(f,p);E.subscribe((function(){localStorage.setItem("state",JSON.stringify(E.getState()))})),l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(r.a,{store:E,children:Object(o.jsx)(m,{})})}),document.getElementById("root")),v()}},[[37,1,2]]]);
//# sourceMappingURL=main.ddb3b2b3.chunk.js.map