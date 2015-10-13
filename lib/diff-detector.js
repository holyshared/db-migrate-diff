'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _config = require('./config');

var _dbMigrate = require('db-migrate');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _dbMigrateLibMigrationJs = require('db-migrate/lib/migration.js');

var _dbMigrateLibMigrationJs2 = _interopRequireDefault(_dbMigrateLibMigrationJs);

var _lodash = require('lodash');

var DiffDetector = (function () {
  function DiffDetector(options) {
    _classCallCheck(this, DiffDetector);

    var opts = options || {};
    this.driver = opts.driver;
    this.migrationsDir = opts.migrationsDir;
  }

  _createClass(DiffDetector, [{
    key: 'loadFromFilesystem',
    value: function loadFromFilesystem() {
      var migrationsDir = this.migrationsDir;

      return new _bluebird2['default'](function (resolve, reject) {
        Migration.loadFromFilesystem(migrationsDir, function (err, results) {
          if (err) {
            return reject(err);
          }
          resolve(results);
        });
      });
    }
  }, {
    key: 'loadFromDatabase',
    value: function loadFromDatabase() {
      var driver = this.driver;
      var migrationsDir = this.migrationsDir;

      return new _bluebird2['default'](function (resolve, reject) {
        Migration.loadFromDatabase(migrationsDir, driver, function (err, results) {
          if (err) {
            return reject(err);
          }
          resolve(results);
        });
      });
    }
  }, {
    key: 'diffMigrations',
    value: function diffMigrations() {
      return _bluebird2['default'].props({
        local: this.loadFromFilesystem(),
        remote: this.loadFromDatabase()
      }).then(function (result) {
        return new DiffResult(result);
      });
    }
  }], [{
    key: 'fromOptions',
    value: function fromOptions(options) {
      return new DiffDetector(options);
    }
  }]);

  return DiffDetector;
})();

exports['default'] = DiffDetector;

var DiffResult = (function () {
  function DiffResult(result) {
    _classCallCheck(this, DiffResult);

    this.result = {};
    this.local = result.local;
    this.remote = result.remote;
    this.init();
  }

  _createClass(DiffResult, [{
    key: 'init',
    value: function init() {
      var _this = this;

      var keys = [];
      keys = keys.concat(this.local.map(function (item) {
        return item.name;
      }));
      keys = keys.concat(this.remote.map(function (item) {
        return item.name;
      }));
      keys.forEach(function (key) {
        _this.result[key] = { local: {}, remote: {} };
      }, this);

      this.local.forEach(function (local) {
        _this.result[local.name].local = local;
      }, this);
      this.remote.forEach(function (remote) {
        _this.result[remote.name].remote = remote;
      }, this);
    }
  }, {
    key: 'reportTo',
    value: function reportTo(reporter) {
      reporter.report(this);
    }
  }, {
    key: 'results',
    get: function get() {
      return this.result;
    }
  }, {
    key: 'detectedDiff',
    get: function get() {
      var _this2 = this;

      var diffOnly = {};

      Object.keys(this.results).forEach(function (key) {
        var diff = _this2.results[key];
        // killed!!
        if (diff.local.name === diff.remote.name) {
          return;
        }
        diffOnly[key] = diff;
      }, this);

      return diffOnly;
    }
  }, {
    key: 'ghosts',
    get: function get() {
      var ghostDiff = [];

      (0, _lodash.forIn)(this.detectedDiff, function (diff, key) {
        var localFile = diff.local.path || null;
        var remoteFile = diff.remote.path || '';

        if (localFile === null && remoteFile) {
          ghostDiff.push(diff.remote);
        }
      });
      return ghostDiff;
    }
  }, {
    key: 'hasGhosts',
    get: function get() {
      return this.ghosts.length >= 0;
    }
  }, {
    key: 'noDiffDeleted',
    get: function get() {
      return Object.keys(this.detectedDiff).length <= 0;
    }
  }]);

  return DiffResult;
})();

exports.DiffResult = DiffResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWZmLWRldGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztzQkFBNkIsVUFBVTs7eUJBQ2YsWUFBWTs7d0JBQ2hCLFVBQVU7Ozs7dUNBQ1IsNkJBQTZCOzs7O3NCQUM3QixRQUFROztJQUVULFlBQVk7QUFDcEIsV0FEUSxZQUFZLENBQ25CLE9BQU8sRUFBRTswQkFERixZQUFZOztBQUU3QixRQUFJLElBQUksR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMxQixRQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7R0FDekM7O2VBTGtCLFlBQVk7O1dBTWIsOEJBQUc7QUFDbkIsVUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFdkMsYUFBTywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsaUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFLO0FBQzVELGNBQUksR0FBRyxFQUFFO0FBQ1AsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQ3BCO0FBQ0QsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSjs7O1dBQ2UsNEJBQUc7QUFDakIsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixVQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDOztBQUV2QyxhQUFPLDBCQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxpQkFBUyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFLO0FBQ2xFLGNBQUksR0FBRyxFQUFFO0FBQ1AsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQ3BCO0FBQ0QsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSjs7O1dBQ2EsMEJBQUc7QUFDZixhQUFPLHNCQUFRLEtBQUssQ0FBQztBQUNuQixhQUFLLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQ2hDLGNBQU0sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7T0FDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUNsQixlQUFPLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQy9CLENBQUMsQ0FBQztLQUNKOzs7V0FDaUIscUJBQUMsT0FBTyxFQUFFO0FBQzFCLGFBQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEM7OztTQXpDa0IsWUFBWTs7O3FCQUFaLFlBQVk7O0lBNENwQixVQUFVO0FBQ1YsV0FEQSxVQUFVLENBQ1QsTUFBTSxFQUFFOzBCQURULFVBQVU7O0FBRW5CLFFBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUMxQixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDNUIsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2I7O2VBTlUsVUFBVTs7V0FPakIsZ0JBQUc7OztBQUNMLFVBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUNkLFVBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSTtlQUFLLElBQUksQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDLENBQUM7QUFDeEQsVUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJO2VBQUssSUFBSSxDQUFDLElBQUk7T0FBQSxDQUFDLENBQUMsQ0FBQztBQUN6RCxVQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFLO0FBQUUsY0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztPQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRS9FLFVBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFLO0FBQzVCLGNBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO09BQ3ZDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxVQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUM5QixjQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztPQUMxQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Y7OztXQXFDTyxrQkFBQyxRQUFRLEVBQUU7QUFDakIsY0FBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2Qjs7O1NBdENVLGVBQUc7QUFDWixhQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7OztTQUNlLGVBQUc7OztBQUNqQixVQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRWxCLFlBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBSztBQUN6QyxZQUFJLElBQUksR0FBRyxPQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFN0IsWUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUN4QyxpQkFBTztTQUNSO0FBQ0QsZ0JBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdEIsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFVCxhQUFPLFFBQVEsQ0FBQztLQUNqQjs7O1NBQ1MsZUFBRztBQUNYLFVBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIseUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFTLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsWUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3hDLFlBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7QUFFeEMsWUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNwQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7T0FDRixDQUFDLENBQUM7QUFDSCxhQUFPLFNBQVMsQ0FBQztLQUNsQjs7O1NBQ1ksZUFBRztBQUNkLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ2hDOzs7U0FDZ0IsZUFBRztBQUNsQixhQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDbkQ7OztTQXZEVSxVQUFVIiwiZmlsZSI6ImRpZmYtZGV0ZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWdMb2FkZXIgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnZGItbWlncmF0ZSc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgbWlncmF0aW9uIGZyb20gJ2RiLW1pZ3JhdGUvbGliL21pZ3JhdGlvbi5qcyc7XG5pbXBvcnQgeyBmb3JJbiB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpZmZEZXRlY3RvciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBsZXQgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5kcml2ZXIgPSBvcHRzLmRyaXZlcjtcbiAgICB0aGlzLm1pZ3JhdGlvbnNEaXIgPSBvcHRzLm1pZ3JhdGlvbnNEaXI7XG4gIH1cbiAgbG9hZEZyb21GaWxlc3lzdGVtKCkge1xuICAgIGxldCBtaWdyYXRpb25zRGlyID0gdGhpcy5taWdyYXRpb25zRGlyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIE1pZ3JhdGlvbi5sb2FkRnJvbUZpbGVzeXN0ZW0obWlncmF0aW9uc0RpciwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBsb2FkRnJvbURhdGFiYXNlKCkge1xuICAgIGxldCBkcml2ZXIgPSB0aGlzLmRyaXZlcjtcbiAgICBsZXQgbWlncmF0aW9uc0RpciA9IHRoaXMubWlncmF0aW9uc0RpcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBNaWdyYXRpb24ubG9hZEZyb21EYXRhYmFzZShtaWdyYXRpb25zRGlyLCBkcml2ZXIsIChlcnIsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZGlmZk1pZ3JhdGlvbnMoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucHJvcHMoe1xuICAgICAgbG9jYWw6IHRoaXMubG9hZEZyb21GaWxlc3lzdGVtKCksXG4gICAgICByZW1vdGU6IHRoaXMubG9hZEZyb21EYXRhYmFzZSgpXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IERpZmZSZXN1bHQocmVzdWx0KTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZnJvbU9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRGlmZkRldGVjdG9yKG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWZmUmVzdWx0IHtcbiAgY29uc3RydWN0b3IocmVzdWx0KSB7XG4gICAgdGhpcy5yZXN1bHQgPSB7fTtcbiAgICB0aGlzLmxvY2FsID0gcmVzdWx0LmxvY2FsO1xuICAgIHRoaXMucmVtb3RlID0gcmVzdWx0LnJlbW90ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGxldCBrZXlzID0gW107XG4gICAga2V5cyA9IGtleXMuY29uY2F0KHRoaXMubG9jYWwubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpKTtcbiAgICBrZXlzID0ga2V5cy5jb25jYXQodGhpcy5yZW1vdGUubWFwKChpdGVtKSA9PiBpdGVtLm5hbWUpKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4geyB0aGlzLnJlc3VsdFtrZXldID0geyBsb2NhbDoge30sIHJlbW90ZToge30gfTsgfSwgdGhpcyk7XG5cbiAgICB0aGlzLmxvY2FsLmZvckVhY2goKGxvY2FsKSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdFtsb2NhbC5uYW1lXS5sb2NhbCA9IGxvY2FsO1xuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMucmVtb3RlLmZvckVhY2goKHJlbW90ZSkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHRbcmVtb3RlLm5hbWVdLnJlbW90ZSA9IHJlbW90ZTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuICBnZXQgcmVzdWx0cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cbiAgZ2V0IGRldGVjdGVkRGlmZigpIHtcbiAgICBsZXQgZGlmZk9ubHkgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMucmVzdWx0cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBsZXQgZGlmZiA9IHRoaXMucmVzdWx0c1trZXldO1xuICAgICAgLy8ga2lsbGVkISFcbiAgICAgIGlmIChkaWZmLmxvY2FsLm5hbWUgPT09IGRpZmYucmVtb3RlLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGlmZk9ubHlba2V5XSA9IGRpZmY7XG4gICAgfSwgdGhpcyk7XG5cbiAgICByZXR1cm4gZGlmZk9ubHk7XG4gIH1cbiAgZ2V0IGdob3N0cygpIHtcbiAgICBsZXQgZ2hvc3REaWZmID0gW107XG5cbiAgICBmb3JJbih0aGlzLmRldGVjdGVkRGlmZiwgZnVuY3Rpb24oZGlmZiwga2V5KSB7XG4gICAgICBsZXQgbG9jYWxGaWxlID0gZGlmZi5sb2NhbC5wYXRoIHx8IG51bGw7XG4gICAgICBsZXQgcmVtb3RlRmlsZSA9IGRpZmYucmVtb3RlLnBhdGggfHwgJyc7XG5cbiAgICAgIGlmIChsb2NhbEZpbGUgPT09IG51bGwgJiYgcmVtb3RlRmlsZSkge1xuICAgICAgICBnaG9zdERpZmYucHVzaChkaWZmLnJlbW90ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGdob3N0RGlmZjtcbiAgfVxuICBnZXQgaGFzR2hvc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdob3N0cy5sZW5ndGggPj0gMDtcbiAgfVxuICBnZXQgbm9EaWZmRGVsZXRlZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kZXRlY3RlZERpZmYpLmxlbmd0aCA8PSAwO1xuICB9XG4gIHJlcG9ydFRvKHJlcG9ydGVyKSB7XG4gICAgcmVwb3J0ZXIucmVwb3J0KHRoaXMpO1xuICB9XG59XG4iXX0=