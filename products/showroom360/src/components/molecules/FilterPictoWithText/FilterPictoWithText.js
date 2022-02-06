import PropTypes from 'prop-types'
import {Icon} from '@sm360/phoenixjs'

import './FilterPictoWithText.scss'

const FilterPictoWithText = ({
  iconSymbol,
  label,
  variant,
  isDisabled,
  isActive,
  btnExtraClasses,
  iconExtraClasses,
  labelExtraClasses,
  onClick,
  ...extraParams
}) => {
  const isActiveClass = isActive ? '-active' : ''
  const isDisabledClass = isDisabled ? '-disabled' : ''

  let btnClasses = ''
  let iconClasses = ''

  switch (variant) {
    case 'horizontal':
      btnClasses = btnExtraClasses ? btnExtraClasses : 'p-[15px]'
      iconClasses = iconExtraClasses
        ? iconExtraClasses
        : 'w-[25px] h-[35px] mr-[15px]'
      break
    case 'vertical':
      btnClasses = btnExtraClasses
        ? btnExtraClasses
        : 'flex-col pl-[12px] pr-[15px] pt-[10px] pb-[5px]'
      iconClasses = iconExtraClasses
        ? iconExtraClasses
        : 'w-[25px] h-[35px] mb-[5px]'
      break
    case 'square':
      btnClasses = btnExtraClasses
        ? btnExtraClasses
        : 'flex-col aspect-square w-[94px] p-[5px]'
      break
  }

  return (
    <button
      // TODO: creer des classes de couleur
      className={`m-filterPictoWithText group flex items-center justify-center rounded-md bg-backgroundPrimary text-onBackgroundPrimary hover:bg-primary hover:text-onPrimary ${btnClasses} ${isDisabledClass} ${isActiveClass}`}
      onClick={onClick}
      {...extraParams}
    >
      <Icon
        symbolId={iconSymbol}
        // TODO: creer des classes de couleur
        extraClasses={`m-filterPictoWithText__icon text-onBackgroundPrimary group-hover:text-onPrimary ${iconClasses}`}
      />
      <p className={`m-filterPictoWithText__label ${labelExtraClasses}`}>
        {label}
      </p>
    </button>
  )
}

FilterPictoWithText.propTypes = {
  /** `Required` - Filter Btn Variant */
  variant: PropTypes.oneOf(['horizontal', 'vertical', 'square']).isRequired,
  /** Disabled Btn */
  isDisabled: PropTypes.bool,
  /** Active Btn */
  isActive: PropTypes.bool,
  /** Filter Btn extra Classes*/
  btnExtraClasses: PropTypes.string,
  /** `Required` - Filter Btn icon */
  iconSymbol: PropTypes.string.isRequired,
  /** Filter Btn icon extra Classes*/
  iconExtraClasses: PropTypes.string,
  /** `Required` - Filter Btn Label */
  label: PropTypes.string.isRequired,
  /** Filter Btn Label extra Classes*/
  labelExtraClasses: PropTypes.string,
  /** onClick event */
  onClick: PropTypes.func,
}

FilterPictoWithText.defaultProps = {
  btnExtraClasses: '',
  iconExtraClasses: '',
  labelExtraClasses: '',
}

export default FilterPictoWithText
