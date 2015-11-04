'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _abstractReporter = require('./abstract-reporter');

var _abstractReporter2 = _interopRequireDefault(_abstractReporter);

var _console = require('../console');

var _console2 = _interopRequireDefault(_console);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GhostReporter = (function (_AbstractReporter) {
  _inherits(GhostReporter, _AbstractReporter);

  function GhostReporter() {
    _classCallCheck(this, GhostReporter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GhostReporter).call(this));
  }

  _createClass(GhostReporter, [{
    key: 'report',
    value: function report(result) {
      if (result.noDiffDeleted) {
        _console2.default.info('The difference of migration was not detected.');
        return;
      }
      var detectedDiff = result.detectedDiff;
      var ghostFiles = [];

      Object.keys(detectedDiff).forEach(function (name) {
        var diff = detectedDiff[name];
        var localFile = diff.local.path || null;
        var remoteFile = diff.remote.path || '';

        if (localFile === null && remoteFile) {
          ghostFiles.push(remoteFile);
        }
      }, this);

      if (ghostFiles.length <= 0) {
        return;
      }

      _console2.default.warn('WARNING');
      _console2.default.warn('────────────────────────────────────────');
      _console2.default.warn('The applied migration could not find from the local.');
      _console2.default.warn('Someone may have been deleted from the repository.');
      _console2.default.warn('Please be careful when applying the migration.\n');

      ghostFiles.forEach(function (remoteFile) {
        _console2.default.warn('* ' + remoteFile + '(.js|.coffee)');
      });

      _console2.default.warn('');
    }
  }]);

  return GhostReporter;
})(_abstractReporter2.default);

exports.default = GhostReporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9naG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTVEsYUFBYTtZQUFiLGFBQWE7O0FBQ2hDLFdBRG1CLGFBQWEsR0FDbEI7MEJBREssYUFBYTs7a0VBQWIsYUFBYTtHQUcvQjs7ZUFIa0IsYUFBYTs7MkJBSXpCLE1BQU0sRUFBRTtBQUNiLFVBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtBQUN4QiwwQkFBUSxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUM5RCxlQUFPO09BQ1I7QUFDRCxVQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3ZDLFVBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsWUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDMUMsWUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFlBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN4QyxZQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7O0FBRXhDLFlBQUksU0FBUyxLQUFLLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDcEMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0I7T0FDRixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULFVBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDMUIsZUFBTztPQUNSOztBQUVELHdCQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4Qix3QkFBUSxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztBQUN6RCx3QkFBUSxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUNyRSx3QkFBUSxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUNuRSx3QkFBUSxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQzs7QUFFakUsZ0JBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxVQUFVLEVBQUU7QUFDdkMsMEJBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsZUFBZSxDQUFDLENBQUM7T0FDbkQsQ0FBQyxDQUFDOztBQUVILHdCQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsQjs7O1NBckNrQixhQUFhOzs7a0JBQWIsYUFBYSIsImZpbGUiOiJnaG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEFic3RyYWN0UmVwb3J0ZXIgZnJvbSAnLi9hYnN0cmFjdC1yZXBvcnRlcic7XG5pbXBvcnQgY29uc29sZSBmcm9tICcuLi9jb25zb2xlJztcbmltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdob3N0UmVwb3J0ZXIgZXh0ZW5kcyBBYnN0cmFjdFJlcG9ydGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICByZXBvcnQocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5ub0RpZmZEZWxldGVkKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1RoZSBkaWZmZXJlbmNlIG9mIG1pZ3JhdGlvbiB3YXMgbm90IGRldGVjdGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZGV0ZWN0ZWREaWZmID0gcmVzdWx0LmRldGVjdGVkRGlmZjtcbiAgICBsZXQgZ2hvc3RGaWxlcyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoZGV0ZWN0ZWREaWZmKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBsZXQgZGlmZiA9IGRldGVjdGVkRGlmZltuYW1lXTtcbiAgICAgIGxldCBsb2NhbEZpbGUgPSBkaWZmLmxvY2FsLnBhdGggfHwgbnVsbDtcbiAgICAgIGxldCByZW1vdGVGaWxlID0gZGlmZi5yZW1vdGUucGF0aCB8fCAnJztcblxuICAgICAgaWYgKGxvY2FsRmlsZSA9PT0gbnVsbCAmJiByZW1vdGVGaWxlKSB7XG4gICAgICAgIGdob3N0RmlsZXMucHVzaChyZW1vdGVGaWxlKTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIGlmIChnaG9zdEZpbGVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HJyk7XG4gICAgY29uc29sZS53YXJuKCfilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIAnKTtcbiAgICBjb25zb2xlLndhcm4oJ1RoZSBhcHBsaWVkIG1pZ3JhdGlvbiBjb3VsZCBub3QgZmluZCBmcm9tIHRoZSBsb2NhbC4nKTtcbiAgICBjb25zb2xlLndhcm4oJ1NvbWVvbmUgbWF5IGhhdmUgYmVlbiBkZWxldGVkIGZyb20gdGhlIHJlcG9zaXRvcnkuJyk7XG4gICAgY29uc29sZS53YXJuKCdQbGVhc2UgYmUgY2FyZWZ1bCB3aGVuIGFwcGx5aW5nIHRoZSBtaWdyYXRpb24uXFxuJyk7XG5cbiAgICBnaG9zdEZpbGVzLmZvckVhY2goZnVuY3Rpb24gKHJlbW90ZUZpbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignKiAnICsgcmVtb3RlRmlsZSArICcoLmpzfC5jb2ZmZWUpJyk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLndhcm4oJycpO1xuICB9XG59XG4iXX0=