function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import PropTypes from 'prop-types';
import React, { useCallback, useRef, useEffect } from 'react';
import Icon from '../../dist/atoms/Icon';
export const openModal = modalId => {
  const modal = document.querySelector(`[data-modal-id='${modalId}']`);
  modal.classList.remove('hidden');
  modal.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
};

const Modal = ({
  modalId,
  children,
  extraClasses,
  containerExtraClasses,
  closeExtraClasses,
  contentExtraClasses,
  color,
  closeButtonColor,
  ...extraParams
}) => {
  const modalRef = useRef(null);
  const modalContainerRef = useRef(null);

  const closeModal = () => {
    modalRef.current?.classList.add('hidden');
    modalRef.current?.setAttribute('aria-hidden', true);
    document.body.style.overflow = 'auto';
  };

  const handleEsc = useCallback(e => {
    const code = e.keyCode || e.which;

    if (code === 27) {
      closeModal();
    }
  }, []);
  const handleOutsideClick = useCallback(e => {
    !modalContainerRef.current?.contains(e.target) && closeModal();
  }, []);
  useEffect(() => {
    document.addEventListener('keyup', handleEsc);
    modalRef.current?.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keyup', handleEsc);
      modalRef.current?.removeEventListener('click', handleOutsideClick);
    };
  }, [handleEsc, handleOutsideClick]);
  let setColor;

  switch (color) {
    case 'primary':
      setColor = 'bg-surfacePrimary text-onSurfacePrimary';
      break;

    case 'secondary':
      setColor = 'bg-surfaceSecondary text-onSurfaceSecondary';
      break;
  }

  let setCloseButtonColor;

  switch (closeButtonColor) {
    case 'primary':
      setCloseButtonColor = 'text-primary';
      break;

    case 'secondary':
      setCloseButtonColor = 'text-secondary';
      break;
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    className: `m-modal fixed inset-0 z-[60] hidden ${extraClasses}`,
    ref: modalRef,
    "data-modal-id": modalId
  }, extraParams), /*#__PURE__*/React.createElement("div", {
    className: `m-modal__background flex h-screen w-screen items-center bg-gray-900 bg-opacity-95`,
    "aria-modal": "true",
    role: "dialog"
  }, /*#__PURE__*/React.createElement("div", {
    ref: modalContainerRef,
    className: `m-modal__surface container relative h-full w-full px-[20px] py-[50px] md:mx-3 md:mx-auto md:max-h-96 md:max-w-2xl ${setColor} ${containerExtraClasses}`
  }, /*#__PURE__*/React.createElement("button", {
    className: `m-modal_closeBtn absolute top-[20px] right-[20px] flex h-[20px] w-[20px] items-center justify-center rounded-full border text-2xl leading-3 ${setCloseButtonColor}`,
    onClick: closeModal
  }, /*#__PURE__*/React.createElement(Icon, {
    symbolId: 'close',
    extraClasses: `w-[10px] h-[10px] ${closeExtraClasses}`
  })), /*#__PURE__*/React.createElement("div", {
    className: `m-modal__content max-h-full overflow-y-auto scrollbar-hide ${contentExtraClasses}`
  }, children))));
};

Modal.propTypes = {
  modalId: PropTypes.string.isRequired,
  children: PropTypes.node,
  extraClasses: PropTypes.string,
  containerExtraClasses: PropTypes.string,
  closeExtraClasses: PropTypes.string,
  contentExtraClasses: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  closeButtonColor: PropTypes.oneOf(['primary', 'secondary'])
};
Modal.defaultProps = {
  extraClasses: '',
  containerExtraClasses: '',
  closeExtraClasses: '',
  contentExtraClasses: '',
  color: 'primary',
  closeButtonColor: 'primary'
};
export default Modal;