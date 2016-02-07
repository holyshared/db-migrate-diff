'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReporterRegistry = exports.ReporterRegistry = function () {
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
}();

exports.default = ReporterRegistry;

var NotRegisteredError = exports.NotRegisteredError = function (_Error) {
  _inherits(NotRegisteredError, _Error);

  function NotRegisteredError() {
    _classCallCheck(this, NotRegisteredError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotRegisteredError).call(this));
  }

  return NotRegisteredError;
}(Error);

var AlreadyRegisteredError = exports.AlreadyRegisteredError = function (_Error2) {
  _inherits(AlreadyRegisteredError, _Error2);

  function AlreadyRegisteredError() {
    _classCallCheck(this, AlreadyRegisteredError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AlreadyRegisteredError).call(this));
  }

  return AlreadyRegisteredError;
}(Error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFhO0FBQ1gsV0FEVyxnQkFDWCxHQUFjOzBCQURILGtCQUNHOztBQUNaLFNBQUssU0FBTCxHQUFpQixFQUFqQixDQURZO0dBQWQ7O2VBRFc7OzZCQUlGLE1BQU0sVUFBVTtBQUN2QixVQUFJLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBSixFQUEwQjtBQUN4QixjQUFNLElBQUksc0JBQUosQ0FBMkIsT0FBTyx3QkFBUCxDQUFqQyxDQUR3QjtPQUExQjtBQUdBLFdBQUssU0FBTCxDQUFlLElBQWYsSUFBdUIsUUFBdkIsQ0FKdUI7Ozs7MkJBTWxCLE1BQU07QUFDWCxVQUFJLENBQUMsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFELEVBQXVCO0FBQ3pCLGNBQU0sSUFBSSxrQkFBSixDQUF1QixPQUFPLG9CQUFQLENBQTdCLENBRHlCO09BQTNCO0FBR0EsYUFBTyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVAsQ0FKVzs7OztTQVZGOzs7a0JBa0JFOztJQUVGOzs7QUFDWCxXQURXLGtCQUNYLEdBQWM7MEJBREgsb0JBQ0c7O2tFQURILGdDQUNHO0dBQWQ7O1NBRFc7RUFBMkI7O0lBTTNCOzs7QUFDWCxXQURXLHNCQUNYLEdBQWM7MEJBREgsd0JBQ0c7O2tFQURILG9DQUNHO0dBQWQ7O1NBRFc7RUFBK0IiLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVwb3J0ZXJSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucmVwb3J0ZXJzID0ge307XG4gIH1cbiAgcmVnaXN0ZXIobmFtZSwgcmVwb3J0ZXIpIHtcbiAgICBpZiAodGhpcy5yZXBvcnRlcnNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBBbHJlYWR5UmVnaXN0ZXJlZEVycm9yKG5hbWUgKyAnIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgICB0aGlzLnJlcG9ydGVyc1tuYW1lXSA9IHJlcG9ydGVyO1xuICB9XG4gIGxvb2t1cChuYW1lKSB7XG4gICAgaWYgKCF0aGlzLnJlcG9ydGVyc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IE5vdFJlZ2lzdGVyZWRFcnJvcihuYW1lICsgJyBpcyBub3QgcmVnaXN0ZXJlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXBvcnRlcnNbbmFtZV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVwb3J0ZXJSZWdpc3RyeTtcblxuZXhwb3J0IGNsYXNzIE5vdFJlZ2lzdGVyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxyZWFkeVJlZ2lzdGVyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19