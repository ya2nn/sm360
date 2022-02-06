import axios from 'axios'
import { lang, buildUrlWithParameters } from '@sm360/phoenixjs'

export const getInventoryFiltersAPIUrl = async (hub, params = {}) => {
  const apiUrl =
    lang === 'fr'
      ? `/fr/api/vehicleinventory/filters/inventaire-${hub}`
      : `/en/api/vehicleinventory/filters/${hub}-inventory`

  const url = window.location.origin.concat(apiUrl)
  const urlWithParams = buildUrlWithParameters(url, params)

  const response = await axios.get(urlWithParams)
  if (response.statusText === 'OK' && response.status === 200) {
    return response.data
  } else {
    return null
  }
}

export const getInventoryListingApiUrl = async (hub, params = {}) => {
  const apiUrl =
    lang === 'fr'
      ? `/fr/inventaire-${hub}/api/listing`
      : `/en/${hub}-inventory/api/listing`

  const defaultParams = {
    imageSize: 'w400h300c',
    limit: 12,
    namedSorting: 'featuredASC',
  }

  const url = window.location.origin.concat(apiUrl)
  const urlWithParams = buildUrlWithParameters(url, {
    ...params,
    ...defaultParams,
  })

  const response = await axios.get(urlWithParams)
  if (response.statusText === 'OK' && response.status === 200) {
    return response.data
  } else {
    return null
  }
}

export const getInventoryHubCategoriesApiUrl = async (hub) => {
  const apiUrl =
    lang === 'fr'
      ? `/fr/a-vendre/auto/api/hubs/list/${hub}`
      : `/en/for-sale/car/api/hubs/list/${hub}`

  const response = await axios.get(apiUrl)
  if (response.statusText === 'OK' && response.status === 200) {
    return response.data
  } else {
    return null
  }
}

export const getWebsiteApiUrl = async (websiteId) => {
  const apiUrl = `/websites/${websiteId}`
  const token = process.env.API_TOKEN

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(apiUrl, config)
  if (response.statusText === 'OK' && response.status === 200) {
    return response.data
  } else {
    return null
  }
}

export const getInventoryPromotionsApiUrl = async (websiteId, location) => {
  const apiUrl = `/promotions?websiteId=${websiteId}&location=${location}`

  const response = await axios.get(apiUrl)
  if (response.statusText === 'OK' && response.status === 200) {
    return response.data
  } else {
    return null
  }
}
