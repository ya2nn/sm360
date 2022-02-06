import PropTypes from 'prop-types'
import React from "react";

/**
 * The Badge component is mostly used in association with another UI element to provide textual, numerical or svg informations.
 */
const Badge = ({
  label,
  shape,
  extraClasses,
  size,
  children,
  ...extraParams
}) => {
  let _size

  switch (size) {
    case 'tiny':
      _size = 'w-[15px] h-[15px] text-xs p-[2px]'
      break
    case 'small':
      _size = 'w-[20px] h-[20px] text-sm p-[4px]'
      break
    case 'large':
      _size = 'w-[25px] h-[25px] text-lg p-[6px]'
      break
    case 'custom':
      _size = ''
      break
    default:
      _size = 'w-[25px] h-[25px] text-lg p-[6px]'
  }

  return (
    <span
      className={`a-badge flex items-center justify-center ${
        shape === 'round' && `rounded-full`
      } ${_size} ${extraClasses}`}
      {...extraParams}
    >
      {label || children}
    </span>
  )
}

Badge.propTypes = {
  /** Label of the Badge */
  label: PropTypes.string,
  /** Content of the Badge */
  children: PropTypes.node,
  /** Add Classes to the element */
  extraClasses: PropTypes.string,
  /** Shape of the Badge */
  shape: PropTypes.oneOf(['square', 'round']),
  /** Size of the Badge. If size custom so configure your size in extraClasses parameter */
  size: PropTypes.oneOf(['tiny', 'small', 'default', 'large', 'custom']),
}

Badge.defaultProps = {
  shape: 'round',
  size: 'default',
}

export default Badge