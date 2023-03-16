import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/provider/ThemeProvider/types'
import React from 'react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from 'shared/ui/Modal/Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Normal = Template.bind({})
Normal.args = {
    isOpen: true,
    children: 'Text'
}

export const DefaultDark = Template.bind({})
DefaultDark.args = {
    isOpen: true,
    children: 'Text'
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
