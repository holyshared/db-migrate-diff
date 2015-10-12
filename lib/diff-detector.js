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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWZmLWRldGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztzQkFBNkIsVUFBVTs7eUJBQ2YsWUFBWTs7d0JBQ2hCLFVBQVU7Ozs7bURBQ1IsNkNBQTZDOzs7O0lBRTlDLFlBQVk7QUFDcEIsV0FEUSxZQUFZLENBQ25CLE9BQU8sRUFBRTswQkFERixZQUFZOztBQUU3QixRQUFJLElBQUksR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3pCLFFBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUMxQixRQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7R0FDekM7O2VBTGtCLFlBQVk7O1dBTWIsOEJBQUc7QUFDbkIsVUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFdkMsYUFBTywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsaUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFLO0FBQzVELGNBQUksR0FBRyxFQUFFO0FBQ1AsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQ3BCO0FBQ0QsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7T0FDSixDQUFDLENBQUM7S0FDSjs7O1dBQ2UsNEJBQUc7QUFDakIsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixVQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDOztBQUV2QyxhQUFPLDBCQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxpQkFBUyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFLO0FBQ2xFLGNBQUksR0FBRyxFQUFFO0FBQ1AsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FB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QUFPLFFBQVEsQ0FBQztLQUNqQjs7O1NBQ2dCLGVBQUc7QUFDbEIsYUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ25EOzs7U0F2Q1UsVUFBVSIsImZpbGUiOiJkaWZmLWRldGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnTG9hZGVyIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2RiLW1pZ3JhdGUnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IG1pZ3JhdGlvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvZGItbWlncmF0ZS9saWIvbWlncmF0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkRldGVjdG9yIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRyaXZlciA9IG9wdHMuZHJpdmVyO1xuICAgIHRoaXMubWlncmF0aW9uc0RpciA9IG9wdHMubWlncmF0aW9uc0RpcjtcbiAgfVxuICBsb2FkRnJvbUZpbGVzeXN0ZW0oKSB7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRmlsZXN5c3RlbShtaWdyYXRpb25zRGlyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGxvYWRGcm9tRGF0YWJhc2UoKSB7XG4gICAgbGV0IGRyaXZlciA9IHRoaXMuZHJpdmVyO1xuICAgIGxldCBtaWdyYXRpb25zRGlyID0gdGhpcy5taWdyYXRpb25zRGlyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIE1pZ3JhdGlvbi5sb2FkRnJvbURhdGFiYXNlKG1pZ3JhdGlvbnNEaXIsIGRyaXZlciwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkaWZmTWlncmF0aW9ucygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5wcm9wcyh7XG4gICAgICBsb2NhbDogdGhpcy5sb2FkRnJvbUZpbGVzeXN0ZW0oKSxcbiAgICAgIHJlbW90ZTogdGhpcy5sb2FkRnJvbURhdGFiYXNlKClcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGlmZlJlc3VsdChyZXN1bHQpO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEaWZmRGV0ZWN0b3Iob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpZmZSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHQpIHtcbiAgICB0aGlzLnJlc3VsdCA9IHt9O1xuICAgIHRoaXMubG9jYWwgPSByZXN1bHQubG9jYWw7XG4gICAgdGhpcy5yZW1vdGUgPSByZXN1bHQucmVtb3RlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBrZXlzID0ga2V5cy5jb25jYXQodGhpcy5sb2NhbC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpO1xuICAgIGtleXMgPSBrZXlzLmNvbmNhdCh0aGlzLnJlbW90ZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7IHRoaXMucmVzdWx0W2tleV0gPSB7IGxvY2FsOiB7fSwgcmVtb3RlOiB7fSB9OyB9LCB0aGlzKTtcblxuICAgIHRoaXMubG9jYWwuZm9yRWFjaCgobG9jYWwpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0W2xvY2FsLm5hbWVdLmxvY2FsID0gbG9jYWw7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5yZW1vdGUuZm9yRWFjaCgocmVtb3RlKSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdFtyZW1vdGUubmFtZV0ucmVtb3RlID0gcmVtb3RlO1xuICAgIH0sIHRoaXMpO1xuICB9XG4gIGdldCByZXN1bHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICBnZXQgZGV0ZWN0ZWREaWZmKCkge1xuICAgIGxldCBkaWZmT25seSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5yZXN1bHRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCBkaWZmID0gdGhpcy5yZXN1bHRzW2tleV07XG4gICAgICAvLyBraWxsZWQhIVxuICAgICAgaWYgKGRpZmYubG9jYWwubmFtZSA9PT0gZGlmZi5yZW1vdGUubmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkaWZmT25seVtrZXldID0gZGlmZjtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBkaWZmT25seTtcbiAgfVxuICBnZXQgbm9EaWZmRGVsZXRlZCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kZXRlY3RlZERpZmYpLmxlbmd0aCA8PSAwO1xuICB9XG4gIHJlcG9ydFRvKHJlcG9ydGVyKSB7XG4gICAgcmVwb3J0ZXIucmVwb3J0KHRoaXMpO1xuICB9XG59XG4iXX0=