import PropTypes from 'prop-types'
import React from "react";

import Card from '../../dist/organisms/Card'

const VehicleCard = ({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  children,
  ...extraParams
}) => {
  return (
    <Card
      extraClasses={'o-vehicleCard'}
      imgExtraClasses={'o-vehicleCard__image'}
      contentExtraClasses={'o-vehicleCard__content'}
      imgSrc={imgSrc}
      imgAlt={imgAlt}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      {...extraParams}
    >
      {children}
    </Card>
  )
}

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
  imgHeight: PropTypes.string.isRequired,
}

export default VehicleCard