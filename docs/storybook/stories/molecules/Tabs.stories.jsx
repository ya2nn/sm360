import { Tabs as T } from '@sm360/phoenixjs'

export default {
  title: 'MOLECULES/Tabs',
  component: T,
}

const tabItems = [
  {
    title: 'STEP 1',
    content: 'step 1 content',
  },
  {
    title: 'STEP 2',
    content: 'step 2 content',
  },
  {
    title: 'STEP 3',
    content: 'step 3 content',
  },
  {
    title: 'STEP 4',
    content: 'step 4 content',
  },
]

const Template = (args) => <T {...args} />

export const Tabs = Template.bind({})
Tabs.args = {
  tabItems: tabItems,
  tabLinkSectionExtraClasses: 'bg-black text-white',
  tabLinkElementExtraClasses: 'hover:bg-white hover:text-black',
  tabLinkElementActiveExtraClasses: 'bg-white text-black',
  tabPanelElementExtraClasses: 'bg-gray-700 text-gray-200',
  extraClasses: 'bg-gray-400',
}
