import { Image } from '@sm360/phoenixjs'

export default {
  title: 'ATOMS/Image',
  component: Image,
}

const Template = (args) => <Image {...args} />

export const Picture = Template.bind({})
Picture.args = {
  tag: 'picture',
  alt: 'Picture',
  width: '300',
  height: '100',
  imgUrlMobile: '//via.placeholder.com/100x100?text=Mobile+Image',
  imgUrlTablet: '//via.placeholder.com/200x100?text=Tablet+Image',
  imgUrlDesktop: '//via.placeholder.com/200x100?text=Desktop+Image',
}

export const Figure = Template.bind({})
Figure.args = {
  tag: 'figure',
  imgUrlDesktop: '//via.placeholder.com/400x200',
  alt: 'Figure',
  width: '400',
  height: '200',
}

export const Figcaption = Template.bind({})
Figcaption.args = {
  tag: 'figure',
  imgUrlDesktop: '//via.placeholder.com/500x300',
  alt: 'Image Figcaption',
  width: '500',
  height: '300',
  figcaptionLabel: 'This is a figcaption',
}
