import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/provider/ThemeProvider/types'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from 'widgets/Sidebar'

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Normal = Template.bind({})
Normal.props = {}

export const Dark = Template.bind({})
Dark.props = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
