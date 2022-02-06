import PropTypes from 'prop-types'

const FilterColorWithText = ({
  label,
  color,
  isDisabled,
  isActive,
  btnExtraClasses,
  labelExtraClasses,
  onClick,
  ...extraParams
}) => {
  const isActiveClass = isActive ? '-active' : ''
  const isDisabledClass = isDisabled ? '-disabled' : ''

  return (
    <button
      className={`m-filterColorWithText group relative flex flex-col items-center justify-center rounded-md px-[20px] py-[10px] ${btnExtraClasses} ${isActiveClass} ${isDisabledClass}`}
      onClick={onClick}
      {...extraParams}
    >
      {/*// TODO: creer des classes de couleur*/}
      <p
        className={`m-filterColorWithText__color flex rounded-full border border-[3px] border-transparent p-[2px] group-hover:border-primary ${
          isActive ? 'border-primary' : ''
        }`}
      >
        <span
          className='h-[30px] w-[30px] rounded-full shadow-md'
          style={{ backgroundColor: color }}
        />
      </p>

      {/*// TODO: creer des classes de couleur*/}
      <p
        className={`m-filterColorWithText__label text-black  ${labelExtraClasses}`}
      >
        {label}
      </p>
    </button>
  )
}

FilterColorWithText.propTypes = {
  /** Disabled Btn */
  isDisabled: PropTypes.bool,
  /** Active Btn */
  isActive: PropTypes.bool,
  /** Filter Btn extra Classes*/
  btnExtraClasses: PropTypes.string,
  /** `Required` - Filter Btn Label */
  label: PropTypes.string.isRequired,
  /** `Required` - Filter Btn Color */
  color: PropTypes.string.isRequired,
  /** Filter Btn Label extra Classes*/
  labelExtraClasses: PropTypes.string,
  /** Click event */
  onClick: PropTypes.func,
}

FilterColorWithText.defaultProps = {
  btnExtraClasses: '',
  labelExtraClasses: '',
}

export default FilterColorWithText
