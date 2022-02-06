import { useContext, useEffect } from 'react'
import { TemplateInventoryListing, updatePageUrl } from '@sm360/phoenixjs'

import InventoryListingContext from './InventoryListingContext'
import InventoryListingIntroduction from './organisms/InventoryListingIntroduction'
import InventoryListingSidebar from './organisms/InventoryListingSidebar'
import InventoryListingMainContent from './organisms/InventoryListingMainContent'

const InventoryListing = () => {
  const {
    initInventory,
    updateVehicles,
    selectedHubCategory,
    updateFilters,
    parameters,
    status,
    changeState,
    updateState,
  } = useContext(InventoryListingContext)

  useEffect(() => {
    initInventory()
  }, [])

  useEffect(() => {
    if (updateState) {
      const { urlMapping } = selectedHubCategory

      changeState()
      updateFilters(urlMapping)
      updateVehicles(urlMapping)
      updatePageUrl(parameters)
    }
  }, [updateState])

  /* TODO: à gérer le bg , la font color et le label lang  du breadcrumb */

  if (status !== 'succeed') return <div className='loading'>loading...</div>

  return (
    <TemplateInventoryListing
      topContent={<InventoryListingIntroduction />}
      sidebarContent={<InventoryListingSidebar />}
      mainContent={<InventoryListingMainContent />}
    />
  )
}

export default InventoryListing
