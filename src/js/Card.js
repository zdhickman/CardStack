var React = require('react');
var classNames = require('classnames');

var Card = React.createClass({
  propTypes: {
    summary: React.PropTypes.node.isRequired,
    details: React.PropTypes.node.isRequired,
    expanded: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },

  getClassNames() {
    return classNames(
      'card', {
        'card--expanded': this.props.expanded
      }
    );
  },

  getDetailsClassNames() {
    return classNames(
      'card__details', {
        'card__details--collapsed': !this.props.expanded
      }
    );
  },

  renderDetails() {
    return (
      <div className={this.getDetailsClassNames()}>
        {this.props.expanded ? this.props.details : null}
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
      <div className={this.getClassNames()}>
        {this.renderSummary()}
        {this.renderDetails()}
      </div>
    );
  }
});

module.exports = Card;
