import { type Story } from '@storybook/react'
import { type Theme } from 'app/provider/ThemeProvider/types'
import 'app/styles/index.scss'

export const ThemeDecorator =
    (theme: Theme) =>
    (StoryComponent: Story): JSX.Element => {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        )
    }
