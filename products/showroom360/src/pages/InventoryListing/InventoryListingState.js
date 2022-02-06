import { useReducer } from 'react'
import { extractUrlParametersAsObjectWithArrayProperties, getHubPathName, setHubPathName } from '@sm360/phoenixjs'

import InventoryListingContext from './InventoryListingContext'
import InventoryListingReducer from './InventoryListingReducer'
import {
  getInventoryFiltersAPIUrl,
  getInventoryListingApiUrl,
  getInventoryHubCategoriesApiUrl,
  getWebsiteApiUrl,
  getInventoryPromotionsApiUrl,
} from './inventoryListingApis'

import {
  INIT_INVENTORY_LISTING,
  UPDATE_INVENTORY_LISTING,
  UPDATE_FILTER,
  ADD_MULTI_PARAMETERS_RANGE,
  ADD_PARAMETERS_ITEM,
  ADD_PARAMETERS_ITEM_TYPE_TEXT,
  ADD_ALL_PARAMETERS_ITEM,
  DELETE_PARAMETERS_ITEM,
  DELETE_PARAMETERS,
  UPDATE_HUBCATEGORY_SELECTED,
  UPDATE_VEHICLES,
  UPDATE_STATE,
} from './InventoryListingActions'

const InventoryListingState = (props) => {
  const initialState = {
    filterItems: {},
    hubCategories: [],
    selectedHubCategory: {},
    vehicles: {},
    parameters: {},
    updateState: false,
    websiteShowroom360Configuration: {},
    promotions: [],
    status: 'loading',
  }

  const hubFromUrl = getHubPathName()

  const [state, dispatch] = useReducer(InventoryListingReducer, initialState)

  const initInventory = async () => {
    const hubCategoriesResp = await initHubCategories(hubFromUrl)

    const activeHubCategories = hubCategoriesResp.hubCategories?.filter(
      (item) => item.count > 0 && item.vehicleInventoryHubCategory.active
    )
    const initialSelectedHub = activeHubCategories?.filter(
      (item) => item.urlMapping === hubFromUrl
    )[0]

    const urlParameters = extractUrlParametersAsObjectWithArrayProperties()
    const initialParameters = { ...urlParameters }

    const filters = await initFilters(hubFromUrl, initialParameters)
    const vehicles = await initVehicles(hubFromUrl, initialParameters)
    const website = await initWebsite('3371')
    const promotions = await initPromotions(
      '3371',
      'inventory.vehicles.promo.card'
    )

    const { websiteShowroom360Configuration } = website

    dispatch({
      type: INIT_INVENTORY_LISTING,
      filterItems: filters.data,
      hubCategories: activeHubCategories,
      selectedHubCategory: initialSelectedHub || {},
      vehicles: vehicles,
      parameters: initialParameters || {},
      updateState: false,
      websiteShowroom360Configuration: websiteShowroom360Configuration,
      promotions: promotions,
      status: 'succeed',
    })
  }

  const updateInventory = async (hub) => {
    setHubPathName(hub)
    updateSelectedHubCategory(hub)

    const filters = await initFilters(hub)
    const vehicles = await initVehicles(hub)

    dispatch({
      type: UPDATE_INVENTORY_LISTING,
      filterItems: filters.data,
      vehicles: vehicles,
      parameters: {},
    })
  }

  const updateParameters = (param) => {
    if (param.action === 'addParamTypeText') {
      dispatch({
        type: ADD_PARAMETERS_ITEM_TYPE_TEXT,
        params: param,
      })
    } else if (param.action === 'addMultiParamsRange') {
      dispatch({
        type: ADD_MULTI_PARAMETERS_RANGE,
        params: param,
      })
    } else if (param.action === 'selectAll') {
      dispatch({
        type: ADD_ALL_PARAMETERS_ITEM,
        params: param,
      })
    } else if (
      (state.parameters[param.slug]?.length === 1 &&
        state.parameters[param.slug]?.includes(param.key)) ||
      param.action === 'clearAll' ||
      param.action === 'deleteParamTypeText'
    ) {
      dispatch({
        type: DELETE_PARAMETERS,
        slug: param.slug,
      })
    } else if (state.parameters[param.slug]?.includes(param.key)) {
      dispatch({
        type: DELETE_PARAMETERS_ITEM,
        params: param,
      })
    } else {
      dispatch({
        type: ADD_PARAMETERS_ITEM,
        params: param,
      })
    }
  }

  const changeState = () => {
    dispatch({
      type: UPDATE_STATE,
      updateState: !state.updateState,
    })
  }

  const updateFilters = async (hub = '') => {
    const params = state.parameters
    const filters = await initFilters(hub, params)

    dispatch({
      type: UPDATE_FILTER,
      filterItems: filters.data,
    })
  }

  const updateVehicles = async (hub = '') => {
    const params = state.parameters
    const vehicles = await initVehicles(hub, params)

    dispatch({
      type: UPDATE_VEHICLES,
      vehicles: vehicles,
    })
  }

  const updateSelectedHubCategory = async (category) => {
    const newSelectedHub = state.hubCategories?.filter(
      (item) => item.urlMapping === category
    )[0]

    dispatch({
      type: UPDATE_HUBCATEGORY_SELECTED,
      selectedHubCategory: newSelectedHub,
    })
  }

  const initFilters = (hub, params) => {
    return getInventoryFiltersAPIUrl(hub, params)
  }

  const initHubCategories = (hub) => {
    return getInventoryHubCategoriesApiUrl(hub)
  }

  const initVehicles = (hub, params) => {
    return getInventoryListingApiUrl(hub, params)
  }

  const initWebsite = (websiteId) => {
    return getWebsiteApiUrl(websiteId)
  }

  const initPromotions = (websiteId, location) => {
    return getInventoryPromotionsApiUrl(websiteId, location)
  }

  return (
    <InventoryListingContext.Provider
      value={{
        filterItems: state.filterItems,
        hubCategories: state.hubCategories,
        selectedHubCategory: state.selectedHubCategory,
        vehicles: state.vehicles,
        parameters: state.parameters,
        updateState: state.updateState,
        websiteShowroom360Configuration: state.websiteShowroom360Configuration,
        promotions: state.promotions,
        status: state.status,
        initInventory,
        updateFilters,
        updateVehicles,
        updateParameters,
        updateSelectedHubCategory,
        changeState,
        initFilters,
        updateInventory,
      }}
    >
      {props.children}
    </InventoryListingContext.Provider>
  )
}

export default InventoryListingState
