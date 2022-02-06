const formatNumber = (value, type) => {
  const websiteLang = document.documentElement.lang
  const locales = websiteLang === 'fr' ? 'fr-CA' : 'en-CA'

  switch (type) {
    case 'kilometer': {
      const formatter = new Intl.NumberFormat(locales, {
        minimumFractionDigits: 0,
      })

      return `${formatter.format(value)} km`
    }
    case 'speeds': {
      const formatter = new Intl.NumberFormat(locales, {
        minimumFractionDigits: 0,
      })
      const text = value === 1 ? 'speed' : 'speeds'

      return `${formatter.format(value)} ${text}`
    }
    case 'months': {
      const formatter = new Intl.NumberFormat(locales, {
        minimumFractionDigits: 0,
      })
      const text = value === 1 ? 'month' : 'months'

      return `${formatter.format(value)} ${text}`
    }
    case 'percent': {
      const formatter = new Intl.NumberFormat(locales, {
        style: 'percent',
        minimumFractionDigits: 2,
      })

      return `${formatter.format(value / 100)}`
    }
    case 'price': {
      const formatter = new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 2,
      })

      return formatter.format(value).replace('CA', '')
    }
    case 'priceNoDigits': {
      const formatter = new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: 'CAD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })

      return formatter.format(value).replace('CA', '')
    }
    case 'number': {
      const formatter = new Intl.NumberFormat(locales, {
        minimumFractionDigits: 0,
      })

      return formatter.format(value)
    }
    default:
      return value
  }
}

export default formatNumber