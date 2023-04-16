import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'
import { type IStateSchema } from '../types'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
    lazyReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}
export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, initialState, lazyReducers } = props
    const navigate = useNavigate()
    const store = createReduxStore(
        initialState as IStateSchema,
        lazyReducers as ReducersMapObject<IStateSchema>,
        navigate
    )
    return <Provider store={store}>{children}</Provider>
}
