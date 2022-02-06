import { Typography } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Typography',
  component: Typography,
}

const Template = (args) => <Typography {...args} />

export const H1 = Template.bind({})
H1.args = {
  tag: 'h1',
  children: 'Title H1',
}

export const H2 = Template.bind({})
H2.args = {
  tag: 'h2',
  children: 'Title H2',
}

export const H3 = Template.bind({})
H3.args = {
  tag: 'h3',
  children: 'Title H3',
}

export const H4 = Template.bind({})
H4.args = {
  tag: 'h4',
  children: 'Title H4',
}

export const H5 = Template.bind({})
H5.args = {
  tag: 'h5',
  children: 'Title H5',
}

export const H6 = Template.bind({})
H6.args = {
  tag: 'h6',
  children: 'Title H6',
}

export const Paragraph = Template.bind({})
Paragraph.args = {
  tag: 'p',
  children: 'Paragraph',
}

export const Span = Template.bind({})
Span.args = {
  tag: 'span',
  children: 'Title Span',
}
