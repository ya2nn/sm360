export const lang = document.documentElement.lang

export const getHubPathName = () => {
  const pathname = window.location.pathname.split('/')[2]
  return lang === 'fr'
    ? pathname?.replace('inventaire-', '')
    : pathname?.replace('-inventory', '')
}

export const setHubPathName = (hub) => {
  const newPathname =
    lang === 'fr' ? `/fr/inventaire-${hub}` : `/en/${hub}-inventory`

  window.history.replaceState({}, '', newPathname)
}
