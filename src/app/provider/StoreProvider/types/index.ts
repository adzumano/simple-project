import {
    type AnyAction,
    type CombinedState,
    type EnhancedStore,
    type Reducer,
    type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ICounterSchema } from 'entities/Counter'
import { type IProfileSchema } from 'entities/Profile'
import { type IUserSchema } from 'entities/User'
import { type ILoginSchema } from 'features/AuthByUsername'
import { type NavigateOptions, type To } from 'react-router-dom'

export interface IStateSchema {
    counter: ICounterSchema
    user: IUserSchema
    loginForm?: ILoginSchema
    profile?: IProfileSchema
}

export type TStateSchemaKey = keyof IStateSchema

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
    add: (key: TStateSchemaKey, reducer: Reducer) => void
    remove: (key: TStateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager
}

export interface IThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface IThunkConfig<T> {
    rejectValue: T
    extra: IThunkExtraArg
}
