import PropTypes from 'prop-types'
import React from "react";

const DropdownItem = ({ onClick, children, extraClasses, ...extraParams }) => {
  return (
    <li
      className={`m-dropdownItem cursor-pointer p-2 hover:bg-gray-400  ${extraClasses}`}
      onClick={onClick}
      tabIndex={0}
      {...extraParams}
    >
      {children}
    </li>
  )
}

DropdownItem.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  extraClasses: PropTypes.string,
}

DropdownItem.defaultProps = {
  extraClasses: '',
}

export default DropdownItem