import InventoryListing from './pages/InventoryListing/InventoryListing'
import InventoryListingState from './pages/InventoryListing/InventoryListingState'

const App = () => {
    return (
        <InventoryListingState>
          <InventoryListing />
        </InventoryListingState>
    )
}

export default App
