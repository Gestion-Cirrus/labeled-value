"use strict";(self.webpackChunklabeled_value=self.webpackChunklabeled_value||[]).push([[321],{"./src/components/LabeledAudio.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InvalidType:()=>InvalidType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_LabeledAudio__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/LabeledAudio.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Basic/Media/LabeledAudio",component:_LabeledAudio__WEBPACK_IMPORTED_MODULE_1__.A};var Default=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LabeledAudio__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Audio",value:"https://www.w3schools.com/html/horse.ogg"})},InvalidType=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LabeledAudio__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Audio",value:{notAString:!0}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <LabeledAudio label="Audio" value="https://www.w3schools.com/html/horse.ogg" />',...Default.parameters?.docs?.source}}},InvalidType.parameters={...InvalidType.parameters,docs:{...InvalidType.parameters?.docs,source:{originalSource:'() => <LabeledAudio label="Audio" value={{\n  notAString: true\n}} />',...InvalidType.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InvalidType"]},"./src/components/LabeledAudio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/components/LabeledValue.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/typeHelpers.js"),_LabeledVoid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/LabeledVoid.js"),LabeledAudio=function(param){var label=param.label,value=param.value;(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);if(!(0,_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__.JK)(value))return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_LabeledVoid__WEBPACK_IMPORTED_MODULE_2__.A,{label,value,block:"true"});var figcaption,isDataUri="string"==typeof value&&value.startsWith("data:audio/"),isAudioFileHttpUrl="string"==typeof value&&value.startsWith("http"),isDownloadable=isDataUri||isAudioFileHttpUrl,downloadFileName=label?label.replace(/\s+/g,"_").toLowerCase():"audio";figcaption=isDownloadable?react__WEBPACK_IMPORTED_MODULE_1__.createElement("figcaption",null,label,isDataUri&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:value,download:downloadFileName,target:"_blank"},"◳"),isAudioFileHttpUrl&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:value+"?dl",download:!0,target:"_blank"},"◳")):react__WEBPACK_IMPORTED_MODULE_1__.createElement("figcaption",null,label);var audioSrc="string"==typeof value?value:URL.createObjectURL(value);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"labeled-value labeled-audio"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"labeled-value-label"},label),react__WEBPACK_IMPORTED_MODULE_1__.createElement("figure",{className:"labeled-value-value"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("audio",{src:audioSrc,controls:!0,alt:label}),figcaption))};const __WEBPACK_DEFAULT_EXPORT__=LabeledAudio;LabeledAudio.__docgenInfo={description:"",methods:[],displayName:"LabeledAudio"}}}]);