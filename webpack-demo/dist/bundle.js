(function (graph) {
    function require(file) {
      function absRequire(relPath) {
        return require(graph[file].deps[relPath])
      }
      var exports = {};
      (function (require, exports, code) {
        eval(code)
      })(absRequire, exports, graph[file].code)
      return exports
    }
    require('./webpack/index.js')
  })({"./webpack/index.js":{"deps":{"./add.js":"./webpack\\add.js"},"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// function require(file) {\n//   var exports = {};\n//   (function (exports, code) {\n//     eval(code);\n//   })(exports, 'exports.default = function(a,b){return a + b}');\n//   return exports;\n// }\n// var add = require('add.js').default;\nconsole.log((0, _add[\"default\"])(1, 2));"},"./webpack\\add.js":{"deps":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\n// var exports = {};\n// (function (exports, code) {\n//   eval(code);\n// })(exports, 'exports.default = function(a, b) {return a + b}')\nvar _default = function _default(a, b) {\n  return a + b;\n};\n\nexports[\"default\"] = _default;"}})