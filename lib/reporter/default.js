'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _abstractReporter = require('./abstract-reporter');

var _abstractReporter2 = _interopRequireDefault(_abstractReporter);

var _console = require('../console');

var _console2 = _interopRequireDefault(_console);

var DefaultReporter = (function (_AbstractReporter) {
  _inherits(DefaultReporter, _AbstractReporter);

  function DefaultReporter() {
    _classCallCheck(this, DefaultReporter);

    _get(Object.getPrototypeOf(DefaultReporter.prototype), 'constructor', this).call(this);
    this.table = new _cliTable2['default']({
      head: ['Local', 'Remote'],
      colWidths: [40, 40],
      style: {
        head: ['white']
      }
    });
  }

  _createClass(DefaultReporter, [{
    key: 'report',
    value: function report(result) {
      var _this = this;

      if (result.noDiffDeleted) {
        _console2['default'].info('The difference of migration was not detected.');
        return;
      }
      var detectedDiff = result.detectedDiff;

      Object.keys(detectedDiff).forEach(function (name) {
        var diff = detectedDiff[name];
        _this.table.push([diff.local.name || '', diff.remote.name || '']);
      }, this);
      _console2['default'].log(this.table.toString());
    }
  }]);

  return DefaultReporter;
})(_abstractReporter2['default']);

exports['default'] = DefaultReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQWtCLFdBQVc7Ozs7Z0NBQ0EscUJBQXFCOzs7O3VCQUM5QixZQUFZOzs7O0lBRVgsZUFBZTtZQUFmLGVBQWU7O0FBQ3ZCLFdBRFEsZUFBZSxHQUNwQjswQkFESyxlQUFlOztBQUVoQywrQkFGaUIsZUFBZSw2Q0FFeEI7QUFDUixRQUFJLENBQUMsS0FBSyxHQUFHLDBCQUFVO0FBQ3JCLFVBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxRQUFRLENBQUU7QUFDM0IsZUFBUyxFQUFFLENBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTtBQUNyQixXQUFLLEVBQUU7QUFDTCxZQUFJLEVBQUUsQ0FBRSxPQUFPLENBQUU7T0FDbEI7S0FDRixDQUFDLENBQUM7R0FDSjs7ZUFWa0IsZUFBZTs7V0FXNUIsZ0JBQUMsTUFBTSxFQUFFOzs7QUFDYixVQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7QUFDeEIsNkJBQVEsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDOUQsZUFBTztPQUNSO0FBQ0QsVUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs7QUFFdkMsWUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDMUMsWUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLGNBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUN2QixDQUFDLENBQUM7T0FDSixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1QsMkJBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNwQzs7O1NBMUJrQixlQUFlOzs7cUJBQWYsZUFBZSIsImZpbGUiOiJkZWZhdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJ2NsaS10YWJsZSc7XG5pbXBvcnQgQWJzdHJhY3RSZXBvcnRlciBmcm9tICcuL2Fic3RyYWN0LXJlcG9ydGVyJztcbmltcG9ydCBjb25zb2xlIGZyb20gJy4uL2NvbnNvbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0UmVwb3J0ZXIgZXh0ZW5kcyBBYnN0cmFjdFJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnRhYmxlID0gbmV3IFRhYmxlKHtcbiAgICAgIGhlYWQ6IFsgJ0xvY2FsJywgJ1JlbW90ZScgXSxcbiAgICAgIGNvbFdpZHRoczogWyA0MCwgNDAgXSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGhlYWQ6IFsgJ3doaXRlJyBdXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmVwb3J0KHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQubm9EaWZmRGVsZXRlZCkge1xuICAgICAgY29uc29sZS5pbmZvKCdUaGUgZGlmZmVyZW5jZSBvZiBtaWdyYXRpb24gd2FzIG5vdCBkZXRlY3RlZC4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRldGVjdGVkRGlmZiA9IHJlc3VsdC5kZXRlY3RlZERpZmY7XG5cbiAgICBPYmplY3Qua2V5cyhkZXRlY3RlZERpZmYpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGxldCBkaWZmID0gZGV0ZWN0ZWREaWZmW25hbWVdO1xuICAgICAgdGhpcy50YWJsZS5wdXNoKFtcbiAgICAgICAgZGlmZi5sb2NhbC5uYW1lIHx8ICcnLFxuICAgICAgICBkaWZmLnJlbW90ZS5uYW1lIHx8ICcnXG4gICAgICBdKTtcbiAgICB9LCB0aGlzKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlLnRvU3RyaW5nKCkpO1xuICB9XG59XG4iXX0=