import { AccordionItem as Ai } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Accordion',
  component: Ai,
}

const Template = (args) => <Ai {...args}>Lorem Ipsum</Ai>

export const AccordionItem = Template.bind({})
AccordionItem.args = {
  position: 'vertical',
  trigger: 'Expander #1',
  isOpen: true,
}
