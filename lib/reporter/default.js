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

var _path = require('path');

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
        var localFile = diff.local.path || '';
        var remoteFile = diff.remote.path || '';

        _this.table.push([(0, _path.basename)(localFile), (0, _path.basename)(remoteFile)]);
      }, this);
      _console2['default'].log(this.table.toString());
    }
  }]);

  return DefaultReporter;
})(_abstractReporter2['default']);

exports['default'] = DefaultReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQWtCLFdBQVc7Ozs7Z0NBQ0EscUJBQXFCOzs7O3VCQUM5QixZQUFZOzs7O29CQUNQLE1BQU07O0lBRVYsZUFBZTtZQUFmLGVBQWU7O0FBQ3ZCLFdBRFEsZUFBZSxHQUNwQjswQkFESyxlQUFlOztBQUVoQywrQkFGaUIsZUFBZSw2Q0FFeEI7QUFDUixRQUFJLENBQUMsS0FBSyxHQUFHLDBCQUFVO0FBQ3JCLFVBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxRQUFRLENBQUU7QUFDM0IsZUFBUyxFQUFFLENBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTtBQUNyQixXQUFLLEVBQUU7QUFDTCxZQUFJLEVBQUUsQ0FBRSxPQUFPLENBQUU7T0FDbEI7S0FDRixDQUFDLENBQUM7R0FDSjs7ZUFWa0IsZUFBZTs7V0FXNUIsZ0JBQUMsTUFBTSxFQUFFOzs7QUFDYixVQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7QUFDeEIsNkJBQVEsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDOUQsZUFBTztPQUNSO0FBQ0QsVUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs7QUFFdkMsWUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDMUMsWUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFlBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUN0QyxZQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7O0FBRXhDLGNBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNkLG9CQUFTLFNBQVMsQ0FBQyxFQUNuQixvQkFBUyxVQUFVLENBQUMsQ0FDckIsQ0FBQyxDQUFDO09BQ0osRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNULDJCQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDcEM7OztTQTdCa0IsZUFBZTs7O3FCQUFmLGVBQWUiLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZSBmcm9tICdjbGktdGFibGUnO1xuaW1wb3J0IEFic3RyYWN0UmVwb3J0ZXIgZnJvbSAnLi9hYnN0cmFjdC1yZXBvcnRlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuLi9jb25zb2xlJztcbmltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRSZXBvcnRlciBleHRlbmRzIEFic3RyYWN0UmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgaGVhZDogWyAnTG9jYWwnLCAnUmVtb3RlJyBdLFxuICAgICAgY29sV2lkdGhzOiBbIDQwLCA0MCBdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVhZDogWyAnd2hpdGUnIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXBvcnQocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5ub0RpZmZEZWxldGVkKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1RoZSBkaWZmZXJlbmNlIG9mIG1pZ3JhdGlvbiB3YXMgbm90IGRldGVjdGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGV0ZWN0ZWREaWZmID0gcmVzdWx0LmRldGVjdGVkRGlmZjtcblxuICAgIE9iamVjdC5rZXlzKGRldGVjdGVkRGlmZikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgbGV0IGRpZmYgPSBkZXRlY3RlZERpZmZbbmFtZV07XG4gICAgICBsZXQgbG9jYWxGaWxlID0gZGlmZi5sb2NhbC5wYXRoIHx8ICcnO1xuICAgICAgbGV0IHJlbW90ZUZpbGUgPSBkaWZmLnJlbW90ZS5wYXRoIHx8ICcnO1xuXG4gICAgICB0aGlzLnRhYmxlLnB1c2goW1xuICAgICAgICBiYXNlbmFtZShsb2NhbEZpbGUpLFxuICAgICAgICBiYXNlbmFtZShyZW1vdGVGaWxlKVxuICAgICAgXSk7XG4gICAgfSwgdGhpcyk7XG4gICAgY29uc29sZS5sb2codGhpcy50YWJsZS50b1N0cmluZygpKTtcbiAgfVxufVxuIl19