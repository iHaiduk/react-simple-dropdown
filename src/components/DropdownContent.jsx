import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownContent extends Component {
  render () {
    const { children, className, ...dropdownContentProps } = this.props;

    return (
      <div {...dropdownContentProps}>
        {children}
      </div>
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
