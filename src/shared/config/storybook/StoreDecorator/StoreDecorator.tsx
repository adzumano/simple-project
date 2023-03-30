import { type DeepPartial } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from 'app/provider/StoreProvider'

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (StoryComponent: Story) => {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent />
        </StoreProvider>
    )
}
