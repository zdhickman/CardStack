'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require('react');
var classNames = require('classnames');

var Loader = React.createClass({
  displayName: 'Loader',

  propTypes: {
    roomy: React.PropTypes.bool,
    className: React.PropTypes.string,
    align: React.PropTypes.oneOf(['center', 'center-center', 'top-center', 'left', 'right']),
    size: React.PropTypes.oneOf(['standard', 'mini'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      align: 'center',
      size: 'standard'
    };
  },

  getClassNames: function getClassNames() {
    return classNames(['loader', this.props.className, this.props.size, this.props.align, { 'roomy': this.props.roomy }]);
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: this.getClassNames() },
      React.createElement('span', { className: 'dot1' }),
      React.createElement('span', { className: 'dot2' }),
      React.createElement('span', { className: 'dot3' })
    );
  }
});

exports.default = Loader;