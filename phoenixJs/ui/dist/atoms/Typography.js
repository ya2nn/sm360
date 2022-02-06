function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const Typography = ({
  tag,
  children,
  variant,
  extraClasses,
  role,
  ...extraParams
}) => {
  const variantClass = variant ? `-${variant}` : '';

  switch (tag) {
    case 'h1':
      return /*#__PURE__*/React.createElement("h1", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: "heading",
        "aria-level": "1"
      }, extraParams), children);

    case 'h2':
      return /*#__PURE__*/React.createElement("h2", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: "heading",
        "aria-level": "2"
      }, extraParams), children);

    case 'h3':
      return /*#__PURE__*/React.createElement("h3", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: "heading",
        "aria-level": "3"
      }, extraParams), children);

    case 'h4':
      return /*#__PURE__*/React.createElement("h4", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: "heading",
        "aria-level": "4"
      }, extraParams), children);

    case 'h5':
      return /*#__PURE__*/React.createElement("h5", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: "heading",
        "aria-level": "5"
      }, extraParams), children);

    case 'h6':
      return /*#__PURE__*/React.createElement("h6", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: "heading",
        "aria-level": "6"
      }, extraParams), children);

    case 'p':
      return /*#__PURE__*/React.createElement("p", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: role ? role : variant && variant.includes('heading') ? 'heading' : ''
      }, extraParams), children);

    default:
      return /*#__PURE__*/React.createElement("span", _extends({
        className: `a-typography ${variantClass} ${extraClasses}`,
        role: role ? role : variant && variant.includes('heading') ? 'heading' : ''
      }, extraParams), children);
  }
};

Typography.propTypes = {
  /** `Required` - Tag */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']).isRequired,

  /** `Required` - Content */
  children: PropTypes.any.isRequired,

  /** Variant */
  variant: PropTypes.oneOf(['heading1', 'heading2', 'heading3', 'heading4', 'heading5', 'heading6', 'fineprint', 'body', 'subtitle']),

  /** Classes to add to the element */
  extraClasses: PropTypes.string,

  /** Role */
  role: PropTypes.string
};
Typography.defaultProps = {
  extraClasses: '',
  role: ''
};
export default Typography;