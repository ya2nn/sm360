import PropTypes from 'prop-types'
import React, { Children, isValidElement } from 'react'

import SelectItem from '../../dist/atoms/SelectItem'

const Select = ({
  children,
  extraClasses,
  containerExtraClasses,
  labelExtraClasses,
  itemsExtraClasses,
  fieldLabel,
  fieldName,
  customFieldId,
  disabled,
  defaultValue,
  requiredField,
  onChange,
  ...extraParams
}) => {
  const name = customFieldId
    ? fieldName.concat('-'.concat(customFieldId))
    : fieldName
  const _disabled = disabled && { disabled: 'disabled' }

  return (
    <div className={`a-select relative ${containerExtraClasses}`}>
      {/*TODO Faire l'insertion des cles de langue par default (fieldLabel)*/}
      {fieldLabel && (
        <label
          htmlFor={name}
          className={`a-select__label absolute left-[15px] top-[5px] flex ${labelExtraClasses}`}
        >
          <span className='text-[11px] leading-none'>{fieldLabel}</span>
        </label>
      )}

      <select
        className={`a-select__field form-select peer mt-0 block h-[50px] w-full border px-[15px] pt-[15px] pb-[10px]  focus:border-2 focus:border-success focus:ring-0 focus:invalid:border-error ${extraClasses}`}
        name={fieldName}
        id={name}
        required={requiredField}
        defaultValue={defaultValue}
        onChange={onChange}
        {..._disabled}
        {...extraParams}
      >
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return (
              <SelectItem
                key={index}
                extraClasses={
                  child.props.extraClasses
                    ? child.props.extraClasses
                    : itemsExtraClasses
                }
                value={child.props.value}
              >
                {child.props.children}
              </SelectItem>
            )
          } else {
            console.error('Only SelectItem components allowed as children')
            return null
          }
        })}
      </select>
      <span className='bg-secondary-dark text-primary-white absolute right-[15px] top-2/4 hidden h-[20px] w-[20px] -translate-y-2/4 transform items-center justify-center rounded-full peer-focus:peer-invalid:flex'>
        !
      </span>
    </div>
  )
}

Select.propTypes = {
  /** `Required` - Has to have a children  */
  children: PropTypes.node.isRequired,
  /** `Required` - Select Field Name */
  fieldName: PropTypes.string.isRequired,
  /** Select Field Label  */
  fieldLabel: PropTypes.string,
  /** For customize the Id of your field */
  customFieldId: PropTypes.string,
  /**  Select Field Extra Class   */
  extraClasses: PropTypes.string,
  /**  If Select Field is required  */
  requiredField: PropTypes.bool,
  /**  Select SelectItem Extra Class   */
  containerExtraClasses: PropTypes.string,
  /**  Select SelectItem Extra Class   */
  labelExtraClasses: PropTypes.string,
  /**  Select SelectItem Extra Class   */
  itemsExtraClasses: PropTypes.string,
  /**  If Select Field is disabled  */
  disabled: PropTypes.bool,
  /**  add  a default Selected Value  */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**  Handle onChange Event  */
  onChange: PropTypes.func,
}
Select.defaultProps = {
  disabled: false,
  requiredField: false,
  extraClasses: '',
  containerExtraClasses: '',
  labelExtraClasses: '',
  itemsExtraClasses: '',
}

export default Select