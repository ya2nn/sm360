import { Badge } from '@sm360/phoenixjs'
import { Icon } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Badge',
  component: Badge,
}

const Template = (args) => <Badge {...args} />

export const BadgeText = Template.bind({})
BadgeText.args = {
  children: '1',
  extraClasses: 'bg-tertiary text-onTertiary',
  shape: 'round',
  size: 'default',
}

export const BadgePicto = Template.bind({})
BadgePicto.args = {
  children: <Icon symbolId='cross' />,
  extraClasses: 'text-tertiary border border-tertiary',
  shape: 'round',
  size: 'default',
}
