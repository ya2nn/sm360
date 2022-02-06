import PropTypes from 'prop-types'
import {Icon, Button} from '@sm360/phoenixjs'

const LeavePageModalButtonItem = ({
  btnLabel,
  iconSymbol,
  iconExtraClasses,
  btnVariant,
  btnOnClick,
  btnUrl,
  btnExtraClasses,
}) => {
  return (
    <div
      className={`m-leavePageModalButtonItem flex flex-col items-center gap-6`}
    >
      <Icon
        symbolId={iconSymbol}
        extraClasses={`m-leavePageModalButtonItem__icon ${iconExtraClasses}`}
      />
      <Button
        color='primary'
        size='small'
        variant={btnVariant}
        url={btnUrl}
        onClick={btnOnClick}
        extraClasses={`m-leavePageModalButtonItem__btn inline-flex justify-center w-full max-w-[250px] rounded ${btnExtraClasses}`}
      >
        {btnLabel}
      </Button>
    </div>
  )
}

LeavePageModalButtonItem.propTypes = {
  iconSymbol: PropTypes.string.isRequired,
  iconExtraClasses: PropTypes.string,
  btnLabel: PropTypes.string.isRequired,
  btnVariant: PropTypes.oneOf(['filled', 'outlined', 'unsetted']),
  btnOnClick: PropTypes.func,
  btnUrl: PropTypes.string,
  btnExtraClasses: PropTypes.string,
}

LeavePageModalButtonItem.defaultProps = {
  iconExtraClasses: '',
  btnExtraClasses: '',
}

export default LeavePageModalButtonItem
