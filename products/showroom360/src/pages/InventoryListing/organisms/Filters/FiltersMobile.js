/* TODO: Revoir les configuration de couleur */
import {Icon, Button, Dropdown, DropdownItem, Modal, openModal} from '@sm360/phoenixjs'
import Filters from './Filters'
import PropTypes from 'prop-types'
import HubCategories from '../HubCategories/HubCategories'

const FiltersMobile = ({
  selectedUrlMapping,
  hubCategories,
  onChangeHubCategory,
  filterItems,
  parameters,
}) => {
  return (
    <>
      <div className='flex w-full space-x-[10px] px-[6px]'>
        <Button
          size='small'
          variant='outlined'
          color='primary'
          extraClasses='flex items-center justify-center w-1/2'
          onClick={() => openModal('filterMobile')}
        >
          <Icon
            symbolId='menu-burger'
            extraClasses='w-[15px] h-[15px] mr-[10px]'
          />
          Filters
        </Button>

        <Dropdown
          controlValue=''
          containerExtraClasses='flex w-1/2'
          controlId='sortBy'
          controlLabel='Sort By'
          controlExtraClasses='flex flex-row-reverse items-center flex-auto justify-center h-auto px-5 py-3 border border-solid border-buttonPrimaryBorder text-buttonPrimary hover:border-buttonPrimaryBorderHover hover:bg-buttonPrimaryHover hover:text-onButtonPrimaryHover items-center justify-center'
          controlIconExtraClasses='w-[15px] h-[15px] ml-0 mr-[10px]'
          icon='menu-burger'
        >
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </Dropdown>
      </div>

      <Modal modalId='filterMobile'>
        <HubCategories
          variant='select'
          onChange={(e) => onChangeHubCategory(e)}
          selectedUrlMapping={selectedUrlMapping}
          hubCategories={hubCategories}
        />

        <Filters filterItems={filterItems} parameters={parameters} />
      </Modal>
    </>
  )
}

FiltersMobile.propTypes = {
  /** Filter Hub Categories Selected */
  selectedUrlMapping: PropTypes.string,
  /** Filter Hub Categories List */
  hubCategories: PropTypes.array,
  /** Filter Hub Categories OnChange event */
  onChangeHubCategory: PropTypes.func,
  /** List of filters items */
  filterItems: PropTypes.array.isRequired,
  /** List of parameters context */
  parameters: PropTypes.object,
}

export default FiltersMobile
