(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../../../../../forked/treefung/laravel-vue-admin/node_modules/babel-loader/lib/index.js?!../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/index.js?!../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/data/www/forked/treefung/laravel-vue-admin/node_modules/babel-loader/lib??ref--4-0!D:/data/www/forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib??vue-loader-options!D:/data/www/forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @antv/g2plot */ "../../../../../forked/treefung/laravel-vue-admin/node_modules/@antv/g2plot/esm/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    attrs: Object
  },
  data: function data() {
    return {
      antv: null
    };
  },
  mounted: function mounted() {
    this.antv = new _antv_g2plot__WEBPACK_IMPORTED_MODULE_0__["Area"](this.attrs.canvasId, _objectSpread({
      data: this.attrs.data
    }, this.attrs.config));
    this.antv.render();
  },
  updated: function updated() {
    this.antv.changeData(this.attrs.data);
  },
  destroyed: function destroyed() {//this.antv.destory();
  }
});

/***/ }),

/***/ "../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/index.js?!../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=template&id=621ad5cb&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** D:/data/www/forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!D:/data/www/forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib??vue-loader-options!D:/data/www/forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=template&id=621ad5cb& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: _vm.attrs.canvasId } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue":
/*!***********************************************************************************************!*\
  !*** D:/data/www/forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AntvArea_vue_vue_type_template_id_621ad5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AntvArea.vue?vue&type=template&id=621ad5cb& */ "../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=template&id=621ad5cb&");
/* harmony import */ var _AntvArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AntvArea.vue?vue&type=script&lang=js& */ "../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AntvArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AntvArea_vue_vue_type_template_id_621ad5cb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AntvArea_vue_vue_type_template_id_621ad5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** D:/data/www/forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AntvArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AntvArea.vue?vue&type=script&lang=js& */ "../../../../../forked/treefung/laravel-vue-admin/node_modules/babel-loader/lib/index.js?!../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/index.js?!../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AntvArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=template&id=621ad5cb&":
/*!******************************************************************************************************************************!*\
  !*** D:/data/www/forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=template&id=621ad5cb& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AntvArea_vue_vue_type_template_id_621ad5cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AntvArea.vue?vue&type=template&id=621ad5cb& */ "../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../../forked/treefung/laravel-vue-admin/node_modules/vue-loader/lib/index.js?!../../../../../forked/treefung/laravel-vue-admin/resources/js/components/antv/AntvArea.vue?vue&type=template&id=621ad5cb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AntvArea_vue_vue_type_template_id_621ad5cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AntvArea_vue_vue_type_template_id_621ad5cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);