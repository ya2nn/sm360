function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";
import Card from '../../dist/organisms/Card';

const VehicleCard = ({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  children,
  ...extraParams
}) => {
  return /*#__PURE__*/React.createElement(Card, _extends({
    extraClasses: 'o-vehicleCard',
    imgExtraClasses: 'o-vehicleCard__image',
    contentExtraClasses: 'o-vehicleCard__content',
    imgSrc: imgSrc,
    imgAlt: imgAlt,
    imgWidth: imgWidth,
    imgHeight: imgHeight
  }, extraParams), children);
};

VehicleCard.propTypes = {
  /** Children content node */
  children: PropTypes.node,

  /** Url of image */
  imgSrc: PropTypes.string,

  /** `Required` - Set an alt to your image */
  imgAlt: PropTypes.string.isRequired,

  /** `Required` - Set a width to your image */
  imgWidth: PropTypes.string.isRequired,

  /** `Required` - Set a height to your image */
  imgHeight: PropTypes.string.isRequired
};
export default VehicleCard;