import { Dropdown as D, DropdownItem as Di } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Dropdown',
  component: D,
}

const Template = (args) => (
  <>
    <D {...args}>
      <Di>Action 1</Di>
      <Di>Action 2</Di>
      <Di>Action 3</Di>
    </D>
  </>
)

export const Dropdown = Template.bind({})
Dropdown.args = {
  controlLabel: 'Dropdown Label',
  controlId: 'toto',
  controlExtraClasses: 'bg-white rounded border border-gray-200',
  itemExtraClasses: 'p-1',
  listExtraClasses: 'divide-y divide-gray-200',
  icon: 'arrow-down',
  controlIconExtraClasses: 'w-[15px] h-[15px]',
}
