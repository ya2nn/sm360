import { Select as S, SelectItem as Si } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Form/Select',
  component: S,
}

const Template = (args) => (
  <S {...args}>
    <Si value={'color1'}>Color 1</Si>
    <Si value={'color2'}>Color 2</Si>
    <Si value={'color3'}>Color 3</Si>
    <Si value={'color4'}>Color 4</Si>
  </S>
)

export const Select = Template.bind({})
Select.args = {
  fieldLabel: 'Select a color',
  fieldName: 'field-color',
  'aria-label': 'Dropdown Select',
}
