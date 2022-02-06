import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import Icon from '../../dist/atoms/Icon'

/**
 * The AccordionItem component display (or hide) information with expand/collapse animation.
 */
const AccordionItem = ({
  trigger,
  isOpen: initialIsOpen,
  onClick,
  countId,
  children,
  disabled,
  extraClasses,
  buttonExtraClasses,
  buttonActiveExtraClasses,
  iconExtraClasses,
  iconActiveExtraClasses,
  contentContainerExtraClasses,
  contentExtraClasses,
  position,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen)

  useEffect(() => {
    setIsOpen(initialIsOpen)
  }, [initialIsOpen, countId])

  const openTriggerClasses = isOpen ? '-open' : ''
  const disabledClasses = disabled
    ? '-disabled text-gray-400 cursor-not-allowed'
    : ''
  const positionContentContainerClasses =
    position === 'horizontal' ? 'absolute left-0 w-full' : ''
  const _buttonActiveExtraClasses = isOpen ? buttonActiveExtraClasses : ''
  const _iconActiveExtraClasses = isOpen ? iconActiveExtraClasses : ''

  return (
    <div className={`m-accordionItem ${openTriggerClasses} ${extraClasses}`}>
      <button
        className={`m-accordionItem__title flex w-full items-center justify-between space-x-4 whitespace-nowrap rounded bg-white p-[15px] text-left ${
          isOpen ? 'text-primary' : ''
        } ${disabledClasses} ${buttonExtraClasses} ${_buttonActiveExtraClasses}`}
        id={`accordionTitle-${countId}`}
        aria-controls={`accordionContent-${countId}`}
        aria-expanded={isOpen}
        aria-disabled={disabled}
        onClick={(e) => onClick(e)}
        disabled={disabled}
      >
        {trigger}
        <span
          className={`m-accordionItem__picto ml-[20px] inline-flex items-center ${iconExtraClasses} ${_iconActiveExtraClasses}`}
        >
          <Icon
            symbolId='arrow-down'
            extraClasses={`w-[15px] h-[15px] transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      <div
        className={`transition-all duration-300 ${
          !isOpen ? 'hidden' : ''
        } ${positionContentContainerClasses} ${contentContainerExtraClasses}`}
        role='region'
        aria-labelledby={`accordionTitle-${countId}`}
        id={`accordionContent-${countId}`}
      >
        <div
          className={`m-accordionItem__content wysiwyg px-[20px] py-[30px] text-left ${contentExtraClasses}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

AccordionItem.propTypes = {
  /** `Required` - Text button */
  trigger: PropTypes.node.isRequired,
  /** Text content */
  children: PropTypes.node,
  /** Configure the position */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Show or hide the content by default */
  isOpen: PropTypes.bool,
  /** Callback function onClick */
  onClick: PropTypes.func,
  /** Disabled item */
  disabled: PropTypes.bool,
  /** Item ID */
  countId: PropTypes.number,
  /** Classes to add to the item container */
  extraClasses: PropTypes.string,
  /** Classes to add to the button item */
  buttonExtraClasses: PropTypes.string,
  /** Classes to add to the active button item */
  buttonActiveExtraClasses: PropTypes.string,
  /** Classes to add to the icon item */
  iconExtraClasses: PropTypes.string,
  /** Classes to add to the active icon item */
  iconActiveExtraClasses: PropTypes.string,
  /** Classes to add to the content container item */
  contentContainerExtraClasses: PropTypes.string,
  /** Classes to add to the content item */
  contentExtraClasses: PropTypes.string,
}

AccordionItem.defaultProps = {
  isOpen: false,
  disabled: false,
  position: 'vertical',
  extraClasses: '',
  buttonExtraClasses: '',
  buttonActiveExtraClasses: '',
  iconExtraClasses: '',
  iconActiveExtraClasses: '',
  contentContainerExtraClasses: '',
  contentExtraClasses: '',
}

export default AccordionItem