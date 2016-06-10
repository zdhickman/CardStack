var React = require('react');
var classNames = require('classnames');

var Card = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    expanded: React.PropTypes.bool.isRequired,
    belowExpanded: React.PropTypes.bool.isRequired,
    first: React.PropTypes.bool,
    last: React.PropTypes.bool
  },

  getBaseClassNames() {
    return classNames(
      'card-stack__card', {
        'card-stack__card--expanded': this.props.expanded,
        'card-stack__card--first': this.props.first,
        'card-stack__card--last': this.props.last,
        'card-stack__card--below-expanded': this.props.belowExpanded
      });
  },

  // Implemented by child classes
  render() {
    return null;
  }
});

module.exports = Card;