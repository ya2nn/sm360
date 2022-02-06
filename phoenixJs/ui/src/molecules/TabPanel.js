import PropTypes from 'prop-types'
import React from "react";

const TabPanel = ({
  extraClasses,
  tabContentIndex,
  content,
  ...extraParams
}) => {
  return (
    <div
      className={`m-tabPanel relative flex w-full min-w-0 flex-col break-words p-4 ${extraClasses}`}
      data-tab-content-index={tabContentIndex}
      role='tabpanel'
      {...extraParams}
    >
      {content}
    </div>
  )
}

TabPanel.propTypes = {
  /** Content of the Tab Panel */
  content: PropTypes.node,
  /** Content Index */
  tabContentIndex: PropTypes.number,
  /** Classes to add to the element */
  extraClasses: PropTypes.string,
}

TabPanel.defaultProps = {
  content: '',
  extraClasses: '',
  tabContentIndex: 0,
}

export default TabPanel