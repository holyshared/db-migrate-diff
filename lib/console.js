'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ok: function ok(format) {
    var template = _chalk2.default.green(format);

    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    console.log.apply(null, [template].concat(params));
  },
  info: function info(format) {
    var template = _chalk2.default.magenta(format);

    for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    console.log.apply(null, [template].concat(params));
  },
  warn: function warn(format) {
    var template = _chalk2.default.yellow(format);

    for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      params[_key3 - 1] = arguments[_key3];
    }

    console.log.apply(null, [template].concat(params));
  },
  error: function error(format) {
    var template = _chalk2.default.red(format);

    for (var _len4 = arguments.length, params = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      params[_key4 - 1] = arguments[_key4];
    }

    console.log.apply(null, [template].concat(params));
  },
  log: function log(format) {
    for (var _len5 = arguments.length, params = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      params[_key5 - 1] = arguments[_key5];
    }

    console.log.apply(null, [format].concat(params));
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7O2tCQUlFO0FBQ2IsSUFBRSxjQUFDLE1BQU0sRUFBYTtBQUNwQixRQUFJLFFBQVEsR0FBRyxnQkFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O3NDQUR2QixNQUFNO0FBQU4sWUFBTTs7O0FBRWxCLFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLFFBQVEsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0dBQ3REO0FBQ0QsTUFBSSxnQkFBQyxNQUFNLEVBQWE7QUFDdEIsUUFBSSxRQUFRLEdBQUcsZ0JBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzt1Q0FEdkIsTUFBTTtBQUFOLFlBQU07OztBQUVwQixXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUN0RDtBQUNELE1BQUksZ0JBQUMsTUFBTSxFQUFhO0FBQ3RCLFFBQUksUUFBUSxHQUFHLGdCQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7dUNBRHRCLE1BQU07QUFBTixZQUFNOzs7QUFFcEIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUUsUUFBUSxDQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7R0FDdEQ7QUFDRCxPQUFLLGlCQUFDLE1BQU0sRUFBYTtBQUN2QixRQUFJLFFBQVEsR0FBRyxnQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O3VDQURsQixNQUFNO0FBQU4sWUFBTTs7O0FBRXJCLFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLFFBQVEsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0dBQ3REO0FBQ0QsS0FBRyxlQUFDLE1BQU0sRUFBYTt1Q0FBUixNQUFNO0FBQU4sWUFBTTs7O0FBQ25CLFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLE1BQU0sQ0FBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0dBQ3BEO0NBQ0YiLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBvayhmb3JtYXQsIC4uLnBhcmFtcykge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGNoYWxrLmdyZWVuKGZvcm1hdCk7XG4gICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgWyB0ZW1wbGF0ZSBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfSxcbiAgaW5mbyhmb3JtYXQsIC4uLnBhcmFtcykge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGNoYWxrLm1hZ2VudGEoZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICB3YXJuKGZvcm1hdCwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gY2hhbGsueWVsbG93KGZvcm1hdCk7XG4gICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgWyB0ZW1wbGF0ZSBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfSxcbiAgZXJyb3IoZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBjaGFsay5yZWQoZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICBsb2coZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIGZvcm1hdCBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfVxufVxuIl19