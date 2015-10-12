'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

exports['default'] = AbstractReporter;

var NotImplementedError = (function (_Error) {
  _inherits(NotImplementedError, _Error);

  function NotImplementedError() {
    _classCallCheck(this, NotImplementedError);

    _get(Object.getPrototypeOf(NotImplementedError.prototype), 'constructor', this).call(this);
  }

  return NotImplementedError;
})(Error);

exports.NotImplementedError = NotImplementedError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBvcnRlci9hYnN0cmFjdC1yZXBvcnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFxQixnQkFBZ0I7V0FBaEIsZ0JBQWdCOzBCQUFoQixnQkFBZ0I7OztlQUFoQixnQkFBZ0I7O1dBQzdCLGdCQUFDLE1BQU0sRUFBRTtBQUNiLFlBQU0sSUFBSSxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQ3JFOzs7U0FIa0IsZ0JBQWdCOzs7cUJBQWhCLGdCQUFnQjs7SUFNeEIsbUJBQW1CO1lBQW5CLG1CQUFtQjs7QUFDbkIsV0FEQSxtQkFBbUIsR0FDaEI7MEJBREgsbUJBQW1COztBQUU1QiwrQkFGUyxtQkFBbUIsNkNBRXBCO0dBQ1Q7O1NBSFUsbUJBQW1CO0dBQVMsS0FBSyIsImZpbGUiOiJhYnN0cmFjdC1yZXBvcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0UmVwb3J0ZXIge1xuICByZXBvcnQocmVzdWx0KSB7XG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXJyb3IoJ1BsZWFzZSBpbXBsZW1lbnQgdGhlIHJlcG9ydCBtZXRob2QnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTm90SW1wbGVtZW50ZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19