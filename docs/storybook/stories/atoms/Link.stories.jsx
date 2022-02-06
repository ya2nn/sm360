import { Link as L } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Link',
  component: L,
}

const Template = (args) => <L {...args} />

export const Link = Template.bind({})
Link.args = {
  href: '/about',
  title: 'this is a link',
  children: 'Link',
  variant: 'primary',
}
