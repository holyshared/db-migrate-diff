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
      string: ['env', 'e', 'migrations-dir', 'm', 'config', 'migration-table'],
      alias: {
        m: 'migrationsDir',
        e: 'env',
        'migrations-dir': 'migrationsDir',
        'migration-table': 'migrationTable'
      },
      'default': {
        env: 'dev',
        config: process.cwd() + '/database.json',
        migrationsDir: './migrations',
        migrationTable: 'migrations'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt3QkFBdUIsVUFBVTs7OztJQUVaLElBQUk7QUFDWixXQURRLElBQUksQ0FDWCxJQUFJLEVBQUU7MEJBREMsSUFBSTs7QUFFckIsUUFBSSxDQUFDLElBQUksR0FBRywyQkFBVyxJQUFJLEVBQUU7QUFDM0IsWUFBTSxFQUFFLENBQ04sS0FBSyxFQUFFLEdBQUcsRUFDVixnQkFBZ0IsRUFBRSxHQUFHLEVBQ3JCLFFBQVEsRUFDUixpQkFBaUIsQ0FDbEI7QUFDRCxXQUFLLEVBQUU7QUFDTCxTQUFDLEVBQUUsZUFBZTtBQUNsQixTQUFDLEVBQUUsS0FBSztBQUNSLHdCQUFnQixFQUFFLGVBQWU7QUFDakMseUJBQWlCLEVBQUUsZ0JBQWdCO09BQ3BDO0FBQ0QsaUJBQVM7QUFDUCxXQUFHLEVBQUUsS0FBSztBQUNWLGNBQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsZ0JBQWdCO0FBQ3hDLHFCQUFhLEVBQUUsY0FBYztBQUM3QixzQkFBYyxFQUFFLFlBQVk7T0FDN0I7S0FDRixDQUFDLENBQUM7R0FDSjs7ZUF0QmtCLElBQUk7O1NBdUJiLGVBQUc7QUFDWCxhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3pCOzs7U0FDTSxlQUFHO0FBQ1IsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztLQUN0Qjs7O1NBQ2dCLGVBQUc7QUFDbEIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUNoQzs7O1NBQ2lCLGVBQUc7QUFDbkIsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztLQUNqQzs7O1dBQ2Msa0JBQUMsSUFBSSxFQUFFO0FBQ3BCLGFBQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7OztXQUNpQix1QkFBRztBQUNuQixhQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3JCOzs7U0F4Q2tCLElBQUk7OztxQkFBSixJQUFJIiwiZmlsZSI6ImFyZ3YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJndlBhcnNlciBmcm9tICdtaW5pbWlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyZ3Yge1xuICBjb25zdHJ1Y3Rvcihhcmd2KSB7XG4gICAgdGhpcy5hcmd2ID0gYXJndlBhcnNlcihhcmd2LCB7XG4gICAgICBzdHJpbmc6IFtcbiAgICAgICAgJ2VudicsICdlJyxcbiAgICAgICAgJ21pZ3JhdGlvbnMtZGlyJywgJ20nLFxuICAgICAgICAnY29uZmlnJyxcbiAgICAgICAgJ21pZ3JhdGlvbi10YWJsZSdcbiAgICAgIF0sXG4gICAgICBhbGlhczoge1xuICAgICAgICBtOiAnbWlncmF0aW9uc0RpcicsXG4gICAgICAgIGU6ICdlbnYnLFxuICAgICAgICAnbWlncmF0aW9ucy1kaXInOiAnbWlncmF0aW9uc0RpcicsXG4gICAgICAgICdtaWdyYXRpb24tdGFibGUnOiAnbWlncmF0aW9uVGFibGUnXG4gICAgICB9LFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBlbnY6ICdkZXYnLFxuICAgICAgICBjb25maWc6IHByb2Nlc3MuY3dkKCkgKyAnL2RhdGFiYXNlLmpzb24nLFxuICAgICAgICBtaWdyYXRpb25zRGlyOiAnLi9taWdyYXRpb25zJyxcbiAgICAgICAgbWlncmF0aW9uVGFibGU6ICdtaWdyYXRpb25zJ1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5jb25maWc7XG4gIH1cbiAgZ2V0IGVudigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LmVudjtcbiAgfVxuICBnZXQgbWlncmF0aW9uc0RpcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2Lm1pZ3JhdGlvbnNEaXI7XG4gIH1cbiAgZ2V0IG1pZ3JhdGlvblRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YubWlncmF0aW9uVGFibGU7XG4gIH1cbiAgc3RhdGljIGZyb21Bcmd2KGFyZ3YpIHtcbiAgICByZXR1cm4gbmV3IEFyZ3YoYXJndik7XG4gIH1cbiAgc3RhdGljIGRlZmF1bHRBcmd2KCkge1xuICAgIHJldHVybiBuZXcgQXJndihbXSk7XG4gIH1cbn1cbiJdfQ==