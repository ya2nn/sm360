function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef, useCallback, Children } from 'react';
import Icon from '../../dist/atoms/Icon';
import DropdownItem from '../../dist/molecules/DropdownItem';

const Dropdown = ({
  controlLabel,
  controlValue,
  controlId,
  children,
  icon,
  align,
  onClick,
  containerExtraClasses,
  controlExtraClasses,
  controlIconExtraClasses,
  listExtraClasses,
  itemExtraClasses,
  ...extraParams
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef(null);
  const iconRotate = isOpen ? 'rotate-180' : '';
  let alignPopperClasses;

  switch (align) {
    case 'left-bottom':
      alignPopperClasses = 'mt-[-1px] top-full';
      break;

    case 'left-top':
      alignPopperClasses = 'mb-[-1px] bottom-full';
      break;

    case 'right-bottom':
      alignPopperClasses = 'right-0 top-full mt-[-1px]';
      break;

    case 'right-top':
      alignPopperClasses = 'right-0 mb-[-1px] bottom-full';
      break;
  }

  const escHandle = useCallback(e => {
    const code = e.keyCode || e.which;

    if (code === 27) {
      setIsOpen(false);
    }
  }, []);
  const handleOutsideClick = useCallback(e => {
    // If the active element exists and is clicked outside this element
    !bodyRef.current?.contains(e.target) && setIsOpen(!isOpen);
  }, [isOpen]);
  useEffect(() => {
    document.addEventListener('keyup', escHandle);
    isOpen && document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keyup', escHandle);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, escHandle, handleOutsideClick]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `m-dropdown relative flex w-full ${containerExtraClasses}`
  }, extraParams), /*#__PURE__*/React.createElement("button", {
    id: controlId,
    className: `m-dropdown__control w-full cursor-pointer px-[10px] py-[5px] ${controlExtraClasses}`,
    onClick: () => setIsOpen(!isOpen),
    tabIndex: "0",
    "aria-controls": `${controlId}-body`,
    "aria-expanded": isOpen
  }, controlLabel && /*#__PURE__*/React.createElement("p", {
    className: "m-dropdown__label text-left text-[11px] leading-none"
  }, controlLabel), /*#__PURE__*/React.createElement("div", {
    className: "m-dropdown__value flex items-center justify-between "
  }, controlValue, /*#__PURE__*/React.createElement(Icon, {
    symbolId: icon,
    extraClasses: `m-dropdown__icon ml-[15px] ${iconRotate} transition-transform ${controlIconExtraClasses}`
  }))), isOpen && /*#__PURE__*/React.createElement("ul", {
    ref: bodyRef,
    "aria-labelledby": controlId,
    id: `${controlId}-body`,
    tabIndex: -1,
    role: 'region',
    className: `m-dropdown__list absolute z-10 max-h-[150px] w-full overflow-auto bg-[#f2f2f2] ${alignPopperClasses} ${listExtraClasses}`
  }, Children.map(children, (child, i) => {
    return /*#__PURE__*/React.createElement(DropdownItem, {
      key: i,
      onClick: child.props.onClick ? child.props.onClick : onClick,
      extraClasses: child.props.extraClasses ? child.props.extraClasses : itemExtraClasses
    }, child.props.children);
  })));
};

Dropdown.propTypes = {
  /** `Required` - Children */
  children: PropTypes.node.isRequired,

  /** Dropdown Control Label */
  controlLabel: PropTypes.string,

  /** `Required` - Dropdown Control Value */
  controlValue: PropTypes.string.isRequired,

  /** `Required` - Dropdown control Id */
  controlId: PropTypes.string.isRequired,

  /** Dropdown on Key Press function */
  onKeyPress: PropTypes.func,

  /** Dropdown Label */
  icon: PropTypes.string,

  /** Dropdown container extra classes */
  containerExtraClasses: PropTypes.string,

  /** Dropdown Control  extra classes */
  controlExtraClasses: PropTypes.string,

  /** Dropdown Control Icon extra classes */
  controlIconExtraClasses: PropTypes.string,

  /** OnClick handler for DropdownItem */
  onClick: PropTypes.func,

  /** Dropdown Body extra classes */
  listExtraClasses: PropTypes.string,
  itemExtraClasses: PropTypes.string,

  /** Position of the Dropdown's dropbox, relative to its trigger */
  align: PropTypes.oneOf(['left-bottom', 'left-top', 'right-bottom', 'right-top'])
};
Dropdown.defaultProps = {
  align: 'left-bottom',
  containerExtraClasses: '',
  controlExtraClasses: '',
  controlIconExtraClasses: '',
  itemExtraClasses: '',
  listExtraClasses: ''
};
export default Dropdown;