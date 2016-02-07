'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var _abstractReporter = require('./abstract-reporter');

var _abstractReporter2 = _interopRequireDefault(_abstractReporter);

var _console = require('../console');

var _console2 = _interopRequireDefault(_console);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultReporter = function (_AbstractReporter) {
  _inherits(DefaultReporter, _AbstractReporter);

  function DefaultReporter() {
    _classCallCheck(this, DefaultReporter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultReporter).call(this));

    _this.table = new _cliTable2.default({
      head: ['Local', 'Remote'],
      colWidths: [40, 40],
      style: {
        head: ['white']
      }
    });
    return _this;
  }

  _createClass(DefaultReporter, [{
    key: 'report',
    value: function report(result) {
      var _this2 = this;

      if (result.noDiffDeleted) {
        _console2.default.info('The difference of migration was not detected.');
        return;
      }
      var detectedDiff = result.detectedDiff;

      Object.keys(detectedDiff).forEach(function (name) {
        var diff = detectedDiff[name];
        var localFile = diff.local.path || '';
        var remoteFile = diff.remote.path || '';

        _this2.table.push([(0, _path.basename)(localFile), (0, _path.basename)(remoteFile)]);
      }, this);
      _console2.default.log(this.table.toString() + '\n');
    }
  }]);

  return DefaultReporter;
}(_abstractReporter2.default);

exports.default = DefaultReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtxQjs7O0FBQ25CLFdBRG1CLGVBQ25CLEdBQWM7MEJBREssaUJBQ0w7O3VFQURLLDZCQUNMOztBQUVaLFVBQUssS0FBTCxHQUFhLHVCQUFVO0FBQ3JCLFlBQU0sQ0FBRSxPQUFGLEVBQVcsUUFBWCxDQUFOO0FBQ0EsaUJBQVcsQ0FBRSxFQUFGLEVBQU0sRUFBTixDQUFYO0FBQ0EsYUFBTztBQUNMLGNBQU0sQ0FBRSxPQUFGLENBQU47T0FERjtLQUhXLENBQWIsQ0FGWTs7R0FBZDs7ZUFEbUI7OzJCQVdaLFFBQVE7OztBQUNiLFVBQUksT0FBTyxhQUFQLEVBQXNCO0FBQ3hCLDBCQUFRLElBQVIsQ0FBYSwrQ0FBYixFQUR3QjtBQUV4QixlQUZ3QjtPQUExQjtBQUlBLFVBQUksZUFBZSxPQUFPLFlBQVAsQ0FMTjs7QUFPYixhQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLE9BQTFCLENBQWtDLFVBQUMsSUFBRCxFQUFVO0FBQzFDLFlBQUksT0FBTyxhQUFhLElBQWIsQ0FBUCxDQURzQztBQUUxQyxZQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsSUFBWCxJQUFtQixFQUFuQixDQUYwQjtBQUcxQyxZQUFJLGFBQWEsS0FBSyxNQUFMLENBQVksSUFBWixJQUFvQixFQUFwQixDQUh5Qjs7QUFLMUMsZUFBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixDQUNkLG9CQUFTLFNBQVQsQ0FEYyxFQUVkLG9CQUFTLFVBQVQsQ0FGYyxDQUFoQixFQUwwQztPQUFWLEVBUy9CLElBVEgsRUFQYTtBQWlCYix3QkFBUSxHQUFSLENBQVksS0FBSyxLQUFMLENBQVcsUUFBWCxLQUF3QixJQUF4QixDQUFaLENBakJhOzs7O1NBWEkiLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZSBmcm9tICdjbGktdGFibGUnO1xuaW1wb3J0IEFic3RyYWN0UmVwb3J0ZXIgZnJvbSAnLi9hYnN0cmFjdC1yZXBvcnRlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuLi9jb25zb2xlJztcbmltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRSZXBvcnRlciBleHRlbmRzIEFic3RyYWN0UmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgaGVhZDogWyAnTG9jYWwnLCAnUmVtb3RlJyBdLFxuICAgICAgY29sV2lkdGhzOiBbIDQwLCA0MCBdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVhZDogWyAnd2hpdGUnIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXBvcnQocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5ub0RpZmZEZWxldGVkKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1RoZSBkaWZmZXJlbmNlIG9mIG1pZ3JhdGlvbiB3YXMgbm90IGRldGVjdGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGV0ZWN0ZWREaWZmID0gcmVzdWx0LmRldGVjdGVkRGlmZjtcblxuICAgIE9iamVjdC5rZXlzKGRldGVjdGVkRGlmZikuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgbGV0IGRpZmYgPSBkZXRlY3RlZERpZmZbbmFtZV07XG4gICAgICBsZXQgbG9jYWxGaWxlID0gZGlmZi5sb2NhbC5wYXRoIHx8ICcnO1xuICAgICAgbGV0IHJlbW90ZUZpbGUgPSBkaWZmLnJlbW90ZS5wYXRoIHx8ICcnO1xuXG4gICAgICB0aGlzLnRhYmxlLnB1c2goW1xuICAgICAgICBiYXNlbmFtZShsb2NhbEZpbGUpLFxuICAgICAgICBiYXNlbmFtZShyZW1vdGVGaWxlKVxuICAgICAgXSk7XG4gICAgfSwgdGhpcyk7XG4gICAgY29uc29sZS5sb2codGhpcy50YWJsZS50b1N0cmluZygpICsgJ1xcbicpO1xuICB9XG59XG4iXX0=