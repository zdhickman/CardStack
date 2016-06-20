var React = require('react');
var classNames = require('classnames');

var Card = React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool,
    belowExpanded: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getBaseClassNames() {
    return classNames(
      'card', {
        'card--expanded': this.props.expanded,
        'card--below-expanded': this.props.belowExpanded
      });
  },

  renderDetails() {
    if (!this.props.expanded) {
      return null;
    }

    return (
      <div className='card__details'>
        {this.props.details}
      </div>
    );
  },

  renderSummary() {
    return (
      <div className='card__summary' onClick={this.props.onClick}>
        {this.props.summary}
      </div>
    );
  },

  render() {
    return (
      <div className={this.getBaseClassNames()}>
        {this.renderSummary()}
        {this.renderDetails()}
      </div>
    );
  }
});

module.exports = Card;
