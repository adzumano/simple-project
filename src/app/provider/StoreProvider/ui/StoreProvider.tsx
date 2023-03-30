import { type DeepPartial } from '@reduxjs/toolkit'
import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'

import { createReduxStore } from '../config/store'
import { type IStateSchema } from '../types'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
}
export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema)
    return <Provider store={store}>{children}</Provider>
}
