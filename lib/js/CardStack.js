import React, { Component, PropTypes } from 'react';

import Loader from './Loader.jsx';

class CardStack extends Component {
  render() {
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
}

CardStack.propTypes = {
  loading: PropTypes.bool.isRequired,
  header: PropTypes.node,
  zeroState: PropTypes.node,
  children: PropTypes.node
};

export default CardStack;