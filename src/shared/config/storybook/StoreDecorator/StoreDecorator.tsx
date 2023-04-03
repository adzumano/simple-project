import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from 'app/provider/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'

const defaultLazyReducers: DeepPartial<ReducersMapObject<IStateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
}
export const StoreDecorator =
    (
        state: DeepPartial<IStateSchema>,
        lazyReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
    ) =>
    (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={state}
                lazyReducers={{ ...defaultLazyReducers, ...lazyReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
    }
