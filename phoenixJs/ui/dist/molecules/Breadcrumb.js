import PropTypes from 'prop-types';
import React from "react";
import BreadcrumbItem from '../../dist/molecules/BreadcrumbItem';

const Breadcrumb = ({
  items,
  children,
  navExtraClasses,
  listExtraClasses,
  homeLabel,
  hasHomeIcon,
  biIconSeparatorExtraClasses,
  biLinkExtraClasses,
  biListItemExtraClasses,
  biHomeIconExtraClasses,
  biHomeIconSizeExtraClasses,
  biLabelExtraClasses,
  biIsIconSeparator,
  biIconSeparator,
  biFontSeparator
}) => {
  return /*#__PURE__*/React.createElement("nav", {
    className: `m-breadcrumb overflow-x-auto scrollbar-hide ${navExtraClasses}`,
    "aria-label": "breadcrumb",
    role: "navigation"
  }, /*#__PURE__*/React.createElement("ol", {
    className: `m-breadcrumb__list flex items-end whitespace-nowrap ${listExtraClasses}`
  }, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    label: homeLabel,
    url: "/",
    isFirst: true,
    hasHomeIcon: hasHomeIcon,
    homeIconExtraClasses: biHomeIconExtraClasses,
    homeIconSizeExtraClasses: biHomeIconSizeExtraClasses,
    isIconSeparator: biIsIconSeparator,
    iconSeparator: biIconSeparator,
    fontSeparator: biFontSeparator
  }), items && items.length > 0 ? items.map(({
    label,
    url
  }, index) => /*#__PURE__*/React.createElement(BreadcrumbItem, {
    key: index,
    label: label,
    url: url,
    isLast: index === items.length - 1,
    iconSeparatorExtraClasses: biIconSeparatorExtraClasses,
    linkExtraClasses: biLinkExtraClasses,
    listItemExtraClasses: biListItemExtraClasses,
    labelExtraClasses: biLabelExtraClasses,
    isIconSeparator: biIsIconSeparator,
    iconSeparator: biIconSeparator,
    fontSeparator: biFontSeparator
  })) : children));
};

Breadcrumb.propTypes = {
  /**  List of link objects */
  items: PropTypes.arrayOf(PropTypes.shape({
    /** link text */
    label: PropTypes.string.isRequired,

    /** URL for the link */
    url: PropTypes.string
  })),

  /** Could be a node Children*/
  children: PropTypes.node,

  /** Custom Home Item */

  /** Home Label */
  homeLabel: PropTypes.string,

  /** Boolean Home Item has Icon*/
  hasHomeIcon: PropTypes.bool,

  /** Nav ExtraClass */
  navExtraClasses: PropTypes.string,

  /** list extra class */
  listExtraClasses: PropTypes.string,

  /** Breadcrumb Item props */

  /** Boolean that allows the separator link to be a font or an Icon, default value is true so it shows Icon */
  biIsIconSeparator: PropTypes.bool,

  /**  Custom BreadcrumbSeparator icon (symbolId). */
  biIconSeparator: PropTypes.string,

  /** Custom BreadcrumbSeparator font. */
  biFontSeparator: PropTypes.string,

  /** Home Icon Extra Classes */
  biHomeIconExtraClasses: PropTypes.string,

  /** Home Icon Size Extra Classes */
  biHomeIconSizeExtraClasses: PropTypes.string,

  /** Classes to add to the item */
  biListItemExtraClasses: PropTypes.string,

  /** Classes to add to the item link*/
  biLinkExtraClasses: PropTypes.string,

  /** Classes to add to the item icon */
  biIconSeparatorExtraClasses: PropTypes.string,

  /** Classes to add to the item typo */
  biLabelExtraClasses: PropTypes.string
};
Breadcrumb.defaultProps = {
  homeLabel: '',
  hasHomeIcon: false,
  navExtraClasses: '',
  listExtraClasses: '',
  biIsIconSeparator: false,
  biIconSeparator: 'arrow-right',
  biFontSeparator: '>',
  biListItemExtraClasses: '',
  biHomeIconExtraClasses: '',
  biHomeIconSizeExtraClasses: 'w-[25px] h-[25px]',
  biLinkExtraClasses: '',
  biIconSeparatorExtraClasses: '',
  biLabelExtraClasses: ''
};
export default Breadcrumb;