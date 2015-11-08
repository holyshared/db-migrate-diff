'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('../lib/config');

var _dbMigrate = require('db-migrate');

var _diffDetector = require('./diff-detector');

var _diffDetector2 = _interopRequireDefault(_diffDetector);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Runner = (function () {
  function Runner(argv) {
    _classCallCheck(this, Runner);

    this.argv = argv;
  }

  _createClass(Runner, [{
    key: 'loadConfiguration',
    value: function loadConfiguration() {
      return (0, _config.configLoader)(this.argv.config, this.argv.env);
    }
  }, {
    key: 'connect',
    value: function connect() {
      var config = this.loadConfiguration();
      return new _bluebird2.default(function (resolve, reject) {
        (0, _dbMigrate.connect)(config, function (err, migrator) {
          if (err) {
            return reject(err);
          }
          resolve(migrator.driver);
        });
      });
    }
  }, {
    key: 'run',
    value: function run() {
      var _this = this;

      return _bluebird2.default.bind(this).then(function () {
        return _this.connect();
      }).then(function (driver) {
        var detector = _diffDetector2.default.fromOptions({
          driver: driver,
          migrationsDir: _this.argv.migrationsDir
        });
        return detector.diffMigrations();
      });
    }
  }], [{
    key: 'fromArgv',
    value: function fromArgv(argv) {
      return new Runner(argv);
    }
  }]);

  return Runner;
})();

exports.default = Runner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCLE1BQU07QUFDekIsV0FEbUIsTUFBTSxDQUNiLElBQUksRUFBRTswQkFEQyxNQUFNOztBQUV2QixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQjs7ZUFIa0IsTUFBTTs7d0NBSUw7QUFDbEIsYUFBTyxZQVZGLFlBQVksRUFXZixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2QsQ0FBQztLQUNIOzs7OEJBQ1M7QUFDUixVQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUN0QyxhQUFPLHVCQUFZLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0Qyx1QkFqQkcsT0FBTyxFQWlCRixNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFLO0FBQ2pDLGNBQUksR0FBRyxFQUFFO0FBQ1AsbUJBQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQ3BCO0FBQ0QsaUJBQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDO09BQ0osQ0FBQyxDQUFDO0tBQ0o7OzswQkFDSzs7O0FBQ0osYUFBTyxtQkFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDbkMsZUFBTyxNQUFLLE9BQU8sRUFBRSxDQUFDO09BQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUs7QUFDbEIsWUFBSSxRQUFRLEdBQUcsdUJBQWEsV0FBVyxDQUFDO0FBQ3RDLGdCQUFNLEVBQUUsTUFBTTtBQUNkLHVCQUFhLEVBQUUsTUFBSyxJQUFJLENBQUMsYUFBYTtTQUN2QyxDQUFDLENBQUM7QUFDSCxlQUFPLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztPQUNsQyxDQUFDLENBQUM7S0FDSjs7OzZCQUNlLElBQUksRUFBRTtBQUNwQixhQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7U0FsQ2tCLE1BQU07OztrQkFBTixNQUFNIiwiZmlsZSI6InJ1bm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0xvYWRlciB9IGZyb20gJy4uL2xpYi9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2RiLW1pZ3JhdGUnO1xuaW1wb3J0IERpZmZEZXRlY3RvciBmcm9tICcuL2RpZmYtZGV0ZWN0b3InO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdW5uZXIge1xuICBjb25zdHJ1Y3Rvcihhcmd2KSB7XG4gICAgdGhpcy5hcmd2ID0gYXJndjtcbiAgfVxuICBsb2FkQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gY29uZmlnTG9hZGVyKFxuICAgICAgdGhpcy5hcmd2LmNvbmZpZyxcbiAgICAgIHRoaXMuYXJndi5lbnZcbiAgICApO1xuICB9XG4gIGNvbm5lY3QoKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMubG9hZENvbmZpZ3VyYXRpb24oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29ubmVjdChjb25maWcsIChlcnIsIG1pZ3JhdG9yKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShtaWdyYXRvci5kcml2ZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcnVuKCkge1xuICAgIHJldHVybiBQcm9taXNlLmJpbmQodGhpcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgfSkudGhlbigoZHJpdmVyKSA9PiB7XG4gICAgICBsZXQgZGV0ZWN0b3IgPSBEaWZmRGV0ZWN0b3IuZnJvbU9wdGlvbnMoe1xuICAgICAgICBkcml2ZXI6IGRyaXZlcixcbiAgICAgICAgbWlncmF0aW9uc0RpcjogdGhpcy5hcmd2Lm1pZ3JhdGlvbnNEaXIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZXRlY3Rvci5kaWZmTWlncmF0aW9ucygpO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmcm9tQXJndihhcmd2KSB7XG4gICAgcmV0dXJuIG5ldyBSdW5uZXIoYXJndik7XG4gIH1cbn1cbiJdfQ==