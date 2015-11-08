'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReporterRegistry = exports.ReporterRegistry = (function () {
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

exports.default = ReporterRegistry;

var NotRegisteredError = exports.NotRegisteredError = (function (_Error) {
  _inherits(NotRegisteredError, _Error);

  function NotRegisteredError() {
    _classCallCheck(this, NotRegisteredError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotRegisteredError).call(this));
  }

  return NotRegisteredError;
})(Error);

var AlreadyRegisteredError = exports.AlreadyRegisteredError = (function (_Error2) {
  _inherits(AlreadyRegisteredError, _Error2);

  function AlreadyRegisteredError() {
    _classCallCheck(this, AlreadyRegisteredError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AlreadyRegisteredError).call(this));
  }

  return AlreadyRegisteredError;
})(Error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFhLGdCQUFnQixXQUFoQixnQkFBZ0I7QUFDM0IsV0FEVyxnQkFBZ0IsR0FDYjswQkFESCxnQkFBZ0I7O0FBRXpCLFFBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0dBQ3JCOztlQUhVLGdCQUFnQjs7NkJBSWxCLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDdkIsVUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3hCLGNBQU0sSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLEdBQUcsd0JBQXdCLENBQUMsQ0FBQztPQUNuRTtBQUNELFVBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO0tBQ2pDOzs7MkJBQ00sSUFBSSxFQUFFO0FBQ1gsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekIsY0FBTSxJQUFJLGtCQUFrQixDQUFDLElBQUksR0FBRyxvQkFBb0IsQ0FBQyxDQUFDO09BQzNEO0FBQ0QsYUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7U0FmVSxnQkFBZ0I7OztrQkFrQmQsZ0JBQWdCOztJQUVsQixrQkFBa0IsV0FBbEIsa0JBQWtCO1lBQWxCLGtCQUFrQjs7QUFDN0IsV0FEVyxrQkFBa0IsR0FDZjswQkFESCxrQkFBa0I7O2tFQUFsQixrQkFBa0I7R0FHNUI7O1NBSFUsa0JBQWtCO0dBQVMsS0FBSzs7SUFNaEMsc0JBQXNCLFdBQXRCLHNCQUFzQjtZQUF0QixzQkFBc0I7O0FBQ2pDLFdBRFcsc0JBQXNCLEdBQ25COzBCQURILHNCQUFzQjs7a0VBQXRCLHNCQUFzQjtHQUdoQzs7U0FIVSxzQkFBc0I7R0FBUyxLQUFLIiwiZmlsZSI6InJlZ2lzdHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlcG9ydGVyUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlcG9ydGVycyA9IHt9O1xuICB9XG4gIHJlZ2lzdGVyKG5hbWUsIHJlcG9ydGVyKSB7XG4gICAgaWYgKHRoaXMucmVwb3J0ZXJzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgQWxyZWFkeVJlZ2lzdGVyZWRFcnJvcihuYW1lICsgJyBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQnKTtcbiAgICB9XG4gICAgdGhpcy5yZXBvcnRlcnNbbmFtZV0gPSByZXBvcnRlcjtcbiAgfVxuICBsb29rdXAobmFtZSkge1xuICAgIGlmICghdGhpcy5yZXBvcnRlcnNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBOb3RSZWdpc3RlcmVkRXJyb3IobmFtZSArICcgaXMgbm90IHJlZ2lzdGVyZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVwb3J0ZXJzW25hbWVdO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydGVyUmVnaXN0cnk7XG5cbmV4cG9ydCBjbGFzcyBOb3RSZWdpc3RlcmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFscmVhZHlSZWdpc3RlcmVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiJdfQ==