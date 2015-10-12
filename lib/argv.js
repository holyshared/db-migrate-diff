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
      string: ['env', 'e', 'migrations-dir', 'm', 'config', 'migration-table', 'reporter', 'r'],
      alias: {
        m: 'migrationsDir',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt3QkFBdUIsVUFBVTs7OztJQUVaLElBQUk7QUFDWixXQURRLElBQUksQ0FDWCxJQUFJLEVBQUU7MEJBREMsSUFBSTs7QUFFckIsUUFBSSxDQUFDLElBQUksR0FBRywyQkFBVyxJQUFJLEVBQUU7QUFDM0IsWUFBTSxFQUFFLENBQ04sS0FBSyxFQUFFLEdBQUcsRUFDVixnQkFBZ0IsRUFBRSxHQUFHLEVBQ3JCLFFBQVEsRUFDUixpQkFBaUIsRUFDakIsVUFBVSxFQUFFLEdBQUcsQ0FDaEI7QUFDRCxXQUFLLEVBQUU7QUFDTCxTQUFDLEVBQUUsZUFBZTtBQUNsQixTQUFDLEVBQUUsS0FBSztBQUNSLFNBQUMsRUFBRSxVQUFVO0FBQ2Isd0JBQWdCLEVBQUUsZUFBZTtBQUNqQyx5QkFBaUIsRUFBRSxnQkFBZ0I7T0FDcEM7QUFDRCxpQkFBUztBQUNQLFdBQUcsRUFBRSxLQUFLO0FBQ1YsY0FBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxnQkFBZ0I7QUFDeEMscUJBQWEsRUFBRSxjQUFjO0FBQzdCLHNCQUFjLEVBQUUsWUFBWTtBQUM1QixnQkFBUSxFQUFFLFNBQVM7T0FDcEI7S0FDRixDQUFDLENBQUM7R0FDSjs7ZUF6QmtCLElBQUk7O1NBMEJiLGVBQUc7QUFDWCxhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3pCOzs7U0FDTSxlQUFHO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUN0Qjs7O1NBQ2dCLGVBQUc7QUFDbEIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUNoQzs7O1NBQ2lCLGVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUNqQzs7O1NBQ1csZUFBRztBQUNiLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDM0I7OztXQUNjLGtCQUFDLElBQUksRUFBRTtBQUNwQixhQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7V0FDaUIsdUJBQUc7QUFDbkIsYUFBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNyQjs7O1NBOUNrQixJQUFJOzs7cUJBQUosSUFBSSIsImZpbGUiOiJhcmd2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFyZ3ZQYXJzZXIgZnJvbSAnbWluaW1pc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmd2IHtcbiAgY29uc3RydWN0b3IoYXJndikge1xuICAgIHRoaXMuYXJndiA9IGFyZ3ZQYXJzZXIoYXJndiwge1xuICAgICAgc3RyaW5nOiBbXG4gICAgICAgICdlbnYnLCAnZScsXG4gICAgICAgICdtaWdyYXRpb25zLWRpcicsICdtJyxcbiAgICAgICAgJ2NvbmZpZycsXG4gICAgICAgICdtaWdyYXRpb24tdGFibGUnLFxuICAgICAgICAncmVwb3J0ZXInLCAncidcbiAgICAgIF0sXG4gICAgICBhbGlhczoge1xuICAgICAgICBtOiAnbWlncmF0aW9uc0RpcicsXG4gICAgICAgIGU6ICdlbnYnLFxuICAgICAgICByOiAncmVwb3J0ZXInLFxuICAgICAgICAnbWlncmF0aW9ucy1kaXInOiAnbWlncmF0aW9uc0RpcicsXG4gICAgICAgICdtaWdyYXRpb24tdGFibGUnOiAnbWlncmF0aW9uVGFibGUnXG4gICAgICB9LFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBlbnY6ICdkZXYnLFxuICAgICAgICBjb25maWc6IHByb2Nlc3MuY3dkKCkgKyAnL2RhdGFiYXNlLmpzb24nLFxuICAgICAgICBtaWdyYXRpb25zRGlyOiAnLi9taWdyYXRpb25zJyxcbiAgICAgICAgbWlncmF0aW9uVGFibGU6ICdtaWdyYXRpb25zJyxcbiAgICAgICAgcmVwb3J0ZXI6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5jb25maWc7XG4gIH1cbiAgZ2V0IGVudigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LmVudjtcbiAgfVxuICBnZXQgbWlncmF0aW9uc0RpcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2Lm1pZ3JhdGlvbnNEaXI7XG4gIH1cbiAgZ2V0IG1pZ3JhdGlvblRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YubWlncmF0aW9uVGFibGU7XG4gIH1cbiAgZ2V0IHJlcG9ydGVyKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YucmVwb3J0ZXI7XG4gIH1cbiAgc3RhdGljIGZyb21Bcmd2KGFyZ3YpIHtcbiAgICByZXR1cm4gbmV3IEFyZ3YoYXJndik7XG4gIH1cbiAgc3RhdGljIGRlZmF1bHRBcmd2KCkge1xuICAgIHJldHVybiBuZXcgQXJndihbXSk7XG4gIH1cbn1cbiJdfQ==