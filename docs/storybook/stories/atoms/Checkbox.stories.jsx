import { Checkbox as C } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Form/Checkbox',
  component: C,
}

const Template = (args) => <C {...args} />

export const Checkbox = Template.bind({})
Checkbox.args = {
  fieldName: 'accessories',
  fieldLabel: 'accessoire 1',
  fieldValue: 'accessoire1',
}
