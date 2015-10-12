'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

exports['default'] = {
  ok: function ok(format) {
    var template = _chalk2['default'].green(format);

    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    console.log.apply(null, [template].concat(params));
  },
  info: function info(format) {
    var template = _chalk2['default'].magenta(format);

    for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    console.log.apply(null, [template].concat(params));
  },
  error: function error(format) {
    var template = _chalk2['default'].red(format);

    for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      params[_key3 - 1] = arguments[_key3];
    }

    console.log.apply(null, [template].concat(params));
  },
  log: function log(format) {
    for (var _len4 = arguments.length, params = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      params[_key4 - 1] = arguments[_key4];
    }

    console.log.apply(null, [format].concat(params));
  }
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FCQUFrQixPQUFPOzs7O3FCQUVWO0FBQ2IsSUFBRSxFQUFBLFlBQUMsTUFBTSxFQUFhO0FBQ3BCLFFBQUksUUFBUSxHQUFHLG1CQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7c0NBRHZCLE1BQU07QUFBTixZQUFNOzs7QUFFbEIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUUsUUFBUSxDQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7R0FDdEQ7QUFDRCxNQUFJLEVBQUEsY0FBQyxNQUFNLEVBQWE7QUFDdEIsUUFBSSxRQUFRLEdBQUcsbUJBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzt1Q0FEdkIsTUFBTTtBQUFOLFlBQU07OztBQUVwQixXQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBRSxRQUFRLENBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztHQUN0RDtBQUNELE9BQUssRUFBQSxlQUFDLE1BQU0sRUFBYTtBQUN2QixRQUFJLFFBQVEsR0FBRyxtQkFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O3VDQURsQixNQUFNO0FBQU4sWUFBTTs7O0FBRXJCLFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFFLFFBQVEsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0dBQ3REO0FBQ0QsS0FBRyxFQUFBLGFBQUMsTUFBTSxFQUFhO3VDQUFSLE1BQU07QUFBTixZQUFNOzs7QUFDbkIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUUsTUFBTSxDQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7R0FDcEQ7Q0FDRiIsImZpbGUiOiJjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJzsgXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb2soZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBjaGFsay5ncmVlbihmb3JtYXQpO1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KG51bGwsIFsgdGVtcGxhdGUgXS5jb25jYXQocGFyYW1zKSk7XG4gIH0sXG4gIGluZm8oZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBjaGFsay5tYWdlbnRhKGZvcm1hdCk7XG4gICAgY29uc29sZS5sb2cuYXBwbHkobnVsbCwgWyB0ZW1wbGF0ZSBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfSxcbiAgZXJyb3IoZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSBjaGFsay5yZWQoZm9ybWF0KTtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIHRlbXBsYXRlIF0uY29uY2F0KHBhcmFtcykpO1xuICB9LFxuICBsb2coZm9ybWF0LCAuLi5wYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBbIGZvcm1hdCBdLmNvbmNhdChwYXJhbXMpKTtcbiAgfVxufVxuIl19