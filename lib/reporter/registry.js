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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9yZWdpc3RyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBRUEsZ0JBQWdCLFdBQWhCLGdCQUFnQjtBQUMzQixXQURXLGdCQUFnQixHQUNiOzBCQURILGdCQUFnQjs7QUFFekIsUUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7R0FDckI7O2VBSFUsZ0JBQWdCOzs2QkFJbEIsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUN2QixVQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDeEIsY0FBTSxJQUFJLHNCQUFzQixDQUFDLElBQUksR0FBRyx3QkFBd0IsQ0FBQyxDQUFDO09BQ25FO0FBQ0QsVUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDakM7OzsyQkFDTSxJQUFJLEVBQUU7QUFDWCxVQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN6QixjQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLENBQUM7T0FDM0Q7QUFDRCxhQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7OztTQWZVLGdCQUFnQjs7O2tCQWtCZCxnQkFBZ0I7O0lBRWxCLGtCQUFrQixXQUFsQixrQkFBa0I7WUFBbEIsa0JBQWtCOztBQUM3QixXQURXLGtCQUFrQixHQUNmOzBCQURILGtCQUFrQjs7a0VBQWxCLGtCQUFrQjtHQUc1Qjs7U0FIVSxrQkFBa0I7R0FBUyxLQUFLOztJQU1oQyxzQkFBc0IsV0FBdEIsc0JBQXNCO1lBQXRCLHNCQUFzQjs7QUFDakMsV0FEVyxzQkFBc0IsR0FDbkI7MEJBREgsc0JBQXNCOztrRUFBdEIsc0JBQXNCO0dBR2hDOztTQUhVLHNCQUFzQjtHQUFTLEtBQUsiLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRlclJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZXBvcnRlcnMgPSB7fTtcbiAgfVxuICByZWdpc3RlcihuYW1lLCByZXBvcnRlcikge1xuICAgIGlmICh0aGlzLnJlcG9ydGVyc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEFscmVhZHlSZWdpc3RlcmVkRXJyb3IobmFtZSArICcgaXMgYWxyZWFkeSByZWdpc3RlcmVkJyk7XG4gICAgfVxuICAgIHRoaXMucmVwb3J0ZXJzW25hbWVdID0gcmVwb3J0ZXI7XG4gIH1cbiAgbG9va3VwKG5hbWUpIHtcbiAgICBpZiAoIXRoaXMucmVwb3J0ZXJzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgTm90UmVnaXN0ZXJlZEVycm9yKG5hbWUgKyAnIGlzIG5vdCByZWdpc3RlcmVkJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlcG9ydGVyc1tuYW1lXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBvcnRlclJlZ2lzdHJ5O1xuXG5leHBvcnQgY2xhc3MgTm90UmVnaXN0ZXJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbHJlYWR5UmVnaXN0ZXJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=