import { Modal as M } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Modal',
  component: M,
}

const openModal = (modalId) => {
  const modal = document.querySelector(`[data-modal-id='${modalId}']`)
  modal.classList.remove('hidden')
  modal.setAttribute('aria-hidden', false)
  document.body.style.overflow = 'hidden'
}

const Template = (args) => (
  <>
    <button
      className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'
      data-modal-trigger-id={'terms-of-use'}
      onClick={() => openModal('terms-of-use')}
    >
      Open Modal toto
    </button>
    <M {...args}>
      <div className='grid-col wysiwyg' tabIndex={0}>
        <h2>Acceptance of the website terms and conditions of use&nbsp;</h2>
        <p>
          Thank you for visiting
          <span>
            &nbsp;<strong>www.thornhillaudi.ca</strong>
          </span>
          &nbsp;(the “<strong>Website</strong>”), provided to you by
          <span>
            &nbsp;<strong>Audi Thornhill</strong>
          </span>
          <span>&nbsp;</span>(the “<strong>Dealership</strong>”) and operated by
          Solutions Medias 360 Inc. (“<strong>SM 360</strong>”) (the Dealership
          and SM360 are referred as “<strong>we</strong>”). By accessing or
          using the Website, you (“<strong>you</strong>”) agree to be bound and
          to comply with the terms and conditions set forth below (the “
          <strong>Terms</strong>”) and the Dealership Privacy Policy, found at
          <span>
            &nbsp;
            <strong>www.thornhillaudi.ca</strong>
          </span>
          <strong>/en/privacy-policy</strong>
        </p>
        <p>
          The information and material on this Website, and the Website, may be
          changed, withdrawn or terminated at any time in our sole discretion
          without notice. We will not be liable if, for any reason, all or any
          part of the Website is restricted to users or unavailable at any time
          or for any period.
        </p>
        <h3>
          <strong>
            Your use of the website and account set up and security
          </strong>
        </h3>
        <p>
          The security of your personal information is very important to the
          Dealership. Unfortunately, the transmission of information via the
          internet is not completely secure. Any transmission of Personal
          Information is at your own risk.
        </p>
        <h3>
          <strong>Intellectual property rights and ownership</strong>
        </h3>
        <p>
          You are not permitted to modify copies of any materials from this
          Website nor delete or alter any copyright, trademark, or other
          proprietary rights notices from copies of materials from this Website.
        </p>
      </div>
    </M>
  </>
)

export const Modal = Template.bind({})
Modal.args = {
  modalId: 'terms-of-use',
  containerExtraClasses: 'bg-white',
}
