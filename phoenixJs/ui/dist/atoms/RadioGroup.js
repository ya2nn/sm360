function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { Children } from 'react';
import RadioItem from '../../dist/atoms/RadioItem';

const RadioGroup = ({
  radioGroupExtraClasses,
  children,
  itemExtraClasses,
  itemInputExtraClasses,
  itemLabelExtraClasses,
  radioGroupName,
  position,
  itemsSpacingExtraClasses,
  ...extraParams
}) => {
  const flexDirection = position === 'vertical' ? 'flex-col' : '';
  return /*#__PURE__*/React.createElement("div", {
    className: `a-radioGroup flex ${flexDirection} ${itemsSpacingExtraClasses} ${radioGroupExtraClasses}`
  }, Children.map(children, (child, index) => /*#__PURE__*/React.createElement(RadioItem, _extends({
    key: index,
    radioGroupName: radioGroupName,
    radioName: child.props.radioName,
    radioValue: child.props.radioValue,
    radioLabel: child.props.radioLabel,
    checked: child.props.checked,
    disabled: child.props.disabled
  }, extraParams, {
    extraClasses: child.props.extraClasses ? child.props.extraClasses : itemExtraClasses,
    inputExtraClasses: child.props.inputExtraClasses ? child.props.inputExtraClasses : itemInputExtraClasses,
    labelExtraClasses: child.props.labelExtraClasses ? child.props.labelExtraClasses : itemLabelExtraClasses
  }, extraParams))));
};

RadioGroup.propTypes = {
  /** Group Name of your radio button list */
  radioGroupName: PropTypes.string.isRequired,

  /** Add Classes to the group element */
  radioGroupExtraClasses: PropTypes.string,

  /** `Required` - Has to have a children  */
  children: PropTypes.arrayOf(RadioItem).isRequired,

  /** Add Classes to all items - container element */
  itemExtraClasses: PropTypes.string,

  /** Add Classes to all items - input element */
  itemInputExtraClasses: PropTypes.string,

  /** Add Classes to all items - label element */
  itemLabelExtraClasses: PropTypes.string,

  /** Items direction */
  position: PropTypes.oneOf(['horizontal', 'vertical']),

  /** Items spacing */
  itemsSpacingExtraClasses: PropTypes.string
};
RadioGroup.defaultProps = {
  radioGroupExtraClasses: '',
  itemExtraClasses: '',
  itemInputExtraClasses: '',
  itemLabelExtraClasses: '',
  position: 'vertical',
  itemsSpacingExtraClasses: 'space-y-[20px]'
};
export default RadioGroup;