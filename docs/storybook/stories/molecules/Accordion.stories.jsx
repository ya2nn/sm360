import { Accordion as A, AccordionItem as Ai } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Accordion',
  component: A,
}

const Template = (args) => (
  <A {...args}>
    <Ai trigger='Expander #1'>Lorem Ipsum</Ai>
    <Ai trigger='Expander #2'>Lorem Ipsum</Ai>
    <Ai trigger='Expander #3'>Lorem Ipsum</Ai>
    <Ai trigger='Expander #4'>Lorem Ipsum</Ai>
    <Ai trigger='Expander #5'>Lorem Ipsum</Ai>
  </A>
)

export const Accordion = Template.bind({})
Accordion.args = {
  position: 'vertical',
}
