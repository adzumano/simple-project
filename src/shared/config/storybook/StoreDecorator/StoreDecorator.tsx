import { type Story } from '@storybook/react'
import { createReduxStore } from 'app/provider/StoreProvider'
import { Provider } from 'react-redux'

export const StoreDecorator = (StoryComponent: Story): JSX.Element => {
    const store = createReduxStore()
    return (
        <Provider store={store}>
            <StoryComponent />
        </Provider>
    )
}
