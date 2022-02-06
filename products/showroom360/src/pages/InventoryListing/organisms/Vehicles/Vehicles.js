import {Typography, Pagination, PromoCard, VehicleCard, useDeviceType} from '@sm360/phoenixjs'
import { useContext, useState, useEffect } from 'react'
import InventoryListingContext from '../../InventoryListingContext'
import StockNumber from '../../../../components/molecules/StockNumber/StockNumber'

const Vehicles = () => {
  const {
    websiteShowroom360Configuration,
    promotions,
    vehicles,
    updateParameters,
    changeState,
  } = useContext(InventoryListingContext)

  const deviceType = useDeviceType()

  const [promoIndex, setPromoIndex] = useState(0)
  const [newVehicles, setNewVehicles] = useState([])

  const imgServer = process.env.IMAGE_SERVER_URL

  /**
   * Get Promotions Display Sequence values (String)
   */
  const { promotionsDisplaySequence } = websiteShowroom360Configuration

  /**
   * split: Create array number from promotionsDisplaySequence
   * map: Transform array string to number
   * sort: Order array
   * TODO: Pat doit nous retourner l'array directement
   */
  const promotionSequenceArray = promotionsDisplaySequence
    ?.split(',')
    .map(Number)
    .sort()

  /**
   * Get Promotions Image URL
   * @param promotion
   * @returns {string|string}
   */
  const getPromotionImage = (promotion) => {
    switch (deviceType) {
      case 'mobile':
        return `${imgServer}/images/promo${promotion.imgUrl3}`
      case 'tablet':
        return `${imgServer}/images/promo${promotion.imgUrl2}`
      case 'desktop':
        return `${imgServer}/images/promo${promotion.imgUrl}`
      default:
        return promotion.imgUrl
    }
  }

  /**
   * Pagination Handle Click
   * @param pageIndex - Number of page
   */
  const handleClickPage = (pageIndex) => {
    const param = {
      slug: 'page',
      key: pageIndex,
      action: pageIndex > 1 ? 'addParamTypeText' : 'deleteParamTypeText',
    }

    updateParameters(param)
    changeState()
  }

  useEffect(() => {
    let newVehicles = vehicles?.vehicles && [...vehicles.vehicles]

    let newPromoIndex = promoIndex
    promotionSequenceArray?.map((sequenceValue) => {
      if (sequenceValue < newVehicles.length) {
        newVehicles?.splice(sequenceValue - 1, 0, promotions[newPromoIndex])
        newPromoIndex =
          newPromoIndex + 1 < promotions.length ? newPromoIndex + 1 : 0
      }
    })

    setPromoIndex(newPromoIndex)
    newVehicles && setNewVehicles(newVehicles)
  }, [vehicles])

  return (
    <>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4'>
        {newVehicles?.map((item, index) =>
          item.vehicleId ? (
            <VehicleCard
              key={index}
              imgSrc={item.multimedia.mainPictureCompleteUrl}
              imgAlt={`${item.year} ${item.make.name} ${item.model.name}`}
              imgWidth='400'
              imgHeight='300'
            >
              <StockNumber
                extraClasses={'mb-[5px]'}
                stockNumber={item.stockNo}
              />

              <Typography tag='p' extraClasses={'font-bold'}>
                {item.year} {item.make.name} {item.model.name}
              </Typography>
            </VehicleCard>
          ) : (
            <PromoCard
              key={index}
              imgSrc={getPromotionImage(item)}
              imgAlt={item.title}
              imgWidth='400'
              imgHeight='300'
            />
          )
        )}
      </div>
      <Pagination
        extraClasses={'py-[20px]'}
        onClick={(e) => handleClickPage(e)}
        currentPage={vehicles?.pagination?.pageNumber}
        pagesQuantity={vehicles?.pagination?.numberOfPages}
      />
    </>
  )
}

export default Vehicles
