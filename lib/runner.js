'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Runner = function () {
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
}();

exports.default = Runner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS3FCO0FBQ25CLFdBRG1CLE1BQ25CLENBQVksSUFBWixFQUFrQjswQkFEQyxRQUNEOztBQUNoQixTQUFLLElBQUwsR0FBWSxJQUFaLENBRGdCO0dBQWxCOztlQURtQjs7d0NBSUM7QUFDbEIsYUFBTywwQkFDTCxLQUFLLElBQUwsQ0FBVSxNQUFWLEVBQ0EsS0FBSyxJQUFMLENBQVUsR0FBVixDQUZGLENBRGtCOzs7OzhCQU1WO0FBQ1IsVUFBSSxTQUFTLEtBQUssaUJBQUwsRUFBVCxDQURJO0FBRVIsYUFBTyx1QkFBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLGdDQUFRLE1BQVIsRUFBZ0IsVUFBQyxHQUFELEVBQU0sUUFBTixFQUFtQjtBQUNqQyxjQUFJLEdBQUosRUFBUztBQUNQLG1CQUFPLE9BQU8sR0FBUCxDQUFQLENBRE87V0FBVDtBQUdBLGtCQUFRLFNBQVMsTUFBVCxDQUFSLENBSmlDO1NBQW5CLENBQWhCLENBRHNDO09BQXJCLENBQW5CLENBRlE7Ozs7MEJBV0o7OztBQUNKLGFBQU8sbUJBQVEsSUFBUixDQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBd0IsWUFBTTtBQUNuQyxlQUFPLE1BQUssT0FBTCxFQUFQLENBRG1DO09BQU4sQ0FBeEIsQ0FFSixJQUZJLENBRUMsVUFBQyxNQUFELEVBQVk7QUFDbEIsWUFBSSxXQUFXLHVCQUFhLFdBQWIsQ0FBeUI7QUFDdEMsa0JBQVEsTUFBUjtBQUNBLHlCQUFlLE1BQUssSUFBTCxDQUFVLGFBQVY7U0FGRixDQUFYLENBRGM7QUFLbEIsZUFBTyxTQUFTLGNBQVQsRUFBUCxDQUxrQjtPQUFaLENBRlIsQ0FESTs7Ozs2QkFXVSxNQUFNO0FBQ3BCLGFBQU8sSUFBSSxNQUFKLENBQVcsSUFBWCxDQUFQLENBRG9COzs7O1NBaENIIiwiZmlsZSI6InJ1bm5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ0xvYWRlciB9IGZyb20gJy4uL2xpYi9jb25maWcnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ2RiLW1pZ3JhdGUnO1xuaW1wb3J0IERpZmZEZXRlY3RvciBmcm9tICcuL2RpZmYtZGV0ZWN0b3InO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdW5uZXIge1xuICBjb25zdHJ1Y3Rvcihhcmd2KSB7XG4gICAgdGhpcy5hcmd2ID0gYXJndjtcbiAgfVxuICBsb2FkQ29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gY29uZmlnTG9hZGVyKFxuICAgICAgdGhpcy5hcmd2LmNvbmZpZyxcbiAgICAgIHRoaXMuYXJndi5lbnZcbiAgICApO1xuICB9XG4gIGNvbm5lY3QoKSB7XG4gICAgbGV0IGNvbmZpZyA9IHRoaXMubG9hZENvbmZpZ3VyYXRpb24oKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29ubmVjdChjb25maWcsIChlcnIsIG1pZ3JhdG9yKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShtaWdyYXRvci5kcml2ZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcnVuKCkge1xuICAgIHJldHVybiBQcm9taXNlLmJpbmQodGhpcykudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgfSkudGhlbigoZHJpdmVyKSA9PiB7XG4gICAgICBsZXQgZGV0ZWN0b3IgPSBEaWZmRGV0ZWN0b3IuZnJvbU9wdGlvbnMoe1xuICAgICAgICBkcml2ZXI6IGRyaXZlcixcbiAgICAgICAgbWlncmF0aW9uc0RpcjogdGhpcy5hcmd2Lm1pZ3JhdGlvbnNEaXIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBkZXRlY3Rvci5kaWZmTWlncmF0aW9ucygpO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmcm9tQXJndihhcmd2KSB7XG4gICAgcmV0dXJuIG5ldyBSdW5uZXIoYXJndik7XG4gIH1cbn1cbiJdfQ==