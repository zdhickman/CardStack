var React = require('react');
var classNames = require('classnames');
var Loader = require('./Loader');

var Card = (Summary, Details) => React.createClass({
  propTypes: {
    onClick: React.PropTypes.func.isRequired,
    expanded: React.PropTypes.bool.isRequired,
    belowExpanded: React.PropTypes.bool.isRequired,
    first: React.PropTypes.bool,
    last: React.PropTypes.bool
  },

  getBaseClassNames() {
    return classNames(
      'card', {
        'card--expanded': this.props.expanded,
        'card--first': this.props.first,
        'card--last': this.props.last,
        'card--below-expanded': this.props.belowExpanded
      });
  },

  renderDetails() {
    if (!this.props.expanded) {
      return null;
    } else if (this.props.loading) {
      return <Loader />;
    }

    return (
      <div className='card__details'>
        <Details {...this.props} />
      </div>
    );
  },

  renderSummary() {
    return (
      <div className='card__summary' onClick={this.props.onClick}>
        <Summary {...this.props} />
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
