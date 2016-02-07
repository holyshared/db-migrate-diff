'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Argv = function () {
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
}();

exports.default = Argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI7QUFDbkIsV0FEbUIsSUFDbkIsQ0FBWSxJQUFaLEVBQWtCOzBCQURDLE1BQ0Q7O0FBQ2hCLFNBQUssSUFBTCxHQUFZLHdCQUFXLElBQVgsRUFBaUI7QUFDM0IsY0FBUSxDQUNOLEtBRE0sRUFDQyxHQURELEVBRU4sZ0JBRk0sRUFFWSxHQUZaLEVBR04sUUFITSxFQUlOLGlCQUpNLEVBSWEsR0FKYixFQUtOLFVBTE0sRUFLTSxHQUxOLENBQVI7QUFPQSxhQUFPO0FBQ0wsV0FBRyxlQUFIO0FBQ0EsV0FBRyxnQkFBSDtBQUNBLFdBQUcsS0FBSDtBQUNBLFdBQUcsVUFBSDtBQUNBLDBCQUFrQixlQUFsQjtBQUNBLDJCQUFtQixnQkFBbkI7T0FORjtBQVFBLGVBQVM7QUFDUCxhQUFLLEtBQUw7QUFDQSxnQkFBUSxRQUFRLEdBQVIsS0FBZ0IsZ0JBQWhCO0FBQ1IsdUJBQWUsY0FBZjtBQUNBLHdCQUFnQixZQUFoQjtBQUNBLGtCQUFVLFNBQVY7T0FMRjtLQWhCVSxDQUFaLENBRGdCO0dBQWxCOztlQURtQjs7d0JBMkJOO0FBQ1gsYUFBTyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBREk7Ozs7d0JBR0g7QUFDUixhQUFPLEtBQUssSUFBTCxDQUFVLEdBQVYsQ0FEQzs7Ozt3QkFHVTtBQUNsQixhQUFPLEtBQUssSUFBTCxDQUFVLGFBQVYsQ0FEVzs7Ozt3QkFHQztBQUNuQixhQUFPLEtBQUssSUFBTCxDQUFVLGNBQVYsQ0FEWTs7Ozt3QkFHTjtBQUNiLGFBQU8sS0FBSyxJQUFMLENBQVUsUUFBVixDQURNOzs7OzZCQUdDLE1BQU07QUFDcEIsYUFBTyxJQUFJLElBQUosQ0FBUyxJQUFULENBQVAsQ0FEb0I7Ozs7a0NBR0Q7QUFDbkIsYUFBTyxJQUFJLElBQUosQ0FBUyxFQUFULENBQVAsQ0FEbUI7Ozs7U0E3Q0YiLCJmaWxlIjoiYXJndi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcmd2UGFyc2VyIGZyb20gJ21pbmltaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJndiB7XG4gIGNvbnN0cnVjdG9yKGFyZ3YpIHtcbiAgICB0aGlzLmFyZ3YgPSBhcmd2UGFyc2VyKGFyZ3YsIHtcbiAgICAgIHN0cmluZzogW1xuICAgICAgICAnZW52JywgJ2UnLFxuICAgICAgICAnbWlncmF0aW9ucy1kaXInLCAnbScsXG4gICAgICAgICdjb25maWcnLFxuICAgICAgICAnbWlncmF0aW9uLXRhYmxlJywgJ3QnLFxuICAgICAgICAncmVwb3J0ZXInLCAncidcbiAgICAgIF0sXG4gICAgICBhbGlhczoge1xuICAgICAgICBtOiAnbWlncmF0aW9uc0RpcicsXG4gICAgICAgIHQ6ICdtaWdyYXRpb25UYWJsZScsXG4gICAgICAgIGU6ICdlbnYnLFxuICAgICAgICByOiAncmVwb3J0ZXInLFxuICAgICAgICAnbWlncmF0aW9ucy1kaXInOiAnbWlncmF0aW9uc0RpcicsXG4gICAgICAgICdtaWdyYXRpb24tdGFibGUnOiAnbWlncmF0aW9uVGFibGUnXG4gICAgICB9LFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBlbnY6ICdkZXYnLFxuICAgICAgICBjb25maWc6IHByb2Nlc3MuY3dkKCkgKyAnL2RhdGFiYXNlLmpzb24nLFxuICAgICAgICBtaWdyYXRpb25zRGlyOiAnLi9taWdyYXRpb25zJyxcbiAgICAgICAgbWlncmF0aW9uVGFibGU6ICdtaWdyYXRpb25zJyxcbiAgICAgICAgcmVwb3J0ZXI6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5jb25maWc7XG4gIH1cbiAgZ2V0IGVudigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LmVudjtcbiAgfVxuICBnZXQgbWlncmF0aW9uc0RpcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2Lm1pZ3JhdGlvbnNEaXI7XG4gIH1cbiAgZ2V0IG1pZ3JhdGlvblRhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YubWlncmF0aW9uVGFibGU7XG4gIH1cbiAgZ2V0IHJlcG9ydGVyKCkge1xuICAgIHJldHVybiB0aGlzLmFyZ3YucmVwb3J0ZXI7XG4gIH1cbiAgc3RhdGljIGZyb21Bcmd2KGFyZ3YpIHtcbiAgICByZXR1cm4gbmV3IEFyZ3YoYXJndik7XG4gIH1cbiAgc3RhdGljIGRlZmF1bHRBcmd2KCkge1xuICAgIHJldHVybiBuZXcgQXJndihbXSk7XG4gIH1cbn1cbiJdfQ==