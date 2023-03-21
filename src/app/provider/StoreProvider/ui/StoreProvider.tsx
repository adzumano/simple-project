import { type DeepPartial } from '@reduxjs/toolkit'
import { createReduxStore } from 'app/provider/StoreProvider/config/store'
import { type IStateSchema } from 'app/provider/StoreProvider/types'
import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
}
export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as IStateSchema)
    return <Provider store={store}>{children}</Provider>
}
