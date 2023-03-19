import { type Story } from '@storybook/react'
import { ThemeProvider } from 'app/provider/ThemeProvider'
import { type Theme } from 'app/provider/ThemeProvider/types'
import 'app/styles/index.scss'

export const ThemeDecorator =
    (theme: Theme) =>
    (StoryComponent: Story): JSX.Element => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        )
    }
