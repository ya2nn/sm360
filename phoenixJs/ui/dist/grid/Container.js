function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const Container = ({
  children,
  extraClasses,
  isFull,
  ...extraParams
}) => {
  const _className = isFull ? 'w-full' : 'container mx-auto px-4';

  return /*#__PURE__*/React.createElement("div", _extends({
    className: `${_className} ${extraClasses}`
  }, extraParams), children);
};

Container.propTypes = {
  /** Container content */
  children: PropTypes.node,

  /** Is full container */
  isFull: PropTypes.bool,

  /** Classes to add to the parent element */
  extraClasses: PropTypes.string
};
Container.defaultProps = {
  extraClasses: '',
  isFull: false
};
export default Container;