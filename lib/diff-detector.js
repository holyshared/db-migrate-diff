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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaWZmLWRldGVjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt5QkFBNkIsZUFBZTs7eUJBQ3BCLFlBQVk7O3dCQUNoQixVQUFVOzs7O21EQUNSLDZDQUE2Qzs7OztJQUU5QyxZQUFZO0FBQ3BCLFdBRFEsWUFBWSxDQUNuQixPQUFPLEVBQUU7MEJBREYsWUFBWTs7QUFFN0IsUUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN6QixRQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDMUIsUUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0dBQ3pDOztlQUxrQixZQUFZOztXQU1iLDhCQUFHO0FBQ25CLFVBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7O0FBRXZDLGFBQU8sMEJBQVksVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGlCQUFTLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSztBQUM1RCxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUNwQjtBQUNELGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztXQUNlLDRCQUFHO0FBQ2pCLFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsVUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFdkMsYUFBTywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsaUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBSztBQUNsRSxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUNwQjtBQUNELGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OztXQUNhLDBCQUFHO0FBQ2YsYUFBTyxzQkFBUSxLQUFLLENBQUM7QUFDbkIsYUFBSyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNoQyxjQUFNLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO09BQ2hDLENBQUMsQ0FBQztLQUNKOzs7V0FDaUIscUJBQUMsT0FBTyxFQUFFO0FBQzFCLGFBQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDbEM7OztTQXZDa0IsWUFBWTs7O3FCQUFaLFlBQVkiLCJmaWxlIjoiZGlmZi1kZXRlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0xvYWRlciB9IGZyb20gJy4uL2xpYi9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2RiLW1pZ3JhdGUnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IG1pZ3JhdGlvbiBmcm9tICcuLi9ub2RlX21vZHVsZXMvZGItbWlncmF0ZS9saWIvbWlncmF0aW9uLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlmZkRldGVjdG9yIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGxldCBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLmRyaXZlciA9IG9wdHMuZHJpdmVyO1xuICAgIHRoaXMubWlncmF0aW9uc0RpciA9IG9wdHMubWlncmF0aW9uc0RpcjtcbiAgfVxuICBsb2FkRnJvbUZpbGVzeXN0ZW0oKSB7XG4gICAgbGV0IG1pZ3JhdGlvbnNEaXIgPSB0aGlzLm1pZ3JhdGlvbnNEaXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgTWlncmF0aW9uLmxvYWRGcm9tRmlsZXN5c3RlbShtaWdyYXRpb25zRGlyLCAoZXJyLCByZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGxvYWRGcm9tRGF0YWJhc2UoKSB7XG4gICAgbGV0IGRyaXZlciA9IHRoaXMuZHJpdmVyO1xuICAgIGxldCBtaWdyYXRpb25zRGlyID0gdGhpcy5taWdyYXRpb25zRGlyO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIE1pZ3JhdGlvbi5sb2FkRnJvbURhdGFiYXNlKG1pZ3JhdGlvbnNEaXIsIGRyaXZlciwgKGVyciwgcmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBkaWZmTWlncmF0aW9ucygpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5wcm9wcyh7XG4gICAgICBsb2NhbDogdGhpcy5sb2FkRnJvbUZpbGVzeXN0ZW0oKSxcbiAgICAgIHJlbW90ZTogdGhpcy5sb2FkRnJvbURhdGFiYXNlKClcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZnJvbU9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgRGlmZkRldGVjdG9yKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=