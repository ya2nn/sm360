import { Icon as I } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Icon',
  component: I,
  parameters: {
    docs: {
      description: {
        component: 'Atom Icon - Call Icon tag',
      },
    },
  },
}

const Template = (args) => <I {...args} />

export const Icon = Template.bind({})
Icon.args = {
  symbolId: 'home',
  extraClasses: 'w-[40px] h-[40px]',
  title: 'I am a title',
}
