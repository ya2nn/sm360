import { FieldText } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Form/Input',
  component: FieldText,
}

const Template = (args) => <FieldText {...args} />

export const Input = Template.bind({})
Input.args = {
  fieldType: 'text',
  fieldLabel: 'Text',
  customFieldId: 'text',
  fieldName: 'text',
}
