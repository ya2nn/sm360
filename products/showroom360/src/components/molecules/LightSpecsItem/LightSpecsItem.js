import PropTypes from 'prop-types'
import { Icon } from '@sm360/phoenixjs'

const LightSpecsItem = ({ value, iconSymbol }) => {
  return (
    <div className={`m-lightSpecsItem flex`}>
      <Icon
        symbolId={iconSymbol}
        extraClasses={`m-lightSpecsItem__icon w-[25px] h-[25px] mr-[10px]`}
      />

      <span
        className={`m-lightSpecsItem__value font-custom-bold text-[18px] leading-[20px] lg:text-[20px] lg:leading-[22px]`}
      >
        {value}
      </span>
    </div>
  )
}

LightSpecsItem.propTypes = {
  /** `Required` - value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** `Required` - Icon */
  iconSymbol: PropTypes.string.isRequired,
}

export default LightSpecsItem
