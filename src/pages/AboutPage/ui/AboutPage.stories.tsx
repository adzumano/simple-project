import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/provider/ThemeProvider/types'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args: any) => <AboutPage {...args} />

export const Normal = Template.bind({})
Normal.props = {}

export const Dark = Template.bind({})
Dark.props = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
