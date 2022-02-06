import { RadioGroup as Rg, RadioItem as Ri } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Form/Radio',
  component: Rg,
}

const Template = (args) => (
  <Rg {...args}>
    <Ri radioLabel={'radio 1'} radioName={'radio1'} />
    <Ri radioLabel={'radio 2'} radioName={'radio2'} />
  </Rg>
)

export const Group = Template.bind({})
Group.args = {
  radioGroupName: 'groupName',
}
