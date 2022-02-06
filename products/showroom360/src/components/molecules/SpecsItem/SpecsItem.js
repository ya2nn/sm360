import PropTypes from 'prop-types'
import {Icon, Typography} from '@sm360/phoenixjs'

const SpecsItem = ({ text, iconSymbol, title }) => {
  return (
    <div className={`m-specsItem flex items-center gap-3`}>
      <Icon
        symbolId={iconSymbol}
        extraClasses={`m-specsItem__icon w-[30px] h-[30px] md:w-[50px] md:h-[50px]`}
      />

      <div className={`m-specsItem__value flex flex-col`}>
        {/* TODO: Gestion de la couleur du titre */}
        <Typography
          tag='p'
          extraClasses={`m-specsItem__title hidden md:block pb-[5px] text-[16px] leading-[18px]`}
        >
          {title}
        </Typography>

        <Typography
          tag='p'
          extraClasses={`m-specsItem__text text-[18px] leading-[20px]`}
        >
          {text}
        </Typography>
      </div>
    </div>
  )
}

SpecsItem.propTypes = {
  /** `Required` - text */
  text: PropTypes.string.isRequired,
  /** `Required` - Icon */
  iconSymbol: PropTypes.string.isRequired,
  /** `Required` -title */
  title: PropTypes.string.isRequired,
}

export default SpecsItem
