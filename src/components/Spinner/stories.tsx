import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'

import {Spinner} from './index'


export default {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    size: {control: 'number'}
  }
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}

export const CustomSize = Template.bind({})
CustomSize.args = {
  size: 24
}
