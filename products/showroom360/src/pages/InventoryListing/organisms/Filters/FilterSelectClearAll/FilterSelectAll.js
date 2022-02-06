import PropTypes from 'prop-types'
import { useContext } from 'react'
import {Icon, Typography} from '@sm360/phoenixjs'
import InventoryListingContext from '../../../InventoryListingContext'

const FilterSelectAll = ({ filterName, filterItems }) => {
  const { changeState, updateParameters, parameters } = useContext(
    InventoryListingContext
  )

  const isSelectedAll = filterItems?.length === parameters[filterName]?.length

  const handleSelectItem = () => {
    const params = {
      slug: filterName,
      key: filterItems.map(({ key }) => [].concat(key)),
      action: 'selectAll',
    }

    updateParameters(params)
    changeState()
  }

  /*TODO: Revoir les textes en mode dynamic*/
  return (
    <button
      disabled={isSelectedAll}
      className='m-filterSelectAll border-0 underline hover:no-underline disabled:cursor-not-allowed disabled:no-underline disabled:opacity-30'
      onClick={handleSelectItem}
    >
      <Icon
        symbolId={'check-circle'}
        extraClasses={'m-filterSelectAll__icon w-[10px] h-[10px] mr-[10px]'}
      />

      <Typography tag={'span'} extraClasses={'m-filterSelectAll__label'}>
        Select All
      </Typography>
    </button>
  )
}

FilterSelectAll.propTypes = {
  /** Filter Name */
  filterName: PropTypes.string.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.array.isRequired,
}

FilterSelectAll.defaultProps = {
  filterName: '',
  filterItems: [],
}

export default FilterSelectAll
