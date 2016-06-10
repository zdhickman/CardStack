import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Loader extends Component {

  getClassNames() {
    return classNames([
      'loader',
      this.props.className,
      this.props.size,
      this.props.align,
      {'roomy': this.props.roomy}
    ]);
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <span className="dot1" />
        <span className="dot2" />
        <span className="dot3" />
      </div>
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
