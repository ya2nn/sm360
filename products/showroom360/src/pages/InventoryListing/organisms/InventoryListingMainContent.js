import { useContext } from 'react'
import HubCategories from './HubCategories/HubCategories'
import Filters from './Filters/Filters'
import {Container, Typography, useDeviceType} from '@sm360/phoenixjs'
import InventoryListingContext from '../InventoryListingContext'
import FiltersMobile from './Filters/FiltersMobile'
import Vehicles from './Vehicles/Vehicles'
import { filterItemType } from './Filters/FilterItemType/FilterItemType'

const InventoryListingMainContent = () => {
  const {
    websiteShowroom360Configuration,
    vehicles,
    hubCategories,
    selectedHubCategory,
    updateInventory,
    filterItems,
    parameters,
  } = useContext(InventoryListingContext)

  const { filtersLayout } = websiteShowroom360Configuration
  const { urlMapping } = selectedHubCategory

  const dataFiltered =
    filterItems &&
    Object.entries(filterItems).filter(
      (item) => filterItemType[item[0]]?.active
    )

  const deviceType = useDeviceType()

  return (
    <>
      <section className='flex w-full items-center p-[20px] shadow lg:h-24'>
        {deviceType !== 'desktop' && (
          <FiltersMobile
            onChangeHubCategory={(e) => updateInventory(e)}
            selectedUrlMapping={urlMapping}
            hubCategories={hubCategories}
            filterItems={dataFiltered}
            parameters={parameters}
          />
        )}

        {deviceType === 'desktop' && filtersLayout === 'Horizontal' && (
          <Filters
            position='horizontal'
            filterItems={dataFiltered}
            parameters={parameters}
          />
        )}

        {deviceType === 'desktop' &&
          filtersLayout === 'Vertical' &&
          hubCategories && (
            <HubCategories
              position='horizontal'
              onChange={(e) => updateInventory(e)}
              selectedUrlMapping={urlMapping}
              hubCategories={hubCategories}
            />
          )}
      </section>
      <section>
        <Container isFull extraClasses='pt-[20px] px-4'>
          <Typography tag='p' extraClasses='mb-4'>
            {vehicles?.pagination?.numberOfItems} vehicles found
          </Typography>
          <Vehicles />
        </Container>
      </section>
    </>
  )
}

InventoryListingMainContent.propTypes = {}

export default InventoryListingMainContent
