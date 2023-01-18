import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Button} from './index'
import InfoIcon from '@/components/Icons/info'


export default {
  title: 'Example/Button',
  component: Button,
  decorators: [(Story) => <div
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}
  >
    {Story()}
  </div>],
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  type: 'primary',
  theme: 'light'
}

export const Plain = Template.bind({})
Plain.args = {
  children: 'Button',
  type: 'primary',
  plain: true,
  theme: 'light'
}

export const Link = Template.bind({})
Link.args = {
  children: 'Button',
  type: 'primary',
  link: true,
  theme: 'light'
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Button',
  type: 'danger',
  theme: 'light',
}

export const Small = Template.bind({})
Small.args = {
  children: 'Button',
  type: 'warning',
  size: 'small',
  theme: 'light',
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Button',
  type: 'info',
  size: 'medium',
  theme: 'light',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Button',
  type: 'success',
  size: 'large',
  theme: 'light',
}

export const Loading = Template.bind({})
Loading.args = {
  children: 'Button',
  type: 'success',
  size: 'large',
  loading: true,
  theme: 'light',
}

export const Icon = Template.bind({})
Icon.args = {
  children: 'Button',
  type: 'primary',
  iconPosition: 'left',
  icon: <InfoIcon size={16} />,
  theme: 'light'
}