import PropTypes from 'prop-types'

import {useDeviceType} from '@sm360/phoenixjs'
import FilterColorWithText from '../../../../../components/molecules/FilterColorWithText/FilterColorWithText'
import { useContext } from 'react'
import InventoryListingContext from '../../../InventoryListingContext'
import FilterClearAll from '../FilterSelectClearAll/FilterClearAll'
import FilterSelectAll from '../FilterSelectClearAll/FilterSelectAll'

const FilterItemTypeColor = ({ filterName, filterItems, position }) => {
  const deviceType = useDeviceType()
  const { changeState, updateParameters, parameters } = useContext(
    InventoryListingContext
  )

  const handleClick = (e) => {
    const { classList, dataset } = e.currentTarget

    classList.toggle('-active')
    const params = {
      slug: dataset.filterItemSlug,
      key: parseInt(dataset.filterItemKey),
    }

    updateParameters(params)
    changeState()
  }

  return (
    <>
      <div className='m-filterSelectClearAll flex space-x-[30px] pb-[20px]'>
        <FilterClearAll paramNames={[filterName]} />
        <FilterSelectAll filterName={filterName} filterItems={filterItems} />
      </div>

      <div
        className={`m-filterItemTypeColor ${
          deviceType === 'mobile' || position === 'vertical'
            ? 'grid grid-cols-3 gap-[10px]'
            : 'flex items-start justify-center space-x-[20px]'
        }`}
      >
        {filterItems?.map(({ key, label, count, colorHexValue }, index) => {
          const isActive = parameters[filterName]?.includes(key)

          return (
            <FilterColorWithText
              key={index}
              label={`${label} (${count})`}
              color={`${colorHexValue}`}
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

FilterItemTypeColor.propTypes = {
  /** Filter Name */
  filterName: PropTypes.string.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.array.isRequired,
  /** Filter Elements display */
  position: PropTypes.oneOf(['vertical', 'horizontal']),
}

FilterItemTypeColor.defaultProps = {
  filterName: '',
  filterItems: [],
  position: 'vertical',
}

export default FilterItemTypeColor
