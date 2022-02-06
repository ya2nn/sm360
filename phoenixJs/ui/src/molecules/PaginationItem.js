import PropTypes from 'prop-types'
import React from "react";

const PaginationItem = ({ onClick, children, isDisabled, extraClasses }) => {
  const isDisabledClasses = isDisabled
    ? 'text-gray-400 cursor-not-allowed'
    : 'hover:text-primary'

  return (
    <button
      className={`m-paginationItem flex h-[30px] items-center p-[10px] ${isDisabledClasses} ${extraClasses}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

PaginationItem.propTypes = {
  /** `isRequired` - Content of the PaginationItem */
  children: PropTypes.node.isRequired,
  /** OnClick event */
  onClick: PropTypes.func,
  /** Pagination Item extra Classes*/
  extraClasses: PropTypes.string,
  /** Disabled Item */
  isDisabled: PropTypes.bool,
}

PaginationItem.defaultProps = {
  extraClasses: '',
}

export default PaginationItem