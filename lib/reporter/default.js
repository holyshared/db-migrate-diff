'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var DefaultReporter = (function (_AbstractReporter) {
  _inherits(DefaultReporter, _AbstractReporter);

  function DefaultReporter() {
    _classCallCheck(this, DefaultReporter);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DefaultReporter).call(this));

    _this2.table = new _cliTable2.default({
      head: ['Local', 'Remote'],
      colWidths: [40, 40],
      style: {
        head: ['white']
      }
    });
    return _this2;
  }

  _createClass(DefaultReporter, [{
    key: 'report',
    value: function report(result) {
      var _this = this;

      if (result.noDiffDeleted) {
        _console2.default.info('The difference of migration was not detected.');
        return;
      }
      var detectedDiff = result.detectedDiff;

      Object.keys(detectedDiff).forEach(function (name) {
        var diff = detectedDiff[name];
        var localFile = diff.local.path || '';
        var remoteFile = diff.remote.path || '';

        _this.table.push([(0, _path.basename)(localFile), (0, _path.basename)(remoteFile)]);
      }, this);
      _console2.default.log(this.table.toString() + '\n');
    }
  }]);

  return DefaultReporter;
})(_abstractReporter2.default);

exports.default = DefaultReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT1EsZUFBZTtZQUFmLGVBQWU7O0FBQ2xDLFdBRG1CLGVBQWUsR0FDcEI7MEJBREssZUFBZTs7d0VBQWYsZUFBZTs7QUFHaEMsV0FBSyxLQUFLLEdBQUcsdUJBQVU7QUFDckIsVUFBSSxFQUFFLENBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBRTtBQUMzQixlQUFTLEVBQUUsQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFFO0FBQ3JCLFdBQUssRUFBRTtBQUNMLFlBQUksRUFBRSxDQUFFLE9BQU8sQ0FBRTtPQUNsQjtLQUNGLENBQUMsQ0FBQzs7R0FDSjs7ZUFWa0IsZUFBZTs7MkJBVzNCLE1BQU0sRUFBRTs7O0FBQ2IsVUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO0FBQ3hCLDBCQUFRLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0FBQzlELGVBQU87T0FDUjtBQUNELFVBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7O0FBRXZDLFlBQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQzFDLFlBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixZQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7QUFDdEMsWUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDOztBQUV4QyxjQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FDZCxVQTFCQyxRQUFRLEVBMEJBLFNBQVMsQ0FBQyxFQUNuQixVQTNCQyxRQUFRLEVBMkJBLFVBQVUsQ0FBQyxDQUNyQixDQUFDLENBQUM7T0FDSixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1Qsd0JBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDM0M7OztTQTdCa0IsZUFBZTs7O2tCQUFmLGVBQWUiLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IFRhYmxlIGZyb20gJ2NsaS10YWJsZSc7XG5pbXBvcnQgQWJzdHJhY3RSZXBvcnRlciBmcm9tICcuL2Fic3RyYWN0LXJlcG9ydGVyJztcbmltcG9ydCBjb25zb2xlIGZyb20gJy4uL2NvbnNvbGUnO1xuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmYXVsdFJlcG9ydGVyIGV4dGVuZHMgQWJzdHJhY3RSZXBvcnRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50YWJsZSA9IG5ldyBUYWJsZSh7XG4gICAgICBoZWFkOiBbICdMb2NhbCcsICdSZW1vdGUnIF0sXG4gICAgICBjb2xXaWR0aHM6IFsgNDAsIDQwIF0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBoZWFkOiBbICd3aGl0ZScgXVxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJlcG9ydChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0Lm5vRGlmZkRlbGV0ZWQpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnVGhlIGRpZmZlcmVuY2Ugb2YgbWlncmF0aW9uIHdhcyBub3QgZGV0ZWN0ZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkZXRlY3RlZERpZmYgPSByZXN1bHQuZGV0ZWN0ZWREaWZmO1xuXG4gICAgT2JqZWN0LmtleXMoZGV0ZWN0ZWREaWZmKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBsZXQgZGlmZiA9IGRldGVjdGVkRGlmZltuYW1lXTtcbiAgICAgIGxldCBsb2NhbEZpbGUgPSBkaWZmLmxvY2FsLnBhdGggfHwgJyc7XG4gICAgICBsZXQgcmVtb3RlRmlsZSA9IGRpZmYucmVtb3RlLnBhdGggfHwgJyc7XG5cbiAgICAgIHRoaXMudGFibGUucHVzaChbXG4gICAgICAgIGJhc2VuYW1lKGxvY2FsRmlsZSksXG4gICAgICAgIGJhc2VuYW1lKHJlbW90ZUZpbGUpXG4gICAgICBdKTtcbiAgICB9LCB0aGlzKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlLnRvU3RyaW5nKCkgKyAnXFxuJyk7XG4gIH1cbn1cbiJdfQ==