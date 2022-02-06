import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import React from "react";

const Lazyloader = ({
  className,
  classNamePrefix,
  children,
  debounce,
  height,
  offset,
  once,
  overflow,
  placeholder,
  resize,
  scroll,
  scrollContainer,
  style,
  throttle,
  unmountIfInvisible,
}) => {
  return (
    <LazyLoad
      scrollContainer={scrollContainer}
      height={height}
      once={once}
      offset={offset}
      scroll={scroll}
      resize={resize}
      overflow={overflow}
      placeholder={placeholder}
      unmountIfInvisible={unmountIfInvisible}
      debounce={debounce}
      throttle={throttle}
      classNamePrefix={classNamePrefix}
      className={className}
      style={style}
    >
      {children}
    </LazyLoad>
  )
}

Lazyloader.propTypes = {
  /** Only one child is allowed to be passed. */
  children: PropTypes.node,
  /** Set a class name to the parent element */
  className: PropTypes.string,
  /** While rendering, Lazyload will add some elements to the component tree in addition to the wrapped component children.
   The `classNamePrefix` prop allows the user to supply their own custom class prefix to help: # Avoid class conflicts on an implementing app # Allow easier custom styling
   These being: # A wrapper div, which is present at all times (default ) */
  classNamePrefix: PropTypes.string,
  /** Once the lazy loaded component is loaded, do not detect scroll/resize event anymore. Useful for images or simple components. */
  once: PropTypes.bool,
  /** In the first round of render, LazyLoad will render a placeholder for your component if no placeholder is provided and measure if this component is visible.
   * Set `height` properly will make LazyLoad calculate more precisely. The value can be number or string like `'100%'`.
   * You can also use css to set the height of the placeholder instead of using `height`. */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Say if you want to preload a component even if it's 100px below the viewport (user have to scroll 100px more to see this component), you can set `offset` props to `100`. On the other hand, if you want to delay loading a component even if it's top edge has already appeared at viewport, set `offset` to negative number.
   * Library supports horizontal lazy load out of the box. So when you provide this prop with number like `100` it will automatically set left edge offset to `100` and top edge to `100`;
   * If you provide this prop with array like `[100, 200]`, it will set left edge offset to `100` and top offset to `200`. */
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** If lazy loading components inside a overflow container, set this to true. Also make sure a `position` property other than `static` has been set to your overflow container. */
  overflow: PropTypes.bool,
  /** Respond to `resize` event, set it to `true` if you do need LazyLoad listen resize event.
   * NOTICE If you tend to support legacy IE, set this props carefully, refer to this question for further reading - https://stackoverflow.com/questions/1852751/window-resize-event-firing-in-internet-explorer */
  resize: PropTypes.bool,
  /** Listen and react to scroll event. */
  scroll: PropTypes.bool,
  /** Lazyload will try to use passive event by default to improve scroll/resize event handler's performance. If you prefer control this behaviour by yourself, you can set `debounce` or `throttle` to enable built in delay feature.
   If you provide a number, that will be how many `ms` to wait; if you provide `true`, the wait time defaults to `300ms`.
   NOTICE Set `debounce` / `throttle` to all lazy loaded components unanimously, if you don't, the first occurrence is respected. */
  throttle: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /** Lazyload will try to use passive event by default to improve scroll/resize event handler's performance. If you prefer control this behaviour by yourself, you can set `debounce` or `throttle` to enable built in delay feature.
   If you provide a number, that will be how many `ms` to wait; if you provide `true`, the wait time defaults to `300ms`.
   NOTICE Set `debounce` / `throttle` to all lazy loaded components unanimously, if you don't, the first occurrence is respected. */
  debounce: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /** Specify a placeholder for your lazy loaded component.
   * If you provide your own placeholder, do remember add appropriate `height` or `minHeight` to your placeholder element for better lazyload performance. */
  placeholder: PropTypes.node,
  /** Pass a query selector string or DOM node. LazyLoad will attach to the window object's scroll events if no container is passed. */
  scrollContainer: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The lazy loaded component is unmounted and replaced by the placeholder when it is no longer visible in the viewport. */
  unmountIfInvisible: PropTypes.bool,
  /** Similar to classNamePrefix, the `style` prop allows users to pass custom CSS styles to wrapper div. */
  style: PropTypes.object,
}

Lazyloader.defaultProps = {
  className: '',
  classNamePrefix: 'lazyload',
  once: false,
  offset: 0,
  overflow: false,
  resize: false,
  scroll: true,
  unmountIfInvisible: false,
}

export default Lazyloader