/* TODO: Dynamiser les textes en fonction de la langue et voir si on remonte le switch case a son organisme ou non  */
import PropTypes from 'prop-types'
import { Typography } from '@sm360/phoenixjs'

const HistoryItem = ({ type, description: initialDesc }) => {
  let title
  let description

  switch (type) {
    case 'previous_use':
      title = 'Previous Use'
      description = initialDesc
      break
    case 'previous_owner':
      title = 'Previous Owner'
      description = initialDesc
      break
    case 'previous_repairs':
      title = 'Previous Repairs'
      description = initialDesc
      break
    case 'future_repairs':
      title = 'Future Repairs'
      description = initialDesc
      break
    case 'severely_damaged':
      title = 'Severly Damaged Vehicle'
      description = 'This vehicle is severely damaged.'
      break
  }

  return (
    <div className={`m-historyItem mb-[15px]`}>
      <Typography
        tag='p'
        extraClasses={`m-historyItem__title font-custom-bold text-[16px] leading-[20px] lg:text-[18px] mb-[5px]`}
      >
        {title}
      </Typography>
      <Typography tag='p' extraClasses={`m-historyItem__description`}>
        {description}
      </Typography>
    </div>
  )
}

HistoryItem.propTypes = {
  /** Type of History Item */
  type: PropTypes.oneOf([
    'previous_use',
    'previous_owner',
    'previous_repairs',
    'future_repairs',
    'severely_damaged',
  ]).isRequired,
  /** Description of History Item */
  description: PropTypes.string.isRequired,
}

HistoryItem.defaultProps = {}

export default HistoryItem
