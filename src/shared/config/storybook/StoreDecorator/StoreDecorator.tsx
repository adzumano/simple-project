import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { type Story } from '@storybook/react'
import { type IStateSchema, StoreProvider } from 'app/provider/StoreProvider'
import { profileReducer } from 'entities/Profile'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { type TReducerList } from 'shared/hooks/useLazyReduce/useLazyReduce'

const defaultLazyReducers: TReducerList = {
    loginForm: loginReducer,
    profile: profileReducer
}
export const StoreDecorator =
    (state: DeepPartial<IStateSchema>, lazyReducers?: TReducerList) => (StoryComponent: Story) => {
        return (
            <StoreProvider
                initialState={state}
                lazyReducers={{ ...defaultLazyReducers, ...lazyReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
    }
