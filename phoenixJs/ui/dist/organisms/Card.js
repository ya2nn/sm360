function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";
import Image from '../../dist/atoms/Image';

const Card = ({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  children,
  extraClasses,
  contentExtraClasses,
  imgExtraClasses,
  ...extraParams
}) => {
  return /*#__PURE__*/React.createElement("article", _extends({
    className: `o-card border border-solid border-gray-200 shadow-md ${extraClasses}`
  }, extraParams), /*#__PURE__*/React.createElement(Image, {
    className: `o-card__image w-full object-cover ${imgExtraClasses}`,
    src: imgSrc,
    alt: imgAlt,
    height: imgHeight,
    width: imgWidth
  }), children && /*#__PURE__*/React.createElement("div", {
    className: `o-card__content p-4 ${contentExtraClasses}`
  }, children));
};

Card.propTypes = {
  /** Children content node */
  children: PropTypes.node,

  /** Url of image */
  imgSrc: PropTypes.string,

  /** `Required` - Set an alt to your image */
  imgAlt: PropTypes.string.isRequired,

  /** `Required` - Set a width to your image */
  imgWidth: PropTypes.string.isRequired,

  /** `Required` - Set a height to your image */
  imgHeight: PropTypes.string.isRequired,

  /** Extra classes */
  extraClasses: PropTypes.string,

  /** Content extra classes */
  contentExtraClasses: PropTypes.string,

  /** Image extra classes */
  imgExtraClasses: PropTypes.string
};
export default Card;