import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Button} from './index'


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // theme: {control: 'enum', options: ['light', 'dark']}
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
  theme: 'light'
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Button',
  type: 'primary',
  theme: 'light'
}


export const Danger = Template.bind({})
Danger.args = {
  children: 'Button',
  type: 'danger',
  theme: 'light',
}
