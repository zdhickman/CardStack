import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

class Loader extends Component {

  getClassNames() {
    return classNames(['loader', this.props.className, this.props.size, this.props.align, { 'roomy': this.props.roomy }]);
  }

  render() {
    return React.createElement(
      'div',
      { className: this.getClassNames() },
      React.createElement('span', { className: 'dot1' }),
      React.createElement('span', { className: 'dot2' }),
      React.createElement('span', { className: 'dot3' })
    );
  }

}

Loader.defaultProps = {
  align: 'center',
  size: 'standard'
};

Loader.propTypes = {
  roomy: PropTypes.bool,
  className: PropTypes.string,
  align: PropTypes.oneOf(['center', 'center-center', 'top-center', 'left', 'right']),
  size: PropTypes.oneOf(['standard', 'mini'])
};

export default Loader;