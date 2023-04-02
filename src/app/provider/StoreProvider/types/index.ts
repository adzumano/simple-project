import {
    type AnyAction,
    type CombinedState,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type ICounterSchema } from 'entities/Counter'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema
    loginForm?: ILoginSchema
}

export type TStateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

export interface IReduxStoreWithManager extends ToolkitStore<IStateSchema> {
    reducerManager: IReducerManager
}
