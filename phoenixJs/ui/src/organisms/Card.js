import PropTypes from 'prop-types'
import React from "react";

import Image from '../../dist/atoms/Image'

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
  return (
    <article
      className={`o-card border border-solid border-gray-200 shadow-md ${extraClasses}`}
      {...extraParams}
    >
      <Image
        className={`o-card__image w-full object-cover ${imgExtraClasses}`}
        src={imgSrc}
        alt={imgAlt}
        height={imgHeight}
        width={imgWidth}
      />
      {children && (
        <div className={`o-card__content p-4 ${contentExtraClasses}`}>
          {children}
        </div>
      )}
    </article>
  )
}

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
  imgExtraClasses: PropTypes.string,
}

export default Card