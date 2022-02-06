import { Alert as A } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Alert',
  component: A,
}

const Template = (args) => (
  <A {...args}>
    <p className='font-bold'>Our privacy policy has changed</p>
    <p className='text-sm'>Make sure you know how these changes affect you.</p>
  </A>
)

export const Alert = Template.bind({})
Alert.args = {
  type: 'success',
  iconSymbol: 'shield',
  position: 'horizontal',
  iconExtraClasses: 'w-[30px] h-[30px]',
}
