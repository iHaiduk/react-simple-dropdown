import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DropdownTrigger extends PureComponent {
  render() {
    return React.createElement(
      'a',
      this.props,
      this.props.children
    );
  }
}

DropdownTrigger.displayName = 'DropdownTrigger';

DropdownTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

DropdownTrigger.defaultProps = {
  className: ''
};

export default DropdownTrigger;