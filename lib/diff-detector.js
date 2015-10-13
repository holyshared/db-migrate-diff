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
//# sourceMappingURL=data:application/json;base64,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Q0FBQzs7QUFFVCxhQUFPLFFBQVEsQ0FBQztLQUNqQjs7O1NBQ1MsZUFBRztBQUNYLFVBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIseUJBQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFTLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsWUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3hDLFlBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7QUFFeEMsWUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNwQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7T0FDRixDQUFDLENBQUM7QUFDSCxhQUFPLFNBQVMsQ0FBQztLQUNsQjs7O1NBQ1ksZUFBRztBQUNkLGFBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ2hDOzs7U0FDZ0IsZUFBRztBQUNsQixhQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDbkQ7OztTQXZEVSxVQUFVIiwiZmlsZSI6ImRpZmYtZGV0ZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWdMb2FkZXIgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnZGItbWlncmF0ZSc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgbWlncmF0aW9uIGZyb20gJy4uL25vZGVfbW9kdWxlcy9kYi1taWdyYXRlL2xpYi9taWdyYXRpb24uanMnO1xuaW1wb3J0IHsgZm9ySW4gfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuZHJpdmVyID0gb3B0cy5kcml2ZXI7XG4gICAgdGhpcy5taWdyYXRpb25zRGlyID0gb3B0cy5taWdyYXRpb25zRGlyO1xuICB9XG4gIGxvYWRGcm9tRmlsZXN5c3RlbSgpIHtcbiAgICBsZXQgbWlncmF0aW9uc0RpciA9IHRoaXMubWlncmF0aW9uc0RpcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBNaWdyYXRpb24ubG9hZEZyb21GaWxlc3lzdGVtKG1pZ3JhdGlvbnNEaXIsIChlcnIsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgbG9hZEZyb21EYXRhYmFzZSgpIHtcbiAgICBsZXQgZHJpdmVyID0gdGhpcy5kcml2ZXI7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRGF0YWJhc2UobWlncmF0aW9uc0RpciwgZHJpdmVyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGRpZmZNaWdyYXRpb25zKCkge1xuICAgIHJldHVybiBQcm9taXNlLnByb3BzKHtcbiAgICAgIGxvY2FsOiB0aGlzLmxvYWRGcm9tRmlsZXN5c3RlbSgpLFxuICAgICAgcmVtb3RlOiB0aGlzLmxvYWRGcm9tRGF0YWJhc2UoKVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEaWZmUmVzdWx0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IERpZmZEZXRlY3RvcihvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlmZlJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdCkge1xuICAgIHRoaXMucmVzdWx0ID0ge307XG4gICAgdGhpcy5sb2NhbCA9IHJlc3VsdC5sb2NhbDtcbiAgICB0aGlzLnJlbW90ZSA9IHJlc3VsdC5yZW1vdGU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGtleXMgPSBrZXlzLmNvbmNhdCh0aGlzLmxvY2FsLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSk7XG4gICAga2V5cyA9IGtleXMuY29uY2F0KHRoaXMucmVtb3RlLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHsgdGhpcy5yZXN1bHRba2V5XSA9IHsgbG9jYWw6IHt9LCByZW1vdGU6IHt9IH07IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5sb2NhbC5mb3JFYWNoKChsb2NhbCkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHRbbG9jYWwubmFtZV0ubG9jYWwgPSBsb2NhbDtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnJlbW90ZS5mb3JFYWNoKChyZW1vdGUpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0W3JlbW90ZS5uYW1lXS5yZW1vdGUgPSByZW1vdGU7XG4gICAgfSwgdGhpcyk7XG4gIH1cbiAgZ2V0IHJlc3VsdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG4gIGdldCBkZXRlY3RlZERpZmYoKSB7XG4gICAgbGV0IGRpZmZPbmx5ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlc3VsdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IGRpZmYgPSB0aGlzLnJlc3VsdHNba2V5XTtcbiAgICAgIC8vIGtpbGxlZCEhXG4gICAgICBpZiAoZGlmZi5sb2NhbC5uYW1lID09PSBkaWZmLnJlbW90ZS5uYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRpZmZPbmx5W2tleV0gPSBkaWZmO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIGRpZmZPbmx5O1xuICB9XG4gIGdldCBnaG9zdHMoKSB7XG4gICAgbGV0IGdob3N0RGlmZiA9IFtdO1xuXG4gICAgZm9ySW4odGhpcy5kZXRlY3RlZERpZmYsIGZ1bmN0aW9uKGRpZmYsIGtleSkge1xuICAgICAgbGV0IGxvY2FsRmlsZSA9IGRpZmYubG9jYWwucGF0aCB8fCBudWxsO1xuICAgICAgbGV0IHJlbW90ZUZpbGUgPSBkaWZmLnJlbW90ZS5wYXRoIHx8ICcnO1xuXG4gICAgICBpZiAobG9jYWxGaWxlID09PSBudWxsICYmIHJlbW90ZUZpbGUpIHtcbiAgICAgICAgZ2hvc3REaWZmLnB1c2goZGlmZi5yZW1vdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBnaG9zdERpZmY7XG4gIH1cbiAgZ2V0IGhhc0dob3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5naG9zdHMubGVuZ3RoID49IDA7XG4gIH1cbiAgZ2V0IG5vRGlmZkRlbGV0ZWQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGV0ZWN0ZWREaWZmKS5sZW5ndGggPD0gMDtcbiAgfVxuICByZXBvcnRUbyhyZXBvcnRlcikge1xuICAgIHJlcG9ydGVyLnJlcG9ydCh0aGlzKTtcbiAgfVxufVxuIl19