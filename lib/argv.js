'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var Argv = (function () {
  function Argv(argv) {
    _classCallCheck(this, Argv);

    this.argv = (0, _minimist2['default'])(argv, {
      string: ['env', 'e', 'migrations-dir', 'm', 'config', 'migration-table', 't', 'reporter', 'r'],
      alias: {
        m: 'migrationsDir',
        t: 'migrationTable',
        e: 'env',
        r: 'reporter',
        'migrations-dir': 'migrationsDir',
        'migration-table': 'migrationTable'
      },
      'default': {
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

exports['default'] = Argv;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt3QkFBdUIsVUFBVTs7OztJQUVaLElBQUk7QUFDWixXQURRLElBQUksQ0FDWCxJQUFJLEVBQUU7MEJBREMsSUFBSTs7QUFFckIsUUFBSSxDQUFDLElBQUksR0FBRywyQkFBVyxJQUFJLEVBQUU7QUFDM0IsWUFBTSxFQUFFLENBQ04sS0FBSyxFQUFFLEdBQUcsRUFDVixnQkFBZ0IsRUFBRSxHQUFHLEVBQ3JCLFFBQVEsRUFDUixpQkFBaUIsRUFBRSxHQUFHLEVBQ3RCLFVBQVUsRUFBRSxHQUFHLENBQ2hCO0FBQ0QsV0FBSyxFQUFFO0FBQ0wsU0FBQyxFQUFFLGVBQWU7QUFDbEIsU0FBQyxFQUFFLGdCQUFnQjtBQUNuQixTQUFDLEVBQUUsS0FBSztBQUNSLFNBQUMsRUFBRSxVQUFVO0FBQ2Isd0JBQWdCLEVBQUUsZUFBZTtBQUNqQyx5QkFBaUIsRUFBRSxnQkFBZ0I7T0FDcEM7QUFDRCxpQkFBUztBQUNQLFdBQUcsRUFBRSxLQUFLO0FBQ1YsY0FBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0I7QUFDeEMscUJBQWEsRUFBRSxjQUFjO0FBQzdCLHNCQUFjLEVBQUUsWUFBWTtBQUM1QixnQkFBUSxFQUFFLFNBQVM7T0FDcEI7S0FDRixDQUFDLENBQUM7R0FDSjs7ZUExQmtCLElBQUk7O1NBMkJiLGVBQUc7QUFDWCxhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3pCOzs7U0FDTSxlQUFHO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUN0Qjs7O1NBQ2dCLGVBQUc7QUFDbEIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUNoQzs7O1NBQ2lCLGVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUNqQzs7O1NBQ1csZUFBRztBQUNiLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDM0I7OztXQUNjLGtCQUFDLElBQUksRUFBRTtBQUNwQixhQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7V0FDaUIsdUJBQUc7QUFDbkIsYUFBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNyQjs7O1NBL0NrQixJQUFJOzs7cUJBQUosSUFBSSIsImZpbGUiOiJhcmd2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFyZ3ZQYXJzZXIgZnJvbSAnbWluaW1pc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmd2IHtcbiAgY29uc3RydWN0b3IoYXJndikge1xuICAgIHRoaXMuYXJndiA9IGFyZ3ZQYXJzZXIoYXJndiwge1xuICAgICAgc3RyaW5nOiBbXG4gICAgICAgICdlbnYnLCAnZScsXG4gICAgICAgICdtaWdyYXRpb25zLWRpcicsICdtJyxcbiAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICdtaWdyYXRpb24tdGFibGUnLCAndCcsXG4gICAgICAgICdyZXBvcnRlcicsICdyJ1xuICAgICAgXSxcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIG06ICdtaWdyYXRpb25zRGlyJyxcbiAgICAgICAgdDogJ21pZ3JhdGlvblRhYmxlJyxcbiAgICAgICAgZTogJ2VudicsXG4gICAgICAgIHI6ICdyZXBvcnRlcicsXG4gICAgICAgICdtaWdyYXRpb25zLWRpcic6ICdtaWdyYXRpb25zRGlyJyxcbiAgICAgICAgJ21pZ3JhdGlvbi10YWJsZSc6ICdtaWdyYXRpb25UYWJsZSdcbiAgICAgIH0sXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGVudjogJ2RldicsXG4gICAgICAgIGNvbmZpZzogcHJvY2Vzcy5jd2QoKSArICcvZGF0YWJhc2UuanNvbicsXG4gICAgICAgIG1pZ3JhdGlvbnNEaXI6ICcuL21pZ3JhdGlvbnMnLFxuICAgICAgICBtaWdyYXRpb25UYWJsZTogJ21pZ3JhdGlvbnMnLFxuICAgICAgICByZXBvcnRlcjogJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0IGNvbmZpZygpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LmNvbmZpZztcbiAgfVxuICBnZXQgZW52KCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YuZW52O1xuICB9XG4gIGdldCBtaWdyYXRpb25zRGlyKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YubWlncmF0aW9uc0RpcjtcbiAgfVxuICBnZXQgbWlncmF0aW9uVGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5taWdyYXRpb25UYWJsZTtcbiAgfVxuICBnZXQgcmVwb3J0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5yZXBvcnRlcjtcbiAgfVxuICBzdGF0aWMgZnJvbUFyZ3YoYXJndikge1xuICAgIHJldHVybiBuZXcgQXJndihhcmd2KTtcbiAgfVxuICBzdGF0aWMgZGVmYXVsdEFyZ3YoKSB7XG4gICAgcmV0dXJuIG5ldyBBcmd2KFtdKTtcbiAgfVxufVxuIl19