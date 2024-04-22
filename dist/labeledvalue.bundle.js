/*! License information can be found in LICENSE.txt. For more details, see LICENSE.txt in the project root. */
!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a(require("React"),require("ol"),require("ol/format"),require("ol/layer"),require("ol/ol.css"),require("ol/source"),require("ol/style")):"function"==typeof define&&define.amd?define(["React","ol","ol/format","ol/layer","ol/ol.css","ol/source","ol/style"],a):"object"==typeof exports?exports.LabeledValue=a(require("React"),require("ol"),require("ol/format"),require("ol/layer"),require("ol/ol.css"),require("ol/source"),require("ol/style")):e.LabeledValue=a(e.React,e.ol,e["ol/format"],e["ol/layer"],e["ol/ol.css"],e["ol/source"],e["ol/style"])}(self,((e,a,l,t,r,n,o)=>(()=>{"use strict";var c={883:a=>{a.exports=e},599:e=>{e.exports=a},391:e=>{e.exports=l},153:e=>{e.exports=t},526:e=>{e.exports=r},273:e=>{e.exports=n},849:e=>{e.exports=o}},u={};function s(e){var a=u[e];if(void 0!==a)return a.exports;var l=u[e]={exports:{}};return c[e](l,l.exports,s),l.exports}s.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return s.d(a,{a}),a},s.d=(e,a)=>{for(var l in a)s.o(a,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:a[l]})},s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{s.r(i),s.d(i,{LabeledAudio:()=>V,LabeledBoolean:()=>w,LabeledColor:()=>F,LabeledDate:()=>h,LabeledEmail:()=>O,LabeledFile:()=>q,LabeledGeoJson:()=>_,LabeledImage:()=>R,LabeledJson:()=>S,LabeledNumber:()=>N,LabeledRaw:()=>P,LabeledString:()=>y,LabeledTree:()=>M,LabeledVideo:()=>A,LabeledVoid:()=>l});var e=s(883),a=s.n(e);const l=function(e){var l=e.label,t=(e.value,e.block),r=void 0!==t&&t?a().createElement("div",{className:"na-block"}):"n/a";return a().createElement("div",{className:"labeled-value labeled-void"},l&&a().createElement("div",{className:"labeled-value-label"},l),a().createElement("div",{className:"labeled-value-value"},r))};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var r=function(e){if(null==e||""===e||Number.isNaN(e))return!0;if("string"==typeof e){return["null","undefined","nan","infinity","-infinity"].includes(e.trim().toLowerCase())}return!1},n=function(e){return"string"==typeof e||e instanceof String&&!r(e)&&!o(e)},o=function(e){return"number"==typeof e?isFinite(e):"string"==typeof e&&(/^\d+$/.test(e)||/^\d+\.\d+$/.test(e)||/^\d+e\d+$/.test(e))},c=function(e){return!0===e||!1===e||"Boolean"===toString.call(e).slice(8,-1)},u=function(e){return e instanceof Date||"string"==typeof e&&!isNaN(Date.parse(e))},d=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},m=function(e){if("string"!=typeof e&&"object"!==t(e))return!1;try{var a="string"==typeof e?JSON.parse(e):e;return!(!a||"object"!==t(a)||null===a)&&(["FeatureCollection","Feature","Geometry"].includes(a.type)&&Array.isArray(a.features))}catch(e){return!1}},b=function(e){if("string"!=typeof e)return!1;var a=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),l=e.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(1|0|0?\.\d+)\)$/),t=a&&a.slice(1).every((function(e){return e>=0&&e<=255})),r=l&&l.slice(1,4).every((function(e){return e>=0&&e<=255}))&&l[4]>=0&&l[4]<=1;return!!(/^#([0-9A-F]{3}){1,2}$/i.test(e)||t||r)},v=function(e){return n(e)&&null!=e.match(/\.(txt|csv|log|json|xml|xlsx|docx|pdf)$/)},f=function(e){return n(e)&&null!=e.match(/\.(jpeg|jpg|gif|png|svg)$/)},g=function(e){return n(e)&&null!=e.match(/\.(mp4|webm|ogg)$/)},p=function(e){return n(e)&&null!=e.match(/\.(mp3|wav|ogg)$/)},E=function(e){return r(e)?"Void":c(e)?"Boolean":o(e)?"Number":u(e)?"Date":d(e)?"Email":m(e)?"GeoJson":function(e){if("string"!=typeof e)return!1;try{var a=JSON.parse(e);return null!==a&&"object"===t(a)}catch(e){return!1}}(e)?"Json":n(e)?function(e){return n(e)&&/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(e)}(e)?f(e)?"Image":g(e)?"Video":p(e)?"Audio":v(e)?"TextFile":"Link":function(e){return n(e)&&/^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-]+=[a-z0-9-]+)?)?(;base64)?,[A-Za-z0-9+/]+={0,2}(?=(\s*|$))/i.test(e)}(e)?function(e){return n(e)&&null!=e.match(/^data:image\/(jpeg|jpg|gif|png|svg);base64,/)}(e)?"Image":function(e){return n(e)&&null!=e.match(/^data:video\/(mp4|webm|ogg);base64,/)}(e)?"Video":function(e){return n(e)&&null!=e.match(/^data:audio\/(mp3|wav|ogg);base64,/)}(e)?"Audio":function(e){return n(e)&&null!=e.match(/^data:text\/(plain|csv|log|json|xml|xlsx|docx|pdf);base64,/)}(e)?"TextFile":"Link":function(e){return n(e)&&!isNaN(Date.parse(e))}(e)?"Date":b(e)?"Color":d(e)?"Email":f(e)?"Image":g(e)?"Video":p(e)?"Audio":v(e)?"TextFile":"String":(t(e),"Void")};const y=function(e){var t=e.label,r=e.value;return n(r)&&""!==r?a().createElement("div",{className:"labeled-value labeled-string"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("div",{className:"labeled-value-value"},r)):a().createElement(l,{label:t,value:r})};const N=function(e){var t=e.label,r=e.value,n=e.unit;return o(r)?a().createElement("div",{className:"labeled-value labeled-number"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("div",{className:"labeled-value-value"},r,n&&a().createElement("span",{className:"labeled-value-unit"},n))):a().createElement(l,{label:t,value:r})};const h=function(e){var t=e.label,r=e.value,n=e.format;if(!u(r))return a().createElement(l,{label:t,value:r});var o=new Date(r),c=n?o.toLocaleDateString(void 0,n):o.toLocaleDateString();return a().createElement("div",{className:"labeled-value labeled-date"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("time",{className:"labeled-value-value",dateTime:o.toISOString()},c))};const w=function(e){var t=e.label,r=e.value;return c(r)?a().createElement("div",{className:"labeled-value labeled-boolean"},a().createElement("div",{className:"labeled-value-label"},t),a().createElement("div",{className:"labeled-value-value ".concat(r?"boolean-true":"boolean-false")},r?"✓":"✗")):a().createElement(l,{label:t,value:r})};const S=function(e){var t,n=e.label,o=e.value;if(r(o))return a().createElement(l,{label:n,value:o});try{t="string"==typeof o?JSON.parse(o):o}catch(e){return a().createElement(l,{label:n,value:o})}var c=JSON.stringify(t,null,2);c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[\da-fA-F]{4}|\\[^u]|[^"\\])*")/g,(function(e){return/:$/.test(e)?'<span class="json-key">'.concat(e,"</span>"):'<span class="json-string">'.concat(e,"</span>")})).replace(/\b(true|false|null)\b/g,'<span class="json-boolean">$1</span>').replace(/\b(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/g,'<span class="json-number">$1</span>');var u=JSON.stringify(t),s=u.length>20?"".concat(u.slice(0,20),"..."):u;return a().createElement("div",{className:"labeled-value labeled-json"},n&&a().createElement("div",{className:"labeled-value-label"},n),a().createElement("details",{className:"labeled-value-value"},a().createElement("summary",{dangerouslySetInnerHTML:{__html:s}}),a().createElement("pre",{dangerouslySetInnerHTML:{__html:c}})))};s(526);var L=s(599),k=s(153),j=s(273),x=s(391),$=s(849);const _=function(t){var r=t.label,n=t.value;if(!m(n))return a().createElement(l,{label:r,value:n,block:"true"});var o,c=(0,e.useRef)(null),u=(0,e.useRef)(null);(0,e.useEffect)((function(){var e=(new x.GeoJSON).readFeatures(n,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});if(u.current){var a=u.current.getLayers().getArray()[1].getSource();a.clear(!0),a.addFeatures(e)}else u.current=new L.Map({target:c.current,layers:[new k.Tile({source:new j.OSM}),new k.Vector({source:new j.Vector({features:e}),style:function(e){switch(e.getGeometry().getType()){case"Point":case"MultiPoint":return new $.Style({image:new $.Circle({radius:5,fill:new $.Fill({color:"red"}),stroke:new $.Stroke({color:"black",width:1})})});case"LineString":case"MultiLineString":return new $.Style({stroke:new $.Stroke({color:"#00ff00",width:2})});case"Polygon":case"MultiPolygon":return new $.Style({fill:new $.Fill({color:"rgba(0, 0, 255, 0.1)"}),stroke:new $.Stroke({color:"#0000ff",width:1})});default:return new $.Style}}})],view:new L.View({center:[0,0],zoom:2})});if(e.length>0){var l=u.current.getLayers().getArray()[1].getSource().getExtent();u.current.getView().fit(l,{padding:[50,50,50,50],duration:222})}}),[n]);var s="".concat(r.replace(/[^a-z0-9]/gi,"_").toLowerCase(),".geojson");return o=a().createElement("figcaption",null,s,a().createElement("a",{href:"data:application/json,".concat(encodeURIComponent(n)),download:s,target:"_blank"},"◳")),a().createElement("div",{className:"labeled-value labeled-geojson"},r&&a().createElement("div",{className:"labeled-value-label"},r),a().createElement("figure",{className:"labeled-value-value"},a().createElement("div",{ref:c,className:"geojson-map",style:{height:"400px"}}),o))};const O=function(e){var t=e.label,r=e.value,n=e.mailto;if(!d(r))return a().createElement(l,{label:t,value:r});var o=n?a().createElement("a",{href:"mailto:".concat(r)},r):r;return a().createElement("div",{className:"labeled-value labeled-email"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("div",{className:"labeled-value-value"},o))};const R=function(e){var t=e.label,r=e.value;if(!function(e){return e instanceof HTMLImageElement||"string"==typeof e&&null!=e.match(/\.(jpeg|jpg|gif|png|svg)$/)}(r))return a().createElement(l,{label:t,value:r,block:"true"});var n,o="string"==typeof r&&r.startsWith("data:image"),c="string"==typeof r&&r.startsWith("http"),u=o||c,s=t?t.replace(/\s+/g,"_").toLowerCase():"image";n=u?a().createElement("figcaption",null,t,o&&a().createElement("a",{href:r,download:s,target:"_blank"},"◳"),c&&a().createElement("a",{href:r+"?dl",download:!0,target:"_blank"},"◳")):a().createElement("figcaption",null,t);var i="string"==typeof r?r:URL.createObjectURL(r);return a().createElement("div",{className:"labeled-value labeled-image"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("figure",{className:"labeled-value-value"},a().createElement("img",{src:i,alt:t}),n))};const A=function(e){var t=e.label,r=e.value;if(!function(e){return e instanceof HTMLVideoElement||"string"==typeof e&&null!=e.match(/\.(mp4|webm|ogg)$/)}(r))return a().createElement(l,{label:t,value:r,block:"true"});var n,o="string"==typeof r&&r.startsWith("data:video/"),c="string"==typeof r&&r.startsWith("http"),u=o||c,s=t?t.replace(/\s+/g,"_").toLowerCase():"video";n=u?a().createElement("figcaption",null,t,o&&a().createElement("a",{href:r,download:s,target:"_blank"},"◳"),c&&a().createElement("a",{href:r+"?dl",download:!0,target:"_blank"},"◳")):a().createElement("figcaption",null,t);var i="string"==typeof r?r:URL.createObjectURL(r);return a().createElement("div",{className:"labeled-value labeled-video"},a().createElement("div",{className:"labeled-value-label"},t),a().createElement("figure",{className:"labeled-value-value"},a().createElement("video",{src:i,controls:!0,alt:t}),n))};const V=function(t){var r=t.label,n=t.value;(0,e.useRef)(null),(0,e.useRef)(null),(0,e.useRef)(null),(0,e.useRef)(null);if(!function(e){return e instanceof HTMLAudioElement||"string"==typeof e&&null!=e.match(/\.(mp3|wav|ogg)$/)}(n))return a().createElement(l,{label:r,value:n,block:"true"});var o,c="string"==typeof n&&n.startsWith("data:audio/"),u="string"==typeof n&&n.startsWith("http"),s=c||u,i=r?r.replace(/\s+/g,"_").toLowerCase():"audio";o=s?a().createElement("figcaption",null,r,c&&a().createElement("a",{href:n,download:i,target:"_blank"},"◳"),u&&a().createElement("a",{href:n+"?dl",download:!0,target:"_blank"},"◳")):a().createElement("figcaption",null,r);var d="string"==typeof n?n:URL.createObjectURL(n);return a().createElement("div",{className:"labeled-value labeled-audio"},a().createElement("div",{className:"labeled-value-label"},r),a().createElement("figure",{className:"labeled-value-value"},a().createElement("audio",{src:d,controls:!0,alt:r}),o))};const q=function(e){var t=e.label,r=e.value;if(!n(r))return a().createElement(l,{label:t,value:r});var o="";if(r.startsWith("data:")){var c=r.split(";")[0].split(":")[1].split("/")[1];o="file.".concat(c)}else{var u=r.split("/");o=u[u.length-1]}return a().createElement("div",{className:"labeled-value labeled-file"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("div",{className:"labeled-value-value"},a().createElement("a",{href:r,download:o,target:"_blank"},o," ◳")))};const F=function(e){var t=e.label,r=e.value;return b(r)?a().createElement("div",{className:"labeled-value labeled-color"},t&&a().createElement("div",{className:"labeled-value-label"},t),a().createElement("div",{className:"labeled-value-value"},a().createElement("div",{className:"color-square",style:{backgroundColor:r}}))):a().createElement(l,{label:t,value:r})};const T=function(e){var t,r=e.label,n=e.value;switch(E(n)){case"Void":case"Void":default:t=l;break;case"String":t=y;break;case"Number":t=N;break;case"Date":t=h;break;case"Boolean":t=w;break;case"Json":t=S;break;case"GeoJson":t=_;break;case"Email":t=O;break;case"Image":t=R;break;case"Video":t=A;break;case"Audio":t=V;break;case"File":t=q;break;case"Color":t=F}return a().createElement(t,{label:r,value:n})};var C=function(e,l){return Array.isArray(e)?e.map((function(e,t){return a().createElement(J,{key:"".concat(l,"[").concat(t,"]"),label:"",value:e})})):"object"===t(e)&&null!==e?Object.keys(e).map((function(l){return a().createElement(J,{key:l,label:l,value:e[l]})})):a().createElement(T,{label:"",value:e})},J=function(e){var l=e.label,t=e.value;return a().createElement("ul",{className:"labeled-value labeled-tree"},a().createElement("li",null,l&&a().createElement("div",{className:"labeled-value-label"},l),a().createElement("div",{className:"labeled-value-value"},C(t,l))))};const M=J;const P=function(e){var l=e.label,t=e.value,r="function"==typeof t?t.toString():JSON.stringify(t,null,2);return a().createElement("div",{className:"labeled-value labeled-raw"},l&&a().createElement("div",{className:"labeled-value-label"},l),a().createElement("pre",{className:"labeled-value-value"},r))}})(),i})()));
//# sourceMappingURL=labeledvalue.bundle.js.map