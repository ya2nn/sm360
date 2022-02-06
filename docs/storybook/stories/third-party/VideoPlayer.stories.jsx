import { VideoPlayer as Vp } from '@sm360/phoenixjs'

export default {
  title: 'THIRD-PARTY/Video Player',
  component: Vp,
}

const Template = (args) => <Vp {...args} />

export const VideoPlayer = Template.bind({})
VideoPlayer.args = {
  url: 'https://www.youtube.com/watch?v=hRHxqJ3xQ-E',
}
