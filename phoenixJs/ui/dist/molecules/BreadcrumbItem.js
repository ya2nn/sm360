function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";
import Icon from '../../dist/atoms/Icon';
import Link from '../../dist/atoms/Link';

const BreadcrumbItem = ({
  label,
  url,
  hasHomeIcon,
  isFirst,
  isLast,
  iconSeparatorExtraClasses,
  linkExtraClasses,
  listItemExtraClasses,
  homeIconExtraClasses,
  homeIconSizeExtraClasses,
  labelExtraClasses,
  isIconSeparator,
  iconSeparator,
  fontSeparator,
  ...extraParams
}) => {
  const ariaCurrent = isLast && {
    'aria-current': 'page'
  };
  const activeItemClass = isLast || !url ? '-active' : '';

  const BreadcrumbSeparator = ({
    fontSeparator,
    iconSeparator,
    isIconSeparator,
    iconSeparatorExtraClasses
  }) => {
    return isIconSeparator ? /*#__PURE__*/React.createElement("span", {
      className: "m-breadcrumbItem__separator pl-[5px] pr-[5px]"
    }, /*#__PURE__*/React.createElement(Icon, {
      symbolId: iconSeparator,
      extraClasses: `w-[10px] h-[10px] ${iconSeparatorExtraClasses}`
    })) : /*#__PURE__*/React.createElement("span", {
      className: "m-breadcrumbItem__separator pl-[5px] pr-[5px]"
    }, fontSeparator);
  };

  return (label || hasHomeIcon) && /*#__PURE__*/React.createElement("li", _extends({
    className: `m-breadcrumbItem flex flex-nowrap items-center p-[2px] ${activeItemClass} ${listItemExtraClasses}`
  }, ariaCurrent, extraParams), !isFirst && /*#__PURE__*/React.createElement(BreadcrumbSeparator, {
    fontSeparator: fontSeparator,
    iconSeparator: iconSeparator,
    isIconSeparator: isIconSeparator,
    iconSeparatorExtraClasses: iconSeparatorExtraClasses
  }), url ? /*#__PURE__*/React.createElement(Link, {
    href: url,
    title: !label && isFirst ? 'Home' : label,
    extraClasses: `m-breadcrumbItem__link ${isFirst ? 'inline-flex flex-nowrap items-end' : ''} ${linkExtraClasses}`
  }, hasHomeIcon && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    symbolId: "home",
    extraClasses: `m-breadcrumbItem__icon align-text-bottom ${label ? 'pr-[5px]' : ''} ${homeIconExtraClasses} ${homeIconSizeExtraClasses}`
  })), /*#__PURE__*/React.createElement("span", {
    className: `m-breadcrumbItem__label ${labelExtraClasses}`
  }, label)) : /*#__PURE__*/React.createElement("span", {
    className: `m-breadcrumbItem__label -active ${labelExtraClasses}`
  }, label));
};

BreadcrumbItem.propTypes = {
  /** Label */
  label: PropTypes.string,

  /** URL */
  url: PropTypes.string,

  /** is First Element */
  isFirst: PropTypes.bool,

  /** is Last Element */
  isLast: PropTypes.bool,

  /** Boolean that allows the separator link to be a font or an Icon, default value is true so it shows Icon */
  isIconSeparator: PropTypes.bool,

  /**  Custom BreadcrumbSeparator icon (symbolId). */
  iconSeparator: PropTypes.string,

  /** Custom BreadcrumbSeparator font. */
  fontSeparator: PropTypes.string,

  /** Home Icon Extra Classes */
  homeIconExtraClasses: PropTypes.string,

  /** Home Icon Size Extra Classes */
  homeIconSizeExtraClasses: PropTypes.string,

  /** Boolean Home Item has Icon*/
  hasHomeIcon: PropTypes.bool,

  /** Classes to add to the item */
  listItemExtraClasses: PropTypes.string,

  /** Classes to add to the item link*/
  linkExtraClasses: PropTypes.string,

  /** Classes to add to the icon separator */
  iconSeparatorExtraClasses: PropTypes.string,

  /** Classes to add to the item typo */
  labelExtraClasses: PropTypes.string
};
BreadcrumbItem.defaultProps = {
  isLast: false,
  hasHomeIcon: false,
  isIconSeparator: false,
  iconSeparator: 'arrow-right',
  fontSeparator: '>',
  listItemExtraClasses: '',
  homeIconExtraClasses: '',
  homeIconSizeExtraClasses: 'w-[25px] h-[25px]',
  linkExtraClasses: '',
  iconSeparatorExtraClasses: '',
  labelExtraClasses: ''
};
export default BreadcrumbItem;