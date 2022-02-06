import { RadioItem as Ri } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Form/Radio',
  component: Ri,
}

const Template = (args) => <Ri {...args} />

export const Item = Template.bind({})
Item.args = {
  radioGroupName: 'checkedGroup',
  radioName: 'radio',
  radioLabel: 'Radio Item',
  checked: false,
  disabled: false,
}
