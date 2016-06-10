'use strict';

var React = require('react');
var Loader = require('./Loader');

var CardStack = React.createClass({
  displayName: 'CardStack',

  propTypes: {
    loading: React.PropTypes.bool.isRequired,
    header: React.PropTypes.node,
    zeroState: React.PropTypes.node,
    children: React.PropTypes.node
  },

  render: function render() {
    if (this.props.loading) {
      return React.createElement(
        'div',
        { className: 'card-stack' },
        React.createElement(Loader, { align: 'center', roomy: true })
      );
    } else if (this.props.children.size === 0) {
      return this.props.zeroState;
    }

    return React.createElement(
      'div',
      { className: 'card-stack' },
      React.createElement(
        'div',
        { className: 'card-stack__wrapper' },
        this.props.header,
        this.props.children
      )
    );
  }
});

module.exports = CardStack;