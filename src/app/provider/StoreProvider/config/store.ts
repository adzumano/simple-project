import { type ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { createReducerManager } from 'app/provider/StoreProvider/config/reducerManager'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

import { type IStateSchema } from '../types'

export const createReduxStore = (
    initialState?: IStateSchema,
    lazyReducers?: ReducersMapObject<IStateSchema>
) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...lazyReducers,
        counter: counterReducer,
        user: userReducer
    }
    const reducerManager = createReducerManager(rootReducers)

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: IS_DEV,
        preloadedState: initialState
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch']
