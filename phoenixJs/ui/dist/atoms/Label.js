function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";
import Icon from '../../dist/atoms/Icon';
/**
 * The Tag component is used in association with another UI element to provide categorization informations.
 */

const Label = ({
  label,
  icon,
  iconPosition,
  variant,
  onClick,
  extraClasses,
  labelExtraClasses,
  iconExtraClasses,
  ...extraParams
}) => {
  let variantClasses;
  let parentClasses = '';
  let labelClasses = '';
  const clickClasses = onClick ? 'cursor-pointer' : '';

  switch (variant) {
    case 'solid':
      variantClasses = 'bg-gray-400 text-tertiary';
      break;

    case 'outline':
      variantClasses = 'bg-white text-gray-400 border border-grey-400 rounded-md';
      break;
  }

  if (icon && iconPosition !== 'left') {
    parentClasses = 'flex-row-reverse';
    labelClasses = 'pr-2';
  } else if (icon && iconPosition === 'left') {
    labelClasses = 'pl-2';
  }

  return /*#__PURE__*/React.createElement("span", _extends({
    className: `a-label inline-flex items-center justify-center p-[5px] text-[10px] leading-none ${variantClasses} ${parentClasses} ${clickClasses} ${extraClasses}`,
    onClick: onClick
  }, extraParams), icon && /*#__PURE__*/React.createElement(Icon, {
    symbolId: icon,
    extraClasses: `w-[10px] h-[10px] ${iconExtraClasses}`
  }), /*#__PURE__*/React.createElement("span", {
    className: `${labelClasses} ${labelExtraClasses}`
  }, label));
};

Label.propTypes = {
  /** Label of the Tag */
  label: PropTypes.string,

  /** Add an Icon in the Tag */
  icon: PropTypes.string,

  /** Function triggered when clicking on the element */
  onClick: PropTypes.func,

  /** Alignment of the Icon within the Tag */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** Choose a variant */
  variant: PropTypes.oneOf(['solid', 'outline']),

  /** Extra classes to add to the parent element */
  extraClasses: PropTypes.string,

  /** Extra classes to add to the label element */
  labelExtraClasses: PropTypes.string,

  /** Extra classes to add to the icon element */
  iconExtraClasses: PropTypes.string
};
Label.defaultProps = {
  iconPosition: 'right',
  variant: 'outline',
  extraClasses: '',
  labelExtraClasses: '',
  iconExtraClasses: ''
};
export default Label;