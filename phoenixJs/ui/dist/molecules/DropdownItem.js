function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const DropdownItem = ({
  onClick,
  children,
  extraClasses,
  ...extraParams
}) => {
  return /*#__PURE__*/React.createElement("li", _extends({
    className: `m-dropdownItem cursor-pointer p-2 hover:bg-gray-400  ${extraClasses}`,
    onClick: onClick,
    tabIndex: 0
  }, extraParams), children);
};

DropdownItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  extraClasses: PropTypes.string
};
DropdownItem.defaultProps = {
  extraClasses: ''
};
export default DropdownItem;