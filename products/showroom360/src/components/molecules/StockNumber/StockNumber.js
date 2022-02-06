/* TODO: Creer et appeler une variable de couleur pour cette element */
import PropTypes from 'prop-types'

const StockNumber = ({ stockNumber, extraClasses }) => {
  return (
    <p className={`m-stockNumber text-[11px] md:text-[13px] ${extraClasses}`}>
      Stock #{stockNumber}
    </p>
  )
}

StockNumber.propTypes = {
  /** Stock Number */
  stockNumber: PropTypes.string,
  /** Extra classes */
  extraClasses: PropTypes.string,
}

StockNumber.defaultProps = {
  stockNumber: '',
}

export default StockNumber
