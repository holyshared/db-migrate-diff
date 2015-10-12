//import Table from 'cli-table';
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _abstractReporter = require('./abstract-reporter');

var _abstractReporter2 = _interopRequireDefault(_abstractReporter);

var _console = require('../console');

var _console2 = _interopRequireDefault(_console);

var _path = require('path');

var GhostReporter = (function (_AbstractReporter) {
  _inherits(GhostReporter, _AbstractReporter);

  function GhostReporter() {
    _classCallCheck(this, GhostReporter);

    _get(Object.getPrototypeOf(GhostReporter.prototype), 'constructor', this).call(this);

    /*
        this.table = new Table({
          head: [ 'Local', 'Remote' ],
          colWidths: [ 40, 40 ],
          style: {
            head: [ 'white' ]
          }
        });
        */
  }

  _createClass(GhostReporter, [{
    key: 'report',
    value: function report(result) {
      if (result.noDiffDeleted) {
        _console2['default'].info('The difference of migration was not detected.');
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

      _console2['default'].warn('WARNING');
      _console2['default'].warn('────────────────────────────────────────');
      _console2['default'].warn('The applied migration could not find from the local.');
      _console2['default'].warn('Someone may have been deleted from the repository.');
      _console2['default'].warn('Please be careful when applying the migration.\n');

      ghostFiles.forEach(function (remoteFile) {
        _console2['default'].warn('* ' + remoteFile + '(.js|.coffee)');
      });

      _console2['default'].warn('');
    }
  }]);

  return GhostReporter;
})(_abstractReporter2['default']);

exports['default'] = GhostReporter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9naG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztnQ0FDNkIscUJBQXFCOzs7O3VCQUM5QixZQUFZOzs7O29CQUNQLE1BQU07O0lBRVYsYUFBYTtZQUFiLGFBQWE7O0FBQ3JCLFdBRFEsYUFBYSxHQUNsQjswQkFESyxhQUFhOztBQUU5QiwrQkFGaUIsYUFBYSw2Q0FFdEI7Ozs7Ozs7Ozs7O0dBV1Q7O2VBYmtCLGFBQWE7O1dBYzFCLGdCQUFDLE1BQU0sRUFBRTtBQUNiLFVBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtBQUN4Qiw2QkFBUSxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQztBQUM5RCxlQUFPO09BQ1I7QUFDRCxVQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQ3ZDLFVBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsWUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDMUMsWUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLFlBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUN4QyxZQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7O0FBRXhDLFlBQUksU0FBUyxLQUFLLElBQUksSUFBSSxVQUFVLEVBQUU7QUFDcEMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0I7T0FDRixFQUFFLElBQUksQ0FBQyxDQUFDOztBQUVULFVBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDMUIsZUFBTztPQUNSOztBQUVELDJCQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4QiwyQkFBUSxJQUFJLENBQUMsMENBQTBDLENBQUMsQ0FBQztBQUN6RCwyQkFBUSxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUNyRSwyQkFBUSxJQUFJLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUNuRSwyQkFBUSxJQUFJLENBQUMsa0RBQWtELENBQUMsQ0FBQzs7QUFFakUsZ0JBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxVQUFVLEVBQUU7QUFDdkMsNkJBQVEsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsZUFBZSxDQUFDLENBQUM7T0FDbkQsQ0FBQyxDQUFDOztBQUVILDJCQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsQjs7O1NBL0NrQixhQUFhOzs7cUJBQWIsYUFBYSIsImZpbGUiOiJnaG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IFRhYmxlIGZyb20gJ2NsaS10YWJsZSc7XG5pbXBvcnQgQWJzdHJhY3RSZXBvcnRlciBmcm9tICcuL2Fic3RyYWN0LXJlcG9ydGVyJztcbmltcG9ydCBjb25zb2xlIGZyb20gJy4uL2NvbnNvbGUnO1xuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2hvc3RSZXBvcnRlciBleHRlbmRzIEFic3RyYWN0UmVwb3J0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4vKlxuICAgIHRoaXMudGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgaGVhZDogWyAnTG9jYWwnLCAnUmVtb3RlJyBdLFxuICAgICAgY29sV2lkdGhzOiBbIDQwLCA0MCBdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgaGVhZDogWyAnd2hpdGUnIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAqL1xuICB9XG4gIHJlcG9ydChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0Lm5vRGlmZkRlbGV0ZWQpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnVGhlIGRpZmZlcmVuY2Ugb2YgbWlncmF0aW9uIHdhcyBub3QgZGV0ZWN0ZWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkZXRlY3RlZERpZmYgPSByZXN1bHQuZGV0ZWN0ZWREaWZmO1xuICAgIGxldCBnaG9zdEZpbGVzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhkZXRlY3RlZERpZmYpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGxldCBkaWZmID0gZGV0ZWN0ZWREaWZmW25hbWVdO1xuICAgICAgbGV0IGxvY2FsRmlsZSA9IGRpZmYubG9jYWwucGF0aCB8fCBudWxsO1xuICAgICAgbGV0IHJlbW90ZUZpbGUgPSBkaWZmLnJlbW90ZS5wYXRoIHx8ICcnO1xuXG4gICAgICBpZiAobG9jYWxGaWxlID09PSBudWxsICYmIHJlbW90ZUZpbGUpIHtcbiAgICAgICAgZ2hvc3RGaWxlcy5wdXNoKHJlbW90ZUZpbGUpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgaWYgKGdob3N0RmlsZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkcnKTtcbiAgICBjb25zb2xlLndhcm4oJ+KUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgCcpO1xuICAgIGNvbnNvbGUud2FybignVGhlIGFwcGxpZWQgbWlncmF0aW9uIGNvdWxkIG5vdCBmaW5kIGZyb20gdGhlIGxvY2FsLicpO1xuICAgIGNvbnNvbGUud2FybignU29tZW9uZSBtYXkgaGF2ZSBiZWVuIGRlbGV0ZWQgZnJvbSB0aGUgcmVwb3NpdG9yeS4nKTtcbiAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBiZSBjYXJlZnVsIHdoZW4gYXBwbHlpbmcgdGhlIG1pZ3JhdGlvbi5cXG4nKTtcblxuICAgIGdob3N0RmlsZXMuZm9yRWFjaChmdW5jdGlvbiAocmVtb3RlRmlsZSkge1xuICAgICAgY29uc29sZS53YXJuKCcqICcgKyByZW1vdGVGaWxlICsgJyguanN8LmNvZmZlZSknKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUud2FybignJyk7XG4gIH1cbn1cbiJdfQ==