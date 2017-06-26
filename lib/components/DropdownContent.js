function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownContent extends Component {
  render() {
    const _props = this.props,
          { children, className } = _props,
          dropdownContentProps = _objectWithoutProperties(_props, ['children', 'className']);
    return React.createElement(
      'div',
      dropdownContentProps,
      children
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