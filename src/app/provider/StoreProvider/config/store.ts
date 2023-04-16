import {
    type CombinedState,
    type Reducer,
    type ReducersMapObject,
    configureStore
} from '@reduxjs/toolkit'
import { createReducerManager } from 'app/provider/StoreProvider/config/reducerManager'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { type NavigateOptions, type To } from 'react-router-dom'
import { $api } from 'shared/api/api'

import { type IStateSchema, type IThunkExtraArg } from '../types'

export const createReduxStore = (
    initialState?: IStateSchema,
    lazyReducers?: ReducersMapObject<IStateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) => {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...lazyReducers,
        counter: counterReducer,
        user: userReducer
    }
    const reducerManager = createReducerManager(rootReducers)

    const extraArgument: IThunkExtraArg = {
        api: $api,
        navigate
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument
                }
            })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch']
