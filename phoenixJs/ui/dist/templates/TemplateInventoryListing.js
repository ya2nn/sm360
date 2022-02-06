import PropTypes from 'prop-types';
import React from "react";
import useDeviceType from '../../dist/hooks/useDeviceType';

const TemplateInventoryListing = ({
  topExtraClasses,
  sidebarExtraClasses,
  mainContentExtraClasses,
  topContent,
  sidebarContent,
  mainContent
}) => {
  const deviceType = useDeviceType();
  return /*#__PURE__*/React.createElement("main", {
    className: "t-inventoryListing"
  }, topContent && /*#__PURE__*/React.createElement("div", {
    className: `t-inventoryListing__top bg-primary ${topExtraClasses}`
  }, topContent), /*#__PURE__*/React.createElement("div", {
    className: `t-inventoryListing__container grid grid-flow-col grid-cols-1 lg:grid-cols-12`
  }, deviceType === 'desktop' && /*#__PURE__*/React.createElement("section", {
    className: `t-inventoryListing__sidebar h-full min-h-screen bg-gray-200 lg:col-span-4 xl:col-span-3 ${sidebarExtraClasses}`
  }, sidebarContent), /*#__PURE__*/React.createElement("section", {
    className: `t-inventoryListing__mainContent bg-white lg:col-span-8 xl:col-span-9 ${mainContentExtraClasses}`
  }, mainContent)));
};

TemplateInventoryListing.propTypes = {
  /** Section Top Extra Classes */
  topExtraClasses: PropTypes.string,

  /** Section Sidebar Extra Classes */
  sidebarExtraClasses: PropTypes.string,

  /** Section mainContent Extra Classes */
  mainContentExtraClasses: PropTypes.string,

  /** Section Top Components */
  topContent: PropTypes.element,

  /** Section Sidebar Components */
  sidebarContent: PropTypes.element,

  /** Section mainContent Components */
  mainContent: PropTypes.element
};
TemplateInventoryListing.defaultProps = {
  topExtraClasses: '',
  sidebarExtraClasses: '',
  mainContentExtraClasses: ''
};
export default TemplateInventoryListing;