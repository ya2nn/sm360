function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Badge from '../../dist/atoms/Badge';

const FieldText = ({
  field,
  customFieldId,
  defaultFieldValue,
  requiredField,
  disabledField,
  fieldName,
  fieldType,
  fieldLabel,
  fieldLength,
  extraClasses,
  labelExtraClasses,
  inputExtraClasses,
  badgeExtraClasses,
  ...extraParams
}) => {
  /* TODO: Faire l'insertion des cles de langue par default (_field_label) */
  let _type = fieldType;
  let _field_name = fieldName;
  let _field_length = fieldLength;
  let _field_label = fieldLabel;

  if (field) {
    _field_name = field.field.name;
    _field_length = field.field.length;
    _field_label = '';
    if (field.field.name.includes('date')) _type = 'text';else if (field.field.name.includes('postalcode')) _type = 'text';else if (field.field.name.includes('phone')) _type = 'tel';else if (field.field.name.includes('email')) _type = 'email';
  }

  const labelRef = useRef(null);
  const inputRef = useRef(null);

  const handlePlaceholderFocus = () => {
    labelRef.current.classList.remove('hidden');
    inputRef.current.placeholder = '';
  };

  const handlePlaceholderBlur = () => {
    if (inputRef.current.value.length > 0) labelRef.current.classList.remove('hidden');else labelRef.current.classList.add('hidden');
    inputRef.current.placeholder = labelRef.current.innerText.trim();
  };

  const handlePhoneNumber = e => {
    if (inputRef.current.type === 'tel') {
      let output = '';
      let input = inputRef.current.value;

      if (e.keyCode !== 8) {
        input = input.replace(/[^0-9]/g, '');
        let area = input.substr(0, 3);
        let pre = input.substr(3, 3);
        let tel = input.substr(6, 4);

        if (area.length !== 0 && area.length < 3) {
          output = `(${area}`;
        } else if (area.length === 3 && pre.length < 3) {
          output = `(${area}) ${pre}`;
        } else if (area.length === 3 && pre.length === 3) {
          output = `(${area}) ${pre}-${tel}`;
        }

        inputRef.current.value = output;
      }
    }
  };

  return /*#__PURE__*/React.createElement("p", {
    className: `a-fieldText relative mb-[5px] ${extraClasses}`
  }, /*#__PURE__*/React.createElement("label", {
    ref: labelRef,
    htmlFor: `${_field_name}${customFieldId ? '-'.concat(customFieldId) : ''}`,
    className: `a-fieldText__label absolute ${!defaultFieldValue ? 'hidden' : ''} left-[15px] top-[5px] flex ${labelExtraClasses}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] leading-none"
  }, _field_label)), /*#__PURE__*/React.createElement("input", _extends({
    ref: inputRef,
    type: _type,
    className: `a-fieldText__input form-input peer mt-0 block h-[50px] w-full border px-[15px] pt-[15px] pb-[10px] focus:border-2 focus:border-success focus:ring-0 focus:invalid:border-error ${inputExtraClasses}`,
    id: `${_field_name}${customFieldId ? '-'.concat(customFieldId) : ''}`,
    name: _field_name,
    value: defaultFieldValue,
    maxLength: _field_length,
    "aria-labelledby": `${_field_name}${customFieldId ? '-'.concat(customFieldId) : ''}-label`,
    placeholder: _field_label,
    "aria-required": requiredField,
    onFocus: handlePlaceholderFocus,
    onBlur: handlePlaceholderBlur,
    onChange: handlePhoneNumber,
    onKeyUp: handlePhoneNumber,
    onPaste: handlePhoneNumber,
    required: requiredField,
    readOnly: !!defaultFieldValue,
    disabled: disabledField
  }, extraParams)), /*#__PURE__*/React.createElement(Badge, {
    label: "!",
    shape: "round",
    size: "small",
    extraClasses: `a-fieldText__badge hidden absolute right-[15px] top-2/4 transform -translate-y-2/4 bg-error text-onError peer-focus:peer-invalid:flex ${badgeExtraClasses}`
  }));
};

FieldText.propTypes = {
  /** If you pass by Form API send the object of your field */
  field: PropTypes.object,

  /** For customize the Id of your field */
  customFieldId: PropTypes.string,

  /** Set a default value */
  defaultFieldValue: PropTypes.string,

  /** Is your field required ? */
  requiredField: PropTypes.bool,

  /** Is your field disabled ? */
  disabledField: PropTypes.bool,

  /** Set a name to your field */
  fieldName: PropTypes.string,

  /** Set a type to your field */
  fieldType: PropTypes.oneOf(['text', 'tel', 'email', 'number', 'postalcode', 'date']),

  /** Add a label text with your field */
  fieldLabel: PropTypes.string,

  /** Set a max length character */
  fieldLength: PropTypes.number,

  /** Add Classes to the Container */
  extraClasses: PropTypes.string,

  /** Add Classes to the label element */
  labelExtraClasses: PropTypes.string,

  /** Add Classes to the input element */
  inputExtraClasses: PropTypes.string,

  /** Add Classes to the badge element */
  badgeExtraClasses: PropTypes.string
};
FieldText.defaultProps = {
  fieldType: 'text',
  requiredField: false,
  disabledField: false,
  extraClasses: '',
  labelExtraClasses: '',
  inputExtraClasses: '',
  badgeExtraClasses: ''
};
export default FieldText;