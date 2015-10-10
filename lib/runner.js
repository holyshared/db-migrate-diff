'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _libConfig = require('../lib/config');

var _dbMigrate = require('db-migrate');

var _diffDetector = require('./diff-detector');

var _diffDetector2 = _interopRequireDefault(_diffDetector);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var Runner = (function () {
  function Runner(argv) {
    _classCallCheck(this, Runner);

    this.argv = argv;
  }

  _createClass(Runner, [{
    key: 'loadConfiguration',
    value: function loadConfiguration() {
      return (0, _libConfig.configLoader)(this.argv.config, this.argv.env);
    }
  }, {
    key: 'connect',
    value: function connect() {
      var config = this.loadConfiguration();
      return new _bluebird2['default'](function (resolve, reject) {
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

      return _bluebird2['default'].bind(this).then(function () {
        return _this.connect();
      }).then(function (driver) {
        var detector = _diffDetector2['default'].fromOptions({
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

exports['default'] = Runner;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3lCQUE2QixlQUFlOzt5QkFDcEIsWUFBWTs7NEJBQ1gsaUJBQWlCOzs7O3dCQUN0QixVQUFVOzs7O0lBRVQsTUFBTTtBQUNkLFdBRFEsTUFBTSxDQUNiLElBQUksRUFBRTswQkFEQyxNQUFNOztBQUV2QixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQjs7ZUFIa0IsTUFBTTs7V0FJUiw2QkFBRztBQUNsQixhQUFPLDZCQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDZCxDQUFDO0tBQ0g7OztXQUNNLG1CQUFHO0FBQ1IsVUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7QUFDdEMsYUFBTywwQkFBWSxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsZ0NBQVEsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLFFBQVEsRUFBSztBQUNqQyxjQUFJLEdBQUcsRUFBRTtBQUNQLG1CQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUNwQjtBQUNELGlCQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzFCLENBQUMsQ0FBQztPQUNKLENBQUMsQ0FBQztLQUNKOzs7V0FDRSxlQUFHOzs7QUFDSixhQUFPLHNCQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNuQyxlQUFPLE1BQUssT0FBTyxFQUFFLENBQUM7T0FDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sRUFBSztBQUNsQixZQUFJLFFBQVEsR0FBRywwQkFBYSxXQUFXLENBQUM7QUFDdEMsZ0JBQU0sRUFBRSxNQUFNO0FBQ2QsdUJBQWEsRUFBRSxNQUFLLElBQUksQ0FBQyxhQUFhO1NBQ3ZDLENBQUMsQ0FBQztBQUNILGVBQU8sUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO09BQ2xDLENBQUMsQ0FBQztLQUNKOzs7V0FDYyxrQkFBQyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7O1NBbENrQixNQUFNOzs7cUJBQU4sTUFBTSIsImZpbGUiOiJydW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWdMb2FkZXIgfSBmcm9tICcuLi9saWIvY29uZmlnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdkYi1taWdyYXRlJztcbmltcG9ydCBEaWZmRGV0ZWN0b3IgZnJvbSAnLi9kaWZmLWRldGVjdG9yJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVubmVyIHtcbiAgY29uc3RydWN0b3IoYXJndikge1xuICAgIHRoaXMuYXJndiA9IGFyZ3Y7XG4gIH1cbiAgbG9hZENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIGNvbmZpZ0xvYWRlcihcbiAgICAgIHRoaXMuYXJndi5jb25maWcsXG4gICAgICB0aGlzLmFyZ3YuZW52XG4gICAgKTtcbiAgfVxuICBjb25uZWN0KCkge1xuICAgIGxldCBjb25maWcgPSB0aGlzLmxvYWRDb25maWd1cmF0aW9uKCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbm5lY3QoY29uZmlnLCAoZXJyLCBtaWdyYXRvcikgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUobWlncmF0b3IuZHJpdmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJ1bigpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5iaW5kKHRoaXMpLnRoZW4oKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgIH0pLnRoZW4oKGRyaXZlcikgPT4ge1xuICAgICAgbGV0IGRldGVjdG9yID0gRGlmZkRldGVjdG9yLmZyb21PcHRpb25zKHtcbiAgICAgICAgZHJpdmVyOiBkcml2ZXIsXG4gICAgICAgIG1pZ3JhdGlvbnNEaXI6IHRoaXMuYXJndi5taWdyYXRpb25zRGlyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gZGV0ZWN0b3IuZGlmZk1pZ3JhdGlvbnMoKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZnJvbUFyZ3YoYXJndikge1xuICAgIHJldHVybiBuZXcgUnVubmVyKGFyZ3YpO1xuICB9XG59XG4iXX0=