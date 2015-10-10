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

      if (result.noDiffDeleted) {
        process.stdout.write('\nThe difference of migration was not detected.\n');
        return;
      }
      var deletedDiff = result.deletedDiff;

      Object.keys(deletedDiff).forEach(function (name) {
        var diff = deletedDiff[name];
        _this.table.push([diff.local.name || '', diff.remote.name || '']);
      }, this);

      process.stdout.write(this.table.toString() + '\n');
    }
  }]);

  return DefaultReporter;
})();

exports['default'] = DefaultReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7d0JBQWtCLFdBQVc7Ozs7SUFFUixlQUFlO0FBQ3ZCLFdBRFEsZUFBZSxHQUNwQjswQkFESyxlQUFlOztBQUVoQyxRQUFJLENBQUMsS0FBSyxHQUFHLDBCQUFVO0FBQ3JCLFVBQUksRUFBRSxDQUFFLE9BQU8sRUFBRSxRQUFRLENBQUU7QUFDM0IsZUFBUyxFQUFFLENBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRTtLQUN0QixDQUFDLENBQUM7R0FDSjs7ZUFOa0IsZUFBZTs7V0FPNUIsZ0JBQUMsTUFBTSxFQUFFOzs7QUFDYixVQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7QUFDeEIsZUFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQztBQUMxRSxlQUFPO09BQ1I7QUFDRCxVQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDOztBQUVyQyxZQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBSztBQUN6QyxZQUFJLElBQUksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsY0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxFQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQ3ZCLENBQUMsQ0FBQztPQUNKLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRVQsYUFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNwRDs7O1NBdkJrQixlQUFlOzs7cUJBQWYsZUFBZSIsImZpbGUiOiJyZXBvcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJsZSBmcm9tICdjbGktdGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0UmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhYmxlID0gbmV3IFRhYmxlKHtcbiAgICAgIGhlYWQ6IFsgJ0xvY2FsJywgJ1JlbW90ZScgXSxcbiAgICAgIGNvbFdpZHRoczogWyA0MCwgNDAgXVxuICAgIH0pO1xuICB9XG4gIHJlcG9ydChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0Lm5vRGlmZkRlbGV0ZWQpIHtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKCdcXG5UaGUgZGlmZmVyZW5jZSBvZiBtaWdyYXRpb24gd2FzIG5vdCBkZXRlY3RlZC5cXG4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGRlbGV0ZWREaWZmID0gcmVzdWx0LmRlbGV0ZWREaWZmO1xuXG4gICAgT2JqZWN0LmtleXMoZGVsZXRlZERpZmYpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGxldCBkaWZmID0gZGVsZXRlZERpZmZbbmFtZV07XG4gICAgICB0aGlzLnRhYmxlLnB1c2goW1xuICAgICAgICBkaWZmLmxvY2FsLm5hbWUgfHwgJycsXG4gICAgICAgIGRpZmYucmVtb3RlLm5hbWUgfHwgJydcbiAgICAgIF0pO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUodGhpcy50YWJsZS50b1N0cmluZygpICsgJ1xcbicpO1xuICB9XG59XG4iXX0=