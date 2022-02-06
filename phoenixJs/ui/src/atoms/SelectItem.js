import PropTypes from 'prop-types'
import React from "react";

const SelectItem = ({ children, value, extraClasses, ...extraParams }) => {
  return (
    <option
      className={`a-selectItem ${extraClasses}`}
      value={value}
      {...extraParams}
    >
      {children}
    </option>
  )
}

SelectItem.propTypes = {
  /** `Required` - SelectItem child node */
  children: PropTypes.node.isRequired,
  /** SelectItem value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** SelectItem extra classe */
  extraClasses: PropTypes.string,
}

SelectItem.defaultProps = {
  extraClasses: '',
}

export default SelectItem