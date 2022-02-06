function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const SelectItem = ({
  children,
  value,
  extraClasses,
  ...extraParams
}) => {
  return /*#__PURE__*/React.createElement("option", _extends({
    className: `a-selectItem ${extraClasses}`,
    value: value
  }, extraParams), children);
};

SelectItem.propTypes = {
  /** `Required` - SelectItem child node */
  children: PropTypes.node.isRequired,

  /** SelectItem value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** SelectItem extra classe */
  extraClasses: PropTypes.string
};
SelectItem.defaultProps = {
  extraClasses: ''
};
export default SelectItem;