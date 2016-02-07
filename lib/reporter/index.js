'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReporterAlreadyRegisteredError = exports.ReporterNotRegisteredError = exports.registry = undefined;

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

var _ghost = require('./ghost');

var _ghost2 = _interopRequireDefault(_ghost);

var _registry = require('./registry');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registry = exports.registry = new _registry.ReporterRegistry();
var ReporterNotRegisteredError = exports.ReporterNotRegisteredError = _registry.NotRegisteredError;
var ReporterAlreadyRegisteredError = exports.ReporterAlreadyRegisteredError = _registry.AlreadyRegisteredError;
exports.default = registry;

registry.register('default', _default2.default);
registry.register('ghost', _ghost2.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSU8sSUFBSSw4QkFBVyxnQ0FBWDtBQUNKLElBQUksOEZBQUo7QUFDQSxJQUFJLDBHQUFKO2tCQUNROztBQUVmLFNBQVMsUUFBVCxDQUFrQixTQUFsQjtBQUNBLFNBQVMsUUFBVCxDQUFrQixPQUFsQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEZWZhdWx0UmVwb3J0ZXIgZnJvbSAnLi9kZWZhdWx0JztcbmltcG9ydCBHaG9zdFJlcG9ydGVyIGZyb20gJy4vZ2hvc3QnO1xuaW1wb3J0IHsgUmVwb3J0ZXJSZWdpc3RyeSwgTm90UmVnaXN0ZXJlZEVycm9yLCBBbHJlYWR5UmVnaXN0ZXJlZEVycm9yIH0gZnJvbSAnLi9yZWdpc3RyeSc7XG5cbmV4cG9ydCBsZXQgcmVnaXN0cnkgPSBuZXcgUmVwb3J0ZXJSZWdpc3RyeSgpO1xuZXhwb3J0IGxldCBSZXBvcnRlck5vdFJlZ2lzdGVyZWRFcnJvciA9IE5vdFJlZ2lzdGVyZWRFcnJvcjtcbmV4cG9ydCBsZXQgUmVwb3J0ZXJBbHJlYWR5UmVnaXN0ZXJlZEVycm9yID0gQWxyZWFkeVJlZ2lzdGVyZWRFcnJvcjtcbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJ5O1xuXG5yZWdpc3RyeS5yZWdpc3RlcignZGVmYXVsdCcsIERlZmF1bHRSZXBvcnRlcik7XG5yZWdpc3RyeS5yZWdpc3RlcignZ2hvc3QnLCBHaG9zdFJlcG9ydGVyKTtcbiJdfQ==