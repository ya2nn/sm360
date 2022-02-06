import { Pagination as P } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Pagination',
  component: P,
}

const Template = (args) => <P {...args} />

export const Pagination = Template.bind({})
Pagination.args = {
  onClick: (e) => console.log(e),
  currentPage: 2,
  pagesQuantity: 10,
}
