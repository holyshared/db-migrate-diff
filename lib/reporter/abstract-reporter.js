'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractReporter = (function () {
  function AbstractReporter() {
    _classCallCheck(this, AbstractReporter);
  }

  _createClass(AbstractReporter, [{
    key: 'report',
    value: function report(result) {
      throw new NotImplementedError('Please implement the report method');
    }
  }]);

  return AbstractReporter;
})();

exports.default = AbstractReporter;

var NotImplementedError = exports.NotImplementedError = (function (_Error) {
  _inherits(NotImplementedError, _Error);

  function NotImplementedError() {
    _classCallCheck(this, NotImplementedError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotImplementedError).call(this));
  }

  return NotImplementedError;
})(Error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9hYnN0cmFjdC1yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBRVEsZ0JBQWdCO1dBQWhCLGdCQUFnQjswQkFBaEIsZ0JBQWdCOzs7ZUFBaEIsZ0JBQWdCOzsyQkFDNUIsTUFBTSxFQUFFO0FBQ2IsWUFBTSxJQUFJLG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLENBQUM7S0FDckU7OztTQUhrQixnQkFBZ0I7OztrQkFBaEIsZ0JBQWdCOztJQU14QixtQkFBbUIsV0FBbkIsbUJBQW1CO1lBQW5CLG1CQUFtQjs7QUFDOUIsV0FEVyxtQkFBbUIsR0FDaEI7MEJBREgsbUJBQW1COztrRUFBbkIsbUJBQW1CO0dBRzdCOztTQUhVLG1CQUFtQjtHQUFTLEtBQUsiLCJmaWxlIjoiYWJzdHJhY3QtcmVwb3J0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVwb3J0ZXIge1xuICByZXBvcnQocmVzdWx0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ1BsZWFzZSBpbXBsZW1lbnQgdGhlIHJlcG9ydCBtZXRob2QnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90SW1wbGVtZW50ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19