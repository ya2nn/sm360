import { Label } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Label',
  component: Label,
}

const Template = (args) => <Label {...args} />

export const LabelText = Template.bind({})
LabelText.args = {
  label: 'Mazda',
  variant: 'outline',
}

export const LabelTextWithIcon = Template.bind({})
LabelTextWithIcon.args = {
  label: 'Mazda',
  icon: 'close',
  iconPosition: 'right',
  variant: 'outline',
  iconExtraClasses: 'w-[15px] h-[15px]',
}
