import PropTypes from 'prop-types'
import { useContext } from 'react'
import InventoryListingContext from '../../../InventoryListingContext'
import {Icon, Typography} from '@sm360/phoenixjs'

const FilterClearAll = ({ paramNames }) => {
  const { changeState, updateParameters, parameters } = useContext(
    InventoryListingContext
  )
  const isClearAll =
    paramNames.filter((param) => parameters[param] === undefined).length ===
    paramNames.length

  const handleClearItem = () => {
    paramNames.map((param) => {
      const params = {
        slug: param,
        key: '',
        action: 'clearAll',
      }

      return updateParameters(params)
    })

    changeState()
  }

  /*TODO: Revoir les textes en mode dynamic*/
  return (
    <button
      onClick={handleClearItem}
      disabled={isClearAll}
      className='m-filterClearAll border-0 underline hover:no-underline disabled:cursor-not-allowed disabled:no-underline disabled:opacity-30'
    >
      <Icon
        symbolId={'close'}
        extraClasses={'m-filterClearAll__icon w-[10px] h-[10px] mr-[10px]'}
      />

      <Typography tag={'span'} extraClasses={'m-filterClearAll__label'}>
        Clear Filters
      </Typography>
    </button>
  )
}

FilterClearAll.propTypes = {
  /** Filter Name */
  paramNames: PropTypes.array.isRequired,
  /** List of Filter Items */
  filterItems: PropTypes.array.isRequired,
}

FilterClearAll.defaultProps = {
  paramNames: [],
  filterItems: [],
}

export default FilterClearAll
