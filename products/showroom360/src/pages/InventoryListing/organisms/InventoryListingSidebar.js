import { useContext } from 'react'
import HubCategories from './HubCategories/HubCategories'
import Filters from './Filters/Filters'
import InventoryListingContext from '../InventoryListingContext'
import { filterItemType } from './Filters/FilterItemType/FilterItemType'

const InventoryListingSidebar = () => {
  const {
    websiteShowroom360Configuration,
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

  return (
    <div className='o-inventoryListingSidebar xxl:p-[40px] p-[20px]'>
      {/* Section Widget Tradein (Add condition - Position XMS) */}
      <section className='o-inventoryListingSidebar__tradein mb-4 flex h-[100px] items-center justify-center bg-red-200'>
        Widget Tradein...
      </section>

      {/* Section HubCategories */}
      {filtersLayout === 'Horizontal' && hubCategories && (
        <section className='o-inventoryListingSidebar__hubCategories'>
          <HubCategories
            onChange={(e) => updateInventory(e)}
            selectedUrlMapping={urlMapping}
            hubCategories={hubCategories}
          />
        </section>
      )}

      {/* Section Filters */}
      {filtersLayout === 'Vertical' && dataFiltered && (
        <section className='o-inventoryListingSidebar__filters'>
          <Filters filterItems={dataFiltered} parameters={parameters} />
        </section>
      )}

      {/* Section Widget Tradein (Add condition - Position XMS) */}
      <section className='o-inventoryListingSidebar__tradein mb-4 flex h-[100px] items-center justify-center bg-red-200'>
        Widget Tradein...
      </section>

      {/* Section Finance */}
      <section className='o-inventoryListingSidebar__tradein mb-4 flex h-[100px] items-center justify-center bg-blue-200'>
        Vehicle Price (Cash, Finance, Lease)...
      </section>
    </div>
  )
}

export default InventoryListingSidebar
