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
    key: 'noDiffDeleted',
    get: function get() {
      return Object.keys(this.detectedDiff).length <= 0;
    }
  }]);

  return DiffResult;
})();

exports.DiffResult = DiffResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWZmLWRldGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFBNkIsZUFBZTs7eUJBQ3BCLFlBQVk7O3dCQUNoQixVQUFVOzs7O21EQUNSLDZDQUE2Qzs7OztJQUU5QyxZQUFZO0FBQ3BCLFdBRFEsWUFBWSxDQUNuQixPQUFPLEVBQUU7MEJBREYsWUFBWTs7QUFFN0IsUUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDMUIsUUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0dBQ3pDOztlQUxrQixZQUFZOztXQU1iLDhCQUFHO0FBQ25CLFVBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7O0FBRXZDLGFBQU8sMEJBQVksVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGlCQUFTLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSztBQUM1RCxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUNwQjtBQUNELGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztXQUNlLDRCQUFHO0FBQ2pCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsVUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFdkMsYUFBTywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsaUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSztBQUNsRSxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENB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YUFBTyxRQUFRLENBQUM7S0FDakI7OztTQUNnQixlQUFHO0FBQ2xCLGFBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztLQUNuRDs7O1NBdkNVLFVBQVUiLCJmaWxlIjoiZGlmZi1kZXRlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0xvYWRlciB9IGZyb20gJy4uL2xpYi9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2RiLW1pZ3JhdGUnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IG1pZ3JhdGlvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvZGItbWlncmF0ZS9saWIvbWlncmF0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkRldGVjdG9yIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRyaXZlciA9IG9wdHMuZHJpdmVyO1xuICAgIHRoaXMubWlncmF0aW9uc0RpciA9IG9wdHMubWlncmF0aW9uc0RpcjtcbiAgfVxuICBsb2FkRnJvbUZpbGVzeXN0ZW0oKSB7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRmlsZXN5c3RlbShtaWdyYXRpb25zRGlyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGxvYWRGcm9tRGF0YWJhc2UoKSB7XG4gICAgbGV0IGRyaXZlciA9IHRoaXMuZHJpdmVyO1xuICAgIGxldCBtaWdyYXRpb25zRGlyID0gdGhpcy5taWdyYXRpb25zRGlyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIE1pZ3JhdGlvbi5sb2FkRnJvbURhdGFiYXNlKG1pZ3JhdGlvbnNEaXIsIGRyaXZlciwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkaWZmTWlncmF0aW9ucygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5wcm9wcyh7XG4gICAgICBsb2NhbDogdGhpcy5sb2FkRnJvbUZpbGVzeXN0ZW0oKSxcbiAgICAgIHJlbW90ZTogdGhpcy5sb2FkRnJvbURhdGFiYXNlKClcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGlmZlJlc3VsdChyZXN1bHQpO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEaWZmRGV0ZWN0b3Iob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpZmZSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHQpIHtcbiAgICB0aGlzLnJlc3VsdCA9IHt9O1xuICAgIHRoaXMubG9jYWwgPSByZXN1bHQubG9jYWw7XG4gICAgdGhpcy5yZW1vdGUgPSByZXN1bHQucmVtb3RlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBrZXlzID0ga2V5cy5jb25jYXQodGhpcy5sb2NhbC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpO1xuICAgIGtleXMgPSBrZXlzLmNvbmNhdCh0aGlzLnJlbW90ZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7IHRoaXMucmVzdWx0W2tleV0gPSB7IGxvY2FsOiB7fSwgcmVtb3RlOiB7fSB9OyB9LCB0aGlzKTtcblxuICAgIHRoaXMubG9jYWwuZm9yRWFjaCgobG9jYWwpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0W2xvY2FsLm5hbWVdLmxvY2FsID0gbG9jYWw7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5yZW1vdGUuZm9yRWFjaCgocmVtb3RlKSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdFtyZW1vdGUubmFtZV0ucmVtb3RlID0gcmVtb3RlO1xuICAgIH0sIHRoaXMpO1xuICB9XG4gIGdldCByZXN1bHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICBnZXQgZGV0ZWN0ZWREaWZmKCkge1xuICAgIGxldCBkaWZmT25seSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5yZXN1bHRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCBkaWZmID0gdGhpcy5yZXN1bHRzW2tleV07XG4gICAgICAvLyBraWxsZWQhIVxuICAgICAgaWYgKGRpZmYubG9jYWwubmFtZSA9PT0gZGlmZi5yZW1vdGUubmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkaWZmT25seVtrZXldID0gZGlmZjtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBkaWZmT25seTtcbiAgfVxuICBnZXQgbm9EaWZmRGVsZXRlZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kZXRlY3RlZERpZmYpLmxlbmd0aCA8PSAwO1xuICB9XG4gIHJlcG9ydFRvKHJlcG9ydGVyKSB7XG4gICAgcmVwb3J0ZXIucmVwb3J0KHRoaXMpO1xuICB9XG59XG4iXX0=