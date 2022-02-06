import {Typography, Container, Breadcrumb, BreadcrumbItem, useDeviceType} from '@sm360/phoenixjs'
import { useContext, useEffect, useState } from 'react'
import InventoryListingContext from '../InventoryListingContext'
import SearchBar from '../molecules/SearchBar/SearchBar'

const InventoryListingIntroduction = () => {
  const { selectedHubCategory, parameters, updateParameters, changeState } =
    useContext(InventoryListingContext)

  const {
    titleFontColor,
    backgroundColor,
    mobileBackground,
    tabletBackground,
    desktopBackground,
  } = selectedHubCategory?.vehicleInventoryHubCategory || {}

  const [searchValue, setSearchValue] = useState(
    parameters?.text && parameters?.text[0] ? `${parameters?.text[0]}` : ''
  )
  const [delayedSearchTerm, setDelayedSearchTerm] = useState(false)

  const deviceType = useDeviceType()

  {
    /* TODO: Revoir appels des URL
  const imgServer = process.env.IMAGE_SERVER_URL
  ${imgServer}/images/hubCategory${headerBgImage}
  */
  }

  const headerBgImage =
    deviceType === 'mobile'
      ? mobileBackground
      : deviceType === 'tablet'
      ? tabletBackground
      : desktopBackground

  {
    /*TODO: Enlever la logique de merde qu'on a mis ici */
  }
  const HeaderStyle = {
    color: titleFontColor,
    backgroundImage: 'url(' + headerBgImage + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: backgroundColor,
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!delayedSearchTerm) {
        setDelayedSearchTerm(true)
      } else {
        const param = {
          slug: 'text',
          key: searchValue,
          action:
            searchValue?.length > 0
              ? 'addParamTypeText'
              : 'deleteParamTypeText',
        }

        updateParameters(param)
        changeState()
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchValue])

  /* TODO: gestion de langue texte ... (mot listing) */
  return (
    <>
      {/* Section Breadcrumb */}
      <section className='o-inventoryListingIntroduction__breadcrumb bg-black text-white'>
        <Container>
          <Breadcrumb homeLabel='Home'>
            <BreadcrumbItem label={selectedHubCategory?.name} />
          </Breadcrumb>
        </Container>
      </section>

      {/* Section Introduction */}
      <section className='o-inventoryListingIntroduction__intro bg-primary px-4 text-onPrimary'>
        {/*  Section Heading - h1 */}
        <Typography
          tag='h1'
          extraClasses='o-inventoryListingIntroduction__heading pt-[25px] pb-[15px] md:pb-[25px] md:text-center lg:py-[30px]'
        >
          {selectedHubCategory?.name} Listing
        </Typography>

        {/*  Section SearchBar */}
        <SearchBar
          extraClasses='o-inventoryListingIntroduction__searchBar pb-[30px] lg:pb-[65px]'
          title='Search Your Vehicle'
          inputId='searchFilter'
          inputPlaceholder='Search (Ex: Make, Model, Year ...)'
          onChange={(e) => setSearchValue(e)}
          searchValue={searchValue}
        />
      </section>
    </>
  )
}

export default InventoryListingIntroduction
