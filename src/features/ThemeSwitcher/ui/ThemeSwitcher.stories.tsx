import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/provider/ThemeProvider/types'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Normal = Template.bind({})
Normal.props = {}

export const Dark = Template.bind({})
Dark.props = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
