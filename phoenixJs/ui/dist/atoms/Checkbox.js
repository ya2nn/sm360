import PropTypes from 'prop-types';
import React from "react";

const Checkbox = ({
  fieldLabel,
  checked,
  disabled,
  required,
  customFieldId,
  fieldName,
  fieldValue,
  extraClasses,
  labelExtraClasses,
  fieldExtraClasses,
  formId
}) => {
  const id = `form-${formId}-${fieldValue}-checkbox ${customFieldId ? '-'.concat(customFieldId) : ''}`;
  return /*#__PURE__*/React.createElement("p", {
    className: `a-checkbox relative mb-[5px] ${extraClasses}`
  }, /*#__PURE__*/React.createElement("label", {
    className: `inline-flex cursor-pointer items-center ${labelExtraClasses}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: `a-checkbox__field form-checkbox border-primary-grey text-primary-black border-primary-grey h-[20px] w-[20px] cursor-pointer border ${fieldExtraClasses}`,
    id: id,
    name: fieldName,
    value: fieldValue,
    defaultChecked: checked,
    disabled: disabled,
    required: required
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-2"
  }, fieldLabel)));
};

Checkbox.propTypes = {
  /** `Required`- Field Name  */
  fieldName: PropTypes.string.isRequired,

  /** `Required`- Field Value  */
  fieldValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /** Label */
  fieldLabel: PropTypes.string,

  /** Is field checked ? */
  checked: PropTypes.bool,

  /** Is field disabled ? */
  disabled: PropTypes.bool,

  /**  Is Field required ? */
  required: PropTypes.bool,

  /** For customize the Id of your field */
  customFieldId: PropTypes.string,

  /** If associated to specific form Id */
  formId: PropTypes.string,

  /** Add Classes to the Container */
  extraClasses: PropTypes.string,

  /** Add Classes to the label element */
  labelExtraClasses: PropTypes.string,

  /** Add Classes to the input element */
  fieldExtraClasses: PropTypes.string
};
Checkbox.defaultProps = {
  formId: '',
  extraClasses: '',
  labelExtraClasses: '',
  fieldExtraClasses: '',
  checked: false,
  disabled: false,
  required: false
};
export default Checkbox;