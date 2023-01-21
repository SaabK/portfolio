"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer.jsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "w-full bg-lightBlue bg-opacity-10",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex flex-col justify-center items-center h-[1.875rem] lg:h-[2.25rem]",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-ubunturegular text-[10px] lg:text-[12px] tracking-wide text-[#000] text-center",
                children: "Ali Bin Naseer | All Rights Reserved"
            })
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Navbar.jsx


function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "container mx-auto py-7",
        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
            className: "font-poppinsbold tracking-wide text-darkBlue lg:text-body-lg",
            children: "Ibn Naseer"
        })
    });
}
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Layout.jsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6268));
module.exports = __webpack_exports__;

})();