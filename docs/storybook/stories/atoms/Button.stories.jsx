import { Button as B } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Button',
  component: B,
}

const Template = (args) => <B {...args} />

export const Button = Template.bind({})
Button.args = {
  children: 'Button',
  size: 'large',
  color: 'primary',
  variant: 'filled',
}
