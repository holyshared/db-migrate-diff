'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ReporterRegistry = (function () {
  function ReporterRegistry() {
    _classCallCheck(this, ReporterRegistry);

    this.reporters = {};
  }

  _createClass(ReporterRegistry, [{
    key: 'register',
    value: function register(name, reporter) {
      if (this.reporters[name]) {
        throw new AlreadyRegisteredError(name + ' is already registered');
      }
      this.reporters[name] = reporter;
    }
  }, {
    key: 'lookup',
    value: function lookup(name) {
      if (!this.reporters[name]) {
        throw new NotRegisteredError(name + ' is not registered');
      }
      return this.reporters[name];
    }
  }]);

  return ReporterRegistry;
})();

exports['default'] = ReporterRegistry;

var NotRegisteredError = (function (_Error) {
  _inherits(NotRegisteredError, _Error);

  function NotRegisteredError() {
    _classCallCheck(this, NotRegisteredError);

    _get(Object.getPrototypeOf(NotRegisteredError.prototype), 'constructor', this).call(this);
  }

  return NotRegisteredError;
})(Error);

exports.NotRegisteredError = NotRegisteredError;

var AlreadyRegisteredError = (function (_Error2) {
  _inherits(AlreadyRegisteredError, _Error2);

  function AlreadyRegisteredError() {
    _classCallCheck(this, AlreadyRegisteredError);

    _get(Object.getPrototypeOf(AlreadyRegisteredError.prototype), 'constructor', this).call(this);
  }

  return AlreadyRegisteredError;
})(Error);

exports.AlreadyRegisteredError = AlreadyRegisteredError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQixnQkFBZ0I7QUFDeEIsV0FEUSxnQkFBZ0IsR0FDckI7MEJBREssZ0JBQWdCOztBQUVqQyxRQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztHQUNyQjs7ZUFIa0IsZ0JBQWdCOztXQUkzQixrQkFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ3ZCLFVBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN4QixjQUFNLElBQUksc0JBQXNCLENBQUMsSUFBSSxHQUFHLHdCQUF3QixDQUFDLENBQUM7T0FDbkU7QUFDRCxVQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztLQUNqQzs7O1dBQ0ssZ0JBQUMsSUFBSSxFQUFFO0FBQ1gsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekIsY0FBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO09BQzNEO0FBQ0QsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7U0Fma0IsZ0JBQWdCOzs7cUJBQWhCLGdCQUFnQjs7SUFrQnhCLGtCQUFrQjtZQUFsQixrQkFBa0I7O0FBQ2xCLFdBREEsa0JBQWtCLEdBQ2Y7MEJBREgsa0JBQWtCOztBQUUzQiwrQkFGUyxrQkFBa0IsNkNBRW5CO0dBQ1Q7O1NBSFUsa0JBQWtCO0dBQVMsS0FBSzs7OztJQU1oQyxzQkFBc0I7WUFBdEIsc0JBQXNCOztBQUN0QixXQURBLHNCQUFzQixHQUNuQjswQkFESCxzQkFBc0I7O0FBRS9CLCtCQUZTLHNCQUFzQiw2Q0FFdkI7R0FDVDs7U0FIVSxzQkFBc0I7R0FBUyxLQUFLIiwiZmlsZSI6InJlZ2lzdHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0ZXJSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVwb3J0ZXJzID0ge307XG4gIH1cbiAgcmVnaXN0ZXIobmFtZSwgcmVwb3J0ZXIpIHtcbiAgICBpZiAodGhpcy5yZXBvcnRlcnNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBBbHJlYWR5UmVnaXN0ZXJlZEVycm9yKG5hbWUgKyAnIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlcG9ydGVyc1tuYW1lXSA9IHJlcG9ydGVyO1xuICB9XG4gIGxvb2t1cChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLnJlcG9ydGVyc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IE5vdFJlZ2lzdGVyZWRFcnJvcihuYW1lICsgJyBpcyBub3QgcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXBvcnRlcnNbbmFtZV07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdFJlZ2lzdGVyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxyZWFkeVJlZ2lzdGVyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19