function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React from "react";
import Icon from '../../dist/atoms/Icon';

const Alert = ({
  type,
  children,
  iconSymbol,
  extraClasses,
  iconExtraClasses,
  messageExtraClasses,
  position,
  ...extraParams
}) => {
  let typeColorClasses;

  switch (type) {
    case 'success':
      typeColorClasses = 'bg-green-50 border-green-700 text-green-700';
      break;

    case 'warning':
      typeColorClasses = 'bg-yellow-50 border-yellow-900 text-yellow-900';
      break;

    case 'danger':
      typeColorClasses = 'bg-red-50 border-red-900 text-red-900';
      break;

    case 'info':
      typeColorClasses = 'bg-blue-50 border-blue-900 text-blue-900';
      break;

    case 'neutral':
      typeColorClasses = 'bg-gray-50 border-gray-800 text-gray-800';
      break;

    case 'custom':
      typeColorClasses = '';
      break;
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: `m-alert flex rounded-lg border-2 p-4 ${position === 'vertical' ? 'flex-col' : ''} ${typeColorClasses} ${extraClasses}`
  }, extraParams, {
    role: "alert"
  }), iconSymbol && /*#__PURE__*/React.createElement(Icon, {
    symbolId: iconSymbol,
    extraClasses: `m-alert__icon ${position === 'vertical' ? 'mb-5' : 'mr-5'} ${iconExtraClasses}`
  }), /*#__PURE__*/React.createElement("div", {
    className: `m-alert__message ${messageExtraClasses}`
  }, children));
};

Alert.propTypes = {
  /** `Required` Content of the Alert */
  children: PropTypes.node.isRequired,

  /** Type of the Alert */
  type: PropTypes.oneOf(['success', 'danger', 'warning', 'info', 'neutral', 'custom']),

  /** Icon of the Alert if wanted */
  iconSymbol: PropTypes.string,

  /** Alert Direction */
  position: PropTypes.oneOf(['horizontal', 'vertical']),

  /** Alert Container Extra Class */
  extraClasses: PropTypes.string,

  /** Alert Container Extra Class */
  iconExtraClasses: PropTypes.string,

  /** Alert Container Extra Class */
  messageExtraClasses: PropTypes.string
};
Alert.defaultProps = {
  position: 'horizontal',
  extraClasses: '',
  iconExtraClasses: '',
  messageExtraClasses: ''
};
export default Alert;