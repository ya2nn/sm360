// import PropTypes from 'prop-types'
// import {Typography, Icon, FormatNumber} from '@sm360/phoenixjs'
//
// const WarrantyItem = ({ title, description, price }) => {
//   return (
//     // TODO: creer des variables de couleur pour odd et even
//     <tr
//       className={
//         'm-warrantyItem odd:bg-backgroundPrimary odd:text-onBackgroundPrimary even:bg-backgroundSecondary even:text-onBackgroundSecondary'
//       }
//     >
//       <td
//         className={`m-warrantyItem__icon py-[15px] pl-[10px] text-right align-top md:pl-[20px]`}
//       >
//         <Icon
//           symbolId='check-circle1'
//           extraClasses='w-[20px] h-[20px] align-top'
//         />
//       </td>
//       <td
//         className={`m-warrantyItem__warranty px-[10px] py-[15px] align-top md:px-[20px]`}
//       >
//         <Typography
//           tag='p'
//           variant='heading3'
//           aria-level='3'
//           extraClasses='mb-[10px]'
//         >
//           {title}
//         </Typography>
//         <Typography tag='p' variant='body'>
//           {description}
//         </Typography>
//       </td>
//       <td
//         className={`m-warrantyItem__price py-[15px] pr-[10px] align-top md:pr-[20px]`}
//       >
//         <Typography
//           tag='p'
//           extraClasses='text-[16px] md:text-[20px] leading-[18px] md:leading-[22px]'
//         >
//           <FormatNumber type='price' value={price} />
//         </Typography>
//       </td>
//     </tr>
//   )
// }
//
// WarrantyItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
// }
//
// WarrantyItem.defaultProps = {}
//
// export default WarrantyItem
