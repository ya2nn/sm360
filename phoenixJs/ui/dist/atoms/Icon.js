function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const Icon = ({
  symbolId,
  extraClasses,
  title,
  desc,
  role,
  ...extraParams
}) => {
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: `a-icon inline-block fill-current ${extraClasses}`,
    role: role,
    focusable: "false"
  }, extraParams), /*#__PURE__*/React.createElement("title", null, title ? title : symbolId), desc && /*#__PURE__*/React.createElement("desc", null, desc), /*#__PURE__*/React.createElement("use", {
    href: `#icon-${symbolId}`
  }));
};

Icon.propTypes = {
  /** `Required` - symbol id from SVG definitions document*/
  symbolId: PropTypes.string.isRequired,

  /** Classes to add to the element.
   * If we want to resize the icon, we can pass the complete tailwind class like `w-[40px]`
   * */
  extraClasses: PropTypes.string,

  /** SVG title */
  title: PropTypes.string,

  /** SVG description */
  desc: PropTypes.string,

  /** SVG role */
  role: PropTypes.string
};
Icon.defaultProps = {
  extraClasses: '',
  role: 'img'
};
export default Icon;