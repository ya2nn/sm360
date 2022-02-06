import _ from 'lodash'
import PropTypes from 'prop-types'
import React from "react";

import Lazyloader from '../../dist/third-party/Lazyloader'

const screens = require('../../dist/tailwind/js/screens')

/** Atom Image - Create an image tag */

const Image = ({
  tag,
  figureExtraClasses,
  imageExtraClasses,
  figcaptionExtraClasses,
  pictureExtraClasses,
  alt,
  width,
  height,
  figcaptionLabel,
  imgUrlMobile,
  imgUrlTablet,
  imgUrlDesktop,
  imgRole,
  figureRole,
  ...extraParams
}) => {
  const imgTag = () => {
    return (
      <img
        src={imgUrlDesktop}
        className={`a-image__img ${imageExtraClasses}`}
        alt={alt}
        width={width}
        height={height}
        role={imgRole}
        {...extraParams}
      />
    )
  }

  const sourcesTag = () => {
    return (
      <>
        {imgUrlMobile && (
          <source media={`(max-width: ${screens.md})`} srcSet={imgUrlMobile} />
        )}
        {imgUrlTablet && (
          <source media={`(max-width: ${screens.xl})`} srcSet={imgUrlTablet} />
        )}
      </>
    )
  }

  const figcaptionTag = () => {
    return (
      <figcaption
        id={_.camelCase(figcaptionLabel)}
        className={`a-image__figcaption ${figcaptionExtraClasses}`}
      >
        {figcaptionLabel}
      </figcaption>
    )
  }

  switch (tag) {
    case 'picture':
      return (
        <Lazyloader>
          <picture
            className={`a-image ${pictureExtraClasses}`}
            {...extraParams}
          >
            {(imgUrlMobile || imgUrlTablet) && sourcesTag()}
            {imgTag()}
          </picture>
        </Lazyloader>
      )
    case 'figure':
      return (
        <Lazyloader>
          <figure
            className={`a-image ${figureExtraClasses}`}
            role={figureRole}
            aria-label={!figcaptionLabel && alt}
            aria-labelledby={figcaptionLabel && _.camelCase(figcaptionLabel)}
            aria-describedby={figcaptionLabel && _.camelCase(figcaptionLabel)}
          >
            {imgTag()}
            {figcaptionLabel && figcaptionTag()}
          </figure>
        </Lazyloader>
      )
    default:
      return null
  }
}

Image.propTypes = {
  /** `Required` - Specify type of tag to use */
  tag: PropTypes.oneOf(['figure', 'picture']).isRequired,
  /** Extra classes to add to figure tag */
  figureExtraClasses: PropTypes.string,
  /** Extra classes to add to img tag */
  imageExtraClasses: PropTypes.string,
  /** Extra classes to add to figcaption tag */
  figcaptionExtraClasses: PropTypes.string,
  /** Extra classes to add to picture tag */
  pictureExtraClasses: PropTypes.string,
  /** `Required` - Set an alt to your image */
  alt: PropTypes.string.isRequired,
  /** `Required` - Set a width to your image */
  width: PropTypes.string.isRequired,
  /** `Required` - Set a height to your image */
  height: PropTypes.string.isRequired,
  /** Label for figcaption section */
  figcaptionLabel: PropTypes.string,
  /** Url of image mobile if you use tag picture */
  imgUrlMobile: PropTypes.string,
  /** Url of image tablet if you use tag picture */
  imgUrlTablet: PropTypes.string,
  /** `Required` - Url of image desktop if you use tag picture */
  imgUrlDesktop: PropTypes.string.isRequired,
  /** Specify a role to your image tag */
  imgRole: PropTypes.oneOf([
    'button',
    'checkbox',
    'img',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'none',
    'option',
    'presentation',
    'progressbar',
    'scrollbar',
    'separator',
    'slider',
    'switch',
    'tab',
    'treeitem',
  ]),
  /** Specify a role to your figure tag */
  figureRole: PropTypes.string,
}

Image.defaultProps = {
  tag: 'figure',
  figureExtraClasses: '',
  imageExtraClasses: '',
  figcaptionExtraClasses: '',
  pictureExtraClasses: '',
  alt: '',
  width: '',
  height: '',
  figcaptionLabel: '',
  imgUrlMobile: '',
  imgUrlTablet: '',
  imgUrlDesktop: '',
  imgRole: 'img',
  figureRole: 'figure',
}

export default Image