import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Theme } from 'app/provider/ThemeProvider/types'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import ProfilePage from './ProfilePage'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args: any) => <ProfilePage {...args} />

export const Normal = Template.bind({})
Normal.props = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.props = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
