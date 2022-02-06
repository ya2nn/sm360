import {
  INIT_INVENTORY_LISTING,
  UPDATE_INVENTORY_LISTING,
  UPDATE_STATE,
  UPDATE_FILTER,
  UPDATE_VEHICLES,
  ADD_MULTI_PARAMETERS_RANGE,
  ADD_PARAMETERS_ITEM,
  ADD_PARAMETERS_ITEM_TYPE_TEXT,
  ADD_ALL_PARAMETERS_ITEM,
  DELETE_PARAMETERS_ITEM,
  DELETE_PARAMETERS,
  UPDATE_HUBCATEGORY_SELECTED,
} from './InventoryListingActions'

export default (state = [], action) => {
  const params = { ...state.parameters }

  switch (action.type) {
    /** Initial Inventory actions */
    case INIT_INVENTORY_LISTING:
      return {
        ...state,
        filterItems: action.filterItems,
        vehicles: action.vehicles,
        hubCategories: action.hubCategories,
        parameters: action.parameters,
        selectedHubCategory: action.selectedHubCategory,
        websiteShowroom360Configuration: action.websiteShowroom360Configuration,
        promotions: action.promotions,
        status: action.status,
      }
    /** Update Inventory actions */
    case UPDATE_INVENTORY_LISTING:
      return {
        ...state,
        filterItems: action.filterItems,
        vehicles: action.vehicles,
        parameters: action.parameters,
      }
    /** Update State actions */
    case UPDATE_STATE:
      return {
        ...state,
        updateState: action.updateState,
      }
    /** Parameters actions */
    case ADD_MULTI_PARAMETERS_RANGE:
      params.page && delete params.page

      return {
        ...state,
        parameters: {
          ...params,
          [action.params.minSlug]: action.params.minValue,
          [action.params.maxSlug]: action.params.maxValue,
        },
      }
    case ADD_PARAMETERS_ITEM:
      params.page && delete params.page

      return {
        ...state,
        parameters: {
          ...params,
          [action.params.slug]: state.parameters[action.params.slug]
            ? state.parameters[action.params.slug].concat([action.params.key])
            : [action.params.key],
        },
      }
    case ADD_PARAMETERS_ITEM_TYPE_TEXT:
      params.page && delete params.page

      return {
        ...state,
        parameters: {
          ...params,
          [action.params.slug]: [action.params.key],
        },
      }
    case ADD_ALL_PARAMETERS_ITEM:
      params.page && delete params.page

      return {
        ...state,
        parameters: {
          ...params,
          [action.params.slug]: action.params.key.map((key) => key[0]),
        },
      }
    case DELETE_PARAMETERS_ITEM:
      return {
        ...state,
        parameters: {
          ...state.parameters,
          [action.params.slug]: state.parameters[action.params.slug].filter(
            (item) => item !== action.params.key
          ),
        },
      }
    case DELETE_PARAMETERS:
      const { min, max } = action.slug

      if (min || max) {
        min && delete params[action.slug.min]
        max && delete params[action.slug.max]
      } else {
        delete params[action.slug]
      }

      return {
        ...state,
        parameters: params,
      }
    /** Filters actions */
    case UPDATE_FILTER:
      return {
        ...state,
        filterItems: action.filterItems,
      }
    /** Vehicle Listing Actions */
    case UPDATE_VEHICLES:
      return {
        ...state,
        vehicles: action.vehicles,
      }
    /** Hub Categories Actions */
    case UPDATE_HUBCATEGORY_SELECTED:
      return {
        ...state,
        selectedHubCategory: action.selectedHubCategory,
        parameters: {},
      }
    default:
      return state
  }
}
