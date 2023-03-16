import { configureStore } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type StateSchema } from 'app/provider/StoreProvider/types'
import { counterReducer } from 'entities/Counter'

export const createReduxStore = (initialState?: StateSchema): ToolkitStore => {
    return configureStore({
        reducer: {
            counter: counterReducer
        },
        devTools: IS_DEV,
        preloadedState: initialState
    })
}
