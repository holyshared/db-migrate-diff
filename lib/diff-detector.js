'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiffResult = undefined;

var _config = require('./config');

var _dbMigrate = require('db-migrate');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _migration = require('db-migrate/lib/migration.js');

var _migration2 = _interopRequireDefault(_migration);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

      return new _bluebird2.default(function (resolve, reject) {
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

      return new _bluebird2.default(function (resolve, reject) {
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
      return _bluebird2.default.props({
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

exports.default = DiffDetector;

var DiffResult = exports.DiffResult = (function () {
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
//# sourceMappingURL=data:application/json;base64,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a0JBdEZLLEtBQUssRUFzRkosSUFBSSxDQUFDLFlBQVksRUFBRSxVQUFTLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDM0MsWUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBQ3hDLFlBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7QUFFeEMsWUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUNwQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0I7T0FDRixDQUFDLENBQUM7QUFDSCxhQUFPLFNBQVMsQ0FBQztLQUNsQjs7O3dCQUNlO0FBQ2QsYUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7S0FDaEM7Ozt3QkFDbUI7QUFDbEIsYUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ25EOzs7U0F2RFUsVUFBVSIsImZpbGUiOiJkaWZmLWRldGVjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlnTG9hZGVyIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2RiLW1pZ3JhdGUnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IG1pZ3JhdGlvbiBmcm9tICdkYi1taWdyYXRlL2xpYi9taWdyYXRpb24uanMnO1xuaW1wb3J0IHsgZm9ySW4gfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWZmRGV0ZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgbGV0IG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuZHJpdmVyID0gb3B0cy5kcml2ZXI7XG4gICAgdGhpcy5taWdyYXRpb25zRGlyID0gb3B0cy5taWdyYXRpb25zRGlyO1xuICB9XG4gIGxvYWRGcm9tRmlsZXN5c3RlbSgpIHtcbiAgICBsZXQgbWlncmF0aW9uc0RpciA9IHRoaXMubWlncmF0aW9uc0RpcjtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBNaWdyYXRpb24ubG9hZEZyb21GaWxlc3lzdGVtKG1pZ3JhdGlvbnNEaXIsIChlcnIsIHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgbG9hZEZyb21EYXRhYmFzZSgpIHtcbiAgICBsZXQgZHJpdmVyID0gdGhpcy5kcml2ZXI7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRGF0YWJhc2UobWlncmF0aW9uc0RpciwgZHJpdmVyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGRpZmZNaWdyYXRpb25zKCkge1xuICAgIHJldHVybiBQcm9taXNlLnByb3BzKHtcbiAgICAgIGxvY2FsOiB0aGlzLmxvYWRGcm9tRmlsZXN5c3RlbSgpLFxuICAgICAgcmVtb3RlOiB0aGlzLmxvYWRGcm9tRGF0YWJhc2UoKVxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBEaWZmUmVzdWx0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IERpZmZEZXRlY3RvcihvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlmZlJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdCkge1xuICAgIHRoaXMucmVzdWx0ID0ge307XG4gICAgdGhpcy5sb2NhbCA9IHJlc3VsdC5sb2NhbDtcbiAgICB0aGlzLnJlbW90ZSA9IHJlc3VsdC5yZW1vdGU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIGtleXMgPSBrZXlzLmNvbmNhdCh0aGlzLmxvY2FsLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSk7XG4gICAga2V5cyA9IGtleXMuY29uY2F0KHRoaXMucmVtb3RlLm1hcCgoaXRlbSkgPT4gaXRlbS5uYW1lKSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHsgdGhpcy5yZXN1bHRba2V5XSA9IHsgbG9jYWw6IHt9LCByZW1vdGU6IHt9IH07IH0sIHRoaXMpO1xuXG4gICAgdGhpcy5sb2NhbC5mb3JFYWNoKChsb2NhbCkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHRbbG9jYWwubmFtZV0ubG9jYWwgPSBsb2NhbDtcbiAgICB9LCB0aGlzKTtcbiAgICB0aGlzLnJlbW90ZS5mb3JFYWNoKChyZW1vdGUpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0W3JlbW90ZS5uYW1lXS5yZW1vdGUgPSByZW1vdGU7XG4gICAgfSwgdGhpcyk7XG4gIH1cbiAgZ2V0IHJlc3VsdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG4gIGdldCBkZXRlY3RlZERpZmYoKSB7XG4gICAgbGV0IGRpZmZPbmx5ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLnJlc3VsdHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgbGV0IGRpZmYgPSB0aGlzLnJlc3VsdHNba2V5XTtcbiAgICAgIC8vIGtpbGxlZCEhXG4gICAgICBpZiAoZGlmZi5sb2NhbC5uYW1lID09PSBkaWZmLnJlbW90ZS5uYW1lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRpZmZPbmx5W2tleV0gPSBkaWZmO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIGRpZmZPbmx5O1xuICB9XG4gIGdldCBnaG9zdHMoKSB7XG4gICAgbGV0IGdob3N0RGlmZiA9IFtdO1xuXG4gICAgZm9ySW4odGhpcy5kZXRlY3RlZERpZmYsIGZ1bmN0aW9uKGRpZmYsIGtleSkge1xuICAgICAgbGV0IGxvY2FsRmlsZSA9IGRpZmYubG9jYWwucGF0aCB8fCBudWxsO1xuICAgICAgbGV0IHJlbW90ZUZpbGUgPSBkaWZmLnJlbW90ZS5wYXRoIHx8ICcnO1xuXG4gICAgICBpZiAobG9jYWxGaWxlID09PSBudWxsICYmIHJlbW90ZUZpbGUpIHtcbiAgICAgICAgZ2hvc3REaWZmLnB1c2goZGlmZi5yZW1vdGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBnaG9zdERpZmY7XG4gIH1cbiAgZ2V0IGhhc0dob3N0cygpIHtcbiAgICByZXR1cm4gdGhpcy5naG9zdHMubGVuZ3RoID49IDA7XG4gIH1cbiAgZ2V0IG5vRGlmZkRlbGV0ZWQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGV0ZWN0ZWREaWZmKS5sZW5ndGggPD0gMDtcbiAgfVxuICByZXBvcnRUbyhyZXBvcnRlcikge1xuICAgIHJlcG9ydGVyLnJlcG9ydCh0aGlzKTtcbiAgfVxufVxuIl19