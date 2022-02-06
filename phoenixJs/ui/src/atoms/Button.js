import PropTypes from 'prop-types'
import React from "react";

const Button = ({
  children,
  color,
  extraClasses,
  url,
  variant,
  size,
  onClick,
  isTargetBlank,
  ...extraParams
}) => {
  let _color = ''
  let _size = ''

  switch (color) {
    case 'primary':
      if (variant === 'filled')
        _color =
          'border-buttonPrimaryBorder bg-buttonPrimary text-onButtonPrimary hover:border-buttonPrimaryBorderHover hover:bg-buttonPrimaryHover hover:text-onButtonPrimaryHover'
      else if (variant === 'outlined')
        _color =
          'border-buttonPrimaryBorder text-buttonPrimary hover:border-buttonPrimaryBorderHover hover:bg-buttonPrimaryHover hover:text-onButtonPrimaryHover'
      break
    case 'secondary':
      if (variant === 'filled')
        _color =
          'border-buttonSecondaryBorder bg-buttonSecondary text-onButtonSecondary hover:border-buttonSecondaryBorderHover hover:bg-buttonSecondaryHover hover:text-onButtonSecondaryHover'
      else if (variant === 'outlined')
        _color =
          'border-buttonSecondaryBorder text-buttonSecondary hover:border-buttonSecondaryBorderHover hover:bg-buttonSecondaryHover hover:text-onButtonSecondaryHover'
      break
    case 'tertiary':
      if (variant === 'filled')
        _color =
          'border-buttonTertiaryBorder bg-buttonTertiary text-onButtonTertiary hover:border-buttonTertiaryBorderHover hover:bg-buttonTertiaryHover hover:text-onButtonTertiaryHover'
      else if (variant === 'outlined')
        _color =
          'border-buttonTertiaryBorder text-buttonTertiary hover:border-buttonTertiaryBorderHover hover:bg-buttonTertiaryHover hover:text-onButtonTertiaryHover'
      break
    case 'quaternary':
      if (variant === 'filled')
        _color =
          'border-buttonQuaternaryBorder bg-buttonQuaternary text-onButtonQuaternary hover:border-buttonQuaternaryBorderHover hover:bg-buttonQuaternaryHover hover:text-onButtonQuaternaryHover'
      else if (variant === 'outlined')
        _color =
          'border-buttonQuaternaryBorder text-buttonQuaternary hover:border-buttonQuaternaryBorderHover hover:bg-buttonQuaternaryHover hover:text-onButtonQuaternaryHover'
      break
  }

  switch (size) {
    case 'small':
      _size = 'px-5 py-3'
      break
    case 'large':
      _size = 'px-7 py-5'
      break
  }

  if (url) {
    const target = (isTargetBlank || url?.includes('http')) && {
      target: '_blank',
      rel: 'noopener',
    }

    return (
      <a
        href={url}
        className={`a-button ${_size} border border-solid ${_color} ${extraClasses}`}
        role={'button'}
        {...target}
        {...extraParams}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={`a-button ${_size} border border-solid ${_color} ${extraClasses}`}
      onClick={onClick}
      {...extraParams}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Content of the button */
  children: PropTypes.node,
  /** Color */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'unsetted',
  ]),
  /** Variant */
  variant: PropTypes.oneOf(['filled', 'outlined', 'unsetted']),
  /** Classes to add to the element */
  extraClasses: PropTypes.string,
  /** Url to redirect the user */
  url: PropTypes.string,
  /** Function triggered when clicking on the element */
  onClick: PropTypes.func,
  /** Visual size of the element */
  size: PropTypes.oneOf(['small', 'large']),
  /** Url target */
  isTargetBlank: PropTypes.bool,
}

Button.defaultProps = {
  color: 'primary',
  variant: 'filled',
  extraClasses: '',
  size: 'large',
}

export default Button