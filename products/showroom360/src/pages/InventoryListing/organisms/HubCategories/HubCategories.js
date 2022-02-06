import PropTypes from 'prop-types'
import { RadioItem, RadioGroup, SelectItem, Select } from '@sm360/phoenixjs'

const HubCategories = ({
  variant,
  position,
  selectedUrlMapping,
  hubCategories,
  onChange,
}) => {
  switch (variant) {
    case 'select':
      return (
        <Select
          fieldName='hubCategories'
          extraClasses='mb-5'
          defaultValue={selectedUrlMapping}
          onChange={(e) => onChange(e.target.value)}
        >
          {hubCategories?.map(({ urlMapping, name }) => (
            <SelectItem key={urlMapping} value={urlMapping}>
              {name}
            </SelectItem>
          ))}
        </Select>
      )
    default:
      return (
        // TODO ajouter le systemem de couleur pour le checked dans RadioItem extraclass
        <RadioGroup
          radioGroupName='hubCategories'
          position={position}
          radioGroupExtraClasses={
            position === 'horizontal' ? 'overflow-x-scroll scrollbar-hide' : ''
          }
          itemsSpacingExtraClasses={
            position === 'horizontal' ? 'space-x-[30px]' : 'space-y-[15px]'
          }
          onChange={(e) => onChange(e.target.value)}
        >
          {hubCategories?.map(({ urlMapping, name }) => (
            <RadioItem
              extraClasses={`text-[18px] hover:text-primary ${
                urlMapping === selectedUrlMapping ? 'text-primary' : ''
              }`}
              key={urlMapping}
              radioLabel={name}
              radioValue={urlMapping}
              radioName={urlMapping}
              checked={urlMapping === selectedUrlMapping}
            />
          ))}
        </RadioGroup>
      )
  }
}

HubCategories.propTypes = {
  /** Filter Hub Categories Variant */
  variant: PropTypes.oneOf(['radio', 'select']),
  /** Filter Hub Categories Position */
  position: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Filter Hub Categories Selected */
  selectedUrlMapping: PropTypes.string,
  /** Filter Hub Categories List */
  hubCategories: PropTypes.array,
  /** Filter Hub Categories OnChange event */
  onChange: PropTypes.func,
}

HubCategories.defaultProps = {
  variant: 'radio',
  position: 'vertical',
}

export default HubCategories
