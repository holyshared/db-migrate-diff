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

var DefaultReporter = (function (_AbstractReporter) {
  _inherits(DefaultReporter, _AbstractReporter);

  function DefaultReporter() {
    _classCallCheck(this, DefaultReporter);

    _get(Object.getPrototypeOf(DefaultReporter.prototype), 'constructor', this).call(this);
    this.table = new _cliTable2['default']({
      head: ['Local', 'Remote'],
      colWidths: [40, 40]
    });
  }

  _createClass(DefaultReporter, [{
    key: 'report',
    value: function report(result) {
      var _this = this;

      if (result.noDiffDeleted) {
        process.stdout.write('\nThe difference of migration was not detected.\n');
        return;
      }
      var detectedDiff = result.detectedDiff;

      Object.keys(detectedDiff).forEach(function (name) {
        var diff = detectedDiff[name];
        _this.table.push([diff.local.name || '', diff.remote.name || '']);
      }, this);

      process.stdout.write(this.table.toString() + '\n');
    }
  }]);

  return DefaultReporter;
})(_abstractReporter2['default']);

exports['default'] = DefaultReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQWtCLFdBQVc7Ozs7Z0NBQ0EscUJBQXFCOzs7O0lBRTdCLGVBQWU7WUFBZixlQUFlOztBQUN2QixXQURRLGVBQWUsR0FDcEI7MEJBREssZUFBZTs7QUFFaEMsK0JBRmlCLGVBQWUsNkNBRXhCO0FBQ1IsUUFBSSxDQUFDLEtBQUssR0FBRywwQkFBVTtBQUNyQixVQUFJLEVBQUUsQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFO0FBQzNCLGVBQVMsRUFBRSxDQUFFLEVBQUUsRUFBRSxFQUFFLENBQUU7S0FDdEIsQ0FBQyxDQUFDO0dBQ0o7O2VBUGtCLGVBQWU7O1dBUTVCLGdCQUFDLE1BQU0sRUFBRTs7O0FBQ2IsVUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO0FBQ3hCLGVBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDMUUsZUFBTztPQUNSO0FBQ0QsVUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs7QUFFdkMsWUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDMUMsWUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLGNBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUN2QixDQUFDLENBQUM7T0FDSixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULGFBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEQ7OztTQXhCa0IsZUFBZTs7O3FCQUFmLGVBQWUiLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZSBmcm9tICdjbGktdGFibGUnO1xuaW1wb3J0IEFic3RyYWN0UmVwb3J0ZXIgZnJvbSAnLi9hYnN0cmFjdC1yZXBvcnRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRSZXBvcnRlciBleHRlbmRzIEFic3RyYWN0UmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgaGVhZDogWyAnTG9jYWwnLCAnUmVtb3RlJyBdLFxuICAgICAgY29sV2lkdGhzOiBbIDQwLCA0MCBdXG4gICAgfSk7XG4gIH1cbiAgcmVwb3J0KHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQubm9EaWZmRGVsZXRlZCkge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ1xcblRoZSBkaWZmZXJlbmNlIG9mIG1pZ3JhdGlvbiB3YXMgbm90IGRldGVjdGVkLlxcbicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGV0ZWN0ZWREaWZmID0gcmVzdWx0LmRldGVjdGVkRGlmZjtcblxuICAgIE9iamVjdC5rZXlzKGRldGVjdGVkRGlmZikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgbGV0IGRpZmYgPSBkZXRlY3RlZERpZmZbbmFtZV07XG4gICAgICB0aGlzLnRhYmxlLnB1c2goW1xuICAgICAgICBkaWZmLmxvY2FsLm5hbWUgfHwgJycsXG4gICAgICAgIGRpZmYucmVtb3RlLm5hbWUgfHwgJydcbiAgICAgIF0pO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodGhpcy50YWJsZS50b1N0cmluZygpICsgJ1xcbicpO1xuICB9XG59XG4iXX0=