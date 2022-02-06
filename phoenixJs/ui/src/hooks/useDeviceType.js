import React, { useEffect, useState } from 'react'

const screens = require('../../dist/tailwind/js/screens')

const useDeviceType = () => {
  const [media, setMedia] = useState(
    window.innerWidth < parseInt(screens.md)
      ? 'mobile'
      : window.innerWidth < parseInt(screens.lg)
      ? 'tablet'
      : 'desktop'
  )

  const updateMedia = () => {
    const newMedia =
      window.innerWidth < parseInt(screens.md)
        ? 'mobile'
        : window.innerWidth < parseInt(screens.lg)
        ? 'tablet'
        : 'desktop'
    setMedia(newMedia)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return media
}

export default useDeviceType