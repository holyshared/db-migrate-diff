'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractReporter = function () {
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
}();

exports.default = AbstractReporter;

var NotImplementedError = exports.NotImplementedError = function (_Error) {
  _inherits(NotImplementedError, _Error);

  function NotImplementedError() {
    _classCallCheck(this, NotImplementedError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotImplementedError).call(this));
  }

  return NotImplementedError;
}(Error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9hYnN0cmFjdC1yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQjs7Ozs7OzsyQkFDWixRQUFRO0FBQ2IsWUFBTSxJQUFJLG1CQUFKLENBQXdCLG9DQUF4QixDQUFOLENBRGE7Ozs7U0FESTs7Ozs7SUFNUjs7O0FBQ1gsV0FEVyxtQkFDWCxHQUFjOzBCQURILHFCQUNHOztrRUFESCxpQ0FDRztHQUFkOztTQURXO0VBQTRCIiwiZmlsZSI6ImFic3RyYWN0LXJlcG9ydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJzdHJhY3RSZXBvcnRlciB7XG4gIHJlcG9ydChyZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFcnJvcignUGxlYXNlIGltcGxlbWVudCB0aGUgcmVwb3J0IG1ldGhvZCcpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOb3RJbXBsZW1lbnRlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=