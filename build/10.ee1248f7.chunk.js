(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{2105:function(e,t,n){"use strict";var a=n(8),u=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(12)),r=a(n(1)),c=n(33),o=n(6),i=(0,r.lazy)((function(){return Promise.all([n.e(1),n.e(2)]).then(n.t.bind(null,2171,7))})),d=(0,r.lazy)((function(){return n.e(0).then(n.t.bind(null,2100,7))})),f=function(e){var t=(0,c.useRouteMatch)().url,n=(0,c.useParams)().slug,a=function(t,a){return r.default.createElement(a,(0,l.default)({},e,t,{slug:n}))},u=[{path:"ctm-configurations/edit-settings/:type",comp:d},{path:"",comp:i}].map((function(e){var n=e.path,u=e.comp;return r.default.createElement(c.Route,{key:n,path:"".concat(t,"/").concat(n),render:function(e){return a(e,u)}})}));return r.default.createElement(r.Suspense,{fallback:r.default.createElement(o.LoadingIndicatorPage,null)},r.default.createElement(c.Switch,null,u))};t.default=f}}]);