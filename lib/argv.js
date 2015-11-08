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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUIsSUFBSTtBQUN2QixXQURtQixJQUFJLENBQ1gsSUFBSSxFQUFFOzBCQURDLElBQUk7O0FBRXJCLFFBQUksQ0FBQyxJQUFJLEdBQUcsd0JBQVcsSUFBSSxFQUFFO0FBQzNCLFlBQU0sRUFBRSxDQUNOLEtBQUssRUFBRSxHQUFHLEVBQ1YsZ0JBQWdCLEVBQUUsR0FBRyxFQUNyQixRQUFRLEVBQ1IsaUJBQWlCLEVBQUUsR0FBRyxFQUN0QixVQUFVLEVBQUUsR0FBRyxDQUNoQjtBQUNELFdBQUssRUFBRTtBQUNMLFNBQUMsRUFBRSxlQUFlO0FBQ2xCLFNBQUMsRUFBRSxnQkFBZ0I7QUFDbkIsU0FBQyxFQUFFLEtBQUs7QUFDUixTQUFDLEVBQUUsVUFBVTtBQUNiLHdCQUFnQixFQUFFLGVBQWU7QUFDakMseUJBQWlCLEVBQUUsZ0JBQWdCO09BQ3BDO0FBQ0QsYUFBTyxFQUFFO0FBQ1AsV0FBRyxFQUFFLEtBQUs7QUFDVixjQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLGdCQUFnQjtBQUN4QyxxQkFBYSxFQUFFLGNBQWM7QUFDN0Isc0JBQWMsRUFBRSxZQUFZO0FBQzVCLGdCQUFRLEVBQUUsU0FBUztPQUNwQjtLQUNGLENBQUMsQ0FBQztHQUNKOztlQTFCa0IsSUFBSTs7d0JBMkJWO0FBQ1gsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN6Qjs7O3dCQUNTO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUN0Qjs7O3dCQUNtQjtBQUNsQixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQ2hDOzs7d0JBQ29CO0FBQ25CLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDakM7Ozt3QkFDYztBQUNiLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDM0I7Ozs2QkFDZSxJQUFJLEVBQUU7QUFDcEIsYUFBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN2Qjs7O2tDQUNvQjtBQUNuQixhQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3JCOzs7U0EvQ2tCLElBQUk7OztrQkFBSixJQUFJIiwiZmlsZSI6ImFyZ3YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJndlBhcnNlciBmcm9tICdtaW5pbWlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3Yge1xuICBjb25zdHJ1Y3Rvcihhcmd2KSB7XG4gICAgdGhpcy5hcmd2ID0gYXJndlBhcnNlcihhcmd2LCB7XG4gICAgICBzdHJpbmc6IFtcbiAgICAgICAgJ2VudicsICdlJyxcbiAgICAgICAgJ21pZ3JhdGlvbnMtZGlyJywgJ20nLFxuICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgJ21pZ3JhdGlvbi10YWJsZScsICd0JyxcbiAgICAgICAgJ3JlcG9ydGVyJywgJ3InXG4gICAgICBdLFxuICAgICAgYWxpYXM6IHtcbiAgICAgICAgbTogJ21pZ3JhdGlvbnNEaXInLFxuICAgICAgICB0OiAnbWlncmF0aW9uVGFibGUnLFxuICAgICAgICBlOiAnZW52JyxcbiAgICAgICAgcjogJ3JlcG9ydGVyJyxcbiAgICAgICAgJ21pZ3JhdGlvbnMtZGlyJzogJ21pZ3JhdGlvbnNEaXInLFxuICAgICAgICAnbWlncmF0aW9uLXRhYmxlJzogJ21pZ3JhdGlvblRhYmxlJ1xuICAgICAgfSxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgZW52OiAnZGV2JyxcbiAgICAgICAgY29uZmlnOiBwcm9jZXNzLmN3ZCgpICsgJy9kYXRhYmFzZS5qc29uJyxcbiAgICAgICAgbWlncmF0aW9uc0RpcjogJy4vbWlncmF0aW9ucycsXG4gICAgICAgIG1pZ3JhdGlvblRhYmxlOiAnbWlncmF0aW9ucycsXG4gICAgICAgIHJlcG9ydGVyOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YuY29uZmlnO1xuICB9XG4gIGdldCBlbnYoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5lbnY7XG4gIH1cbiAgZ2V0IG1pZ3JhdGlvbnNEaXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5taWdyYXRpb25zRGlyO1xuICB9XG4gIGdldCBtaWdyYXRpb25UYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2Lm1pZ3JhdGlvblRhYmxlO1xuICB9XG4gIGdldCByZXBvcnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LnJlcG9ydGVyO1xuICB9XG4gIHN0YXRpYyBmcm9tQXJndihhcmd2KSB7XG4gICAgcmV0dXJuIG5ldyBBcmd2KGFyZ3YpO1xuICB9XG4gIHN0YXRpYyBkZWZhdWx0QXJndigpIHtcbiAgICByZXR1cm4gbmV3IEFyZ3YoW10pO1xuICB9XG59XG4iXX0=