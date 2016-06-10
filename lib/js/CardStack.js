'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Loader = require('./Loader.jsx');

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardStack = function (_Component) {
  _inherits(CardStack, _Component);

  function CardStack() {
    _classCallCheck(this, CardStack);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardStack).apply(this, arguments));
  }

  _createClass(CardStack, [{
    key: 'render',
    value: function render() {
      if (this.props.loading) {
        return _react2.default.createElement(
          'div',
          { className: 'card-stack' },
          _react2.default.createElement(_Loader2.default, { align: 'center', roomy: true })
        );
      } else if (this.props.children.size === 0) {
        return this.props.zeroState;
      }

      return _react2.default.createElement(
        'div',
        { className: 'card-stack' },
        _react2.default.createElement(
          'div',
          { className: 'card-stack__wrapper' },
          this.props.header,
          this.props.children
        )
      );
    }
  }]);

  return CardStack;
}(_react.Component);

CardStack.propTypes = {
  loading: _react.PropTypes.bool.isRequired,
  header: _react.PropTypes.node,
  zeroState: _react.PropTypes.node,
  children: _react.PropTypes.node
};

exports.default = CardStack;