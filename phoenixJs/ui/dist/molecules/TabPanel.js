function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";

const TabPanel = ({
  extraClasses,
  tabContentIndex,
  content,
  ...extraParams
}) => {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `m-tabPanel relative flex w-full min-w-0 flex-col break-words p-4 ${extraClasses}`,
    "data-tab-content-index": tabContentIndex,
    role: "tabpanel"
  }, extraParams), content);
};

TabPanel.propTypes = {
  /** Content of the Tab Panel */
  content: PropTypes.node,

  /** Content Index */
  tabContentIndex: PropTypes.number,

  /** Classes to add to the element */
  extraClasses: PropTypes.string
};
TabPanel.defaultProps = {
  content: '',
  extraClasses: '',
  tabContentIndex: 0
};
export default TabPanel;