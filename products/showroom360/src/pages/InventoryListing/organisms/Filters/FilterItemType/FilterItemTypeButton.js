import PropTypes from 'prop-types'
import FilterPictoWithText from '../../../../../components/molecules/FilterPictoWithText/FilterPictoWithText'
import {useDeviceType} from '@sm360/phoenixjs'
import FilterClearAll from '../FilterSelectClearAll/FilterClearAll'
import FilterSelectAll from '../FilterSelectClearAll/FilterSelectAll'

const FilterItemTypeButton = ({
  filterName,
  filterItems,
  position,
  parameters,
  variant,
  onClick,
}) => {
  const deviceType = useDeviceType()

  const handleClick = (e) => {
    const { classList, dataset } = e.currentTarget
    const { filterItemSlug, filterItemKey } = dataset

    classList.toggle('-active')

    onClick(filterItemSlug, parseInt(filterItemKey))
  }

  return (
    <>
      <div className='m-filterSelectClearAll flex space-x-[30px] pb-[20px]'>
        <FilterClearAll paramNames={[filterName]} />
        <FilterSelectAll filterName={filterName} filterItems={filterItems} />
      </div>

      <div
        className={`m-filterItemTypeButton ${
          deviceType === 'mobile' || position === 'vertical'
            ? 'grid grid-cols-2 gap-[10px]'
            : 'flex items-center justify-center space-x-[20px]'
        }`}
      >
        {filterItems?.map(({ key, label, count }, index) => {
          const isActive = parameters[filterName]?.includes(key)

          return (
            <FilterPictoWithText
              key={index}
              label={`${label} (${count})`}
              iconSymbol={
                key !== -1 ? `f-${filterName}-${key}` : `f-${filterName}`
              }
              variant={variant}
              isDisabled={count === 0}
              isActive={isActive}
              onClick={handleClick}
              data-filter-item-slug={filterName}
              data-filter-item-key={key}
            />
          )
        })}
      </div>
    </>
  )
}

FilterItemTypeButton.propTypes = {
  /** Filter Name */
  filterName: PropTypes.string.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.array.isRequired,
  /** Filter Elements display */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
  /** Filter Btn Variant */
  variant: PropTypes.string,
  /** List of parameters context */
  parameters: PropTypes.object,
  /** OnClick event */
  onClick: PropTypes.func,
}

FilterItemTypeButton.defaultProps = {
  filterName: '',
  filterItems: [],
  position: 'vertical',
}

export default FilterItemTypeButton
