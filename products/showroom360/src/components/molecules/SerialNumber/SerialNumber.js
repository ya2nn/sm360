/* TODO: Revoir le texte pour des cle de langue (VIN vs NIV) */
/* TODO: Creer et appeler une variable de couleur pour cette element */
import PropTypes from 'prop-types'

const SerialNumber = ({ serialNumber }) => {
  return (
    <span className='m-serialNumber text-[11px] md:text-[13px]'>
      NIV {serialNumber}
    </span>
  )
}

SerialNumber.propTypes = {
  /** Serial Number (VIN) */
  serialNumber: PropTypes.string.isRequired,
}

SerialNumber.defaultProps = {}

export default SerialNumber
