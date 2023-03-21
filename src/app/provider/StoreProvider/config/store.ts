import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { type IStateSchema } from '../types'

export const createReduxStore = (initialState?: IStateSchema): ToolkitStore => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer
    }
    return configureStore({
        reducer: rootReducer,
        devTools: IS_DEV,
        preloadedState: initialState
    })
}
