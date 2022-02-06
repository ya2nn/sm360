// import PropTypes from 'prop-types'
// import {Icon, Typography, FormatNumber} from '@sm360/phoenixjs'
//
// const ConsumptionItem = ({ type, value, iconSymbol, consumptionUnit }) => {
//   let title
//   let unit
//
//   switch (consumptionUnit.toLowerCase()) {
//     case 'l_km':
//       unit = 'L/100Km'
//       break
//     case 'kw_h':
//       unit = 'KWh'
//       break
//     case 'miles_gal':
//       unit = 'mpg'
//       break
//   }
//
//   /* TODO: à valider la valeur de title selon la langue */
//   switch (type.toLowerCase()) {
//     case 'electric':
//       title = 'Electric'
//       break
//     case 'in_city':
//       title = 'City'
//       break
//     case 'on_highway':
//       title = 'Highway'
//       break
//   }
//
//   return (
//     <div className={`m-consumptionItem flex items-end gap-3`}>
//       <Icon
//         symbolId={iconSymbol}
//         extraClasses={`m-consumptionItem__icon w-[50px] h-[50px]`}
//       />
//
//       <div className={`m-consumptionItem__value flex flex-col justify-between`}>
//         <Typography
//           tag='p'
//           extraClasses={`m-consumptionItem__title font-custom-bold text-[16px] lg:text-[18px] leading-[20px]`}
//         >
//           {title}
//         </Typography>
//         <Typography
//           tag='p'
//           extraClasses={`m-consumptionItem__value whitespace-nowrap`}
//         >
//           <FormatNumber type='number' value={value} /> {unit}
//         </Typography>
//       </div>
//     </div>
//   )
// }
//
// ConsumptionItem.propTypes = {
//   /** `Required` - Type */
//   type: PropTypes.oneOf(['electric', 'in_city', 'on_highway']).isRequired,
//   /** `Required` - Value */
//   value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//   /** `Required` - Icon */
//   iconSymbol: PropTypes.string.isRequired,
//   /** Consumption Unit (L_H for boats) */
//   consumptionUnit: PropTypes.oneOf(['L_KM', 'KW_H', 'MILES_GAL']),
// }
//
// ConsumptionItem.defaultProps = {
//   consumptionUnit: 'L_KM',
// }
//
// export default ConsumptionItem
