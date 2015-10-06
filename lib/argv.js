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

    this.argv = (0, _minimist2['default'])(argv);
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
      return this.argv['migrations-dir'];
    }
  }, {
    key: 'migrationTable',
    get: function get() {
      return this.argv['migration-table'];
    }
  }], [{
    key: 'fromArgv',
    value: function fromArgv(argv) {
      return new Argv(argv);
    }
  }]);

  return Argv;
})();

exports['default'] = Argv;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcmd2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozt3QkFBdUIsVUFBVTs7OztJQUVaLElBQUk7QUFDWixXQURRLElBQUksQ0FDWCxJQUFJLEVBQUU7MEJBREMsSUFBSTs7QUFFckIsUUFBSSxDQUFDLElBQUksR0FBRywyQkFBVyxJQUFJLENBQUMsQ0FBQztHQUM5Qjs7ZUFIa0IsSUFBSTs7U0FJYixlQUFHO0FBQ1gsYUFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN6Qjs7O1NBQ00sZUFBRztBQUNSLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7S0FDdEI7OztTQUNnQixlQUFHO0FBQ2xCLGFBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3BDOzs7U0FDaUIsZUFBRztBQUNuQixhQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQUNyQzs7O1dBQ2Msa0JBQUMsSUFBSSxFQUFFO0FBQ3BCLGFBQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkI7OztTQWxCa0IsSUFBSTs7O3FCQUFKLElBQUkiLCJmaWxlIjoiYXJndi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcmd2UGFyc2VyIGZyb20gJ21pbmltaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJndiB7XG4gIGNvbnN0cnVjdG9yKGFyZ3YpIHtcbiAgICB0aGlzLmFyZ3YgPSBhcmd2UGFyc2VyKGFyZ3YpO1xuICB9XG4gIGdldCBjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJndi5jb25maWc7XG4gIH1cbiAgZ2V0IGVudigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2LmVudjtcbiAgfVxuICBnZXQgbWlncmF0aW9uc0RpcigpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2WydtaWdyYXRpb25zLWRpciddO1xuICB9XG4gIGdldCBtaWdyYXRpb25UYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmd2WydtaWdyYXRpb24tdGFibGUnXTtcbiAgfVxuICBzdGF0aWMgZnJvbUFyZ3YoYXJndikge1xuICAgIHJldHVybiBuZXcgQXJndihhcmd2KTtcbiAgfVxufVxuIl19