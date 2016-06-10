var React = require('react');
var Loader = require('./Loader');

var CardStack = React.createClass({
  propTypes: {
    loading: React.PropTypes.bool.isRequired,
    header: React.PropTypes.node,
    zeroState: React.PropTypes.node,
    children: React.PropTypes.node
  },

  render() {
    if (this.props.loading) {
      return (
        <div className="card-stack">
          <Loader align="center" roomy={true} />
        </div>
      );
    } else if (this.props.children.size === 0) {
      return this.props.zeroState;
    }

    return (
      <div className="card-stack">
        <div className="card-stack__wrapper">
          {this.props.header}
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = CardStack;
