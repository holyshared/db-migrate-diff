'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _cliTable = require('cli-table');

var _cliTable2 = _interopRequireDefault(_cliTable);

var Reporter = (function () {
  function Reporter() {
    _classCallCheck(this, Reporter);
  }

  _createClass(Reporter, [{
    key: 'report',
    value: function report(result) {
      throw new Error('Please implement the report method');
    }
  }]);

  return Reporter;
})();

exports.Reporter = Reporter;

var DefaultReporter = (function (_Reporter) {
  _inherits(DefaultReporter, _Reporter);

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
})(Reporter);

exports['default'] = DefaultReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFrQixXQUFXOzs7O0lBRWhCLFFBQVE7V0FBUixRQUFROzBCQUFSLFFBQVE7OztlQUFSLFFBQVE7O1dBQ2IsZ0JBQUMsTUFBTSxFQUFFO0FBQ2IsWUFBTSxJQUFJLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQ3ZEOzs7U0FIVSxRQUFROzs7OztJQU1BLGVBQWU7WUFBZixlQUFlOztBQUN2QixXQURRLGVBQWUsR0FDcEI7MEJBREssZUFBZTs7QUFFaEMsK0JBRmlCLGVBQWUsNkNBRXhCO0FBQ1IsUUFBSSxDQUFDLEtBQUssR0FBRywwQkFBVTtBQUNyQixVQUFJLEVBQUUsQ0FBRSxPQUFPLEVBQUUsUUFBUSxDQUFFO0FBQzNCLGVBQVMsRUFBRSxDQUFFLEVBQUUsRUFBRSxFQUFFLENBQUU7S0FDdEIsQ0FBQyxDQUFDO0dBQ0o7O2VBUGtCLGVBQWU7O1dBUTVCLGdCQUFDLE1BQU0sRUFBRTs7O0FBQ2IsVUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO0FBQ3hCLGVBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDMUUsZUFBTztPQUNSO0FBQ0QsVUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQzs7QUFFdkMsWUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDMUMsWUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLGNBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUN2QixDQUFDLENBQUM7T0FDSixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULGFBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEQ7OztTQXhCa0IsZUFBZTtHQUFTLFFBQVE7O3FCQUFoQyxlQUFlIiwiZmlsZSI6InJlcG9ydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYmxlIGZyb20gJ2NsaS10YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRlciB7XG4gIHJlcG9ydChyZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBpbXBsZW1lbnQgdGhlIHJlcG9ydCBtZXRob2QnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZhdWx0UmVwb3J0ZXIgZXh0ZW5kcyBSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50YWJsZSA9IG5ldyBUYWJsZSh7XG4gICAgICBoZWFkOiBbICdMb2NhbCcsICdSZW1vdGUnIF0sXG4gICAgICBjb2xXaWR0aHM6IFsgNDAsIDQwIF1cbiAgICB9KTtcbiAgfVxuICByZXBvcnQocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5ub0RpZmZEZWxldGVkKSB7XG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnXFxuVGhlIGRpZmZlcmVuY2Ugb2YgbWlncmF0aW9uIHdhcyBub3QgZGV0ZWN0ZWQuXFxuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkZXRlY3RlZERpZmYgPSByZXN1bHQuZGV0ZWN0ZWREaWZmO1xuXG4gICAgT2JqZWN0LmtleXMoZGV0ZWN0ZWREaWZmKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBsZXQgZGlmZiA9IGRldGVjdGVkRGlmZltuYW1lXTtcbiAgICAgIHRoaXMudGFibGUucHVzaChbXG4gICAgICAgIGRpZmYubG9jYWwubmFtZSB8fCAnJyxcbiAgICAgICAgZGlmZi5yZW1vdGUubmFtZSB8fCAnJ1xuICAgICAgXSk7XG4gICAgfSwgdGhpcyk7XG5cbiAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSh0aGlzLnRhYmxlLnRvU3RyaW5nKCkgKyAnXFxuJyk7XG4gIH1cbn1cbiJdfQ==