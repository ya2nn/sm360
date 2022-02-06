import PropTypes from 'prop-types'
import ReactPlayer from 'react-player/lazy'
import React from "react";

const VideoPlayer = ({
  url: initialUrl,
  youtubeId,
  aspectRatio,
  playing,
  loop,
  controls,
  light,
  volume,
  muted,
  playbackRate,
  width,
  height,
  style,
  progressInterval,
  playsinline,
  pip,
  stopOnUnmount,
  fallback,
  wrapper,
  wrapperExtraClasses,
  playIcon,
  previewTabIndex,
  config,
  onReady,
  onStart,
  onPlay,
  onProgress,
  onDuration,
  onPause,
  onBuffer,
  onBufferEnd,
  onSeek,
  onEnded,
  onError,
  onClickPreview,
  onEnablePIP,
  onDisablePIP,
}) => {
  let ratioClass

  const youtubeUrl = 'https://www.youtube.com'
  const url = youtubeId ? `${youtubeUrl}/embed/${youtubeId}` : initialUrl

  switch (aspectRatio) {
    case 'video':
      ratioClass = 'aspect-video'
      break
    case '4/3':
      ratioClass = 'aspect-[4/3]'
      break
    case 'square':
      ratioClass = 'aspect-square'
      break
    case 'auto':
      ratioClass = 'aspect-auto'
      break
  }

  return (
    <ReactPlayer
      className={`react-player w-full ${ratioClass} ${wrapperExtraClasses}`}
      url={url}
      playing={playing}
      loop={loop}
      controls={controls}
      light={light}
      volume={volume}
      muted={muted}
      playbackRate={playbackRate}
      width={width}
      height={height}
      style={style}
      progressInterval={progressInterval}
      playsinline={playsinline}
      pip={pip}
      stopOnUnmount={stopOnUnmount}
      fallback={fallback}
      wrapper={wrapper}
      playIcon={playIcon}
      previewTabIndex={previewTabIndex}
      config={{
        youtube: {
          playerVars: {
            origin: youtubeUrl,
          },
        },
        ...config,
      }}
      onReady={onReady}
      onStart={onStart}
      onPlay={onPlay}
      onProgress={onProgress}
      onDuration={onDuration}
      onPause={onPause}
      onBuffer={onBuffer}
      onBufferEnd={onBufferEnd}
      onSeek={onSeek}
      onEnded={onEnded}
      onError={onError}
      onClickPreview={onClickPreview}
      onEnablePIP={onEnablePIP}
      onDisablePIP={onDisablePIP}
    />
  )
}

VideoPlayer.propTypes = {
  /** The url of a video or song to play (Can be an `array` or `MediaStream` object) */
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  /** The Youtube video ID */
  youtubeId: PropTypes.string,
  /** Set the aspect ratio of the video player */
  aspectRatio: PropTypes.oneOf(['video', '4/3', 'square', 'auto']),
  /** Set to `true` or `false` to pause or play the media */
  playing: PropTypes.bool,
  /** Set to `true` or `false` to loop the media */
  loop: PropTypes.bool,
  /** Set to `true` or `false` to display native player controls (For Vimeo videos, hiding controls must be enabled by the video owner.) */
  controls: PropTypes.bool,
  /** Set to `true` to show just the video thumbnail, which loads the full player on click (Pass in an image URL to override the preview image) */
  light: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Set the volume of the player, between `0` and `1` (`null` uses default volume on all players) */
  volume: PropTypes.number,
  /** Mutes the player (Only works if `volume` is set) */
  muted: PropTypes.bool,
  /** Set the playback rate of the player (Only supported by YouTube, Wistia, and file paths) */
  playbackRate: PropTypes.number,
  /** Set the width of the player */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Set the height of the player */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Add inline styles to the root element */
  style: PropTypes.object,
  /** The time between `onProgress` callbacks, in milliseconds */
  progressInterval: PropTypes.number,
  /** Applies the `playsinline` attribute where supported */
  playsinline: PropTypes.bool,
  /** Set to `true` or `false` to enable or disable picture-in-picture mode (Only available when playing file URLs in certain browsers) */
  pip: PropTypes.bool,
  /** If you are using pip you may want to use `stopOnUnmount={false}` to continue playing in picture-in-picture mode even after ReactPlayer unmounts */
  stopOnUnmount: PropTypes.bool,
  /** Element or component to use as a fallback if you are using lazy loading */
  fallback: PropTypes.node,
  /** Element or component to use as the container element */
  wrapper: PropTypes.any,
  /** Add Class to the container element */
  wrapperExtraClasses: PropTypes.string,
  /** Element or component to use as the play icon in light mode */
  playIcon: PropTypes.node,
  /** Set the tab index to be used on light mode */
  previewTabIndex: PropTypes.number,
  /** Override options for the various players, see config prop */
  config: PropTypes.object,
  /** Called when media is loaded and ready to play. If `playing` is set to `true`, media will play immediately */
  onReady: PropTypes.func,
  /** Called when media starts playing */
  onStart: PropTypes.func,
  /** Called when media starts or resumes playing after pausing or buffering */
  onPlay: PropTypes.func,
  /** Callback containing `played` and `loaded` progress as a fraction, and `playedSeconds` and `loadedSeconds` in seconds (eg `{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }`) */
  onProgress: PropTypes.func,
  /** Callback containing duration of the media, in seconds */
  onDuration: PropTypes.func,
  /** Called when media is paused */
  onPause: PropTypes.func,
  /** Called when media starts buffering */
  onBuffer: PropTypes.func,
  /** Called when media has finished buffering (Works for files, YouTube and Facebook) */
  onBufferEnd: PropTypes.func,
  /** Called when media seeks with `seconds` parameter */
  onSeek: PropTypes.func,
  /** Called when media finishes playing (Does not fire when `loop` is set to `true`) */
  onEnded: PropTypes.func,
  /** Called when an error occurs whilst attempting to play media */
  onError: PropTypes.func,
  /** Called when user clicks the `light` mode preview */
  onClickPreview: PropTypes.func,
  /** Called when picture-in-picture mode is enabled */
  onEnablePIP: PropTypes.func,
  /** Called when picture-in-picture mode is disabled */
  onDisablePIP: PropTypes.func,
}

VideoPlayer.defaultProps = {
  url: '',
  aspectRatio: 'video',
  wrapperExtraClasses: '',
  playing: false,
  loop: false,
  controls: false,
  light: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '100%',
  height: '100%',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  fallback: null,
  wrapper: 'div',
  playIcon: '',
  previewTabIndex: 0,
}

export default VideoPlayer