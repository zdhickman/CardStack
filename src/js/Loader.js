var React = require('react');
var classNames = require('classnames');

var Loader = React.createClass({
  propTypes: {
    roomy: React.PropTypes.bool,
    className: React.PropTypes.string,
    align: React.PropTypes.oneOf(['center', 'center-center', 'top-center', 'left', 'right']),
    size: React.PropTypes.oneOf(['standard', 'mini'])
  },

  getDefaultProps: function() {
    return {
      align: 'center',
      size: 'standard'
    };
  },

  getClassNames: function() {
    return classNames([
      'loader',
      this.props.className,
      this.props.size,
      this.props.align,
      {'roomy': this.props.roomy}
    ]);
  },

  render: function() {
    return (
      <div className={this.getClassNames()}>
        <span className="dot1" />
        <span className="dot2" />
        <span className="dot3" />
      </div>
    );
  }
});

module.exports = Loader;
