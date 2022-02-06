// /* TODO: Revoir les textes pour des cle de langue et voir egalement pour la couleur de prix */
// import PropTypes from 'prop-types'
// import {Typography, FormatNumber} from '@sm360/phoenixjs'
//
// const PaymentFrequency = ({ price, frequency: frequencyNumber }) => {
//   let frequency
//
//   switch (frequencyNumber) {
//     case '12':
//       frequency = 'week'
//       break
//     case '24':
//       frequency = 'bi-weekly'
//       break
//     case '26':
//       frequency = 'semi-monthly'
//       break
//     case '52':
//       frequency = 'monthly'
//       break
//   }
//
//   return (
//     <div className={`m-paymentFrequency`}>
//       <Typography
//         tag='span'
//         extraClasses={`m-paymentFrequency__price font-custom-bold text-[24px] leading-[26px]`}
//       >
//         <FormatNumber value={price} type={'price'} />*
//       </Typography>
//       <Typography
//         tag='span'
//         extraClasses={`m-paymentFrequency__frequency text-[13px] leading-[15px]`}
//       >
//         /{frequency}
//       </Typography>
//     </div>
//   )
// }
//
// PaymentFrequency.propTypes = {
//   /** Price by frequency */
//   price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   /** Frequency of payments */
//   frequency: PropTypes.oneOf(['12', '24', '26', '52']).isRequired,
// }
//
// PaymentFrequency.defaultProps = {}
//
// export default PaymentFrequency
