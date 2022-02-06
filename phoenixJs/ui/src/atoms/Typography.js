import PropTypes from 'prop-types'
import React from "react";

const Typography = ({
  tag,
  children,
  variant,
  extraClasses,
  role,
  ...extraParams
}) => {
  const variantClass = variant ? `-${variant}` : ''

  switch (tag) {
    case 'h1':
      return (
        <h1
          className={`a-typography ${variantClass} ${extraClasses}`}
          role='heading'
          aria-level='1'
          {...extraParams}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={`a-typography ${variantClass} ${extraClasses}`}
          role='heading'
          aria-level='2'
          {...extraParams}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          className={`a-typography ${variantClass} ${extraClasses}`}
          role='heading'
          aria-level='3'
          {...extraParams}
        >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          className={`a-typography ${variantClass} ${extraClasses}`}
          role='heading'
          aria-level='4'
          {...extraParams}
        >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          className={`a-typography ${variantClass} ${extraClasses}`}
          role='heading'
          aria-level='5'
          {...extraParams}
        >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          className={`a-typography ${variantClass} ${extraClasses}`}
          role='heading'
          aria-level='6'
          {...extraParams}
        >
          {children}
        </h6>
      )
    case 'p':
      return (
        <p
          className={`a-typography ${variantClass} ${extraClasses}`}
          role={
            role
              ? role
              : variant && variant.includes('heading')
              ? 'heading'
              : ''
          }
          {...extraParams}
        >
          {children}
        </p>
      )
    default:
      return (
        <span
          className={`a-typography ${variantClass} ${extraClasses}`}
          role={
            role
              ? role
              : variant && variant.includes('heading')
              ? 'heading'
              : ''
          }
          {...extraParams}
        >
          {children}
        </span>
      )
  }
}

Typography.propTypes = {
  /** `Required` - Tag */
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'])
    .isRequired,
  /** `Required` - Content */
  children: PropTypes.any.isRequired,
  /** Variant */
  variant: PropTypes.oneOf([
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'heading6',
    'fineprint',
    'body',
    'subtitle',
  ]),
  /** Classes to add to the element */
  extraClasses: PropTypes.string,
  /** Role */
  role: PropTypes.string,
}

Typography.defaultProps = {
  extraClasses: '',
  role: '',
}

export default Typography