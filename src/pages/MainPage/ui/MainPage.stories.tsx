import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/provider/ThemeProvider/types'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args: any) => <MainPage {...args} />

export const Normal = Template.bind({})
Normal.props = {}

export const Dark = Template.bind({})
Dark.props = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
