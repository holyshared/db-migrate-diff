'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var DefaultReporter = (function () {
  function DefaultReporter() {
    _classCallCheck(this, DefaultReporter);

    this.table = new _cliTable2['default']({
      head: ['Local', 'Remote'],
      colWidths: [40, 40]
    });
  }

  _createClass(DefaultReporter, [{
    key: 'report',
    value: function report(result) {
      var _this = this;

      var diffRecords = result.diff;

      Object.keys(diffRecords).forEach(function (name) {
        var diff = diffRecords[name];
        _this.table.push([diff.local.name || '', diff.remote.name || '']);
      }, this);

      process.stdout.write(this.table.toString());
    }
  }]);

  return DefaultReporter;
})();

exports['default'] = DefaultReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBQWtCLFdBQVc7Ozs7SUFFUixlQUFlO0FBQ3ZCLFdBRFEsZUFBZSxHQUNwQjswQkFESyxlQUFlOztBQUVoQyxRQUFJLENBQUMsS0FBSyxHQUFHLDBCQUFVO0FBQ3JCLFVBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxRQUFRLENBQUU7QUFDM0IsZUFBUyxFQUFFLENBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTtLQUN0QixDQUFDLENBQUM7R0FDSjs7ZUFOa0IsZUFBZTs7V0FPNUIsZ0JBQUMsTUFBTSxFQUFFOzs7QUFDYixVQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDOztBQUU5QixZQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSztBQUN6QyxZQUFJLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsY0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxFQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQ3ZCLENBQUMsQ0FBQztPQUNKLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRVQsYUFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQzdDOzs7U0FuQmtCLGVBQWU7OztxQkFBZixlQUFlIiwiZmlsZSI6InJlcG9ydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJ2NsaS10YWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmF1bHRSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgaGVhZDogWyAnTG9jYWwnLCAnUmVtb3RlJyBdLFxuICAgICAgY29sV2lkdGhzOiBbIDQwLCA0MCBdXG4gICAgfSk7XG4gIH1cbiAgcmVwb3J0KHJlc3VsdCkge1xuICAgIGxldCBkaWZmUmVjb3JkcyA9IHJlc3VsdC5kaWZmO1xuXG4gICAgT2JqZWN0LmtleXMoZGlmZlJlY29yZHMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGxldCBkaWZmID0gZGlmZlJlY29yZHNbbmFtZV07XG4gICAgICB0aGlzLnRhYmxlLnB1c2goW1xuICAgICAgICBkaWZmLmxvY2FsLm5hbWUgfHwgJycsXG4gICAgICAgIGRpZmYucmVtb3RlLm5hbWUgfHwgJydcbiAgICAgIF0pO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodGhpcy50YWJsZS50b1N0cmluZygpKTtcbiAgfVxufVxuIl19