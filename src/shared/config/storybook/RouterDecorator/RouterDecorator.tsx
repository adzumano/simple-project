import { type Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (StoryComponent: Story): JSX.Element => {
    return (
        <BrowserRouter>
            <StoryComponent />
        </BrowserRouter>
    )
}
