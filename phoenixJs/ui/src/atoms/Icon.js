import PropTypes from 'prop-types'
import React from "react";

const Icon = ({
  symbolId,
  extraClasses,
  title,
  desc,
  role,
  ...extraParams
}) => {
  return (
    <svg
      className={`a-icon inline-block fill-current ${extraClasses}`}
      role={role}
      focusable='false'
      {...extraParams}
    >
      <title>{title ? title : symbolId}</title>
      {desc && <desc>{desc}</desc>}
      <use href={`#icon-${symbolId}`} />
    </svg>
  )
}

Icon.propTypes = {
  /** `Required` - symbol id from SVG definitions document*/
  symbolId: PropTypes.string.isRequired,
  /** Classes to add to the element.
   * If we want to resize the icon, we can pass the complete tailwind class like `w-[40px]`
   * */
  extraClasses: PropTypes.string,
  /** SVG title */
  title: PropTypes.string,
  /** SVG description */
  desc: PropTypes.string,
  /** SVG role */
  role: PropTypes.string,
}

Icon.defaultProps = {
  extraClasses: '',
  role: 'img',
}

export default Icon