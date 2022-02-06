import PropTypes from 'prop-types'
import React from "react";

const Container = ({ children, extraClasses, isFull, ...extraParams }) => {
  const _className = isFull ? 'w-full' : 'container mx-auto px-4'

  return (
    <div className={`${_className} ${extraClasses}`} {...extraParams}>
      {children}
    </div>
  )
}

Container.propTypes = {
  /** Container content */
  children: PropTypes.node,
  /** Is full container */
  isFull: PropTypes.bool,
  /** Classes to add to the parent element */
  extraClasses: PropTypes.string,
}

Container.defaultProps = {
  extraClasses: '',
  isFull: false,
}

export default Container