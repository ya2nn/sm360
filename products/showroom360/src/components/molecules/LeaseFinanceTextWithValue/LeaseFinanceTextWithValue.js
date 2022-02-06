// import PropTypes from 'prop-types'
// import {FormatNumber} from '@sm360/phoenixjs'
//
// const LeaseFinanceTextWithValue = ({
//   title,
//   value,
//   valueFormat,
//   titleExtraClasses,
//   valueExtraClasses,
// }) => {
//   return (
//     <tr className={`m-leaseFinanceTextWithValue`}>
//       <td
//         className={`m-leaseFinanceTextWithValue__text text-right align-baseline ${titleExtraClasses}`}
//       >
//         {title}
//         {':'}
//       </td>
//       <td
//         className={`m-leaseFinanceTextWithValue__value pl-[20px] text-right align-baseline font-custom-bold ${valueExtraClasses}`}
//       >
//         <FormatNumber type={valueFormat} value={value} />
//       </td>
//     </tr>
//   )
// }
//
// LeaseFinanceTextWithValue.propTypes = {
//   title: PropTypes.string.isRequired,
//   value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   valueFormat: PropTypes.oneOf([
//     'kilometer',
//     'speeds',
//     'months',
//     'percent',
//     'price',
//     'priceNoDigits',
//     'number',
//   ]).isRequired,
//   titleExtraClasses: PropTypes.string,
//   valueExtraClasses: PropTypes.string,
// }
//
// LeaseFinanceTextWithValue.defaultProps = {
//   valueFormat: 'price',
//   titleExtraClasses: '',
//   valueExtraClasses: '',
// }
//
// export default LeaseFinanceTextWithValue
