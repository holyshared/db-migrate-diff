'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var DiffDetector = function () {
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
}();

exports.default = DiffDetector;

var DiffResult = exports.DiffResult = function () {
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
}();
//# sourceMappingURL=data:application/json;base64,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UCxDQUFZLEtBQUssWUFBTCxDQUFaLENBQStCLE1BQS9CLElBQXlDLENBQXpDLENBRFc7Ozs7U0FyRFQiLCJmaWxlIjoiZGlmZi1kZXRlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0xvYWRlciB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdkYi1taWdyYXRlJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcbmltcG9ydCBtaWdyYXRpb24gZnJvbSAnZGItbWlncmF0ZS9saWIvbWlncmF0aW9uLmpzJztcbmltcG9ydCB7IGZvckluIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkRldGVjdG9yIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRyaXZlciA9IG9wdHMuZHJpdmVyO1xuICAgIHRoaXMubWlncmF0aW9uc0RpciA9IG9wdHMubWlncmF0aW9uc0RpcjtcbiAgfVxuICBsb2FkRnJvbUZpbGVzeXN0ZW0oKSB7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRmlsZXN5c3RlbShtaWdyYXRpb25zRGlyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGxvYWRGcm9tRGF0YWJhc2UoKSB7XG4gICAgbGV0IGRyaXZlciA9IHRoaXMuZHJpdmVyO1xuICAgIGxldCBtaWdyYXRpb25zRGlyID0gdGhpcy5taWdyYXRpb25zRGlyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIE1pZ3JhdGlvbi5sb2FkRnJvbURhdGFiYXNlKG1pZ3JhdGlvbnNEaXIsIGRyaXZlciwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkaWZmTWlncmF0aW9ucygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5wcm9wcyh7XG4gICAgICBsb2NhbDogdGhpcy5sb2FkRnJvbUZpbGVzeXN0ZW0oKSxcbiAgICAgIHJlbW90ZTogdGhpcy5sb2FkRnJvbURhdGFiYXNlKClcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgRGlmZlJlc3VsdChyZXN1bHQpO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEaWZmRGV0ZWN0b3Iob3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpZmZSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihyZXN1bHQpIHtcbiAgICB0aGlzLnJlc3VsdCA9IHt9O1xuICAgIHRoaXMubG9jYWwgPSByZXN1bHQubG9jYWw7XG4gICAgdGhpcy5yZW1vdGUgPSByZXN1bHQucmVtb3RlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBrZXlzID0ga2V5cy5jb25jYXQodGhpcy5sb2NhbC5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpO1xuICAgIGtleXMgPSBrZXlzLmNvbmNhdCh0aGlzLnJlbW90ZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubmFtZSkpO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7IHRoaXMucmVzdWx0W2tleV0gPSB7IGxvY2FsOiB7fSwgcmVtb3RlOiB7fSB9OyB9LCB0aGlzKTtcblxuICAgIHRoaXMubG9jYWwuZm9yRWFjaCgobG9jYWwpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0W2xvY2FsLm5hbWVdLmxvY2FsID0gbG9jYWw7XG4gICAgfSwgdGhpcyk7XG4gICAgdGhpcy5yZW1vdGUuZm9yRWFjaCgocmVtb3RlKSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdFtyZW1vdGUubmFtZV0ucmVtb3RlID0gcmVtb3RlO1xuICAgIH0sIHRoaXMpO1xuICB9XG4gIGdldCByZXN1bHRzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuICBnZXQgZGV0ZWN0ZWREaWZmKCkge1xuICAgIGxldCBkaWZmT25seSA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5yZXN1bHRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGxldCBkaWZmID0gdGhpcy5yZXN1bHRzW2tleV07XG4gICAgICAvLyBraWxsZWQhIVxuICAgICAgaWYgKGRpZmYubG9jYWwubmFtZSA9PT0gZGlmZi5yZW1vdGUubmFtZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkaWZmT25seVtrZXldID0gZGlmZjtcbiAgICB9LCB0aGlzKTtcblxuICAgIHJldHVybiBkaWZmT25seTtcbiAgfVxuICBnZXQgZ2hvc3RzKCkge1xuICAgIGxldCBnaG9zdERpZmYgPSBbXTtcblxuICAgIGZvckluKHRoaXMuZGV0ZWN0ZWREaWZmLCBmdW5jdGlvbihkaWZmLCBrZXkpIHtcbiAgICAgIGxldCBsb2NhbEZpbGUgPSBkaWZmLmxvY2FsLnBhdGggfHwgbnVsbDtcbiAgICAgIGxldCByZW1vdGVGaWxlID0gZGlmZi5yZW1vdGUucGF0aCB8fCAnJztcblxuICAgICAgaWYgKGxvY2FsRmlsZSA9PT0gbnVsbCAmJiByZW1vdGVGaWxlKSB7XG4gICAgICAgIGdob3N0RGlmZi5wdXNoKGRpZmYucmVtb3RlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZ2hvc3REaWZmO1xuICB9XG4gIGdldCBoYXNHaG9zdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2hvc3RzLmxlbmd0aCA+PSAwO1xuICB9XG4gIGdldCBub0RpZmZEZWxldGVkKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmRldGVjdGVkRGlmZikubGVuZ3RoIDw9IDA7XG4gIH1cbiAgcmVwb3J0VG8ocmVwb3J0ZXIpIHtcbiAgICByZXBvcnRlci5yZXBvcnQodGhpcyk7XG4gIH1cbn1cbiJdfQ==