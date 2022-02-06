import PropTypes from 'prop-types'
import React from "react";

const TabLink = ({
  extraClasses,
  extraActiveClasses,
  isActive = false,
  title = '',
  handleClick = () => console.error('You passed no action to the component'),
  handleKeyPress,
  linkIndex,
  tabIndex,
  ...extraParams
}) => {
  const activeClass = `-active bg-primary-white text-primary-black`.concat(
    extraActiveClasses ? ` ${extraActiveClasses}` : ''
  )

  return (
    <button
      className={`m-tabLink flex flex-1 cursor-pointer items-center justify-center p-4 transition-all duration-300 ${extraClasses} ${
        isActive ? activeClass : ''
      }`}
      role='tab'
      tabIndex={tabIndex}
      data-tab-link-index={linkIndex}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      {...extraParams}
    >
      {title}
    </button>
  )
}

TabLink.propTypes = {
  /** Classes to add to the item */
  extraClasses: PropTypes.string,
  /** Classes to add to the active item */
  extraActiveClasses: PropTypes.string,
  /** `Required` - Item is active */
  isActive: PropTypes.bool.isRequired,
  /** `Required` - Add navigation items */
  linkIndex: PropTypes.number.isRequired,
  /** The item is tabular or not (`0` - yes | `-1` - no) */
  tabIndex: PropTypes.oneOf([0, -1]),
  /** `Required` - Title */
  title: PropTypes.any.isRequired,
  /** Function Triggered on click */
  handleClick: PropTypes.func,
  /** Function Triggered on Keypress, Enter or Press */
  handleKeyPress: PropTypes.func,
}

TabLink.defaultProps = {
  extraClasses: '',
  extraActiveClasses: '',
  isActive: false,
  tabIndex: 0,
}

export default TabLink