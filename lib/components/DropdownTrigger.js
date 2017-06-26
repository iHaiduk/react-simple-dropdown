function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownTrigger extends Component {
  render() {
    const _props = this.props,
          { children, className } = _props,
          dropdownTriggerProps = _objectWithoutProperties(_props, ['children', 'className']);
    return React.createElement(
      'a',
      dropdownTriggerProps,
      children
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