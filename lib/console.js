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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFFZTtBQUNiLGtCQUFHLFFBQW1CO0FBQ3BCLFFBQUksV0FBVyxnQkFBTSxLQUFOLENBQVksTUFBWixDQUFYLENBRGdCOztzQ0FBUjs7S0FBUTs7QUFFcEIsWUFBUSxHQUFSLENBQVksS0FBWixDQUFrQixJQUFsQixFQUF3QixDQUFFLFFBQUYsRUFBYSxNQUFiLENBQW9CLE1BQXBCLENBQXhCLEVBRm9CO0dBRFQ7QUFLYixzQkFBSyxRQUFtQjtBQUN0QixRQUFJLFdBQVcsZ0JBQU0sT0FBTixDQUFjLE1BQWQsQ0FBWCxDQURrQjs7dUNBQVI7O0tBQVE7O0FBRXRCLFlBQVEsR0FBUixDQUFZLEtBQVosQ0FBa0IsSUFBbEIsRUFBd0IsQ0FBRSxRQUFGLEVBQWEsTUFBYixDQUFvQixNQUFwQixDQUF4QixFQUZzQjtHQUxYO0FBU2Isc0JBQUssUUFBbUI7QUFDdEIsUUFBSSxXQUFXLGdCQUFNLE1BQU4sQ0FBYSxNQUFiLENBQVgsQ0FEa0I7O3VDQUFSOztLQUFROztBQUV0QixZQUFRLEdBQVIsQ0FBWSxLQUFaLENBQWtCLElBQWxCLEVBQXdCLENBQUUsUUFBRixFQUFhLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBeEIsRUFGc0I7R0FUWDtBQWFiLHdCQUFNLFFBQW1CO0FBQ3ZCLFFBQUksV0FBVyxnQkFBTSxHQUFOLENBQVUsTUFBVixDQUFYLENBRG1COzt1Q0FBUjs7S0FBUTs7QUFFdkIsWUFBUSxHQUFSLENBQVksS0FBWixDQUFrQixJQUFsQixFQUF3QixDQUFFLFFBQUYsRUFBYSxNQUFiLENBQW9CLE1BQXBCLENBQXhCLEVBRnVCO0dBYlo7QUFpQmIsb0JBQUksUUFBbUI7dUNBQVI7O0tBQVE7O0FBQ3JCLFlBQVEsR0FBUixDQUFZLEtBQVosQ0FBa0IsSUFBbEIsRUFBd0IsQ0FBRSxNQUFGLEVBQVcsTUFBWCxDQUFrQixNQUFsQixDQUF4QixFQURxQjtHQWpCViIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBvayhmb3JtYXQsIC4uLnBhcmFtcykge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGNoYWxrLmdyZWVuKGZvcm1hdCk7XG4gICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgWyB0ZW1wbGF0ZSBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfSxcbiAgaW5mbyhmb3JtYXQsIC4uLnBhcmFtcykge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGNoYWxrLm1hZ2VudGEoZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICB3YXJuKGZvcm1hdCwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gY2hhbGsueWVsbG93KGZvcm1hdCk7XG4gICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgWyB0ZW1wbGF0ZSBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfSxcbiAgZXJyb3IoZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBjaGFsay5yZWQoZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICBsb2coZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIGZvcm1hdCBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfVxufVxuIl19