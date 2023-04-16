import { type Reducer } from '@reduxjs/toolkit'
import { type IReduxStoreWithManager, type TStateSchemaKey } from 'app/provider/StoreProvider/types'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type TReducerList = {
    [name in TStateSchemaKey]?: Reducer
}

// type TReducerListEntry = [TStateSchemaKey, Reducer]
interface ILazyReduceProps {
    reducers: TReducerList
    removeAfterUnmount?: boolean
}

export const useLazyReduce = (props: ILazyReduceProps) => {
    const { reducers, removeAfterUnmount = false } = props
    const store = useStore() as IReduxStoreWithManager
    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as TStateSchemaKey, reducer)
            dispatch({ type: `@INIT ${name} reduce` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as TStateSchemaKey)
                    dispatch({ type: `@DESTROY ${name} reduce` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])
}
