/* TODO: Revoir tous les texte static et les rendre dynamic */
import PropTypes from 'prop-types'
import {Image, Modal, openModal} from '@sm360/phoenixjs'

const OpenGallery = ({
  mainPictureUrl,
  thumbnailPictureUrl,
  showThumbnailPicture,
  videoCount,
  photoCount,
  children,
}) => {
  const videoLabel =
    videoCount === 1 ? `${videoCount} video` : `${videoCount} videos`
  const photoLabel =
    photoCount === 1 ? `${photoCount} photo` : `${photoCount} photos`

  return (
    <div className={'m-openGallery relative'}>
      {/* TODO: Revoir le hover class */}
      <button
        className={
          'm-openGallery__mainPicture relative w-full hover:opacity-60'
        }
        onClick={() => openModal('gallery')}
        title='Open Gallery - Main Picture'
      >
        <Image
          imageExtraClasses={'m-openGallery__mainPictureImg w-full'}
          imgUrlDesktop={mainPictureUrl}
          imgRole={'none'}
        />
      </button>

      {(videoCount > 0 || photoCount > 0) && (
        <button
          className={`m-openGallery__thumbnail absolute bottom-[15px] right-[10px] min-h-[15px] w-[80px] overflow-hidden shadow-md md:bottom-[20px] md:right-[20px] md:min-h-[25px] md:w-[144px] ${
            showThumbnailPicture ? 'rounded-md' : 'rounded-full'
          }`}
          onClick={() => openModal('gallery')}
          title='Open Gallery - Thumbnail'
        >
          <div className={'relative min-h-[inherit]'}>
            {showThumbnailPicture && thumbnailPictureUrl && (
              <Image
                imageExtraClasses={
                  'm-openGallery__thumbnailPicture w-[80px] h-[60px] md:w-[144px] md:h-[108px] '
                }
                imgUrlDesktop={thumbnailPictureUrl}
                imgRole={'none'}
              />
            )}
            <div
              className={
                'm-openGallery__thumbnailLabel absolute bottom-0 flex h-[15px] w-full items-center justify-center bg-backgroundPrimary text-[6px] text-onBackgroundPrimary md:h-[25px] md:text-[13px]'
              }
            >
              {videoCount > 0 && <span>{videoLabel}</span>}
              {videoCount > 0 && photoCount > 0 && (
                <span className={'px-[5px]'}>{`|`}</span>
              )}
              {photoCount > 0 && <span>{photoLabel}</span>}
            </div>
          </div>
        </button>
      )}

      <Modal modalId={'gallery'}>{children}</Modal>
    </div>
  )
}

OpenGallery.propTypes = {
  /** `Required` - Main Picture Url */
  mainPictureUrl: PropTypes.string.isRequired,
  /** Show Thumbnail Picture ? */
  showThumbnailPicture: PropTypes.bool,
  /** Url of first picture of gallery */
  thumbnailPictureUrl: PropTypes.string,
  /** Video count */
  videoCount: PropTypes.number.isRequired,
  /** Photo gallery count */
  photoCount: PropTypes.number.isRequired,
  /** Content of modal element */
  children: PropTypes.node.isRequired,
}

OpenGallery.defaultProps = {
  showThumbnailPicture: false,
  videoCount: 0,
  photoCount: 0,
}

export default OpenGallery
