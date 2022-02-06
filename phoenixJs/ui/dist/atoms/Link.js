function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const Link = ({
  children,
  extraClasses,
  href,
  id,
  isTargetBlank,
  onClick,
  onKeyPress,
  role,
  title,
  variant,
  ...extraParams
}) => {
  const target = (isTargetBlank || href.includes('http')) && {
    target: '_blank',
    rel: 'noopener'
  };

  const _id = id && {
    id: `${id}`
  };

  const _role = role && {
    role: `${role}`
  };

  let variantClass;

  switch (variant) {
    case 'primary':
      variantClass = '-primary underline hover:no-underline focus:no-underline active:no-underline';
      break;

    case 'secondary':
      variantClass = '-secondary no-underline hover:underline focus:underline active:underline';
      break;
  }

  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: `a-link ${variantClass} ${extraClasses}`,
    title: title,
    onClick: onClick,
    onKeyPress: onKeyPress
  }, _id, _role, target, extraParams), children);
};

Link.propTypes = {
  /** `Required` - Content of the link */
  children: PropTypes.node.isRequired,

  /** Classes to add to the element */
  extraClasses: PropTypes.string,

  /** `Required` - Url to redirect the user */
  href: PropTypes.string.isRequired,

  /** Id to add to the link */
  id: PropTypes.string,

  /** Url target */
  isTargetBlank: PropTypes.bool,

  /** relation attribute must of the  time related to target attribut  */
  rel: PropTypes.string,

  /** Type of the link */
  variant: PropTypes.oneOf(['primary', 'secondary']),

  /** Possibles Functions */

  /** Function triggered on the element click*/
  onClick: PropTypes.func,

  /** Function triggered on keypress enter or press*/
  onKeyPress: PropTypes.func,

  /** Accessibility Props */

  /** link role  */
  role: PropTypes.string,

  /** `Required` - Url Title, this is useful for given a small description to the link, it's showing a bubble on link highlight (hover)
   * case of use:
   *   1- More Info, Read More,
   *   2- on using a target blank so we mention that link will open in new window (exp:Contact Us (opening in new window))   *
   * */
  title: PropTypes.string.isRequired
};
Link.defaultProps = {
  extraClasses: '',
  isTargetBlank: false,
  variant: 'primary'
};
export default Link;