import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Range, getTrackBackground } from 'react-range'
import { lang, formatNumber } from '@sm360/phoenixjs'
import { filterItemType } from './FilterItemType'
import InventoryListingContext from '../../../InventoryListingContext'
import FilterClearAll from '../FilterSelectClearAll/FilterClearAll'

const FilterItemTypeRange = ({
  filterName,
  filterItems,
  rangeColorOut,
  rangeColorIn,
  position,
}) => {
  /**
   * Call Inventory use context
   */
  const { changeState, updateParameters, parameters } = useContext(
    InventoryListingContext
  )

  /**
   * Filters Object - Dummy Data
   */
  const {
    filterMinSlug,
    filterMaxSlug,
    title,
    placeholder,
    step,
    variant,
    formatNumberType,
  } = filterItemType[filterName]

  const isDoubleRange = variant === 'doubleRange'

  const apiMinValue = filterItems?.min
  const apiMaxValue = filterItems?.max

  const [currentMinValue, setCurrentMinValue] = useState(
    parameters[filterMinSlug] ? parameters[filterMinSlug][0] : apiMinValue
  )

  const [currentMaxValue, setCurrentMaxValue] = useState(
    parameters[filterMaxSlug] ? parameters[filterMaxSlug][0] : apiMaxValue
  )

  const [values, setValues] = useState(
    isDoubleRange ? [currentMinValue, currentMaxValue] : [currentMaxValue]
  )

  useEffect(() => {
    if (!parameters[filterMinSlug] && !parameters[filterMaxSlug]) {
      setValues(isDoubleRange ? [apiMinValue, apiMaxValue] : [apiMaxValue])
    }
  }, [parameters])

  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)

  const paramNames = isDoubleRange
    ? [filterMinSlug, filterMaxSlug]
    : [filterMaxSlug]

  /**
   * Range Colors Setting
   */
  const rangeColors =
    values.length > 1 && isDoubleRange
      ? [rangeColorOut, rangeColorIn, rangeColorOut]
      : [rangeColorIn, rangeColorOut]

  return (
    <div
      className={
        'm-filterItemTypeRange flex flex-col justify-center space-y-[5px]'
      }
    >
      <div className={'m-filterItemTypeRange__title'}>{title[lang]}</div>
      <Range
        values={values}
        step={step}
        min={apiMinValue}
        max={apiMaxValue}
        allowOverlap={true}
        showComponent
        onChange={(newValues) => {
          setValues(newValues)
        }}
        onFinalChange={() => {
          let params = {}

          if (minValue !== currentMinValue && isDoubleRange) {
            setCurrentMinValue(minValue)

            params = {
              action:
                minValue > apiMinValue
                  ? 'addParamTypeText'
                  : 'deleteParamTypeText',
              slug: filterMinSlug,
              key: minValue,
            }
            updateParameters(params)
          }

          if (maxValue !== currentMaxValue) {
            setCurrentMaxValue(maxValue)

            params = {
              action:
                maxValue < apiMaxValue
                  ? 'addParamTypeText'
                  : 'deleteParamTypeText',
              slug: filterMaxSlug,
              key: maxValue,
            }
            updateParameters(params)
          }

          changeState()
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseUp={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className={'m-filterItemTypeRange__track flex h-[36px] w-full'}
          >
            <div
              ref={props.ref}
              className={`m-filterItemTypeRange__range h-[5px] self-center rounded-[4px] ${
                position === 'horizontal' ? 'w-[300px]' : 'w-full'
              }`}
              style={{
                background: getTrackBackground({
                  values,
                  colors: rangeColors,
                  min: apiMinValue,
                  max: apiMaxValue,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className={
              'm-filterItemTypeRange__thumbs flex h-[24px] w-[24px] items-center justify-center rounded-full bg-primary shadow-sm'
            }
          ></div>
        )}
      />
      <div
        className={
          'm-filterItemTypeRange__values flex items-center justify-between'
        }
      >
        {values.length > 1 && isDoubleRange && (
          <p className={'m-filterItemTypeRange__value'} id='output'>
            {`${formatNumber(minValue, formatNumberType)} ${placeholder}`}
          </p>
        )}
        <p className={'m-filterItemTypeRange__value'} id='output'>
          {`${formatNumber(maxValue, formatNumberType)} ${placeholder}`}
        </p>
      </div>
      <div className='m-filterSelectClearAll flex space-x-[30px] pt-[20px]'>
        <FilterClearAll paramNames={paramNames} />
      </div>
    </div>
  )
}

FilterItemTypeRange.propTypes = {
  /** Filter Name */
  filterName: PropTypes.string.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.object.isRequired,
  /** String contain the range color out */
  rangeColorOut: PropTypes.string,
  /** String contain the range color in */
  rangeColorIn: PropTypes.string,
  /** Filter Elements display */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
}

FilterItemTypeRange.defaultProps = {
  filterName: '',
  filterItems: {},
  rangeColorOut: '#ccc',
  rangeColorIn: '#47C671',
  position: 'vertical',
}

export default FilterItemTypeRange
