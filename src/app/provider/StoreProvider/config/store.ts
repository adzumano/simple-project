import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'

import { type IStateSchema } from '../types'

export const createReduxStore = (initialState?: IStateSchema): ToolkitStore => {
    const rootReducer: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }
    return configureStore({
        reducer: rootReducer,
        devTools: IS_DEV,
        preloadedState: initialState
    })
}
