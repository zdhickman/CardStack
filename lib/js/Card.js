'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'getBaseClassNames',
    value: function getBaseClassNames() {
      return (0, _classnames2.default)('card-stack__card', {
        'card-stack__card--expanded': this.props.expanded,
        'card-stack__card--first': this.props.first,
        'card-stack__card--last': this.props.last,
        'card-stack__card--below-expanded': this.props.belowExpanded
      });
    }

    // Implemented by child classes

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  expanded: _react.PropTypes.bool.isRequired,
  belowExpanded: _react.PropTypes.bool.isRequired,
  first: _react.PropTypes.bool,
  last: _react.PropTypes.bool
};

exports.default = Card;