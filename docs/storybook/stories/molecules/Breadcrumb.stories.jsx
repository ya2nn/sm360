import { Breadcrumb, BreadcrumbItem } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'Molecule Breadcrumbs - Two options for Breadcrumb: ' +
          '\n- could have valid `items`, which is an array of elements (object) with label (required), url (optional)' +
          '\\n- could have a BreadcrumItem node as a children',
      },
    },
  },
}

const Template = (args) => <Breadcrumb {...args} />

const items = [
  { label: 'Crumb1', url: '#' },
  { label: 'Crumb2', url: '#' },
  { label: 'Crumb3', url: '#' },
  { label: 'Crumb4', url: '#' },
  { label: 'Crumb5', url: '#' },
  { label: 'Crumb6', url: '#' },
  { label: 'Crumb7', url: '#' },
  { label: 'Crumb8', url: '#' },
  { label: 'Empty' },
]

export const Items = Template.bind({})
Items.args = {
  items: items,
  biHomeIconExtraClasses: 'w-[50px] h-[50px]',
  biIconSeparatorExtraClasses: 'w-[10px] h-[10px]',
  biIsIconSeparator: true,
  homeLabel: 'Home',
}

export const ChildrenNode = Template.bind({})
ChildrenNode.args = {
  biHomeIconExtraClasses: 'w-[50px] h-[50px]',
  children: (
    <>
      <BreadcrumbItem label={'Crumb1'} url={'#'} />
      <BreadcrumbItem label={'Crumb2'} url={'#'} />
      <BreadcrumbItem label={'Crumb3'} url={'#'} />
      <BreadcrumbItem label={'Crumb4'} url={'#'} />
      <BreadcrumbItem label={'Crumb5'} url={'#'} />
      <BreadcrumbItem label={'Crumb6'} url={'#'} />
      <BreadcrumbItem label={'Crumb7'} url={'#'} />
      <BreadcrumbItem label={'Crumb8'} url={'#'} />
      <BreadcrumbItem label={'Empty'} />
    </>
  ),
}
