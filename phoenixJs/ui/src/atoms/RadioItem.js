import PropTypes from 'prop-types'
import React from "react";

const RadioItem = ({
  checked,
  disabled,
  radioGroupName,
  radioName,
  radioValue,
  radioLabel,
  extraClasses,
  inputExtraClasses,
  labelExtraClasses,
  ...extraParams
}) => {
  /* TODO: Revoir les variables de couleur des forms radio, input, checkbox, select */
  const disabledClasses = disabled ? 'opacity-30 cursor-not-allowed' : ''

  return (
    <p className={`a-radioItem relative ${extraClasses}`}>
      <label
        className={`a-radioItem__wrapper inline-flex cursor-pointer items-center p-[5px] ${disabledClasses}`}
      >
        <input
          className={`a-radioItem__input form-radio relative h-[20px] w-[20px] cursor-pointer border-2 bg-transparent checked:border-2
          checked:border-buttonPrimaryBorder checked:bg-transparent checked:after:absolute
          checked:after:left-1/2 checked:after:top-1/2 checked:after:block
          checked:after:h-[10px] checked:after:w-[10px] checked:after:translate-x-[-50%]
          checked:after:translate-y-[-50%] checked:after:rounded-full checked:after:bg-primary checked:hover:border-2 checked:hover:border-buttonPrimaryBorder checked:hover:bg-transparent focus:outline-none checked:focus:border-2 checked:focus:border-buttonPrimaryBorder checked:focus:bg-transparent
          ${inputExtraClasses}`}
          type='radio'
          id={radioName}
          name={radioGroupName}
          value={radioValue}
          defaultChecked={checked}
          disabled={disabled}
          {...extraParams}
        />
        <span
          className={`a-radioItem__label ml-2 whitespace-nowrap ${labelExtraClasses}`}
        >
          {radioLabel}
        </span>
      </label>
    </p>
  )
}

RadioItem.propTypes = {
  /** Label */
  radioLabel: PropTypes.string,
  /** Set a name to your field */
  radioName: PropTypes.string,
  /** Set a value to your field */
  radioValue: PropTypes.string,
  /** Set a group name to your field */
  radioGroupName: PropTypes.string,
  /** Is your field checked ? */
  checked: PropTypes.bool,
  /** Is your field disabled ? */
  disabled: PropTypes.bool,
  /** Add Classes to the Container */
  extraClasses: PropTypes.string,
  /** Add Classes to the input element */
  inputExtraClasses: PropTypes.string,
  /** Add Classes to the label element */
  labelExtraClasses: PropTypes.string,
}

RadioItem.defaultProps = {
  checked: false,
  disabled: false,
  extraClasses: '',
  inputExtraClasses: '',
  labelExtraClasses: '',
}

export default RadioItem