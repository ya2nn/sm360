import PropTypes from 'prop-types'
import { useContext, useEffect, useRef, useState } from 'react'
import {lang, formatNumber, useOutsideClick} from '@sm360/phoenixjs'
import InventoryListingContext from '../../../InventoryListingContext'
import { filterItemType } from './FilterItemType'
import FilterClearAll from '../FilterSelectClearAll/FilterClearAll'

const FilterItemTypeInput = ({ filterName, filterItems, position }) => {
  const { changeState, updateParameters, parameters } = useContext(
    InventoryListingContext
  )

  const {
    filterMinSlug,
    filterMaxSlug,
    title,
    step,
    variant,
    formatNumberType,
    placeholder,
  } = filterItemType[filterName]

  const paramNames =
    variant === 'simpleInput' ? [filterMaxSlug] : [filterMinSlug, filterMaxSlug]

  const [inputMinValue, setInputMinValue] = useState(
    parameters[filterMinSlug] ? parameters[filterMinSlug][0] : filterItems.min
  )
  const [inputMaxValue, setInputMaxValue] = useState(
    parameters[filterMaxSlug] ? parameters[filterMaxSlug][0] : filterItems.max
  )
  const [inputMinOldValue, setInputMinOldValue] = useState(inputMinValue)
  const [inputMaxOldValue, setInputMaxOldValue] = useState(inputMaxValue)

  const inputMinRef = useRef(null)
  const inputMaxRef = useRef(null)

  useEffect(() => {
    if (!parameters[filterMinSlug] && !parameters[filterMaxSlug]) {
      setInputMinValue(filterItems.min)
      setInputMinOldValue(filterItems.min)

      setInputMaxValue(filterItems.max)
      setInputMaxOldValue(filterItems.max)
    }
  }, [parameters])

  const handleChange = (type) => {
    const { value } = type === 'min' ? inputMinRef.current : inputMaxRef.current
    const valueNumber = Number(value.replaceAll(',', ''))
    const valid = /^\d*$/.test(valueNumber) // Allow digits only, using a RegExp

    if (type === 'min' && valid) {
      setInputMinValue(valueNumber)
    }
    if (type === 'max' && valid) {
      setInputMaxValue(valueNumber)
    }
  }

  useOutsideClick(inputMinRef, () => {
    if (inputMinValue !== inputMinOldValue) {
      const apiMinValue = filterItems.min
      let newValue = inputMinValue

      if (newValue <= apiMinValue) {
        setInputMinValue(apiMinValue)
        newValue = apiMinValue
      }
      if (newValue >= inputMaxValue) {
        setInputMinValue(inputMaxValue)
        newValue = inputMaxValue
      }

      if (
        (newValue !== inputMinOldValue && newValue > apiMinValue) ||
        (newValue <= apiMinValue && parameters[filterMinSlug])
      ) {
        setInputMinOldValue(newValue)

        const params = {
          action:
            newValue > apiMinValue ? 'addParamTypeText' : 'deleteParamTypeText',
          slug: filterMinSlug,
          key: newValue,
        }

        updateParameters(params)
        changeState()
      }
    }
  })

  useOutsideClick(inputMaxRef, () => {
    if (inputMaxValue !== inputMaxOldValue) {
      const apiMaxValue = filterItems.max
      let newValue = inputMaxValue

      if (newValue >= apiMaxValue || inputMaxValue === '') {
        setInputMaxValue(apiMaxValue)
        newValue = apiMaxValue
      }
      if (newValue <= inputMinValue) {
        setInputMaxValue(inputMinValue)
        newValue = inputMinValue
      }

      if (
        (newValue !== inputMaxOldValue && newValue < apiMaxValue) ||
        (newValue >= apiMaxValue && parameters[filterMaxSlug])
      ) {
        setInputMaxOldValue(newValue)

        const params = {
          action:
            newValue < apiMaxValue ? 'addParamTypeText' : 'deleteParamTypeText',
          slug: filterMaxSlug,
          key: newValue,
        }

        updateParameters(params)
        changeState()
      }
    }
  })

  return (
    <>
      <div className='m-filterItemTypeInput flex flex-col items-start justify-center space-y-[15px]'>
        <div className='m-filterItemTypeInput__title'>{title[lang]}</div>

        <div className='m-filterItemTypeInput__inputContainer flex items-center space-x-[15px]'>
          {variant === 'doubleInput' && (
            <div
              className={`m-filterItemTypeInput__inputWrapper flex h-[45px] items-center bg-gray-200 py-3 pr-[10px] ${
                position === 'horizontal' ? 'w-[140px]' : 'w-1/2'
              }`}
            >
              <input
                ref={inputMinRef}
                type='text'
                className='m-filterItemTypeInput__input flex w-full border-none bg-transparent focus:outline-none focus:ring-0'
                step={step}
                min={filterItems.min}
                max={filterItems.max}
                placeholder={filterItems.min}
                value={formatNumber(inputMinValue, formatNumberType)}
                onChange={() => handleChange('min')}
              />

              <span className='m-filterItemTypeInput__label'>
                {placeholder}
              </span>
            </div>
          )}

          <div
            className={`m-filterItemTypeInput__inputWrapper flex h-[45px] items-center bg-gray-200 py-3 pr-[10px] ${
              position === 'horizontal' ? 'w-[140px]' : 'w-1/2'
            }`}
          >
            <input
              ref={inputMaxRef}
              type='text'
              className='m-filterItemTypeInput__input flex w-full border-none bg-transparent focus:outline-none focus:ring-0'
              step={step}
              min={filterItems.min}
              max={filterItems.max}
              placeholder={filterItems.max}
              value={formatNumber(inputMaxValue, formatNumberType)}
              onChange={() => handleChange('max')}
            />

            <span className='m-filterItemTypeInput__label'>{placeholder}</span>
          </div>
        </div>
      </div>

      <div className='m-filterSelectClearAll flex space-x-[30px] pt-[20px]'>
        <FilterClearAll paramNames={paramNames} />
      </div>
    </>
  )
}

FilterItemTypeInput.propTypes = {
  /** Filter Name */
  filterName: PropTypes.string.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.object.isRequired,
  /** Filter Elements display */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
}

FilterItemTypeInput.defaultProps = {
  filterName: '',
  filterItems: {},
  position: 'vertical',
}

export default FilterItemTypeInput
