"use strict";(self.webpackChunklabeled_value=self.webpackChunklabeled_value||[]).push([[58],{"./src/components/LabeledVideo.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,InvalidType:()=>InvalidType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_LabeledVideo__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/LabeledVideo.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Basic/Media/LabeledVideo",component:_LabeledVideo__WEBPACK_IMPORTED_MODULE_1__.A};var Default=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LabeledVideo__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Video",value:"video.mp4"})},InvalidType=function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LabeledVideo__WEBPACK_IMPORTED_MODULE_1__.A,{label:"Video",value:{notAString:!0}})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'() => <LabeledVideo label="Video" value="video.mp4" />',...Default.parameters?.docs?.source}}},InvalidType.parameters={...InvalidType.parameters,docs:{...InvalidType.parameters?.docs,source:{originalSource:'() => <LabeledVideo label="Video" value={{\n  notAString: true\n}} />',...InvalidType.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InvalidType"]},"./src/components/LabeledVideo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./src/components/LabeledValue.css");var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/typeHelpers.js"),_LabeledVoid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/LabeledVoid.js"),LabeledVideo=function(param){var label=param.label,value=param.value;if(!(0,_utils_typeHelpers__WEBPACK_IMPORTED_MODULE_3__.cZ)(value))return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_LabeledVoid__WEBPACK_IMPORTED_MODULE_2__.A,{label,value,block:"true"});var figcaption,isDataUri="string"==typeof value&&value.startsWith("data:video/"),isVideoFileHttpUrl="string"==typeof value&&value.startsWith("http"),isDownloadable=isDataUri||isVideoFileHttpUrl,downloadFileName=label?label.replace(/\s+/g,"_").toLowerCase():"video";figcaption=isDownloadable?react__WEBPACK_IMPORTED_MODULE_1__.createElement("figcaption",null,label,isDataUri&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:value,download:downloadFileName,target:"_blank"},"◳"),isVideoFileHttpUrl&&react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href:value+"?dl",download:!0,target:"_blank"},"◳")):react__WEBPACK_IMPORTED_MODULE_1__.createElement("figcaption",null,label);var videoSrc="string"==typeof value?value:URL.createObjectURL(value);return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"labeled-value labeled-video"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",{className:"labeled-value-label"},label),react__WEBPACK_IMPORTED_MODULE_1__.createElement("figure",{className:"labeled-value-value"},react__WEBPACK_IMPORTED_MODULE_1__.createElement("video",{src:videoSrc,controls:!0,alt:label}),figcaption))};const __WEBPACK_DEFAULT_EXPORT__=LabeledVideo;LabeledVideo.__docgenInfo={description:"",methods:[],displayName:"LabeledVideo"}}}]);