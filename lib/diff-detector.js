'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libConfig = require('../lib/config');

var _dbMigrate = require('db-migrate');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _node_modulesDbMigrateLibMigrationJs = require('../node_modules/db-migrate/lib/migration.js');

var _node_modulesDbMigrateLibMigrationJs2 = _interopRequireDefault(_node_modulesDbMigrateLibMigrationJs);

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

      this.local.forEach(function (local) {
        _this[local.name] = _this[local.name] || { local: null };
        _this[local.name].local = local;
      }, this.result);
      this.remote.forEach(function (remote) {
        _this[remote.name] = _this[remote.name] || { remote: null };
        _this[remote.name].remote = remote;
      }, this.result);
    }
  }, {
    key: 'reportTo',
    value: function reportTo(reporter) {
      reporter.report(this);
    }
  }, {
    key: 'diff',
    get: function get() {
      return this.result;
    }
  }]);

  return DiffResult;
})();

exports.DiffResult = DiffResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWZmLWRldGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFBNkIsZUFBZTs7eUJBQ3BCLFlBQVk7O3dCQUNoQixVQUFVOzs7O21EQUNSLDZDQUE2Qzs7OztJQUU5QyxZQUFZO0FBQ3BCLFdBRFEsWUFBWSxDQUNuQixPQUFPLEVBQUU7MEJBREYsWUFBWTs7QUFFN0IsUUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDMUIsUUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0dBQ3pDOztlQUxrQixZQUFZOztXQU1iLDhCQUFHO0FBQ25CLFVBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7O0FBRXZDLGFBQU8sMEJBQVksVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGlCQUFTLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSztBQUM1RCxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUNwQjtBQUNELGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztXQUNlLDRCQUFHO0FBQ2pCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsVUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFdkMsYUFBTywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsaUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSztBQUNsRSxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUNwQjtBQUNELGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztXQUNhLDBCQUFHO0FBQ2YsYUFBTyxzQkFBUSxLQUFLLENBQUM7QUFDbkIsYUFBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNoQyxjQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO09BQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDbEIsZUFBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUMvQixDQUFDLENBQUM7S0FDSjs7O1dBQ2lCLHFCQUFDLE9BQU8sRUFBRTtBQUMxQixhQUFPLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDOzs7U0F6Q2tCLFlBQVk7OztxQkFBWixZQUFZOztJQTRDcEIsVUFBVTtBQUNWLFdBREEsVUFBVSxDQUNULE1BQU0sRUFBRTswQkFEVCxVQUFVOztBQUVuQixRQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixRQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDMUIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQzVCLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiOztlQU5VLFVBQVU7O1dBT2pCLGdCQUFHOzs7QUFDTCxVQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBSztBQUM1QixjQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUN2RCxjQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO09BQ2hDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hCLFVBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTSxFQUFLO0FBQzlCLGNBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQzFELGNBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDbkMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDakI7OztXQUlPLGtCQUFDLFFBQVEsRUFBRTtBQUNqQixjQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7U0FMTyxlQUFHO0FBQ1QsYUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7U0FuQlUsVUFBVSIsImZpbGUiOiJkaWZmLWRldGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnTG9hZGVyIH0gZnJvbSAnLi4vbGliL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnZGItbWlncmF0ZSc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgbWlncmF0aW9uIGZyb20gJy4uL25vZGVfbW9kdWxlcy9kYi1taWdyYXRlL2xpYi9taWdyYXRpb24uanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuZHJpdmVyID0gb3B0cy5kcml2ZXI7XG4gICAgdGhpcy5taWdyYXRpb25zRGlyID0gb3B0cy5taWdyYXRpb25zRGlyO1xuICB9XG4gIGxvYWRGcm9tRmlsZXN5c3RlbSgpIHtcbiAgICBsZXQgbWlncmF0aW9uc0RpciA9IHRoaXMubWlncmF0aW9uc0RpcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBNaWdyYXRpb24ubG9hZEZyb21GaWxlc3lzdGVtKG1pZ3JhdGlvbnNEaXIsIChlcnIsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgbG9hZEZyb21EYXRhYmFzZSgpIHtcbiAgICBsZXQgZHJpdmVyID0gdGhpcy5kcml2ZXI7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRGF0YWJhc2UobWlncmF0aW9uc0RpciwgZHJpdmVyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGRpZmZNaWdyYXRpb25zKCkge1xuICAgIHJldHVybiBQcm9taXNlLnByb3BzKHtcbiAgICAgIGxvY2FsOiB0aGlzLmxvYWRGcm9tRmlsZXN5c3RlbSgpLFxuICAgICAgcmVtb3RlOiB0aGlzLmxvYWRGcm9tRGF0YWJhc2UoKVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEaWZmUmVzdWx0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IERpZmZEZXRlY3RvcihvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlmZlJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdCkge1xuICAgIHRoaXMucmVzdWx0ID0ge307XG4gICAgdGhpcy5sb2NhbCA9IHJlc3VsdC5sb2NhbDtcbiAgICB0aGlzLnJlbW90ZSA9IHJlc3VsdC5yZW1vdGU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmxvY2FsLmZvckVhY2goKGxvY2FsKSA9PiB7XG4gICAgICB0aGlzW2xvY2FsLm5hbWVdID0gdGhpc1tsb2NhbC5uYW1lXSB8fCB7IGxvY2FsOiBudWxsIH07XG4gICAgICB0aGlzW2xvY2FsLm5hbWVdLmxvY2FsID0gbG9jYWw7XG4gICAgfSwgdGhpcy5yZXN1bHQpO1xuICAgIHRoaXMucmVtb3RlLmZvckVhY2goKHJlbW90ZSkgPT4ge1xuICAgICAgdGhpc1tyZW1vdGUubmFtZV0gPSB0aGlzW3JlbW90ZS5uYW1lXSB8fCB7IHJlbW90ZTogbnVsbCB9O1xuICAgICAgdGhpc1tyZW1vdGUubmFtZV0ucmVtb3RlID0gcmVtb3RlO1xuICAgIH0sIHRoaXMucmVzdWx0KTtcbiAgfVxuICBnZXQgZGlmZigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cbiAgcmVwb3J0VG8ocmVwb3J0ZXIpIHtcbiAgICByZXBvcnRlci5yZXBvcnQodGhpcyk7XG4gIH1cbn1cbiJdfQ==