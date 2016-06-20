var React = require('react');

var CardStack = React.createClass({
  propTypes: {
    header: React.PropTypes.node,
    children: React.PropTypes.node
  },

  render() {
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
