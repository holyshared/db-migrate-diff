'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Argv = (function () {
  function Argv(argv) {
    _classCallCheck(this, Argv);

    this.argv = (0, _minimist2.default)(argv, {
      string: ['env', 'e', 'migrations-dir', 'm', 'config', 'migration-table', 't', 'reporter', 'r'],
      alias: {
        m: 'migrationsDir',
        t: 'migrationTable',
        e: 'env',
        r: 'reporter',
        'migrations-dir': 'migrationsDir',
        'migration-table': 'migrationTable'
      },
      default: {
        env: 'dev',
        config: process.cwd() + '/database.json',
        migrationsDir: './migrations',
        migrationTable: 'migrations',
        reporter: 'default'
      }
    });
  }

  _createClass(Argv, [{
    key: 'config',
    get: function get() {
      return this.argv.config;
    }
  }, {
    key: 'env',
    get: function get() {
      return this.argv.env;
    }
  }, {
    key: 'migrationsDir',
    get: function get() {
      return this.argv.migrationsDir;
    }
  }, {
    key: 'migrationTable',
    get: function get() {
      return this.argv.migrationTable;
    }
  }, {
    key: 'reporter',
    get: function get() {
      return this.argv.reporter;
    }
  }], [{
    key: 'fromArgv',
    value: function fromArgv(argv) {
      return new Argv(argv);
    }
  }, {
    key: 'defaultArgv',
    value: function defaultArgv() {
      return new Argv([]);
    }
  }]);

  return Argv;
})();

exports.default = Argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQUlRLElBQUk7QUFDdkIsV0FEbUIsSUFBSSxDQUNYLElBQUksRUFBRTswQkFEQyxJQUFJOztBQUVyQixRQUFJLENBQUMsSUFBSSxHQUFHLHdCQUFXLElBQUksRUFBRTtBQUMzQixZQUFNLEVBQUUsQ0FDTixLQUFLLEVBQUUsR0FBRyxFQUNWLGdCQUFnQixFQUFFLEdBQUcsRUFDckIsUUFBUSxFQUNSLGlCQUFpQixFQUFFLEdBQUcsRUFDdEIsVUFBVSxFQUFFLEdBQUcsQ0FDaEI7QUFDRCxXQUFLLEVBQUU7QUFDTCxTQUFDLEVBQUUsZUFBZTtBQUNsQixTQUFDLEVBQUUsZ0JBQWdCO0FBQ25CLFNBQUMsRUFBRSxLQUFLO0FBQ1IsU0FBQyxFQUFFLFVBQVU7QUFDYix3QkFBZ0IsRUFBRSxlQUFlO0FBQ2pDLHlCQUFpQixFQUFFLGdCQUFnQjtPQUNwQztBQUNELGFBQU8sRUFBRTtBQUNQLFdBQUcsRUFBRSxLQUFLO0FBQ1YsY0FBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0I7QUFDeEMscUJBQWEsRUFBRSxjQUFjO0FBQzdCLHNCQUFjLEVBQUUsWUFBWTtBQUM1QixnQkFBUSxFQUFFLFNBQVM7T0FDcEI7S0FDRixDQUFDLENBQUM7R0FDSjs7ZUExQmtCLElBQUk7O3dCQTJCVjtBQUNYLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDekI7Ozt3QkFDUztBQUNSLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDdEI7Ozt3QkFDbUI7QUFDbEIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUNoQzs7O3dCQUNvQjtBQUNuQixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQ2pDOzs7d0JBQ2M7QUFDYixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQzNCOzs7NkJBQ2UsSUFBSSxFQUFFO0FBQ3BCLGFBQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7OztrQ0FDb0I7QUFDbkIsYUFBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNyQjs7O1NBL0NrQixJQUFJOzs7a0JBQUosSUFBSSIsImZpbGUiOiJhcmd2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYXJndlBhcnNlciBmcm9tICdtaW5pbWlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3Yge1xuICBjb25zdHJ1Y3Rvcihhcmd2KSB7XG4gICAgdGhpcy5hcmd2ID0gYXJndlBhcnNlcihhcmd2LCB7XG4gICAgICBzdHJpbmc6IFtcbiAgICAgICAgJ2VudicsICdlJyxcbiAgICAgICAgJ21pZ3JhdGlvbnMtZGlyJywgJ20nLFxuICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgJ21pZ3JhdGlvbi10YWJsZScsICd0JyxcbiAgICAgICAgJ3JlcG9ydGVyJywgJ3InXG4gICAgICBdLFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgbTogJ21pZ3JhdGlvbnNEaXInLFxuICAgICAgICB0OiAnbWlncmF0aW9uVGFibGUnLFxuICAgICAgICBlOiAnZW52JyxcbiAgICAgICAgcjogJ3JlcG9ydGVyJyxcbiAgICAgICAgJ21pZ3JhdGlvbnMtZGlyJzogJ21pZ3JhdGlvbnNEaXInLFxuICAgICAgICAnbWlncmF0aW9uLXRhYmxlJzogJ21pZ3JhdGlvblRhYmxlJ1xuICAgICAgfSxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZW52OiAnZGV2JyxcbiAgICAgICAgY29uZmlnOiBwcm9jZXNzLmN3ZCgpICsgJy9kYXRhYmFzZS5qc29uJyxcbiAgICAgICAgbWlncmF0aW9uc0RpcjogJy4vbWlncmF0aW9ucycsXG4gICAgICAgIG1pZ3JhdGlvblRhYmxlOiAnbWlncmF0aW9ucycsXG4gICAgICAgIHJlcG9ydGVyOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YuY29uZmlnO1xuICB9XG4gIGdldCBlbnYoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5lbnY7XG4gIH1cbiAgZ2V0IG1pZ3JhdGlvbnNEaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5taWdyYXRpb25zRGlyO1xuICB9XG4gIGdldCBtaWdyYXRpb25UYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2Lm1pZ3JhdGlvblRhYmxlO1xuICB9XG4gIGdldCByZXBvcnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LnJlcG9ydGVyO1xuICB9XG4gIHN0YXRpYyBmcm9tQXJndihhcmd2KSB7XG4gICAgcmV0dXJuIG5ldyBBcmd2KGFyZ3YpO1xuICB9XG4gIHN0YXRpYyBkZWZhdWx0QXJndigpIHtcbiAgICByZXR1cm4gbmV3IEFyZ3YoW10pO1xuICB9XG59XG4iXX0=