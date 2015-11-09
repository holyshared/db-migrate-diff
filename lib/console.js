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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztrQkFFZTtBQUNiLElBQUUsY0FBQyxNQUFNLEVBQWE7QUFDcEIsUUFBSSxRQUFRLEdBQUcsZ0JBQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztzQ0FEdkIsTUFBTTtBQUFOLFlBQU07OztBQUVsQixXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUN0RDtBQUNELE1BQUksZ0JBQUMsTUFBTSxFQUFhO0FBQ3RCLFFBQUksUUFBUSxHQUFHLGdCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzs7dUNBRHZCLE1BQU07QUFBTixZQUFNOzs7QUFFcEIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUUsUUFBUSxDQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7R0FDdEQ7QUFDRCxNQUFJLGdCQUFDLE1BQU0sRUFBYTtBQUN0QixRQUFJLFFBQVEsR0FBRyxnQkFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7O3VDQUR0QixNQUFNO0FBQU4sWUFBTTs7O0FBRXBCLFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLFFBQVEsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0dBQ3REO0FBQ0QsT0FBSyxpQkFBQyxNQUFNLEVBQWE7QUFDdkIsUUFBSSxRQUFRLEdBQUcsZ0JBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzt1Q0FEbEIsTUFBTTtBQUFOLFlBQU07OztBQUVyQixXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUN0RDtBQUNELEtBQUcsZUFBQyxNQUFNLEVBQWE7dUNBQVIsTUFBTTtBQUFOLFlBQU07OztBQUNuQixXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxNQUFNLENBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUNwRDtDQUNGIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9rKGZvcm1hdCwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gY2hhbGsuZ3JlZW4oZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICBpbmZvKGZvcm1hdCwgLi4ucGFyYW1zKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gY2hhbGsubWFnZW50YShmb3JtYXQpO1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KG51bGwsIFsgdGVtcGxhdGUgXS5jb25jYXQocGFyYW1zKSk7XG4gIH0sXG4gIHdhcm4oZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBjaGFsay55ZWxsb3coZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICBlcnJvcihmb3JtYXQsIC4uLnBhcmFtcykge1xuICAgIGxldCB0ZW1wbGF0ZSA9IGNoYWxrLnJlZChmb3JtYXQpO1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KG51bGwsIFsgdGVtcGxhdGUgXS5jb25jYXQocGFyYW1zKSk7XG4gIH0sXG4gIGxvZyhmb3JtYXQsIC4uLnBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KG51bGwsIFsgZm9ybWF0IF0uY29uY2F0KHBhcmFtcykpO1xuICB9XG59XG4iXX0=