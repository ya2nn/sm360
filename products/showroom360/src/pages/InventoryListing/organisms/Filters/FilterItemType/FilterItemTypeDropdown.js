import PropTypes from 'prop-types'
import { useContext, useEffect, useRef, useState } from 'react'
import {Dropdown, DropdownItem, lang, useOutsideClick} from '@sm360/phoenixjs'
import InventoryListingContext from '../../../InventoryListingContext'
import { filterItemType } from './FilterItemType'
import FilterClearAll from '../FilterSelectClearAll/FilterClearAll'

const FilterItemTypeDropdown = ({ filterName, filterItems, position }) => {
  const { changeState, updateParameters, parameters } = useContext(
    InventoryListingContext
  )

  const { filterMinSlug, filterMaxSlug, title, variant } =
    filterItemType[filterName]

  const paramNames =
    variant === 'simpleInput' ? [filterMaxSlug] : [filterMinSlug, filterMaxSlug]

  const lastItemsId = filterItems.length - 1
  const min = filterItems[0]?.key
  const max = filterItems[lastItemsId]?.key

  const [dropdownMinValue, setDropdownMinValue] = useState(
    parameters[filterMinSlug] ? parameters[filterMinSlug][0] : min
  )
  const [dropdownMaxValue, setDropdownMaxValue] = useState(
    parameters[filterMaxSlug] ? parameters[filterMaxSlug][0] : max
  )
  const [inputValue, setInputValue] = useState(
    parameters[filterMinSlug] ? parameters[filterMinSlug][0] : ''
  )
  const [inputOldValue, setInputOldValue] = useState(
    parameters[filterMinSlug] ? parameters[filterMinSlug][0] : ''
  )

  const inputRef = useRef([])

  useEffect(() => {
    if (!parameters[filterMinSlug] && !parameters[filterMaxSlug]) {
      setDropdownMinValue(min)
      setDropdownMaxValue(max)
      setInputValue('')
      setInputOldValue('')
    }
  }, [parameters])

  const handleDropdownClick = (type, newValue) => {
    let params

    if (type === 'min' && newValue === min) {
      setDropdownMinValue(newValue)

      params = {
        action: 'deleteParamTypeText',
        slug: {
          min: filterMinSlug,
        },
      }
    } else if (type === 'min') {
      setDropdownMinValue(newValue)

      params = {
        action: 'addParamTypeText',
        slug: filterMinSlug,
        key: newValue,
      }
    } else if (type === 'max' && newValue === max) {
      setDropdownMaxValue(newValue)

      params = {
        action: 'deleteParamTypeText',
        slug: {
          max: filterMaxSlug,
        },
      }
    } else {
      setDropdownMaxValue(newValue)

      params = {
        action: 'addParamTypeText',
        slug: filterMaxSlug,
        key: newValue,
      }
    }

    setInputValue('')
    setInputOldValue('')
    updateParameters(params)
    changeState()
  }

  const handleInputChange = () => {
    const { value } = inputRef.current
    const valueNumber = Number(value.replaceAll(',', ''))
    const valid = /^\d*$/.test(valueNumber) // Allow digits only, using a RegExp

    if (valid) setInputValue(value)
  }

  useOutsideClick(inputRef, () => {
    if (inputValue !== inputOldValue) {
      let newValue = inputValue
      let params

      if (inputValue === '') {
        setDropdownMinValue(min)
        setDropdownMaxValue(max)

        params = {
          action: 'deleteParamTypeText',
          slug: {
            min: filterMinSlug,
            max: filterMaxSlug,
          },
        }
      } else {
        newValue =
          inputValue <= min ? min : inputValue >= max ? max : inputValue

        setDropdownMinValue(newValue)
        setDropdownMaxValue(newValue)
        setInputValue(newValue)

        params = {
          action: 'addMultiParamsRange',
          minSlug: filterMinSlug,
          maxSlug: filterMaxSlug,
          minValue: newValue,
          maxValue: newValue,
        }
      }

      setInputOldValue(newValue)
      updateParameters(params)
      changeState()
    }
  })

  const dropdownHorizontalClasses =
    position === 'horizontal'
      ? 'lg:flex-row lg:space-y-0 lg:space-x-[10px]'
      : ''

  return (
    <>
      <div className={`m-filterItemTypeDropdown flex flex-col items-start`}>
        <p className='m-filterItemTypeDropdown__title mb-[15px]'>
          {title[lang]}
        </p>

        <div
          className={`m-filterItemTypeDropdown__container flex w-full flex-col items-center space-y-[10px] ${dropdownHorizontalClasses}`}
        >
          <div
            className={`m-filterItemTypeDropdown__dropdownContainer flex space-x-[20px] ${
              position === 'horizontal' ? 'w-auto' : 'w-full'
            }`}
          >
            {variant === 'doubleInput' && (
              <Dropdown
                controlId='minValue'
                controlLabel='Min:'
                controlValue={`${dropdownMinValue || min}`}
                icon='arrow-down'
                containerExtraClasses={`bg-gray-200 ${
                  position === 'horizontal' ? 'w-[140px]' : 'w-1/2'
                }`}
                controlExtraClasses='m-filterItemTypeDropdown__dropdown'
                controlIconExtraClasses='w-[10px] h-[10px]'
              >
                {filterItems?.map(({ key, label }, i) => (
                  <DropdownItem
                    key={i}
                    onClick={() => handleDropdownClick('min', key)}
                    extraClasses={`${
                      key === dropdownMinValue
                        ? 'bg-primary text-onPrimary'
                        : key > dropdownMaxValue
                        ? 'hidden'
                        : 'bg-[#f2f2f2]'
                    }`}
                  >
                    {label}
                  </DropdownItem>
                ))}
              </Dropdown>
            )}

            <Dropdown
              controlId='maxValue'
              controlLabel='Max:'
              controlValue={`${dropdownMaxValue || max}`}
              icon='arrow-down'
              containerExtraClasses={`bg-gray-200 ${
                position === 'horizontal' ? 'w-[140px]' : 'w-1/2'
              }`}
              controlExtraClasses='m-filterItemTypeDropdown__dropdown'
              controlIconExtraClasses='w-[10px] h-[10px]'
            >
              {filterItems?.map(({ key, label }, i) => (
                <DropdownItem
                  key={i}
                  onClick={() => handleDropdownClick('max', key)}
                  extraClasses={`${
                    key === dropdownMaxValue
                      ? 'bg-primary text-onPrimary'
                      : key < dropdownMinValue
                      ? 'hidden'
                      : ''
                  }`}
                >
                  {label}
                </DropdownItem>
              ))}
            </Dropdown>
          </div>

          <p className='px-[40px]'>OR</p>

          <div className='flex items-center'>
            <p>Look for a specific year</p>

            <input
              ref={inputRef}
              type='text'
              className='ml-[15px] w-[80px] border-x-0 border-t-0 border-b bg-transparent text-center focus:outline-none focus:ring-0'
              placeholder={min}
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className='m-filterSelectClearAll flex space-x-[30px] pt-[20px]'>
        <FilterClearAll paramNames={paramNames} />
      </div>
    </>
  )
}

FilterItemTypeDropdown.propTypes = {
  /** Filter Name */
  filterName: PropTypes.string.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.array.isRequired,
  /** Filter Elements display */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
}

FilterItemTypeDropdown.defaultProps = {
  filterName: '',
  filterItems: [],
  position: 'vertical',
}

export default FilterItemTypeDropdown
