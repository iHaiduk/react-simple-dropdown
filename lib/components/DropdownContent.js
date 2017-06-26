import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DropdownContent extends PureComponent {
  render() {
    return React.createElement(
      'div',
      this.props,
      this.props.children
    );
  }
}

DropdownContent.displayName = 'DropdownContent';

DropdownContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DropdownContent.defaultProps = {
  className: ''
};

export default DropdownContent;