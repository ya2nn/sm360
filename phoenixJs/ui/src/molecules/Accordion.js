/* TODO : Ajouter l'option de scroll */
import PropTypes from 'prop-types'
import React, { Children, useState } from 'react'

import AccordionItem from '../../dist/molecules/AccordionItem'

const Accordion = ({
  activeIndex: initialActiveIndex,
  position,
  extraClasses,
  itemsExtraClasses,
  itemsButtonExtraClasses,
  itemsButtonActiveExtraClasses,
  itemsIconExtraClasses,
  itemsIconActiveExtraClasses,
  itemsContentContainerExtraClasses,
  itemsContentExtraClasses,
  children,
  ...extraParams
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex)

  const handleClick = (i) => setActiveIndex(i === activeIndex ? -1 : i)
  const positionClass = position === 'vertical' ? 'flex-col' : 'flex-row'

  return (
    <div
      className={`m-accordion relative flex w-full gap-2 ${positionClass} ${extraClasses}`}
      {...extraParams}
    >
      {Children.map(children, (child, i) => {
        if (child) {
          return (
            <AccordionItem
              key={i}
              trigger={child.props.trigger}
              isOpen={i === activeIndex}
              onClick={() => handleClick(i)}
              disabled={child.props.disabled}
              countId={i}
              position={position}
              extraClasses={
                child.props.extraClasses
                  ? child.props.extraClasses
                  : itemsExtraClasses
              }
              buttonExtraClasses={
                child.props.buttonExtraClasses
                  ? child.props.buttonExtraClasses
                  : itemsButtonExtraClasses
              }
              buttonActiveExtraClasses={
                child.props.buttonActiveExtraClasses
                  ? child.props.buttonActiveExtraClasses
                  : itemsButtonActiveExtraClasses
              }
              iconExtraClasses={
                child.props.iconExtraClasses
                  ? child.props.iconExtraClasses
                  : itemsIconExtraClasses
              }
              iconActiveExtraClasses={
                child.props.iconActiveExtraClasses
                  ? child.props.iconActiveExtraClasses
                  : itemsIconActiveExtraClasses
              }
              contentExtraClasses={
                child.props.contentExtraClasses
                  ? child.props.contentExtraClasses
                  : itemsContentExtraClasses
              }
              contentContainerExtraClasses={
                child.props.contentContainerExtraClasses
                  ? child.props.contentContainerExtraClasses
                  : itemsContentContainerExtraClasses
              }
            >
              {child.props.children}
            </AccordionItem>
          )
        }

        return null
      })}
    </div>
  )
}

Accordion.propTypes = {
  /** Add Children Element */
  children: PropTypes.node,
  /** If you want activate a particular item, indicate his index number */
  activeIndex: PropTypes.number,
  /** Configure the position */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Classes to add to the Container */
  extraClasses: PropTypes.string,
  /** Classes to add to the items container */
  itemsExtraClasses: PropTypes.string,
  /** Classes to add to the button items */
  itemsButtonExtraClasses: PropTypes.string,
  /** Classes to add to the active button items */
  itemsButtonActiveExtraClasses: PropTypes.string,
  /** Classes to add to the icon items */
  itemsIconExtraClasses: PropTypes.string,
  /** Classes to add to the active icon items */
  itemsIconActiveExtraClasses: PropTypes.string,
  /** Classes to add to the content container items */
  itemsContentContainerExtraClasses: PropTypes.string,
  /** Classes to add to the content items */
  itemsContentExtraClasses: PropTypes.string,
}

Accordion.defaultProps = {
  extraClasses: '',
  activeIndex: -1,
  position: 'vertical',
  itemsExtraClasses: '',
  itemsButtonExtraClasses: '',
  itemsButtonActiveExtraClasses: '',
  itemsIconExtraClasses: '',
  itemsIconActiveExtraClasses: '',
  itemsContentContainerExtraClasses: '',
  itemsContentExtraClasses: '',
}

export default Accordion