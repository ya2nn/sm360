function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TabLink from '../../dist/molecules/TabLink';
import TabPanel from '../../dist/molecules/TabPanel';

const Tabs = ({
  tabItems,
  tabActive,
  extraClasses,
  tabLinkSectionExtraClasses,
  tabLinkElementExtraClasses,
  tabLinkElementActiveExtraClasses,
  tabPanelElementExtraClasses,
  ...extraParams
}) => {
  const [active, setActive] = useState(tabActive);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `m-tabs relative flex w-full flex-col items-center justify-center ${extraClasses}`
  }, extraParams), /*#__PURE__*/React.createElement("nav", {
    className: `m-tabs__tabLinks flex w-full justify-start ${tabLinkSectionExtraClasses}`,
    role: "tablist"
  }, tabItems.map(({
    title
  }, index) => /*#__PURE__*/React.createElement(TabLink, {
    key: index,
    linkIndex: index,
    tabIndex: 0,
    title: title,
    extraClasses: tabLinkElementExtraClasses,
    extraActiveClasses: tabLinkElementActiveExtraClasses,
    handleClick: () => setActive(index),
    handleKeyPress: () => setActive(index),
    isActive: active === index
  }))), tabItems.map(({
    content
  }, index) => {
    return active === index && /*#__PURE__*/React.createElement(TabPanel, {
      key: index,
      tabContentIndex: index,
      content: content,
      extraClasses: tabPanelElementExtraClasses
    });
  }));
};

Tabs.propTypes = {
  /** `Required` - Add navigation items like a Object list in an array with 2 params `title` and `content` */
  tabItems: PropTypes.arrayOf(PropTypes.shape({
    /** Title of this tab */
    title: PropTypes.node.isRequired,

    /** Content of this tab */
    content: PropTypes.node.isRequired
  })).isRequired,

  /** Set tab active */
  tabActive: PropTypes.number,

  /** Classes to add to the parent element */
  extraClasses: PropTypes.string,

  /** Classes to add to the tab section */
  tabLinkSectionExtraClasses: PropTypes.string,

  /** Classes to add to the tab link element */
  tabLinkElementExtraClasses: PropTypes.string,

  /** Classes to add to the tab link active element */
  tabLinkElementActiveExtraClasses: PropTypes.string,

  /** Classes to add to the panel element */
  tabPanelElementExtraClasses: PropTypes.string
};
Tabs.defaultProps = {
  tabActive: 0,
  extraClasses: '',
  tabLinkSectionExtraClasses: '',
  tabLinkElementExtraClasses: '',
  tabLinkElementActiveExtraClasses: '',
  tabPanelElementExtraClasses: ''
};
export default Tabs;