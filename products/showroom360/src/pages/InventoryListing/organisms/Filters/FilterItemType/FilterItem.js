import FilterItemTypeButton from './FilterItemTypeButton'
import FilterItemTypeColor from './FilterItemTypeColor'
import FilterItemTypeInput from './FilterItemTypeInput'
import FilterItemTypeRange from './FilterItemTypeRange'
import FilterItemTypeDropdown from './FilterItemTypeDropdown'
import PropTypes from 'prop-types'

const FilterItem = ({
  filterName,
  filterItems,
  position,
  parameters,
  onClickTypeButton,
  filterItemType,
  filterItemVariant,
}) => {
  switch (filterItemType) {
    case 'button':
      return (
        <FilterItemTypeButton
          filterName={filterName}
          filterItems={filterItems}
          position={position}
          variant={filterItemVariant}
          parameters={parameters}
          onClick={onClickTypeButton}
        />
      )
    case 'color':
      return (
        <FilterItemTypeColor
          filterName={filterName}
          filterItems={filterItems}
          position={position}
        />
      )
    case 'input':
      return (
        <FilterItemTypeInput
          filterName={filterName}
          filterItems={filterItems}
          position={position}
        />
      )
    case 'range':
      return (
        <FilterItemTypeRange
          filterName={filterName}
          filterItems={filterItems}
          position={position}
          rangeColorIn={'#005dab'}
        />
      )
    case 'dropdown':
      return (
        <FilterItemTypeDropdown
          filterName={filterName}
          filterItems={filterItems}
          position={position}
        />
      )
    default:
      return null
  }
}

FilterItem.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterItems: PropTypes.any.isRequired,
  position: PropTypes.string,
  parameters: PropTypes.object,
  onClickTypeButton: PropTypes.func,
  filterItemType: PropTypes.string,
  filterItemVariant: PropTypes.string,
}

export default FilterItem
