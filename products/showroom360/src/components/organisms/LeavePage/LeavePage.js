import PropTypes from 'prop-types'
import { Icon } from '@sm360/phoenixjs'
import LeavePageModalButtonItem from '../../molecules/LeavePageModalButtonItem/LeavePageModalButtonItem'

const LeavePage = ({
  iconSymbolAlert,
  messageTitle,
  messageBody,
  iconSymbol1,
  btn1Label,
  btn1Action,
  btn1Url,
  iconSymbol2,
  btn2Label,
  btn2Action,
  btn2Url,
}) => {
  return (
    <div className={'flex flex-col gap-14 p-2'}>
      {(messageTitle || messageBody) && (
        <div className='flex flex-col gap-1'>
          <div>
            {iconSymbolAlert && (
              <Icon
                symbolId={iconSymbolAlert}
                extraClasses='w-[25px] h-[25px] mr-[15px] align-baseline'
              />
            )}
            <span className='font-custom-bold text-[18px]'>{messageTitle}</span>
          </div>
          <div className='wysiwyg'>{messageBody}</div>
        </div>
      )}
      <div
        className={
          'flex flex-col gap-14 md:flex-row md:items-end md:justify-between'
        }
      >
        {btn1Label && (btn1Action || btn1Url) && (
          <LeavePageModalButtonItem
            iconSymbol={iconSymbol1}
            iconExtraClasses='w-[75px] h-[65px]'
            btnLabel={btn1Label}
            btnOnClick={btn1Action}
            btnUrl={btn1Url}
          />
        )}
        {btn2Label && (btn2Action || btn2Url) && (
          <LeavePageModalButtonItem
            iconSymbol={iconSymbol2}
            iconExtraClasses='w-[54px] h-[57px]'
            btnLabel={btn2Label}
            btnVariant='outlined'
            btnUrl={btn2Url}
            btnOnClick={btn2Action}
          />
        )}
      </div>
    </div>
  )
}
LeavePage.propTypes = {
  iconSymbolAlert: PropTypes.string,
  messageTitle: PropTypes.string,
  messageBody: PropTypes.node,
  iconSymbol1: PropTypes.string,
  btn1Label: PropTypes.string,
  btn1Action: PropTypes.func,
  btn1Url: PropTypes.string,
  iconSymbol2: PropTypes.string,
  btn2Label: PropTypes.string,
  btn2Action: PropTypes.func,
  btn2Url: PropTypes.string,
}

export default LeavePage
